/* eslint-disable react/prop-types */
import { Link } from "react-scroll";
export default function Nav({ className }) {
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
    </>
  );
}
