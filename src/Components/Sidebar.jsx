/* eslint-disable react/prop-types */
import { XMarkIcon } from "@heroicons/react/24/outline";
export default function Sidebar({ setShowHamburger }) {
  return (
    <>
      <div className="sidebar pt-16 absolute top-0 left-0 w-64 h-screen bg-slate-200 z-10">
        <button
          type="button"
          className="absolute top-0 right-0 p-4"
          onClick={() => {
            setShowHamburger(false);
          }}>
          <XMarkIcon className="h-6 w-6" />
        </button>
        <h1>Sidebar</h1>
      </div>
    </>
  );
}
