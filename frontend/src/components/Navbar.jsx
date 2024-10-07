import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const navigate = useNavigate();

  const { showSearch, setShowSearch, getCartCount } = useContext(ShopContext);
  const handleClick = () => {
    navigate("/");
  };

  const handleRegisterClick = () => {
    navigate("/login");
  };
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img
        onClick={handleClick}
        src={assets.logo}
        className="w-36 cursor-pointer"
        alt=""
      />
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
        </NavLink>
      </ul>
      <div className="flex justify-center items-center gap-6">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          alt=""
          className="w-5 cursor-pointer"
        />
        <div className="group relative">
          <img
            src={assets.profile_icon}
            alt=""
            className="w-5 cursor-pointer"
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500">
              {/* <p className="cursor-pointer hover:text-black">My Profile</p> */}
              <p
                onClick={handleRegisterClick}
                className="cursor-pointer hover:text-black"
              >
                login
              </p>
              {/* <p className="cursor-pointer hover:text-black">logout</p>
              <p className="cursor-pointer hover:text-black">Order</p> */}
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="w-5 min-w-5 " />
          <p className="absolute right-[-5px] buttom-[-5px] 2-4 text-center leading-4">
            {getCartCount()}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
