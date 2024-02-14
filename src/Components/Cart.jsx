/* eslint-disable react/prop-types */
import { Transition } from "@headlessui/react";
import { ShoppingBagIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Cart({ showCart = false, closeable = true, onClose = () => {} }) {
  const close = () => {
    if (closeable) {
      onClose();
    }
  };
  return (
    <>
      <Transition show={showCart} enter="transition ease-in-out duration-300 transform" enterFrom="translate-x-full" enterTo="translate-x-0" leave="transition ease-in-out duration-300 transform" leaveFrom="translate-x-0" leaveTo="translate-x-full" onClose={close} className="fixed top-0 right-0 h-screen w-full md:w-1/3 bg-white z-50">
        <button type="button" className="absolute group top-3 right-3 p-2 bg-gray-200 hover:bg-slate-500 hover:text-white transition duration-300">
          <XMarkIcon className="h-6 w-6 group-hover:rotate-180 group transition-transform duration-500" onClick={close} />
        </button>
        <div className="container mx-auto h-full py-16 px-4">
          <h1 className="text-5xl">
            <ShoppingBagIcon className="w-12 h-12 inline" /> Cart
          </h1>
          <p className="text-sm text-slate-400">
            <ShoppingBagIcon className="w-12 h-12" />
            Cart is empty
          </p>
        </div>
      </Transition>
    </>
  );
}
