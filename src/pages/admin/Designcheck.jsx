import React from 'react'

const Designcheck = () => {
  return (
    <div className='flex justify-center h-screen items-center'>
    <div className='flex flex-col items-center gap-4'>
        <div className='flex items-center p-5 rounded-full bg-[#D6DBEF]'>
            <img src="/src/assets/admin/icons/not-found.svg" alt="" />
        </div>
        <p className='text-[16px] text-[#212A4B]'>No Students Found</p>
    </div>
    </div>
  )
}

export default Designcheck
