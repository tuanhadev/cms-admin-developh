import React, { useState, useEffect, useCallback } from 'react';
import moment from 'moment-timezone';
import { Link } from "react-router-dom";
import {
  CCard,
  CCardBody, CCardFooter,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CSpinner,
  CModal, CModalHeader, CModalBody, CModalFooter, CModalTitle,
  CButton,
  CCollapse
} from '@coreui/react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import classRoomService from "../services/classRoomService";

const fields = [{ key: "stt", label: "STT", _style: { width: '1%' } }, { key: "name", label: "Tên lớp học" }, { key: "subject", label: "Tên môn học" }, {
  key: 'show_details',
  label: '',
  _style: { width: '1%' },
  sorter: false,
  filter: false
}]

const Students = () => {
  const [classRoomData, setClassRoomData] = useState([]);
  const [loading, setLoading] = useState({ loadingGet: false, loadingBan: false });
  const [details, setDetails] = useState([]);
  const [modal, setModal] = useState(false);
  const [idClassRoom, setIdClassRoom] = useState("");

  const toggleDetails = (index) => {
    const position = details.indexOf(index)
    let newDetails = details.slice()
    if (position !== -1) {
      newDetails.splice(position, 1)
    } else {
      newDetails = [...details, index]
    }
    setDetails(newDetails)
  }

  const fetchData = useCallback(async () => {
    setLoading({ loadingBan: false, loadingGet: true });
    try {
      const response = await classRoomService.getListClassRoom();
      if (response && response.data) {
        const classRoomData = response.data.listClassRoom.map((item, idx) => ({ stt: idx + 1, _id: item._id, name: item.name, subject: item.subject.name, updated_at: moment(item.updated_at).local().format('DD/MM/YYYY HH:mm') }));
        setClassRoomData(classRoomData);
      }
      setLoading({ loadingBan: false, loadingGet: false });
    } catch (error) {
      showNotification(error.response.data.message);
    }
  }, [])

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const deleteClassRoom = async () => {
    setLoading({ loadingDelete: true, loadingGet: false });
    try {
      await classRoomService.deleteClassRoom(idClassRoom);
      showNotification("Thành công", true);
      setLoading({ loadingDelete: false, loadingGet: false });
      setModal(false);
      fetchData();
    } catch (error) {
      showNotification(error.response.data.message, false);
    }
  }

  const openModalDelete = async (status, idClassRoom) => {
    setModal(status);
    setIdClassRoom(idClassRoom);
  }

  const showNotification = (message, status) => {
    if (status) {
      toast.success(message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 2000
      })
    } else {
      toast.error(message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 2000
      })
    }
  }

  return (
    <CRow>
      <CCol xs="12" lg="12">
        <CCard>
          <CCardHeader>
            <strong>Danh sách lớp học</strong>
          </CCardHeader>
          <CCardBody className="text-center">
            {
              loading.loadingGet ? <CSpinner
                style={{ width: "4rem", height: "4rem" }}
                color="info"
              /> : <CDataTable
                  items={classRoomData}
                  fields={fields}
                  tableFilter
                  hover
                  scopedSlots={{
                    'show_details':
                      (item, index) => {
                        return (
                          <td className="py-2">
                            <CButton
                              color="primary"
                              variant="outline"
                              shape="square"
                              size="sm"
                              onClick={() => { toggleDetails(index) }}
                            >
                              {details.includes(index) ? 'Hide' : 'Show'}
                            </CButton>
                          </td>
                        )
                      },
                    'details':
                      (item, index) => {
                        return (
                          <CCollapse show={details.includes(index)}>
                            <CCardBody>
                              <h4>
                                {item.name}
                              </h4>
                              <p className="text-muted">Updated at: {item.updated_at}</p>
                              <Link to={`/classrooms/room/update/${item._id}`}>
                                <CButton size="sm" color="info">Cập nhật</CButton>
                              </Link>
                              <CButton disabled={loading.loadingDelete} onClick={() => openModalDelete(true, item._id)} size="sm" color="danger" className="ml-1">
                                {loading.loadingDelete ? "...Loading" : "Xoá"}
                              </CButton>
                            </CCardBody>
                          </CCollapse>
                        )
                      }
                  }}
                />
            }
          </CCardBody>
          <CCardFooter>
            <Link to="/classrooms/room/add">
              <CButton color="primary" className="float-right">Thêm lớp học</CButton>
            </Link>
          </CCardFooter>
        </CCard>
      </CCol>
      <CModal
        show={modal}
        onClose={setModal}
      >
        <CModalHeader closeButton>
          <CModalTitle>Xoá lớp học</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Bạn chắc chắn muốn xoá lớp học này ?
        </CModalBody>
        <CModalFooter>
          <CButton disabled={loading.loadingDelete} color="primary" onClick={() => deleteClassRoom()}>{loading.loadingDelete ? "...Loading" : "Đồng ý"}</CButton>{' '}
          <CButton
            color="secondary"
            onClick={() => setModal(false)}
          >Huỷ</CButton>
        </CModalFooter>
      </CModal>
    </CRow>
  )
}

export default Students
