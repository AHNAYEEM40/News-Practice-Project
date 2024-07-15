import { NavLink } from "react-router-dom";

const Navbar = () => {
  const Navlink = (
    <>
      <li><NavLink to='/'>Home</NavLink> </li>
      <li><NavLink to='/about'>About</NavLink> </li>
      <li><NavLink to='/career'>Career</NavLink> </li>
      <li><NavLink to='/login'>Login</NavLink> </li>
      <li><NavLink to='/register'>Register</NavLink> </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {Navlink}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Navlink}</ul>
      </div>

      <div className="navbar-end">
        <button className="btn">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-8 mr-4 rounded-full ring ring-offset-2">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;