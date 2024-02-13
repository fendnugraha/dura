/* eslint-disable react/prop-types */
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { Link, animateScroll as scroll } from "react-scroll";
export default function Nav({ className }) {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <ul className={`flex gap-4 ${className}`}>
        <li>
          <Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500} className="hover:text-slate-900 cursor-pointer">
            Home
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="shop" spy={true} smooth={true} offset={0} duration={500} className="hover:text-slate-900 cursor-pointer">
            Shop
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500} className="hover:text-slate-900 cursor-pointer">
            About
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={500} className="hover:text-slate-900 cursor-pointer">
            Contact
          </Link>
        </li>
      </ul>

      {/* <button type="button" onClick={scrollToTop} className="absolute bottom-0 right-0 p-4 bg-slate-200 hover:bg-slate-300 transition duration-300 z-[99]">
        <ArrowUpIcon className="h-6 w-6 hover:text-slate-900 cursor-pointer" />
      </button> */}
    </>
  );
}
