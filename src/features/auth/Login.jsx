import React from 'react'
import LoginForm from 'components/forms/LogInForm'
import { useLocation, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()

  let from = location.state?.from?.pathname || '/dashboard'
  const close = () => setTimeout(() => navigate(from, { replace: true }), 1000)

  return (
    <div>
      <h4>Log in</h4>
      <LoginForm close={close} />
    </div>
  )
}

export default Login
