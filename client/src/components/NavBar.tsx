import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="bg-[#F5F3F1] w-screen flex items-center justify-between px-5 py-3">
      <a href="https://www.instagram.com/stuckonblessings/" target="_blank">
        <FaInstagram className="text-4xl" />
      </a>
      <Link to="/values" className="text-4xl font-bebas">
        Values
      </Link>
      <Link to="/" className="text-4xl font-bebas">
        STICKERS
      </Link>
      <Link to="/cart" className="text-[#FBD070] text-4xl font-bebas">
        CART
      </Link>
    </div>
  );
}
