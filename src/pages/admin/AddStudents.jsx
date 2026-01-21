import React from 'react'

const AddStudents = () => {
  return (
    <div className="flex flex-col mr-20">
      <div className="flex mt-8 justify-between">
        <div className="flex flex-col gap-0.5">
          <h1 className="text-[24px] font-semibold">Add Student</h1>
          <p className="text-[14px] text-[#545454]">
            Add a New Student
          </p>
        </div>
        <div className="flex gap-2 items-center bg-[#212A4B] p-3.5 rounded-lg">
          <img
            className="h-5 w-5"
            src="/src/assets/admin/icons/save.svg"
            alt=""
          />
          <button className="text-[#FFFFFF] text-[14px] font-medium">
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddStudents
