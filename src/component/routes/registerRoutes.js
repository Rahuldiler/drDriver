import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from '../authPage/UserLogin'
import UserRegister from '../authPage/UserRegister'

const RegisterRoutes = () => {
  return (
      <Routes>
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserRegister />} />
      </Routes>
  )
}

export default RegisterRoutes