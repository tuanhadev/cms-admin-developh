import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import userService from "../../services/userService";

const Login = () => {
  const access_token = localStorage.getItem("access_token");
  const [inputValues, setInputValues] = useState({
    username: '', password: ''
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const handleOnChange = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const login = async () => {
    const { username, password } = inputValues;
    if (!username || !password) {
      setErrors("Vui lòng điền đầy đủ thông tin");
      return;
    }
    setLoading(true);
    try {
      const userData = { email: username, password };
      const response = await userService.login(userData);
      localStorage.setItem("access_token", response.access_token);
      window.location.reload();
    } catch (error) {
      setLoading(false);
      setErrors(error.response.data.message);
    }
  }

  const keyPressed = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      login();
    }
  }

  if (access_token) {
    return <Redirect to="/" />
  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" name="username" onChange={handleOnChange} onKeyPress={e => keyPressed(e)} placeholder="Username" autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" name="password" onChange={handleOnChange} onKeyPress={e => keyPressed(e)} placeholder="Password" autoComplete="current-password" />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        {
                          loading ? <CButton style={{ backgroundColor: "#0a0858" }} disabled={loading} className="px-4 text-white">...Loading</CButton> : <CButton style={{ backgroundColor: "#0a0858" }} onClick={login} className="px-4 text-white">Login</CButton>
                        }
                      </CCol>
                      <CCol xs="12" className="text-left">
                        <p style={{ marginTop: 10 }} className="text-danger">{errors ? `* ${errors}.` : ''}</p>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white py-5 d-md-down-none" style={{ width: '44%', backgroundColor: "#0a0858" }}>
                <CCardBody className="text-center d-flex align-items-center">
                  <div>
                    <h2>Developh</h2>
                    <p>Developh Vietnam tạo ra những lớp học, cộng đồng lập trình, nơi mang đến những góc nhìn mới mẻ về thế giới qua lăng kính công nghệ và nuôi dưỡng những ý tưởng trở thành sự thật.</p>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
