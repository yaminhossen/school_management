import React from 'react'
import { Outlet } from 'react-router-dom'

function PublicLayout() {
  return (
    <>
        <Outlet></Outlet>
    </>
  )
}

export default PublicLayout