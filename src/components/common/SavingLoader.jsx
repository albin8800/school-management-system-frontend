import React, { useEffect, useState } from "react";

const SavingLoader = ({ show, text = "Saving...", duration = 1500 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer;

    if (show) {
      setVisible(true);
      timer = setTimeout(() => {
        setVisible(false);
      }, duration);
    }

    return () => clearTimeout(timer);
  }, [show, duration]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white px-8 py-6 rounded-xl shadow-lg flex flex-col items-center gap-4">
        
        {/* Round Loader */}
        <div className="w-10 h-10 border-4 border-gray-200 border-t-[#212A4B] rounded-full animate-spin"></div>

        {/* Text */}
        <p className="text-[14px] font-medium text-[#212A4B]">
          {text}
        </p>

      </div>
    </div>
  );
};

export default SavingLoader;
