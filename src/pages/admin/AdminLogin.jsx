import React from 'react'
import { motion } from 'framer-motion'

const AdminLogin = () => {
  return (
    <div className='min-h-screen flex items-center gap-[166px] mr-20'>
    <div className='relative w-172 h-186'>
      <img className='w-172 h-186 object-cover' src="/src/assets/admin/images/login-left.svg" alt="Admin Login Background" />
      <div className='absolute inset-0 flex items-center justify-center'>
        <h1 className='text-[40px] text-[#FFFFFF] font-semibold'>Admin Panel</h1>
      </div>
    </div>

    <div className='w-1/2 flex flex-col'>

    <motion.div 
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    
    className='flex flex-col justify-center items-center'>
        <h1 className='text-[24px] font-semibold text-[#212A4B]'>Login to Admin Panel</h1>

        <div className='mt-11 w-full flex flex-col gap-4'>
            <div className='gap-2 w-full flex flex-col'>
            <label className='block text-[#000000] text-[16px] font-medium'>User ID</label>
            <input type="text" placeholder='Enter User ID' className='w-full px-3.5 py-3.5 border border-[#999999] text-[14px] text-[#212A4B] rounded-lg' />
            </div>

            <div className='gap-2 w-full flex flex-col'>
            <label className='block text-[#000000] text-[16px] font-medium'>Password</label>
            <input type="password" placeholder='Enter Password' className='w-full px-3.5 py-3.5 border border-[#999999] text-[14px] text-[#212A4B] rounded-lg' />
            </div>
        </div>

        <button className=' w-full bg-[#212A4B] text-[#FFFFFF] text-[14px] font-medium py-3.5 rounded-lg mt-6 hover:bg-[#1a2238] transition duration-300'>
            Login
        </button>

    </motion.div>

    <div className='mt-6 flex gap-2 px-3.5 py-3.5 border border-[#D83A3A] bg-[#F8E6E6] rounded-lg items-center'>
        <img className='h-5 w-5' src="/src/assets/admin/icons/error.svg" alt="" />
        <p className='text-[14px] text-[#D83A3A]'>Invalid Credentials.Try Again</p>
    </div>

    </div>
    </div>
  )
}

export default AdminLogin
