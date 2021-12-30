import React from 'react'
import Backdrop from './Backdrop'

function SimpleModal({ isActive, closeModal, title, subtitle, children }) {
  return (
    <>
      <Backdrop isActive={isActive} close={closeModal} />
      <div className={isActive ? 'simple-modal open' : 'simple-modal close'}>
        <div className="modal-content">
          <div className="modal-title-container">
            {title && <h4 className="modal-title">{title}</h4>}
            {subtitle && <span className="modal-sub-title">{subtitle}</span>}
          </div>

          <div className="modal-body">{children}</div>
        </div>
      </div>
    </>
  )
}

export default SimpleModal
