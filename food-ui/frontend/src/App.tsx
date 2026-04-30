import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/Placeorder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import AdminPanel from './pages/Admin/AdminPanel'

const App = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false)
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/admin')

  return (
    <>
      {showLoginPopup ? <LoginPopup setShowLoginPopup={setShowLoginPopup} /> : null}
      <div className='app'>
        {!isAdminRoute && <Navbar setShowLoginPopup={setShowLoginPopup} />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/admin/*' element={<AdminPanel />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App