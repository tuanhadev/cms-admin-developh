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

import classRoomService from "../services/classRoomService";

const AddClassRoom = () => {

  const history = useHistory()
  const [inputValues, setInputValues] = useState({});
  const [loading, setLoading] = useState(false);

  const handleOnChange = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const createClassRoom = async () => {
    const { name } = inputValues;
    if (!name) {
      showNotification("Vui lòng điền đẩy đủ thông tin.", false);
      return;
    }
    setLoading(true);
    try {
      await classRoomService.createClassRoom(inputValues);
      showNotification("Tạo thành công", true);
      history.push("/classrooms/room");
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
              <strong>Thêm lớp học</strong>
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="name">Tên lớp học<span style={{ color: "red" }}>*</span></CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="text" id="name" name="name" onChange={handleOnChange} placeholder="Nhập tên lớp học..." />
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter>
              {
                loading ? <CButton className="float-right" color="primary" disabled={loading}>...Loading</CButton> : <CButton className="float-right" type="submit" color="primary" onClick={createClassRoom}><CIcon name="cil-scrubber" /> Thêm lớp học</CButton>
              }
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default AddClassRoom
