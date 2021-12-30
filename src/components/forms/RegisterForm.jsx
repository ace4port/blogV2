import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { register } from 'api'
import { fireToast } from 'components/ui/Toast'
import { logIn as actionLogin } from 'features/auth/authSlice'
import { AnimatedButton } from 'components/ui/Buttons'

const RegisterForm = ({ open, close, target }) => {
  const dispatch = useDispatch()
  const nav = useNavigate()
  const [formdata, setFormdata] = useState({ username: '', email: '', password: '' })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  useEffect(() => setError(''), [open])
  useEffect(() => {
    const resetbtn = error && setTimeout(() => setStatus('idle'), 5000)
    return () => clearTimeout(resetbtn)
  }, [status, error])

  const handleChange = (e) => setFormdata({ ...formdata, [e.target.name]: e.target.value })
  const handleSubmit = async (e) => {
    e.preventDefault()
    // To do: verify email first- then proceed to login
    setStatus('loading')
    try {
      await register(formdata).then((res) => {
        if (parseInt(res.status) === 200) {
          fireToast('success', 'Account created successfully!')
          setStatus('success')
          // set up -> user logged in redux store --
          dispatch(actionLogin(res.data))
          setTimeout(() => close(), 1000)
          if (target === 'modal') {
            setTimeout(() => close(), 1000)
            nav('/dashboard', { replace: true })
          }
        }
      })
    } catch (err) {
      // console.log({ err })
      setError({ status: err.response.status, message: JSON.stringify(err.response.data) })
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username*</label>
        <input
          type="text"
          name="username"
          value={formdata.username}
          onChange={handleChange}
          required
          placeholder="Username"
        />
      </div>
      <div>
        <label htmlFor="email">E mail*</label>
        <input type="email" name="email" required value={formdata.email} onChange={handleChange} placeholder="E-mail" />
      </div>
      <div>
        <label htmlFor="password">Password*</label>
        <input
          type="password"
          name="password"
          required
          value={formdata.password}
          onChange={handleChange}
          placeholder="Password"
        />
      </div>

      {error && (
        <p>
          Error {error.status}: {error.message}
        </p>
      )}
      <AnimatedButton status={status} type="submit">
        Register
      </AnimatedButton>
    </form>
  )
}

export default RegisterForm
