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

import subjectService from "../services/subjectService";

const UpdateSubject = () => {
  const history = useHistory();
  const { id } = useParams();
  const [inputValues, setInputValues] = useState({});
  const [loading, setLoading] = useState({ loadingGet: false, loadingUpdate: false });

  useEffect(() => {
    const fetchData = async () => {
      setLoading({ loadingUpdate: false, loadingGet: true });
      try {
        const response = await subjectService.getSubjectById(id);
        if (response && response.data) {
          const { name, description } = response.data;
          setInputValues({ name, description });
        }
        setLoading({ loadingUpdate: false, loadingGet: false });
      } catch (error) {
        showNotification(error.response.data.message);
      }
    }
    fetchData();
  }, [id]);

  const handleOnChange = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const updateSubject = async () => {
    const { name, description } = inputValues;
    if (!name || !description) {
      showNotification("Vui lòng điền đẩy đủ thông tin.", false);
      return;
    }
    setLoading({ loadingUpdate: true, loadingGet: false });
    try {
      await subjectService.updateSubject(id, inputValues);
      showNotification("Thành công", true);
      history.push("/classrooms/subject");
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
                        <CLabel htmlFor="name">Tên môn học <span style={{ color: "red" }}>*</span></CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput type="text" id="name" name="name" value={inputValues.name || ''} onChange={handleOnChange} placeholder="Nhập tên môn học..." />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="description">Mô tả <span style={{ color: "red" }}>*</span></CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput id="description" name="description" value={inputValues.description || ''} onChange={handleOnChange} />
                      </CCol>
                    </CFormGroup>
                  </CForm>
              }
            </CCardBody>
            <CCardFooter>
              {
                loading.loadingUpdate ? <CButton className="float-right" color="primary" disabled={loading.loadingUpdate}>...Loading</CButton> : <CButton className="float-right" type="submit" color="primary" onClick={updateSubject}><CIcon name="cil-scrubber" /> Cập nhật</CButton>
              }
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default UpdateSubject
