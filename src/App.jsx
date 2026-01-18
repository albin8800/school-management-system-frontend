import React from 'react'
import { Routes, Route } from "react-router-dom";
import AdminLogin from './pages/admin/AdminLogin'
import AdminDashboard from './pages/admin/AdminDashboard'

const App = () => {
  return (
    <div>
      
      
        <Routes>
          <Route path= "/admin/login" element={<AdminLogin />} />
          <Route path= "/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
    
    </div>
  )
}

export default App
