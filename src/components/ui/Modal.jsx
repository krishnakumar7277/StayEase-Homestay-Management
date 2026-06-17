import { useEffect } from "react";

/**
 * Modal Component
 * Props:
 * - isOpen
 * - onClose
 * - title
 * - children
 */

const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-6 w-[90%] max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>

          <button
            onClick={onClose}
            className="text-red-500 text-xl"
          >
            ×
          </button>
        </div>

        {children}
      </div>
    </div>
  );
};

export default Modal;