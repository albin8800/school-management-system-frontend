import React from "react";
export default function Topbar() {
  return (
    <header className="h-30 bg-white flex items-center px-6">
      <div className="gap-2">
        <h1 className="text-[24px] font-semibold">Hello Admin</h1>
        <p className="text-[14px] text-[#545454]">See whats happening in your Institute</p>
      </div>
    </header>
  );
}

