import { useState } from "react";

export default function ToastNotification() {
  const [showToast, setShowToast] = useState(false);

  const handleShowToast = () => {
    setShowToast(true);
    // Toast hilang setelah 3 detik
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4
    bg-gray-50">
      <button
        onClick={handleShowToast}
        className="px-5 py-2.5 bg-blue-500 text-white font-medium rounded-lg
        shadow-md hover:bg-blue-600 transition duration-300"
      >
        Show Toast
      </button>

      {showToast && (
        <div className="fixed top-5 right-5 z-50 bg-white border border-gray-200
        shadow-xl rounded-xl p-4 w-80 animate-soft-fade-in">
          <h4 className="font-semibold text-gray-900 text-lg">Notification</h4>
          <p className="text-sm text-gray-600 mt-2">This is a friendly toast
            message with soft animation.</p>
        </div>
      )}

      <style jsx>{`
        @keyframes soft-fade-in {
          0% {
            opacity: 0;
            transform: translateY(-16px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-soft-fade-in {
          animation: soft-fade-in 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
