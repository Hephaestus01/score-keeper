import React from "react";

export default function Modal({ children, isOpen, closeModal }) {
  if (!isOpen) return null;

  return (
    <div className="modal" id="modal">
      <div className="bg-white text-black p-4 rounded-xl w-4/5 min-h-min h-2/5">
        <div className="relative w-100 bg-sky-200">
          <button
            className="absolute right-2 w-3 pb-2 text-2xl"
            onClick={closeModal}
          >
            x
          </button>
        </div>
        <div className="flex flex-col pt-6">{children}</div>
      </div>
    </div>
  );
}
