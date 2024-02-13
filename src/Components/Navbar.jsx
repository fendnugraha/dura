import duraLogo from "../assets/dura-hr.svg";
import { HeartIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
export default function Navbar() {
  const [showHamburger, setShowHamburger] = useState(false);
  const toggleHamburger = () => {
    setShowHamburger(!showHamburger);
    console.log(showHamburger);
  };

  useEffect(() => {
    const line1 = document.getElementById("line1");
    const line2 = document.getElementById("line2");
    const line3 = document.getElementById("line3");

    line1.style.transform = showHamburger ? "rotate(45deg)" : "rotate(0)";
    line1.style.transformOrigin = showHamburger ? "top left" : "center";
    line1.style.transition = showHamburger ? "transform 0.2s ease-in-out" : "none";
    line2.style.opacity = showHamburger ? "0" : "1";
    line2.style.transition = showHamburger ? "transform 0.2s ease-in-out" : "none";

    line3.style.transform = showHamburger ? "rotate(-45deg)" : "rotate(0)";
    line3.style.transformOrigin = showHamburger ? "bottom left" : "center";
    line3.style.transition = showHamburger ? "transform 0.2s ease-in-out" : "none";
  }, [showHamburger]);

  return (
    <header className="group navbar w-full bg-transparent text-slate-700 font-normal fixed top-0 hover:shadow-md transition duration-500 z-50 p-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center relative">
          <div className="flex gap-4 items-center md:hidden">
            <button type="button" className="" id="hamburger" onClick={() => toggleHamburger()}>
              <span className="hamburger-line" id="line1"></span>
              <span className="hamburger-line" id="line2"></span>
              <span className="hamburger-line" id="line3"></span>
            </button>
            <div className="">
              <img src={duraLogo} alt="logo" className="" width={120} />
            </div>
          </div>
          <div className="hidden md:block">
            <img src={duraLogo} alt="logo" className="" width={120} />
          </div>
          <div className="flex gap-4">
            <HeartIcon className="w-6" />
            <ShoppingCartIcon className="w-6" />
            <UserIcon className="w-6" />
          </div>
        </div>
      </div>
      <div className={`transition-all duration-500 absolute top-0 ${showHamburger ? "left-0 opacity-100" : "-left-full opacity-0"}`}>{showHamburger && <Sidebar setShowHamburger={setShowHamburger} />}</div>
    </header>
  );
}
