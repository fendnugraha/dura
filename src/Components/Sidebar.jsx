/* eslint-disable react/prop-types */
import { XMarkIcon } from "@heroicons/react/24/outline";
import duraLogo from "../assets/dura-logo.svg";
import Nav from "./Nav";
export default function Sidebar({ setShowHamburger }) {
  return (
    <>
      <div className="sidebar pt-16 relative top-0 left-0 w-64 h-screen bg-white z-10 px-6 transition duration-500 ease-out">
        <button
          type="button"
          className="absolute group top-0 -right-10 p-2 bg-gray-200 hover:bg-slate-500 hover:text-white transition duration-300"
          onClick={() => {
            setShowHamburger(false);
          }}>
          <XMarkIcon className="h-6 w-6 hover:rotate-180 transition-transform duration-500" />
        </button>
        <img src={duraLogo} alt="logo" width={150} className="mx-auto top-5 hover:scale-105 transition-transform duration-300" />
        <div>
          <Nav className={"mt-10 flex-col"} />
        </div>
      </div>
    </>
  );
}
