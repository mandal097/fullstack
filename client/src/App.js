import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Registration from './pages/Registration/Registration'
import Login from './pages/Login/Login'
import SendOtp from './components/SendOtp/SendOtp'
import ResetPassword from './components/ResetPassword/ResetPassword'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgot-password-otp-send' element={<SendOtp />} />
          <Route path='/reset-password' element={<ResetPassword />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App