import React from 'react'

import { ImProfile, FaComment, MdManageAccounts, FaDochub } from 'components/icons'
const Blogs = React.lazy(() => import('features/blog'))
const Comments = React.lazy(() => import('features/comments/CommentList'))
const Account = React.lazy(() => import('features/account'))
const UIGuide = React.lazy(() => import('pages/Guide/UI'))

export const privateRoutes = [
  {
    name: 'Posts',
    path: 'posts/*',
    component: <Blogs />,
  },
  {
    name: 'Comments',
    path: 'comments',
    icon: <FaComment />,
    component: <Comments />,
  },
  {
    name: 'Guide',
    icon: <FaDochub />,
    path: 'guide',
    component: <UIGuide />,
  },
  {
    name: 'Account',
    icon: <MdManageAccounts />,
    path: 'account',
    component: <Account />,
  },
]

export const dashboardLinks = [
  {
    name: 'Posts',
    icon: <ImProfile />,
    path: 'posts',
  },
  {
    name: 'Comments',
    icon: <FaComment />,
    path: 'comments',
  },
  {
    name: 'Guide',
    path: 'guide',
    icon: <FaDochub />,
  },
  {
    name: 'Account',
    icon: <MdManageAccounts />,
    path: 'account',
  },
]
