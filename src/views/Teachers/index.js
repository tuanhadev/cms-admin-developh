import React, { useState, useEffect, useCallback } from 'react';
import moment from 'moment-timezone';
import { Link } from "react-router-dom";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCardFooter,
  CCol,
  CDataTable,
  CRow,
  CSpinner,
  CButton,
  CCollapse,
  CModal, CModalHeader, CModalBody, CModalFooter, CModalTitle
} from '@coreui/react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import teacherService from "../services/teacherService";
import config from "../../config";

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}
const fields = [{ key: "stt", label: "STT", _style: { width: '1%' } }, { key: "name", label: "Họ và tên" }, { key: "username", label: "Tên đăng nhập" }, { key: "email", label: "Email" }, { key: "phone_number", label: "Số điện thoại" }, { key: "address", label: "Địa chỉ" }, { key: "status", label: "Trạng thái" }, {
  key: 'show_details',
  label: '',
  _style: { width: '1%' },
  sorter: false,
  filter: false
}]

const Teachers = () => {
  const [teachersData, setTeachersData] = useState([]);
  const [loading, setLoading] = useState({ loadingGet: false, loadingBan: false });
  const [details, setDetails] = useState([]);
  const [modal, setModal] = useState(false);
  const [username, setUsername] = useState("");
  const [statusUser, setStatusUser] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading({ loadingBan: false, loadingGet: true });
    try {
      const response = await teacherService.getListTeacher();
      if (response && response.data) {
        const teachersData = response.data.teachers.map((item, idx) => ({ stt: idx + 1, name: item.info.name, username: item.username, email: item.email, phone_number: item.info.phone_number, address: item.info.address, status: (item.active ? "Active" : "Banned"), register_at: moment(item.register_at).local().format('DD/MM/YYYY HH:mm') }));
        setTeachersData(teachersData);
      }
      setLoading({ loadingBan: false, loadingGet: false });
    } catch (error) {
      showNotification(error.response.data.message);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const banUser = async () => {
    setLoading({ loadingBan: true, loadingGet: false });
    try {
      await teacherService.banTeacher(username);
      showNotification("Thành công", true);
      setLoading({ loadingBan: false, loadingGet: false });
      setModal(false);
      fetchData();
    } catch (error) {
      showNotification(error.response.data.message, false);
    }
  }

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

  const openModalBan = async (status, username, statusUser) => {
    setModal(status);
    setUsername(username);
    setStatusUser(statusUser);
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
            <strong>Danh sách giáo viên</strong>
          </CCardHeader>
          <CCardBody className="text-center">
            {
              loading.loadingGet ? <CSpinner
                style={{ width: "4rem", height: "4rem" }}
                color="info"
              /> : <CDataTable
                  items={teachersData}
                  fields={fields}
                  itemsPerPage={config.limit}
                  tableFilter
                  columnFilter
                  hover
                  pagination
                  scopedSlots={{
                    'status':
                      (item) => (
                        <td>
                          <CBadge color={getBadge(item.status)}>
                            {item.status}
                          </CBadge>
                        </td>
                      ),
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
                              <p className="text-muted">Updated at: {item.register_at}</p>
                              <Link to={`/teachers/update/${item.username}`}>
                                <CButton size="sm" color="info">Cập nhật</CButton>
                              </Link>
                              {item.status === "Active" ? <CButton disabled={loading.loadingBan} onClick={() => openModalBan(true, item.username, true)} size="sm" color="danger" className="ml-1">
                                {loading.loadingBan ? "...Loading" : "Cấm hoạt động"}
                              </CButton> : <CButton disabled={loading.loadingBan} onClick={() => openModalBan(true, item.username, false)} size="sm" color="success" className="ml-1">
                                  {loading.loadingBan ? "...Loading" : "Cho phép hoạt động"}
                                </CButton>}
                            </CCardBody>
                          </CCollapse>
                        )
                      }
                  }}
                />
            }
          </CCardBody>
          <CCardFooter>
            <Link to="/teachers/add">
              <CButton color="primary" className="float-right">Thêm giáo viên</CButton>
            </Link>
          </CCardFooter>
        </CCard>
      </CCol>
      <CModal
        show={modal}
        onClose={setModal}
      >
        <CModalHeader closeButton>
          <CModalTitle>{statusUser ? "Cấm hoạt động" : "Cho phép hoạt động"}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {statusUser ? "Bạn chắc chắn muốn cấm hoạt động với giáo viên này ?" : "Bạn chắc chắn muốn cho phép giáo viên này hoạt động ?"}
        </CModalBody>
        <CModalFooter>
          <CButton disabled={loading.loadingBan} color="primary" onClick={() => banUser()}>{loading.loadingBan ? "...Loading" : "Đồng ý"}</CButton>{' '}
          <CButton
            color="secondary"
            onClick={() => setModal(false)}
          >Huỷ</CButton>
        </CModalFooter>
      </CModal>
    </CRow>
  )
}

export default Teachers
