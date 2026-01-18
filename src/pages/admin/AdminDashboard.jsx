import React from "react";
import AdminLayout from "../../layouts/AdminLayout";
import { motion } from 'framer-motion';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
);

export default function Dashboard() {
  const getAttendanceColor = (value) => {
    if (value >= 90) return "#16A34A";
    if (value >= 80) return "#2563EB";
    if (value >= 70) return "#F97316";
    return "#DC2626";
  };

  const attendanceValues = [85, 90, 78, 88, 95, 40, 59, 88, 70, 66];

  const barData = {
    labels: ["10 A", "10 B", "9 A", "9 B", "8 A", "8 B", "Class 7", "Class 8", "Class 9", "Class 10",],
    datasets: [
      {
        label: "Attendance %",
        data: attendanceValues,
        backgroundColor: attendanceValues.map((val) => getAttendanceColor(val)),
    
      },
    ],
  };

  const doughnutData = {
    labels: ["Students", "Teachers", "Admins"],
    datasets: [
      {
        data: [270, 75, 5],
        backgroundColor: ["#2563EB", "#16A34A", "#DC2626"],
        borderWidth: 0,
      },
    ],
  };

  const summaryCards = [
    {
      title: "Total Students",
      value: 1200,
      color: "border-[#CC2323]",
      bg: "bg-[#FFE6E6]",
      text: "text-[#CC2323]",
    },
    {
      title: "Total Teachers",
      value: 75,
      color: "border-[#CCB623]",
      bg: "bg-[#FFF6E6]",
      text: "text-[#CCB623]",
    },
    {
      title: "Total Classes",
      value: 32,
      color: "border-[#39CC23]",
      bg: "bg-[#F0FFE6]",
      text: "text-[#39CC23]",
    },
    {
      title: "Attendance",
      value: "92%",
      color: "border-[#2334CC]",
      bg: "bg-[#E6EDFF]",
      text: "text-[#2334CC]",
    },
  ];

 
    return (
  <AdminLayout>
    <div className="p-6 space-y-6 mr-20">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {summaryCards.map((card, index) => (
          <div
            key={index}
            className={`border ${card.color} ${card.bg} rounded-lg p-6 shadow-sm`}
          >
            <p className={`text-[16px] font-medium ${card.text}`}>{card.title}</p>
            <h2 className={`text-3xl font-semibold mt-[45px] ${card.text}`}>
              {card.value}
            </h2>
          </div>
        ))}
      </div>

     
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <motion.div 
      
      initial={{ opacity: 0, y: 20 }} 
     
      animate={{ opacity: 1, y: 0 }} 
      
      transition={{ duration: 0.5, ease: "easeOut" }}
     
      whileHover={{ scale: 1.02 }}
      className="bg-white p-5 rounded-lg shadow-sm flex flex-col"
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-[16px] font-medium">
          Class-wise Attendance
        </h3>
        <hr className="text-[#C4C4C4]"/>
      </div>
      
      <div className="mt-4">
        <Bar data={barData} />
      </div>
    </motion.div>

       
        <div className="bg-white p-5 rounded-lg shadow-sm">
            <div className="flex flex-col gap-2">
          <h3 className="text-[16px] font-medium">
            User Distribution
          </h3>
          <hr className="text-[#C4C4C4]"/>
          </div>
          <div className="w-64 mx-auto">
            <Doughnut data={doughnutData} />
          </div>
        </div>
      </div>
    </div>
  </AdminLayout>
);

  
}
