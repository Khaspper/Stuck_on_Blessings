import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="bg-[#F5F3F1] w-screen flex items-center justify-between px-5 py-3 sm:px-10 sm:py-8">
      <a
        href="https://www.instagram.com/stuckonblessings/"
        target="_blank"
        className="sm:hidden"
      >
        <FaInstagram className="text-4xl" />
      </a>
      <a
        href="https://www.instagram.com/stuckonblessings/"
        target="_blank"
        className="hidden sm:block text-4xl font-bebas sm:text-4xl"
      >
        Instagram
      </a>
      <Link to="/values" className="text-4xl font-bebas sm:px-10 sm:text-4xl">
        Values
      </Link>
      <Link to="/" className="text-4xl font-bebas sm:mr-auto sm:text-4xl">
        STICKERS
      </Link>
      <Link
        to="/cart"
        className="text-[#FBD070] text-4xl font-bebas sm:text-4xl"
      >
        CART
      </Link>
    </div>
  );
}
