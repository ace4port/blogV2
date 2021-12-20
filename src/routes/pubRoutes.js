import React from 'react'
import Error from 'pages/Error'

const Blog = React.lazy(() => import('pages/Blog'))
const UI = React.lazy(() => import('pages/Guide/UI'))
const Counter = React.lazy(() => import('features/counter/Counter'))

const Features = () => <div> ---------------- Features ----------------</div>
const Portfolio = () => <div>---------------- Portfolio ----------------</div>

export const publicRoutes = [
  {
    name: 'Guide',
    path: '/guides',
    component: <UI />,
  },
  {
    name: 'Blog',
    path: '/blogs',
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
    name: 'Error',
    path: '*',
    component: <Error />,
  },
]
