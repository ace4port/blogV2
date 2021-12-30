import React from 'react'
import Error from 'pages/Error'

const Blog = React.lazy(() => import('pages/Blog'))
const BlogList = React.lazy(() => import('pages/Blog/BlogList'))
const UI = React.lazy(() => import('pages/Guide/UI'))
const Counter = React.lazy(() => import('features/counter/Counter'))
const Login = React.lazy(() => import('features/auth/Login'))
const Register = React.lazy(() => import('features/auth/Register'))

const Features = () => <div> ---------------- Features ----------------</div>
const Portfolio = () => <div>---------------- Portfolio ----------------</div>

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
    name: 'Counter',
    path: '/counter',
    component: <Counter />,
  },
  {
    name: 'Features',
    path: '/features',
    component: <Features />,
  },
  {
    name: 'Portfolio',
    path: '/projects',
    component: <Portfolio />,
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
    name: 'Counter',
    path: '/counter',
  },
  {
    name: 'Features',
    path: '/features',
  },
  {
    name: 'Portfolio',
    path: '/projects',
  },
]
