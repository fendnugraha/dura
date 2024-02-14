import { Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export default function SideBarRight({ showSidebar, setShowSidebar }) {
  useEffect(() => {
    document.body.style.overflow = showSidebar ? "hidden" : "auto";
  }, [showSidebar]);
  return (
    <>
      <Transition show={showSidebar} enter="transition ease-in-out duration-300 transform" enterFrom="translate-x-full" enterTo="translate-x-0" leave="transition ease-in-out duration-300 transform" leaveFrom="translate-x-0" leaveTo="translate-x-full" className="fixed top-0 right-0 h-screen w-1/3 bg-white z-50">
        <div className="container mx-auto h-full flex flex-col justify-between">
          <button
            type="button"
            className="absolute group top-0 -right-10 p-2 bg-gray-200 hover:bg-slate-500 hover:text-white transition duration-300"
            onClick={() => {
              setShowSidebar(false);
            }}>
            <XMarkIcon className="h-6 w-6 hover:rotate-180 transition-transform duration-500" />
          </button>

          <div>
            <div className="mt-10 flex-col">
              <Nav />
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
}
