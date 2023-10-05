import React from "react";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../data/navbar-links";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProfileDropDown from "../core/auth/ProfileDropDown";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);

  return (
    <div className="h-14 flex justify-center items-center border-b-[1px] border-b-richblack-700">
      <div className="w-11/12 mx-auto max-w-maxContent flex justify-between items-center">
        <div>
          <img src={logo} alt="" width={160} height={42} loading="lazy" />
        </div>

        <div>
          <ul className="flex gap-x-4 text-richblack-25">
            {NavbarLinks.map((navItem, index) => (
              <li key={index}>
                {navItem.title === "Catalog" ? (
                  <div></div>
                ) : (
                  <Link to={navItem.path}> {navItem.title} </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-x-4">
          {user && user?.accountType !== "Instructor" && (
            <Link>
              <AiOutlineShoppingCart />
              {totalItems > 0 && <span>{totalItems}</span>}
            </Link>
          )}

          {token === null && (
            <Link to={"/Login"}>
              <button
                className="text-richblack-100 border border-richblack-700
                                bg-richblack-800 px-[12px] py-[8px] rounded-md
                                "
              >
                Log in
              </button>
            </Link>
          )}

          {token === null && (
            <Link to="/signup">
              <button
                className="text-richblack-100 border border-richblack-700
                                bg-richblack-800 px-[12px] py-[8px] rounded-md
                                "
              >
                Sign Up
              </button>
            </Link>
          )}

          {token !== null && <ProfileDropDown />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
