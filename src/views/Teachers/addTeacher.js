import React, { useState } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CForm,
  CFormGroup,
  CLabel,
  CInput,
  CCardFooter,
  CButton
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import teacherService from "../services/teacherService";

const AddTeacher = () => {

  const history = useHistory()
  const [inputValues, setInputValues] = useState({});
  const [loading, setLoading] = useState(false);

  const handleOnChange = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const createTeacher = async () => {
    const { username, password, email, address, name, phone_number } = inputValues;
    if (!username || !password || !email || !address || !name || !phone_number) {
      showNotification("Vui lòng điền đẩy đủ thông tin.", false);
      return;
    }
    setLoading(true);
    try {
      await teacherService.createTeacher(inputValues);
      showNotification("Tạo thành công", true);
      history.push("/teachers");
    } catch (error) {
      setLoading(false);
      showNotification(error.response.data.message, false);
    }
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
    <>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>
              <strong>Thêm giáo viên</strong>
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email">Email <span style={{ color: "red" }}>*</span></CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="email" id="email" name="email" onChange={handleOnChange} placeholder="Enter Email..." autoComplete="email" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-password">Password <span style={{ color: "red" }}>*</span></CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="password" id="password" name="password" onChange={handleOnChange} placeholder="Enter Password..." autoComplete="current-password" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="username">Tên đăng nhập <span style={{ color: "red" }}>*</span></CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="username" name="username" onChange={handleOnChange} />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="name">Họ và tên <span style={{ color: "red" }}>*</span></CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="name" name="name" onChange={handleOnChange} />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="address">Địa chỉ <span style={{ color: "red" }}>*</span></CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="address" name="address" onChange={handleOnChange} />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="phone_number">Số điện thoại <span style={{ color: "red" }}>*</span></CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="number" id="phone_number" name="phone_number" onChange={handleOnChange} />
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter>
              {
                loading ? <CButton className="float-right" color="primary" disabled={loading}>...Loading</CButton> : <CButton className="float-right" type="submit" color="primary" onClick={createTeacher}><CIcon name="cil-scrubber" /> Thêm giáo viên</CButton>
              }
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default AddTeacher
