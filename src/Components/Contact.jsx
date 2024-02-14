import { PhoneIcon, MapPinIcon, EnvelopeIcon, ClockIcon } from "@heroicons/react/24/solid";
import duraLogo from "../assets/dura-logo.svg";
export default function Contact() {
  return (
    <>
      <section className="flex justify-center items-center h-screen bg-white flex-col" id="contact">
        <h1 className="text-5xl">Contact Us</h1>
        <p className="text-sm">This is Contact Us Page</p>
        <div className="container mx-auto grid-cols-2 grid gap-4">
          <div>
            <form className="w-full max-w-lg">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    First Name
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                  <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                    Last Name
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                    Email
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3
                  leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                    Message
                  </label>
                  <textarea
                    className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3
                  leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                    id="message"
                    type="text"
                    placeholder="Message"></textarea>
                </div>
              </div>
              <div className="md:flex md:items-center">
                <div className="md:w-1/3">
                  <button className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded" type="button">
                    Submit Now
                  </button>
                </div>
                <div className="md:w-2/3"></div>
              </div>
            </form>
          </div>
          <div>
            <img src={duraLogo} alt="logo" width={150} className="mx-auto hover:scale-105 transition-transform duration-300 m-5" />
            <div className="flex flex-col gap-4 mb-4">
              <div className="flex gap-2">
                <PhoneIcon className="h-6 w-6" />
                <p>+91 9999999999</p>
              </div>
              <div className="flex gap-2">
                <MapPinIcon className="h-6 w-6" />
                <p>Bandung, Indonesia</p>
              </div>
              <div className="flex gap-2">
                <EnvelopeIcon className="h-6 w-6" />
                <p>support@duraapparel.com</p>
              </div>
              <div className="flex gap-2">
                <ClockIcon className="h-6 w-6" />
                <p>10.00 AM - 10.00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
