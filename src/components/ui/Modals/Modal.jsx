import React, { useState } from 'react'
import SimpleModal from './SimpleModal'
import { PlainButton } from '../Buttons'

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return { isOpen, open, close }
}

const Modal = ({ Btn, label, title, subtitle, children }) => {
  const { isOpen, open, close } = useModal()

  return (
    <>
      {Btn ? <Btn handleClick={open}>{label}</Btn> : <PlainButton handleClick={open}>Open modal</PlainButton>}
      <SimpleModal isActive={isOpen} closeModal={close} title={title} subtitle={subtitle}>
        {children(close)}
      </SimpleModal>
    </>
  )
}

export default Modal
