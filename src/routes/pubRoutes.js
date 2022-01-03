import React from 'react'
import Error from 'pages/Error'

const Blog = React.lazy(() => import('pages/Blog'))
const UI = React.lazy(() => import('pages/Guide/UI'))
const Login = React.lazy(() => import('features/auth/Login'))
const BlogList = React.lazy(() => import('pages/Blog/BlogList'))
const Register = React.lazy(() => import('features/auth/Register'))
const Features = React.lazy(() => import('pages/Features'))

export const publicRoutes = [
  {
    name: 'Guide',
    path: '/guides',
    component: <UI />,
  },
  {
    name: 'BlogList',
    path: '/blogs',
    component: <BlogList />,
  },
  {
    name: 'Blog',
    path: '/blogs/:id',
    component: <Blog />,
  },
  {
    name: 'Features',
    path: '/features',
    component: <Features />,
  },
  {
    name: 'Log in',
    path: '/login',
    component: <Login />,
  },
  {
    name: 'Register',
    path: '/register',
    component: <Register />,
  },
  {
    name: 'Error',
    path: '*',
    component: <Error />,
  },
]

export const navLinks = [
  {
    name: 'Blog',
    path: '/blogs/2',
  },
  {
    name: 'UI Guide',
    path: '/guides',
  },
  {
    name: 'Features',
    path: '/features',
  },
]
