import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from 'routes/pubRoutes'
import { PlainButton } from 'components/ui/Buttons'
import ModalButton from 'components/ui/Modals/Modal'
import LoginForm from 'components/forms/LogInForm'
import RegisterForm from 'components/forms/RegisterForm'

const Nav = () => (
  <nav className="nav">
    <div className="nav__logo">
      <Link to="/">Tech Blog</Link>
    </div>

    <div className="nav__links">
      <NavLink to="/">Home</NavLink>
      {navLinks.map((route) => (
        <NavLink key={route.name} to={route.path}>
          {route.name}
        </NavLink>
      ))}
    </div>

    <NavAuth />
  </nav>
)

export default Nav

const NavAuth = () => {
  return (
    <div className="nav__cta">
      {/* Search function --- */}
      {/* <PlainButton>
        <BsSearch />
      </PlainButton> */}

      <ModalButton Btn={PlainButton} label="Log in" title="Log in">
        {(close) => <LoginForm close={close} target="modal" />}
      </ModalButton>
      <ModalButton Btn={PlainButton} label="Register" title="Register new account">
        {(close) => <RegisterForm close={close} target="modal" />}
      </ModalButton>
    </div>
  )
}
