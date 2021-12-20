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
        <h2>Typography</h2>
        <div className="container">
          <h4>Headings</h4>
          <div>
            <h1>This is a heading 1. Do be do bee</h1>
            <h2>This is a heading 2. Do be do bee</h2>
            <h3>This is a heading 3. Do be do bee</h3>
            <h4>This is a heading 4. Do be do bee</h4>
            <h5>This is a heading 5. Do be do bee</h5>
            <h6>This is a heading 6. Do be do bee</h6>
          </div>
        </div>
        <div className="container">
          <h4>Links</h4>
          <div>
            <h4>
              <a href="#top">This is a standard link</a>
            </h4>
            <a href="#top">This is a standard link</a>
          </div>
        </div>

        <div className="container">
          <h4>Paragraph</h4>
          <div>
            <p>
              Normal:Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et consequuntur deserunt
              ducimus autem dicta id! Ex aut voluptatem nostrum, autem adipisci quisquam ipsum labore tenetur nam enim
              esse.
            </p>
            <p>
              <strong>
                Strong: Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et consequuntur deserunt
                ducimus autem dicta id! Ex aut voluptatem nostrum, autem adipisci quisquam ipsum labore tenetur nam enim
                esse.
              </strong>
            </p>
            <p>
              <em>
                Em: Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et consequuntur deserunt
                ducimus autem dicta id! Ex aut voluptatem nostrum, autem adipisci quisquam ipsum labore tenetur nam enim
                esse.
              </em>
            </p>
            <p>
              <strong>
                <em>
                  Strong, EM: Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et consequuntur
                  deserunt ducimus autem dicta id! Ex aut voluptatem nostrum, autem adipisci quisquam ipsum labore
                  tenetur nam enim esse.
                </em>
              </strong>
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2>Buttons</h2>
        <div className="container">
          <h4>Normal buttons</h4>
          {['primary', 'secondary', 'danger', 'info', 'warning', 'outlined', 'disabled'].map((variant, index) => (
            <Button key={index} variant={variant}>
              {variant}
            </Button>
          ))}
        </div>
        <div className="container">
          <h4>Rounded buttons</h4>
          {['primary', 'secondary', 'danger', 'info', 'warning', 'outlined', 'disabled'].map((variant, index) => (
            <RoundButton key={index} variant={variant}>
              {variant}
            </RoundButton>
          ))}
        </div>
      </div>
      <div>
        <h2>Toasts</h2>
        <div className="container">
          <OutlinedButton handleClick={() => fireToast('success', 'Congrats !!')}>Success</OutlinedButton>
          <OutlinedButton handleClick={() => fireToast('warning', 'Congrats !!')}>Warning</OutlinedButton>
          <OutlinedButton handleClick={() => fireToast('info', 'Congrats !!')}>Info</OutlinedButton>
          <OutlinedButton handleClick={() => fireToast('error', 'Congrats !!')}>Error</OutlinedButton>
        </div>
      </div>

      <div>
        <h2>Modals</h2>
        <SimpleModal isActive={simpleModalOpen} closeModal={() => setSimpleModalOpen(false)} />
        <OutlinedButton handleClick={() => setSimpleModalOpen(true)}>Simple modal</OutlinedButton>

        <MediaModal isActive={modalOpen} closeModal={() => setModalOpen(false)}>
          <img src="https://cdn.pixabay.com/photo/2016/11/23/13/48/beach-1852945_960_720.jpg" alt="sea, birds" />
        </MediaModal>
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
