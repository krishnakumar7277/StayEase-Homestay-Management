import { useEffect } from "react";

/**
 * Toast Component
 * Props:
 * - message
 * - show
 * - onClose
 */

const Toast = ({ message, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed top-5 right-5 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50">
      {message}
    </div>
  );
};

export default Toast;