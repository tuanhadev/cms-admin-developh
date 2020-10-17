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

import subjectService from "../services/subjectService";

const AddSubject = () => {

  const history = useHistory()
  const [inputValues, setInputValues] = useState({});
  const [loading, setLoading] = useState(false);

  const handleOnChange = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const createSubject = async () => {
    const { name, description } = inputValues;
    if (!name || !description) {
      showNotification("Vui lòng điền đẩy đủ thông tin.", false);
      return;
    }
    setLoading(true);
    try {
      await subjectService.createSubject(inputValues);
      showNotification("Tạo thành công", true);
      history.push("/classrooms/subject");
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
              <strong>Thêm môn học</strong>
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="name">Tên <span style={{ color: "red" }}>*</span></CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="text" id="name" name="name" onChange={handleOnChange} placeholder="Nhập tên..." />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="description">Họ và tên <span style={{ color: "red" }}>*</span></CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="description" name="description" onChange={handleOnChange} placeholder="Nhập mô tả..." />
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter>
              {
                loading ? <CButton className="float-right" color="primary" disabled={loading}>...Loading</CButton> : <CButton className="float-right" type="submit" color="primary" onClick={createSubject}><CIcon name="cil-scrubber" /> Thêm môn học</CButton>
              }
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default AddSubject
