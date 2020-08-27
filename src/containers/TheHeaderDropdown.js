import React, { useState } from 'react';
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CButton
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const TheHeaderDropdown = () => {
  const [modal, setModal] = useState(false)
  const logOut = () => {
    localStorage.clear();
    setModal(false);
    window.location.reload();
  }
  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={'avatars/6.jpg'}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Tài khoản</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-user" className="mfe-2" />Setting
        </CDropdownItem>
        <CDropdownItem onClick={() => setModal(true)}>
          <CIcon name="cil-lock-locked" className="mfe-2" />
          Đăng xuất
        </CDropdownItem>
      </CDropdownMenu>
      <CModal
        show={modal}
        onClose={setModal}
      >
        <CModalHeader closeButton>
          <CModalTitle>Đăng xuất</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Bạn chắc chắn muốn đăng xuất ?
        </CModalBody>
        <CModalFooter>
          <CButton color="primary" onClick={() => logOut()}>Đồng ý</CButton>{' '}
          <CButton
            color="secondary"
            onClick={() => setModal(false)}
          >Huỷ</CButton>
        </CModalFooter>
      </CModal>
    </CDropdown>
  )
}

export default TheHeaderDropdown
