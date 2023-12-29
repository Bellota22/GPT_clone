import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'


function PrivateRoute() {

    const token = localStorage.getItem('access_token')
    const emailVerified = localStorage.getItem('emailVerified')
    const data = token || emailVerified
  return (

    data  ? <Outlet /> : <Navigate to="/login" replace={true} />
)
}

export default PrivateRoute