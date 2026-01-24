import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api/axios";
import SavingLoader from "../../components/common/SavingLoader";


const uploadToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "student_upload");

  const response = await fetch(
    "https://api.cloudinary.com/v1_1/dpy2635hh/image/upload",
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();

  if (!response.ok) {
    console.error("Cloudinary Error:", data);
    throw new Error(data.error?.message || "Cloudinary upload failed");
  }

  return data.secure_url;
};



const EditStudent = () => {

    const { id } = useParams();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    gender: "",
    blood_group: "",
    class_id: "",
    roll_no: "",
    father_name: "",
    mother_name: "",
    address: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const fileInputRef = useRef(null);
  const [classes, setClasses] = useState([]);
  const [saving, setSaving] = useState(false);


  useEffect(() => {
    const fetchStudents = async () => {
    try {
        const res = await api.get(`/api/admin/students/${id}`);
        const s = res.data.data;

         setFormData({
          full_name: s.full_name || "",
          email: s.email || "",
          phone: s.phone || "",
          gender: s.gender || "",
          blood_group: s.blood_group || "",
          class_id: s.class_id || "",
          roll_no: s.roll_no || "",
          father_name: s.father_name || "",
          mother_name: s.mother_name || "",
          address: s.address || "",
        });

        setPhotoPreview(s.photo || null);
    } catch (error) {
        alert("Failed to load student details");
        navigate('/admin/student-management');
        
    } 
    
  }

    fetchStudents();
}, [id]);


  
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (!file || !file.type.startsWith("image/")) return;

    if (file.size > 2 * 1024 * 1024) {
      alert("Image must be under 2MB");
      return;
    }

    setSelectedFile(file);
    setPhotoPreview(URL.createObjectURL(file));
  };

  useEffect(() => {
  const fetchClasses = async () => {
    try {
      const res = await api.get("/api/admin/students/classes");
      setClasses(res.data.data);
    } catch (error) {
      console.error("Failed to load classes", error);
    }
  };

  fetchClasses();
}, []);


  useEffect(() => {
    return () => {
      if (photoPreview) URL.revokeObjectURL(photoPreview);
    };
  }, [photoPreview]);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
      setSaving(true);
      let photoUrl = null;

      if (selectedFile) {
        photoUrl = await uploadToCloudinary(selectedFile);
      }

      const payload = {
        ...formData,
        photo: photoUrl,
      };

      await api.put(`/api/admin/students/${id}`, payload);

      navigate('/admin/student-management');
     
    } catch (error) {
    if (error.response) {
      alert(error.response.data.message);
    } else {
      alert("Something went wrong");
      setSaving(false);
    }
  }
  };

  return (
    <div className="flex flex-col mr-20">
      <div className="flex mt-8 justify-between">
        <div className="flex flex-col gap-0.5">
          <h1 className="text-[24px] font-semibold">Edit Student</h1>
          <p className="text-[14px] text-[#545454]">Update student details</p>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            form="add-student-form"
            className="flex gap-2 items-center bg-[#212A4B] p-3.5 rounded-lg"
          >
            <img
              className="h-5 w-5"
              src="/src/assets/admin/icons/save.svg"
              alt=""
            />
            <span className="text-[#FFFFFF] text-[14px] font-medium">Save Changes</span>
          </button>

          <button
            onClick={() => navigate(-1)}
            type="button"
            className="flex gap-2 items-center bg-transparent border border-[#212A4B] p-3.5 rounded-lg"
          >
            <img
              className="h-5 w-5"
              src="/src/assets/admin/icons/cancel.svg"
              alt=""
            />
            <span className="text-[#212A4B] text-[14px] font-medium">
              Cancel
            </span>
          </button>
        </div>
      </div>

      <form
        id="add-student-form"
        onSubmit={handleSubmit}
        className="flex gap-14.75 mt-10"
      >
        <div className="flex flex-col gap-4 w-3/4">
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-medium">Full Name</label>
            <input
              type="text"
              value={formData.full_name}
              onChange={(e) =>
                setFormData({ ...formData, full_name: e.target.value })
              }
              placeholder="Enter Fullname"
              className="w-full border border-[#7D7D7D] rounded-lg p-3.5 text-[14px] outline-0"
            />
          </div>

          <div className="flex gap-4">
            <div className="w-1/2 flex flex-col gap-2">
              <label className="text-[14px] font-medium">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Enter Email"
                className="border border-[#7D7D7D] rounded-lg p-3.5 text-[14px] outline-0"
              />
            </div>

            <div className="w-1/2 flex flex-col gap-2">
              <label className="text-[14px] font-medium">Phone Number</label>
              <input
                type="tel"
                maxLength={10}
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="Enter Phone Number"
                className="border border-[#7D7D7D] rounded-lg p-3.5 text-[14px] outline-0"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2 flex flex-col gap-2">
              <label className="text-[14px] font-medium">Gender</label>
              <div className="flex border justify-between border-[#808080] rounded-lg p-3.5 cursor-pointer">
                <select
                  value={formData.gender}
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })
                  }
                  className="appearance-none text-[14px] w-full text-[#808080] outline-0"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>

                <img
                  className="h-5 w-5"
                  src="/src/assets/admin/icons/arrow-down.svg"
                  alt=""
                />
              </div>
            </div>

            <div className="w-1/2 flex flex-col gap-2">
              <label className="text-[14px] font-medium">Blood Group</label>
              <div className="flex border justify-between border-[#808080] rounded-lg p-3.5 cursor-pointer">
                <select
                  value={formData.blood_group}
                  onChange={(e) =>
                    setFormData({ ...formData, blood_group: e.target.value })
                  }
                  className="appearance-none text-[14px] w-full text-[#808080] outline-0"
                >
                  <option value="">Blood Group</option>
                  <option>A+</option>
                  <option>B+</option>
                  <option>AB+</option>
                  <option>O+</option>
                  <option>O-</option>
                  <option>A-</option>
                  <option>B-</option>
                  <option>AB-</option>
                </select>
                <img
                  className="h-5 w-5"
                  src="/src/assets/admin/icons/arrow-down.svg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2 flex flex-col gap-2">
              <label className="text-[14px] font-medium">Class</label>

              <div className="flex border justify-between border-[#808080] rounded-lg p-3.5 cursor-pointer">
                <select
                  value={formData.class_id}
                  onChange={(e) =>
                    setFormData({ ...formData, class_id: e.target.value })
                  }
                  className="appearance-none text-[14px] w-full text-[#808080] outline-0"
                >
                  <option value="">Select Class</option>

                  {classes.map((cls) => (
                    <option key={cls.id} value={cls.id}>
                      {cls.name}
                    </option>
                  ))}
                </select>
                <img
                  className="h-5 w-5"
                  src="/src/assets/admin/icons/arrow-down.svg"
                  alt=""
                />
              </div>
            </div>

            <div className="w-1/2 flex flex-col gap-2">
              <label className="text-[14px] font-medium">Roll No</label>
              <input
                value={formData.roll_no}
                onChange={(e) =>
                  setFormData({ ...formData, roll_no: e.target.value })
                }
                placeholder="Enter Roll no"
                className="border border-[#7D7D7D] rounded-lg p-3.5 text-[14px] outline-0"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2 flex flex-col gap-2">
              <label className="text-[14px] font-medium">Father's Name</label>
              <input
                value={formData.father_name}
                onChange={(e) =>
                  setFormData({ ...formData, father_name: e.target.value })
                }
                placeholder="Enter Father's Name"
                className="border border-[#7D7D7D] rounded-lg p-3.5 text-[14px] outline-0"
              />
            </div>

            <div className="w-1/2 flex flex-col gap-2">
              <label className="text-[14px] font-medium">Mother's Name</label>
              <input
                value={formData.mother_name}
                onChange={(e) =>
                  setFormData({ ...formData, mother_name: e.target.value })
                }
                placeholder="Enter Mother's Name"
                className="border border-[#7D7D7D] rounded-lg p-3.5 text-[14px] outline-0"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-20">
            <label className="text-[14px] font-medium">Address</label>
            <textarea
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              placeholder="Enter Address"
              className="border border-[#7D7D7D] rounded-lg p-3.5 text-[14px] outline-0"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[14px] font-medium">Photo</label>

          <div
            onClick={() => fileInputRef.current.click()}
            className="w-[220px] h-[285px] border-2 border-dashed border-[#7D7D7D]
            rounded-lg flex items-center justify-center cursor-pointer
            bg-[#F9FAFB] hover:border-[#212A4B]"
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
                className="w-full h-full object-cover rounded-lg"
                alt=""
              />
            ) : (
              <div className="flex flex-col items-center gap-2">
                <img
                  src="/src/assets/admin/icons/upload.svg"
                  className="h-10 w-10"
                  alt=""
                />
                <p className="text-[14px] font-semibold text-[#212A4B]">
                  Click to upload photo
                </p>
                <p className="text-[12px] text-[#878A97]">
                  Only .jpg, jpeg, png supported
                </p>
              </div>
            )}
          </div>

          {photoPreview && (
            <button
              type="button"
              onClick={() => fileInputRef.current.click()}
              className="text-[14px] text-[#212A4B] font-semibold hover:underline"
            >
              Change Photo
            </button>
          )}
        </div>
      </form>
      <SavingLoader show={saving} text="Saving Student..." />
    </div>
  );
};

export default EditStudent;
