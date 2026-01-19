import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LogoutModal from "../../components/admin/LogutModal";

/* ===== ICON IMPORTS ===== */
import dashboardActive from "../../assets/admin/icons/dashboard-active.svg";
import dashboardInactive from "../../assets/admin/icons/dashboard-inactive.svg";

import attendanceActive from "../../assets/admin/icons/attendance-active.svg";
import attendanceInactive from "../../assets/admin/icons/attendance-inactive.svg";

import classManagementActive from "../../assets/admin/icons/class-management-active.svg";
import classManagementInactive from "../../assets/admin/icons/class-management-inactive.svg";

import logoutActive from "../../assets/admin/icons/logout-active.svg";
import logoutInactive from "../../assets/admin/icons/logout-inactive.svg";

import reportsActive from "../../assets/admin/icons/reports-active.svg";
import reportsInactive from "../../assets/admin/icons/reports-inactive.svg";

import resultActive from "../../assets/admin/icons/result-active.svg";
import resultInactive from "../../assets/admin/icons/result-inactive.svg";

import subjectManagementActive from "../../assets/admin/icons/subject-management-active.svg";
import subjectManagementInactive from "../../assets/admin/icons/subject-management-inactive.svg";

import teacherManagementActive from "../../assets/admin/icons/teacher-management-active.svg";
import teacherManagementInactive from "../../assets/admin/icons/teacher-management-inactive.svg";

import studentManagementActive from "../../assets/admin/icons/student-management-active.svg";
import studentManagementInactive from "../../assets/admin/icons/student-management-inactive.svg";

/* ===== NAV ITEMS (NO LOGOUT HERE) ===== */
const navItems = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    activeIcon: dashboardActive,
    inactiveIcon: dashboardInactive,
  },
  {
    name: "Student Management",
    path: "/admin/student-management",
    activeIcon: studentManagementActive,
    inactiveIcon: studentManagementInactive,
  },
  {
    name: "Teachers Management",
    path: "/admin/teachers-management",
    activeIcon: teacherManagementActive,
    inactiveIcon: teacherManagementInactive,
  },
  {
    name: "Class Management",
    path: "/admin/class-management",
    activeIcon: classManagementActive,
    inactiveIcon: classManagementInactive,
  },
  {
    name: "Subject Management",
    path: "/admin/subject-management",
    activeIcon: subjectManagementActive,
    inactiveIcon: subjectManagementInactive,
  },
  {
    name: "Attendance Overview",
    path: "/admin/attendance",
    activeIcon: attendanceActive,
    inactiveIcon: attendanceInactive,
  },
  {
    name: "Result / Performance",
    path: "/admin/result",
    activeIcon: resultActive,
    inactiveIcon: resultInactive,
  },
  {
    name: "Reports",
    path: "/admin/reports",
    activeIcon: reportsActive,
    inactiveIcon: reportsInactive,
  },
];

export default function Sidebar() {
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <>
      <aside className="w-80 bg-white min-h-screen pl-15 pt-10 pr-6">
        <h1 className="text-[24px] font-semibold">Admin Panel</h1>

        <nav className="mt-20 flex flex-col gap-4">
          {/* ===== NORMAL NAV ITEMS ===== */}
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `group flex items-center gap-2 px-2 py-2 rounded-lg cursor-pointer transition ${
                  isActive
                    ? "bg-[#D6DBEF] text-[#212A4B]"
                    : "text-[#B1B3BE] hover:bg-[#D6DBEF] hover:text-[#212A4B]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <img
                    src={isActive ? item.activeIcon : item.inactiveIcon}
                    alt={item.name}
                    className="w-6 h-6 group-hover:hidden"
                  />

                  <img
                    src={item.activeIcon}
                    alt={item.name}
                    className={`w-6 h-6 hidden ${
                      isActive ? "block" : "group-hover:block"
                    }`}
                  />

                  <span className="text-[16px] font-semibold">
                    {item.name}
                  </span>
                </>
              )}
            </NavLink>
          ))}

          {/* ===== LOGOUT ITEM ===== */}
          <div
            onClick={() => setShowLogout(true)}
            className="group flex items-center gap-2 px-2 py-2 rounded-lg cursor-pointer transition text-[#FC8181] hover:bg-red-50 hover:text-[#FF0000]"
          >
            <img
              src={logoutInactive}
              alt="Logout"
              className="w-6 h-6 group-hover:hidden"
            />

            <img
              src={logoutActive}
              alt="Logout"
              className="w-6 h-6 hidden group-hover:block"
            />

            <span className="text-[16px] font-semibold">Logout</span>
          </div>
        </nav>
      </aside>

      {/* ===== LOGOUT MODAL ===== */}
      <LogoutModal
        open={showLogout}
        onClose={() => setShowLogout(false)}
        onLogout={handleLogout}
      />
    </>
  );
}
