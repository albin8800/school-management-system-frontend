import React from 'react'
import { useRef, useState } from 'react';

const AddStudents = () => {

    const fileInputRef = useRef(null);
  const [photoPreview, setPhotoPreview] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (!file || !file.type.startsWith("image/")) return;

    setPhotoPreview(URL.createObjectURL(file));
  };

  return (
    <div className="flex flex-col mr-20 ">
      <div className="flex mt-8 justify-between">
        <div className="flex flex-col gap-0.5">
          <h1 className="text-[24px] font-semibold">Add Student</h1>
          <p className="text-[14px] text-[#545454]">Add a New Student</p>
        </div>
        <div className="flex gap-4">
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
          <div className="flex gap-2 items-center bg-transparent border border-[#212A4B] p-3.5 rounded-lg">
            <img
              className="h-5 w-5"
              src="/src/assets/admin/icons/cancel.svg"
              alt=""
            />

            <button className="text-[#212A4B] text-[14px] font-medium">
              Cancel
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-14.75 mt-10">
        <div className="flex flex-col gap-4  w-3/4">
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full border border-[#7D7D7D] rounded-lg p-3.5 outline-0 text-[14px] text-[#000000]"
            />
          </div>

          <div className="flex gap-4 justify-between">
            <div className="flex w-1/2 flex-col gap-2">
              <label className="text-[14px] font-medium">Email</label>
              <input
                type="text"
                placeholder="Enter Email"
                className="w-full border border-[#7D7D7D] rounded-lg p-3.5 outline-0 text-[14px] text-[#000000]"
              />
            </div>
            <div className="flex w-1/2 flex-col gap-2">
              <label className="text-[14px] font-medium">Phone Number</label>
              <input
                type="text"
                placeholder="Enter phone number"
                className="w-full border border-[#7D7D7D] rounded-lg p-3.5 outline-0 text-[14px] text-[#000000]"
              />
            </div>
          </div>

          <div className="flex gap-4 justify-between">
            <div className="flex w-1/2 flex-col gap-2">
              <label className="text-[14px] font-medium">Gender</label>
              <div className="flex border justify-between border-[#808080] rounded-lg p-3.5 cursor-pointer">
                <select className="appearance-none text-[14px] w-full text-[#808080] outline-0">
                  <option className="w-full" value="">
                    Select Gender
                  </option>
                  <option className="w-full" value="">
                    Male
                  </option>
                  <option className="w-full" value="">
                    Female
                  </option>
                </select>
                <img
                  className="h-5 w-5"
                  src="/src/assets/admin/icons/arrow-down.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="flex w-1/2 flex-col gap-2">
              <label className="text-[14px] font-medium">Blood Group</label>
              <div className="flex border justify-between border-[#808080] rounded-lg p-3.5 cursor-pointer">
                <select className="appearance-none text-[14px] w-full text-[#808080] outline-0">
                  <option className="w-full" value="">
                    Blood Group
                  </option>
                  <option className="w-full" value="">
                    A+
                  </option>
                  <option className="w-full" value="">
                    B+
                  </option>
                  <option className="w-full" value="">
                    AB+
                  </option>
                  <option className="w-full" value="">
                    O+
                  </option>
                  <option className="w-full" value="">
                    O-
                  </option>
                  <option className="w-full" value="">
                    A-
                  </option>
                  <option className="w-full" value="">
                    AB-
                  </option>
                  <option className="w-full" value="">
                    B-
                  </option>
                </select>
                <img
                  className="h-5 w-5"
                  src="/src/assets/admin/icons/arrow-down.svg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-8 justify-between">
            <div className="flex w-1/2 flex-col gap-2">
              <label className="text-[14px] font-medium">Class</label>
              <div className="flex border justify-between border-[#808080] rounded-lg p-3.5 cursor-pointer">
                <select className="appearance-none text-[14px] w-full text-[#808080] outline-0">
                  <option className="w-full" value="">
                    Select Class
                  </option>
                  <option className="w-full" value="">
                    1st
                  </option>
                  <option className="w-full" value="">
                    2nd
                  </option>
                  <option className="w-full" value="">
                    3rd
                  </option>
                  <option className="w-full" value="">
                    4th
                  </option>
                  <option className="w-full" value="">
                    5th
                  </option>
                  <option className="w-full" value="">
                    6th
                  </option>
                  <option className="w-full" value="">
                    7th
                  </option>
                  <option className="w-full" value="">
                    8th
                  </option>
                  <option className="w-full" value="">
                    9th
                  </option>
                  <option className="w-full" value="">
                    10th
                  </option>
                </select>
                <img
                  className="h-5 w-5"
                  src="/src/assets/admin/icons/arrow-down.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="flex w-1/2 flex-col gap-2">
              <label className="text-[14px] font-medium">Section</label>
              <div className="flex border justify-between border-[#808080] rounded-lg p-3.5 cursor-pointer">
                <select className="appearance-none text-[14px] w-full text-[#808080] outline-0">
                  <option className="w-full" value="">
                    Select Section
                  </option>
                  <option className="w-full" value="">
                    A
                  </option>
                  <option className="w-full" value="">
                    B
                  </option>
                  <option className="w-full" value="">
                    C
                  </option>
                  <option className="w-full" value="">
                    D
                  </option>
                  <option className="w-full" value="">
                    E
                  </option>
                  <option className="w-full" value="">
                    F
                  </option>
                </select>
                <img
                  className="h-5 w-5"
                  src="/src/assets/admin/icons/arrow-down.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4  justify-between">
            <div className="flex w-1/2 flex-col gap-2">
              <label className="text-[14px] font-medium">Roll No</label>
              <input
                type="text"
                placeholder="Enter Roll no"
                className="w-full border border-[#7D7D7D] rounded-lg p-3.5 outline-0 text-[14px] text-[#000000]"
              />
            </div>
          </div>

          <div className="flex gap-4 mt-8 justify-between">
            <div className="flex w-1/2 flex-col gap-2">
              <label className="text-[14px] font-medium">Father's Name</label>
              <input
                type="text"
                placeholder="Enter Father's Name"
                className="w-full border border-[#7D7D7D] rounded-lg p-3.5 outline-0 text-[14px] text-[#000000]"
              />
            </div>
            <div className="flex w-1/2 flex-col gap-2">
              <label className="text-[14px] font-medium">Mother's Name</label>
              <input
                type="text"
                placeholder="Enter Mother's Name"
                className="w-full border border-[#7D7D7D] rounded-lg p-3.5 outline-0 text-[14px] text-[#000000]"
              />
            </div>
          </div>

          <div className="flex gap-4  justify-between mb-20">
            <div className="flex w-full flex-col gap-2">
              <label className="text-[14px] font-medium">Address</label>
              <textarea
                className="w-full border h-25 border-[#7D7D7D] rounded-lg p-3.5 outline-0 text-[14px] text-[#000000]"
                placeholder="Enter Address"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[14px] font-medium">Photo</label>

          <div
            onClick={() => fileInputRef.current.click()}
            className="w-[220px] h-[285px] border-2 border-dashed border-[#7D7D7D] rounded-lg
               flex items-center justify-center cursor-pointer bg-[#F9FAFB]
               hover:border-[#212A4B]"
          >
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handlePhotoChange}
              className="hidden"
            />

            {photoPreview ? (
              <img
                src={photoPreview}
                alt="Student"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <div className="flex flex-col items-center gap-2 text-[#7D7D7D]">
                <img
                  src="/src/assets/admin/icons/upload.svg"
                  alt="Upload"
                  className="h-10 w-10"
                />
                <p className="text-[14px] font-semibold text-[#212A4B]">
                  Click to upload photo
                </p>
              </div>
            )}
          </div>

          {photoPreview && (
            <button
              type="button"
              onClick={() => fileInputRef.current.click()}
              className="text-[14px] text-[#212A4B] font-semibold hover:underline text-center"
            >
              Change Photo
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddStudents
