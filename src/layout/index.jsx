import React from 'react'
import { Outlet } from 'react-router-dom'

import Nav from './Nav'
import Footer from './Footer'
import ErrorBoundary from 'components/ErrorBoundary'

const Layout = () => (
  <>
    <Nav />
    <main className="main">
      <ErrorBoundary location="menu">
        <Outlet />
      </ErrorBoundary>
    </main>
    <Footer />
  </>
)

export default Layout
