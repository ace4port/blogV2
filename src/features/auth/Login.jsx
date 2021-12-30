import React from 'react'
import LoginForm from 'components/forms/LogInForm'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const close = () => navigate('/dashboard', { replace: true })
  return (
    <div>
      <h4>Log in</h4>
      <LoginForm close={close} />
    </div>
  )
}

export default Login
