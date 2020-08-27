import React, { useState, useEffect } from 'react';
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
  CButton, CSpinner
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { useHistory, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import studentService from "../services/studentService";

const UpdateStudent = () => {
  const history = useHistory();
  const { username } = useParams();
  const [inputValues, setInputValues] = useState({});
  const [loading, setLoading] = useState({ loadingGet: false, loadingUpdate: false });

  useEffect(() => {
    const fetchData = async () => {
      setLoading({ loadingUpdate: false, loadingGet: true });
      try {
        const response = await studentService.getStudentByUsername(username);
        if (response && response.data) {
          const { username, email } = response.data;
          const { name, facebook, school, address, phone_number } = response.data.info;
          setInputValues({ username, email, name, facebook, school, address, phone_number });
        }
        setLoading({ loadingUpdate: false, loadingGet: false });
      } catch (error) {
        showNotification(error.response.data.message);
      }
    }
    fetchData();
  }, [username]);

  const handleOnChange = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const updateTeacher = async () => {
    const { username, email, address, name, phone_number } = inputValues;
    if (!username || !email || !address || !name || !phone_number) {
      showNotification("Vui lòng điền đẩy đủ thông tin.", false);
      return;
    }
    setLoading({ loadingUpdate: true, loadingGet: false });
    try {
      await studentService.updateStudent(username, inputValues);
      showNotification("Thành công", true);
      history.push("/students");
    } catch (error) {
      setLoading({ loadingUpdate: false, loadingGet: false });
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
              <strong>Cập nhật thông tin</strong>
            </CCardHeader>
            <CCardBody className="text-center">
              {
                loading.loadingGet ? <CSpinner
                  style={{ width: "4rem", height: "4rem" }}
                  color="info"
                /> :
                  <CForm action="" method="post" className="form-horizontal text-left">
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="email">Email <span style={{ color: "red" }}>*</span></CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput type="email" id="email" name="email" disabled={true} value={inputValues.email || ''} onChange={handleOnChange} placeholder="Enter Email..." autoComplete="email" />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="username">Tên đăng nhập <span style={{ color: "red" }}>*</span></CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput id="username" name="username" disabled={true} value={inputValues.username || ''} onChange={handleOnChange} />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="name">Họ và tên <span style={{ color: "red" }}>*</span></CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput id="name" name="name" onChange={handleOnChange} value={inputValues.name || ''} />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="address">Địa chỉ <span style={{ color: "red" }}>*</span></CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput id="address" name="address" onChange={handleOnChange} value={inputValues.address || ''} />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="phone_number">Số điện thoại <span style={{ color: "red" }}>*</span></CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput type="number" id="phone_number" name="phone_number" value={inputValues.phone_number || ''} onChange={handleOnChange} />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="facebook">Facebook </CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput type="text" id="facebook" name="facebook" value={inputValues.facebook || ''} onChange={handleOnChange} />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="school">Trường học</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput type="text" id="school" name="school" value={inputValues.school || ''} onChange={handleOnChange} />
                      </CCol>
                    </CFormGroup>
                  </CForm>
              }
            </CCardBody>
            <CCardFooter>
              {
                loading.loadingUpdate ? <CButton className="float-right" color="primary" disabled={loading.loadingUpdate}>...Loading</CButton> : <CButton className="float-right" type="submit" color="primary" onClick={updateTeacher}><CIcon name="cil-scrubber" /> Cập nhật</CButton>
              }
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default UpdateStudent
