// components/LocationModal.js
import ReactDOM from "react-dom";

export default function EmptyModal({ isOpen, requestClose }) {

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed flex flex-col justify-end inset-0 w-full h-screen bg-black bg-opacity-80">

    </div>,
    typeof window !== "undefined" ? document.getElementById("rentModal") : null
  );
}
