import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectRoute = ({  isAouthenticated }) => {

  if (!isAouthenticated) {
    return <Navigate to={'/login'} />
  }

  return (
  <Outlet/>
  )
}

export default ProtectRoute