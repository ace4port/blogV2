import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { publicRoutes } from 'routes/pubRoutes'
import { BsSearch } from 'react-icons/bs'
import { PlainButton } from 'components/ui/Buttons'

const Nav = () => (
  <nav className="nav">
    <div className="nav__logo">
      <Link to="/">Tech Blog</Link>
    </div>

    <div className="nav__links">
      <NavLink to="/">Home</NavLink>
      {publicRoutes.map((route) => (
        <NavLink key={route.name} to={route.path}>
          {route.name}
        </NavLink>
      ))}
    </div>

    <div className="nav__cta">
      <PlainButton>
        <BsSearch />
      </PlainButton>
      <PlainButton>Log In</PlainButton>
      <PlainButton>Register</PlainButton>
    </div>
  </nav>
)

export default Nav
