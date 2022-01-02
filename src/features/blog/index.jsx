import React, { lazy, Suspense } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'

const BlogList = lazy(() => import('./BlogList'))
const BlogView = lazy(() => import('./BlogView'))
const BlogCreate = lazy(() => import('./BlogCreate'))
const BlogEdit = lazy(() => import('./BlogEdit'))

const Blogs = () => {
  return (
    <div>
      <Routes>
        <Route>
          <Route index element={<BlogList />} />
          <Route
            path=":id"
            element={
              <Suspense fallback={<h2>Loading ... </h2>}>
                <BlogView />
              </Suspense>
            }
          />
          <Route
            path="create"
            element={
              <Suspense fallback={<h2>Loading ... </h2>}>
                <BlogCreate />
              </Suspense>
            }
          />
          <Route
            path="edit/:id"
            element={
              <Suspense fallback={<h2>Loading ... </h2>}>
                <BlogEdit />
              </Suspense>
            }
          />
        </Route>
      </Routes>

      <Outlet />
    </div>
  )
}

export default Blogs
