import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CSpinner,
  CToast,
  CToastHeader,
  CToaster,
  CToastBody,
  CButton,
  CCollapse
} from '@coreui/react'

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
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const [details, setDetails] = useState([])

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

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await teacherService.getListTeacher();
        if (response && response.data) {
          const teachersData = response.data.teachers.map((item, idx) => ({ stt: idx + 1, name: item.info.name, username: item.username, email: item.email, phone_number: item.info.phone_number, address: item.info.address, status: (item.active ? "Active" : "Banned"), register_at: moment(item.register_at).local().format('DD/MM/YYYY HH:mm') }));
          setTeachersData(teachersData);
        }
        setLoading(false);
      } catch (error) {
        setErrors(error.response.data.message);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>
              <strong>Danh sách giáo viên</strong>
            </CCardHeader>
            <CCardBody className="text-center">
              {
                loading ? <CSpinner
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
                                <CButton size="sm" color="info">
                                  Update
                                </CButton>
                                <CButton size="sm" color="danger" className="ml-1">
                                  Ban
                                </CButton>
                              </CCardBody>
                            </CCollapse>
                          )
                        }

                    }}
                  />
              }
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CToaster
        position={"bottom-right"}
      >
        <CToast
          show={Boolean(errors)}
          autohide={3000}
          fade={true}
          style={{ backgroundColor: "#e55353" }}
        >
          <CToastHeader closeButton>
            Thông báo
          </CToastHeader>
          <CToastBody>
            {errors}
          </CToastBody>
        </CToast>
      </CToaster>
    </>
  )
}

export default Teachers
