import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  //  website navbar copy for daisyui ---
  return (
    <nav>
      <div className="navbar w-[90%] mx-auto rounded ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn rounded btn-ghost ro lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact rounded dropdown-content mt-3 p-2 shadow w-52"
            >
              <li>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li tabIndex={0}>
                <NavLink to='/appliedjobs' className="justify-between">Applied Jobs</NavLink>
              </li>
              <li>
                <NavLink to='/statistics'>Statistics</NavLink>
              </li>
              <li>
              <NavLink to='/blog'>Blog</NavLink>
            </li>
            </ul>
          </div>

          <Link to="/" className="btn glass rounded btn-ghost normal-case text-2xl bg-gradient-to-r from-violet-200 to-pink-200 text-black">Jobs Fair</Link>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
            <NavLink to='/'>Home</NavLink>
            </li>
            <li tabIndex={0}>
              <NavLink to='/appliedjobs'>Applied Jobs</NavLink>
            </li>
            <li>
            <NavLink to='/statistics' >Statistics</NavLink>
            </li>
            <li>
              <NavLink to='/blog'>Blog</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn rounded bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-amber-400 border-none">Get started</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
