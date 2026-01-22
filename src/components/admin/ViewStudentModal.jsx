import React from "react";
import { X } from "lucide-react";

const ViewStudentModal = ({ isOpen, onClose, student }) => {
  if (!isOpen || !student) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white w-full max-w-4xl rounded-lg shadow-lg overflow-hidden">

       
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-lg font-semibold">Student Details</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-500 hover:text-black" />
          </button>
        </div>

        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">

     
          <div className="flex gap-6">
            <img
              src={student.photo}
              alt="Student"
              className="w-32 h-32 rounded-md object-cover border"
            />

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">{student.full_name}</h3>
              <p className="text-sm text-gray-600">
                Class: <span className="font-medium">{student.class_name}</span>
              </p>
              <p className="text-sm text-gray-600">
                Roll No: <span className="font-medium">{student.roll_no}</span>
              </p>

              <span
                className={`inline-block px-2 py-1 text-xs rounded ${
                  student.is_active
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {student.is_active ? "Active" : "Inactive"}
              </span>
            </div>
          </div>

     
          <section>
            <h4 className="font-semibold mb-2">Basic Information</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <Info label="Email" value={student.email} />
              <Info label="Phone" value={student.phone} />
              <Info label="Gender" value={student.gender} />
              <Info label="Blood Group" value={student.blood_group} />
            </div>
          </section>

        
          <section>
            <h4 className="font-semibold mb-2">Parent Information</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <Info label="Father's Name" value={student.father_name} />
              <Info label="Mother's Name" value={student.mother_name} />
            </div>
          </section>

         
          <section>
            <h4 className="font-semibold mb-2">Address</h4>
            <p className="text-sm font-medium">{student.address || "-"}</p>
          </section>

        
          <section>
            <h4 className="font-semibold mb-2">System Information</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <Info label="Created At" value={student.created_at} />
            </div>
          </section>

        </div>

       
      </div>
      
    </div>
  );
};

const Info = ({ label, value }) => (
  <div>
    <p className="text-gray-500">{label}</p>
    <p className="font-medium">{value || "-"}</p>
  </div>
);

export default ViewStudentModal;
