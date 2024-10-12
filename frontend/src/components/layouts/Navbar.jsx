import { useState } from "react";
import { Link } from "react-router-dom";
import menuImg from "../../assets/menu.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="h-[100px] flex justify-between items-center relative">
      <div className="flex flex-1 items-center gap-12">
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <span>PropertyEase</span>
        </Link>
        <ul className="hidden sm:flex gap-8">
          <li>
            <Link to="/" className="hover:scale-105 transition-transform">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:scale-105 transition-transform">
              About
            </Link>
          </li>
          <li>
            <Link to="/agents" className="hover:scale-105 transition-transform">
              Agents
            </Link>
          </li>
          <li>
            <Link
              to="/properties"
              className="hover:scale-105 transition-transform"
            >
              Properties
            </Link>
          </li>
          <li>
            <Link
              to="/Mortgagecal"
              className="hover:scale-105 transition-transform"
            >
              Mortgage Cal
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:scale-105 transition-transform"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-1 justify-end items-center bg-[#fcf5f3] md:bg-transparent h-full">
        <ul className="hidden sm:flex gap-8">
          <li>
            <Link to="/login" className="hover:scale-105 transition-transform">
              Sign in
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="bg-[#fece51] px-6 py-3 rounded-md hover:scale-105 transition-transform"
            >
              Sign up
            </Link>
          </li>
        </ul>
        <div className="sm:hidden flex">
          <img
            src={menuImg}
            alt="Menu Icon"
            className="w-9 h-9 cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        {/* Mobile Menu */}
        <div
          className={`sm:hidden fixed inset-0 w-full h-full bg-black text-white flex flex-col items-center justify-center space-y-4 font-semibold transform ${
            open ? "translate-x-0" : "translate-x-full"
          } transition-transform`}
        >
          <ul>
            <li>
              <Link to="/" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/agents" onClick={() => setOpen(false)}>
                Agents
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={() => setOpen(false)}>
                Sign in
              </Link>
            </li>
            <li>
              <Link to="/register" onClick={() => setOpen(false)}>
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
