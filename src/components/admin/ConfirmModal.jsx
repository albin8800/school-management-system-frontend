import React from "react";

export default function ConfirmModal({
  open,
  title = "Logout",
  message = "Are you sure you want to logout?",
  confirmText = "Logout",
  onClose,
  onConfirm,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl w-98">
        <div className="flex gap-4 items-center">
          <div className="flex items-center justify-center rounded-full bg-[#FEE9E9] p-3">
            <img
              className="h-6 w-6"
              src="/src/assets/admin/icons/error.svg"
              alt=""
            />
          </div>
          <h2 className="text-[20px] font-medium text-[#E92D2D]">
            {title}
          </h2>
        </div>

        <div className="mt-4 gap-0.5">
          <p className="text-[16px] text-[#1E1E1E]">
            {message}
          </p>
          <p className="text-[16px] text-[#1E1E1E]">
            This action cannot be undone.
          </p>
        </div>

        <div className="flex gap-4 mt-6">
          <button
            onClick={onConfirm}
            className="px-15 py-3.5 bg-[#E92D2D] text-white text-[14px] font-medium rounded-lg hover:bg-[#ce2d2d] cursor-pointer"
          >
            {confirmText}
          </button>

          <button
            onClick={onClose}
            className="px-15 py-3.5 bg-transparent text-[#7D7D7D] border border-[#7D7D7D] text-[14px] font-medium rounded-lg hover:bg-[#f0efef] cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
