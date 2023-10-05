import React from 'react'
import Navbar from './components/common/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Error from "./pages/Error"
import OpenRoute from './components/core/auth/OpenRoute'
import VerifyEmail from './pages/VerifyEmail'
import ForgetPassword from './pages/ForgetPassword'


const App = () => {


  return (
    <div className='w-screen min-h-screen bg-richblack-900 font-inter'>
      <Navbar />
      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/signup' element={<OpenRoute ><Signup /> </OpenRoute>} />

        <Route path='/about' element={<About />} />

        <Route path='/contact' element={<Contact />} />

        <Route path='/login' element={<OpenRoute> <Login /> </OpenRoute>} />
        <Route path='/verify-email' element = {<OpenRoute> <VerifyEmail /> </OpenRoute>} />
        <Route path='/forget-password' element = {<OpenRoute> <ForgetPassword /> </OpenRoute>} />

        <Route path='/*' element={<Error />} />

      </Routes>
    </div>
  )
}

export default App