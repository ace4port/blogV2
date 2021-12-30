import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'

import Layout from 'layout'
import Home from 'pages/Home'
import { publicRoutes } from './pubRoutes'
import { privateRoutes } from './privateRoutes'
import { useSelector } from 'react-redux'
import Dashboard from 'pages/Dashboard'
import DashboardLayout from 'layout/Dashboard'

const RoutesList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {publicRoutes.map((route) => {
            const suspenseWrap = <Suspense fallback={<div>Loading ....</div>}>{route.component}</Suspense>
            return <Route key={route.name} path={route.path} element={suspenseWrap} />
          })}
        </Route>

        <Route
          path={'/dashboard'}
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashboard />} />
          {privateRoutes.map((route) => {
            const suspenseWrap = <Suspense fallback={<div>Loading ....</div>}>{route.component}</Suspense>
            return <Route key={route.name} path={route.path} element={suspenseWrap} />
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesList

const PrivateRoute = ({ children }) => {
  const location = useLocation()
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} />
  }
  return children
}
