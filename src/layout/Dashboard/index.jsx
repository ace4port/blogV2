import React from 'react'
import { Outlet } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
import NavBar from './NavBar'
import Sidebar from './Sidebar'

// import { setUser } from 'features/auth/authSlice'
// import useFetch from 'hooks/useFetch'
// import { fetchUser } from 'api'

const DashboardLayout = () => {
  // const user = useSelector((state) => state.auth.user)
  // const dispatch = useDispatch()
  // const [data, loading, error, success] = useFetch(fetchUser, null, !user)
  // success && dispatch(setUser(data))

  return (
    <>
      <NavBar />
      {/* <Sidebar loading={loading} error={error} data={data}> */}
      <Sidebar>
        <Outlet />
      </Sidebar>
    </>
  )
}

export default DashboardLayout
