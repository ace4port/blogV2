import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { privateRoutes } from 'routes/privateRoutes'
import { Copyright } from 'layout/Footer'
import { MdDashboard } from 'react-icons/md'

const Sidebar = ({ children }) => {
  const location = useLocation()
  return (
    <>
      <div className="dashboard">
        <aside className="dashboard__aside">
          <NavLink to="/dashboard" className="dashboard__aside-item">
            <MdDashboard />
            Dashboard
          </NavLink>
          {privateRoutes.map((route) => (
            <NavLink to={route.path} key={route.name} className="dashboard__aside-item">
              {route.icon && route.icon}
              {route.name}
            </NavLink>
          ))}
        </aside>

        <div className="dashboard__body">
          <BreadCrumbs pathname={location.pathname} />
          <main>{children}</main>
        </div>
      </div>
      <Copyright />
    </>
  )
}

export default Sidebar

const BreadCrumbs = ({ pathname }) => {
  return (
    <p>
      {pathname
        .split('/')
        .slice(1)
        .map((item, index) => (
          <span key={index}>
            {item}
            {index !== pathname.split('/').length - 1 && <span> / </span>}
          </span>
        ))}
    </p>
  )
}
