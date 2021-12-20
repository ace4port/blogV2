import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from 'layout'
import Home from 'pages/Home'
import { publicRoutes } from './pubRoutes'

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
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesList
