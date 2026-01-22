import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";
import ViewStudentModal from "../../components/admin/ViewStudentModal";

const STUDENTS_PER_PAGE = 10;

const AdminStudents = () => {
  const navigate = useNavigate();

  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalStudents, setTotalStudents] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  const [viewOpen, setViewOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const totalPages = Math.ceil(totalStudents / STUDENTS_PER_PAGE);

  const fetchStudents = async (page = 1) => {
    try {
      setLoading(true);
      setError("");

      const res = await api.get(
        `/api/admin/students?page=${page}&limit=${STUDENTS_PER_PAGE}&search=${search}&classId=${selectedClass}`,
      );
      setStudents(res.data.data || []);
      setTotalStudents(res.data.pagination.total);
      setCurrentPage(page);
    } catch (error) {
      console.error(error);
      setError("Failed to load students. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fetchClasses = async () => {
    try {
      const res = await api.get("/api/admin/students/classes");
      setClasses(res.data.data || []);
    } catch (error) {
      console.error("Failed to fetch classes:", error);
    }
  };


const handleViewStudent = async (student) => {
  try {
    setLoading(true);

    const res = await api.get(`/api/admin/students/students/${student.id}`);
    setSelectedStudent(res.data.data);
    setViewOpen(true);

  } catch (error) {
    alert("Failed to load student details");
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    fetchStudents(1);
    fetchClasses();
  }, []);

  useEffect(() => {
    fetchStudents(1);
  }, [search, selectedClass]);

  return (
    <div className="flex flex-col mr-20">
      <div className="flex mt-8 justify-between">
        <div className="flex flex-col gap-0.5">
          <h1 className="text-[24px] font-semibold">Students</h1>
          <p className="text-[14px] text-[#545454]">
            Manage all enrolled students
          </p>
        </div>
        <div className="flex gap-2 items-center bg-[#212A4B] p-3.5 rounded-lg">
          <img
            className="h-5 w-5"
            src="/src/assets/admin/icons/add-student.svg"
            alt=""
          />
          <button
            onClick={() => navigate("/admin/add-student")}
            className="text-[#FFFFFF] text-[14px] font-medium"
          >
            Add Students
          </button>
        </div>
      </div>

      <div className="mt-10 bg-[#FFFFFF] rounded-2xl p-6">
        <div className="flex gap-4">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-3.5 w-full outline-0 border border-[#808080] rounded-lg text-[14px] text-[#3b3b3b]"
            type="text"
            placeholder="Search by Name, Phone, Email..."
          />
          <div className="flex items-center border border-[#808080] rounded-lg p-3.5 cursor-pointer ">
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="appearance-none text-[14px] text-[#808080] outline-0"
            >
              <option value="">Select Class</option>
              {classes.map((cls) => (
                <option key={cls.id} value={cls.id}>
                  {cls.name}
                </option>
              ))}
            </select>

            <img
              className="w-5 h-5 mr-2"
              src="/src/assets/admin/icons/arrow-down.svg"
              alt=""
            />
          </div>
        </div>

        <hr className="text-[#C4C4C4] mt-6" />

        <div className="grid grid-cols-6 mt-6 text-[14px] font-medium text-black pb-4 border-b">
          <div>Name</div>
          <div>Class</div>
          <div>Roll No</div>
          <div>Phone</div>
          <div>Email</div>
          <div className="text-right">Actions</div>
        </div>

        {loading && (
          <p className="flex text-center items-center justify-center">
            Loading Students...
          </p>
        )}

        {error && (
          <div className="mt-6 flex gap-2 px-3.5 py-3.5 border border-[#D83A3A] bg-[#F8E6E6] rounded-lg items-center">
            <img
              className="h-5 w-5"
              src="/src/assets/admin/icons/error.svg"
              alt=""
            />
            <p className="text-[14px] text-[#D83A3A]">{error}</p>
          </div>
        )}

        {!loading && !error && students.length === 0 && (
          <div className="flex flex-col mt-10 items-center justify-center gap-4">
            <div className="flex items-center p-5 rounded-full bg-[#D6DBEF]">
              <img src="/src/assets/admin/icons/not-found.svg" alt="" />
            </div>
            <p className="text-[16px] text-[#212A4B]">No Students Found</p>
          </div>
        )}

        {!loading &&
          !error &&
          students.map((student) => (
            <div key={student.id}>
              <div className="grid grid-cols-6 mt-4 items-center text-sm pb-4 border-b border-[#BFBFBF]">
                <div className="font-medium text-gray-800">
                  {student.full_name}
                </div>
                <div>{student.class_name || "-"}</div>
                <div>{student.roll_no || "-"}</div>
                <div>{student.phone || "-"}</div>
                <div className="truncate">{student.email || "-"}</div>

                <div className="flex justify-end gap-2">
                  <div onClick={() => handleViewStudent(student)} className="flex items-center p-1 bg-transparent hover:bg-[#E6E6FF] rounded cursor-pointer">
                    <img 
                      className="w-5 h-5"
                      src="/src/assets/admin/icons/view.svg"
                      alt=""
                    />
                  </div>
                  <div className="flex items-center p-1 bg-transparent hover:bg-[#E4FFE4] rounded cursor-pointer">
                    <img
                      className="w-5 h-5"
                      src="/src/assets/admin/icons/edit.svg"
                      alt=""
                    />
                  </div>
                  <div className="flex items-center p-1 bg-transparent hover:bg-[#FFDFDF] rounded cursor-pointer">
                    <img
                      className="w-5 h-5"
                      src="/src/assets/admin/icons/delete.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}

        <div className="flex gap-2.5 mt-8 justify-center">
          <div
            onClick={() => currentPage > 1 && fetchStudents(currentPage - 1)}
            className={`flex items-center px-5 py-3.5 rounded-lg cursor-pointer
      ${currentPage === 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-[#E5EDFF]"}`}
          >
            <img
              className="h-5 w-5"
              src="/src/assets/admin/icons/arrow-left.svg"
              alt="prev"
            />
          </div>

          {Array.from({ length: totalPages }).map((_, index) => {
            const page = index + 1;

            return (
              <div
                key={page}
                onClick={() => fetchStudents(page)}
                className={`flex items-center px-5 py-3.5 rounded-lg cursor-pointer
          ${
            currentPage === page
              ? "bg-[#212A4B] text-white"
              : "hover:bg-[#E5EDFF]"
          }`}
              >
                <p>{page}</p>
              </div>
            );
          })}

          <div
            onClick={() =>
              currentPage < totalPages && fetchStudents(currentPage + 1)
            }
            className={`flex items-center px-5 py-3.5 rounded-lg cursor-pointer
      ${currentPage === totalPages ? "opacity-40 cursor-not-allowed" : "hover:bg-[#E5EDFF]"}`}
          >
            <img
              className="h-5 w-5"
              src="/src/assets/admin/icons/arrow-right.svg"
              alt="next"
            />
          </div>
        </div>
      </div>
     <ViewStudentModal
        isOpen={viewOpen}
        onClose={() => setViewOpen(false)}
        student={selectedStudent}
      />
    </div>
  );
};

export default AdminStudents;
