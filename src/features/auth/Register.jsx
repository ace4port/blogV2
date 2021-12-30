import React from 'react'
import { useNavigate } from 'react-router-dom'

import RegisterForm from 'components/forms/RegisterForm'

const Register = () => {
  const navigate = useNavigate()
  const close = () => navigate('/dashboard', { replace: true })
  return (
    <div>
      <h4>Register a new account</h4>
      <RegisterForm close={close} />
    </div>
  )
}

export default Register
