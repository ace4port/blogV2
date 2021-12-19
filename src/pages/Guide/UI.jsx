import React from 'react'

import Button, { RoundButton, OutlinedButton } from 'components/ui/Buttons'
import { fireToast } from 'components/ui/Toast'
import MediaModal from 'components/ui/Modals/MediaModal'
import SimpleModal from 'components/ui/Modals/SimpleModal'
import Loader from 'components/ui/Loader'

const UI = () => {
  const [modalOpen, setModalOpen] = React.useState(false)
  const [simpleModalOpen, setSimpleModalOpen] = React.useState(false)

  return (
    <div>
      <div>
        <h2>Buttons</h2>
        <h4>Normal buttons</h4>
        {['primary', 'secondary', 'danger', 'info', 'warning', 'outlined', 'disabled'].map((variant, index) => (
          <Button key={index} variant={variant}>
            {variant}
          </Button>
        ))}
        <h4>Rounded buttons</h4>
        {['primary', 'secondary', 'danger', 'info', 'warning', 'outlined', 'disabled'].map((variant, index) => (
          <RoundButton key={index} variant={variant}>
            {variant}
          </RoundButton>
        ))}
      </div>

      <div>
        <h2>Toasts</h2>
        <OutlinedButton handleClick={() => fireToast('success', 'Congrats !!')}>Success</OutlinedButton>
        <OutlinedButton handleClick={() => fireToast('warning', 'Congrats !!')}>Warning</OutlinedButton>
        <OutlinedButton handleClick={() => fireToast('info', 'Congrats !!')}>Info</OutlinedButton>
        <OutlinedButton handleClick={() => fireToast('error', 'Congrats !!')}>Error</OutlinedButton>
      </div>

      <div>
        <h2>Modals</h2>
        <SimpleModal isActive={simpleModalOpen} closeModal={() => setSimpleModalOpen(false)} />
        <OutlinedButton handleClick={() => setSimpleModalOpen(true)}>Simple modal</OutlinedButton>

        <MediaModal isActive={modalOpen} closeModal={() => setModalOpen(false)} />
        <OutlinedButton handleClick={() => setModalOpen(true)}>Media modal</OutlinedButton>
      </div>

      <div className="">
        <h2>Loaders</h2>
        <Loader height="12" width="2" />
        <Loader height="12" width="6" />
        <Loader height="24" width="8" />
      </div>
    </div>
  )
}

export default UI
