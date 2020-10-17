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

import SubjectService from "../services/subjectService";
import config from "../../config";

const fields = [{ key: "stt", label: "STT", _style: { width: '1%' } }, { key: "name", label: "Tên môn học" }, { key: "description", label: "Mô tả" }, {
  key: 'show_details',
  label: '',
  _style: { width: '1%' },
  sorter: false,
  filter: false
}]

const Subjects = () => {
  const [subjectsData, setSubjectData] = useState([]);
  const [loading, setLoading] = useState({ loadingGet: false, loadingDelete: false });
  const [details, setDetails] = useState([]);
  const [modal, setModal] = useState(false);
  const [idSubject, setIdSubject] = useState("");

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
    setLoading({ loadingDelete: false, loadingGet: true });
    try {
      const response = await SubjectService.getListSubject();
      if (response && response.data) {
        const subjectsData = response.data.subjects.map((item, idx) => ({ stt: idx + 1, _id: item._id, name: item.name, description: item.description, updated_at: moment(item.updated_at).local().format('DD/MM/YYYY HH:mm') }));
        setSubjectData(subjectsData);
      }
      setLoading({ loadingDelete: false, loadingGet: false });
    } catch (error) {
      showNotification(error.response.data.message);
    }
  }, [])

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const deleteSubject = async () => {
    setLoading({ loadingDelete: true, loadingGet: false });
    try {
      await SubjectService.deleteSubject(idSubject);
      showNotification("Thành công", true);
      setLoading({ loadingDelete: false, loadingGet: false });
      setModal(false);
      fetchData();
    } catch (error) {
      showNotification(error.response.data.message, false);
    }
  }

  const openModalDelete = async (status, idSubject) => {
    setModal(status);
    setIdSubject(idSubject);
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
            <strong>Danh sách môn học</strong>
          </CCardHeader>
          <CCardBody className="text-center">
            {
              loading.loadingGet ? <CSpinner
                style={{ width: "4rem", height: "4rem" }}
                color="info"
              /> : <CDataTable
                  items={subjectsData}
                  fields={fields}
                  itemsPerPage={config.limit}
                  bordered
                  tableFilter
                  hover
                  pagination
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
                              <Link to={`/classrooms/subject/update/${item._id}`}>
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
            <Link to="/classrooms/subject/add">
              <CButton color="primary" className="float-right">Thêm môn học</CButton>
            </Link>
          </CCardFooter>
        </CCard>
      </CCol>
      <CModal
        show={modal}
        onClose={setModal}
      >
        <CModalHeader closeButton>
          <CModalTitle>Xoá môn học</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Bạn chắc chắn muốn xoá môn học này ?
        </CModalBody>
        <CModalFooter>
          <CButton disabled={loading.loadingDelete} color="primary" onClick={() => deleteSubject()}>{loading.loadingDelete ? "...Loading" : "Đồng ý"}</CButton>{' '}
          <CButton
            color="secondary"
            onClick={() => setModal(false)}
          >Huỷ</CButton>
        </CModalFooter>
      </CModal>
    </CRow>
  )
}

export default Subjects
