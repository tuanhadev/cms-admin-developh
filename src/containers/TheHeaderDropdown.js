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
          <strong>Account</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-user" className="mfe-2" />Profile
        </CDropdownItem>
        <CDropdownItem onClick={() => setModal(true)}>
          <CIcon name="cil-lock-locked" className="mfe-2" />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
      <CModal
        show={modal}
        onClose={setModal}
      >
        <CModalHeader closeButton>
          <CModalTitle>Logout</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Do you want to log out.
        </CModalBody>
        <CModalFooter>
          <CButton color="primary" onClick={() => logOut()}>Log out</CButton>{' '}
          <CButton
            color="secondary"
            onClick={() => setModal(false)}
          >Cancel</CButton>
        </CModalFooter>
      </CModal>
    </CDropdown>
  )
}

export default TheHeaderDropdown
