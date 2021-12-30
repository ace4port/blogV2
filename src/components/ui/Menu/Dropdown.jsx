import React from 'react'
import { LightBackdrop } from '../Modals/Backdrop'

const Dropdown = ({ open, close, children }) => {
  return (
    <>
      <LightBackdrop isActive={open} close={close} />
      <div className="dropdown-container">{children}</div>
    </>
  )
}

export default Dropdown

export const DropdownItem = ({ leftIcon, rightIcon, children }) => {
  return (
    <div>
      <span className="icon-button">{leftIcon}</span>
      {children}
      <span className="icon-right">{rightIcon}</span>
    </div>
  )
}
