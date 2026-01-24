import React from 'react'
import { Routes, Route } from "react-router-dom";
import AdminLogin from './pages/admin/AdminLogin'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminLayout from './layouts/AdminLayout';

import AdminStudents from './pages/admin/AdminStudents';
import Designcheck from './pages/admin/designcheck';
import AddStudents from './pages/admin/AddStudents';
import EditStudent from './pages/admin/EditStudent';


const App = () => {
  return (
    <div>
      
      
        <Routes path="/admin" element={<AdminLayout />}>
          <Route path= "/admin/login" element={<AdminLogin />} />
          <Route path= "/admin/dashboard" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
          <Route path= "/admin/student-management" element={<AdminLayout><AdminStudents /></AdminLayout>} />
          <Route path= "/admin/add-student" element={<AdminLayout><AddStudents /></AdminLayout>} />
          <Route path= "/admin/edit-student/:id" element={<AdminLayout><EditStudent /></AdminLayout>} />
          <Route path= "/admin/check" element={<Designcheck />} />
        </Routes>
    
    </div>
  )
}

export default App
