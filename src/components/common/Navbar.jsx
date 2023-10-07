import React, { useEffect, useState } from "react";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../data/navbar-links";
import { Link, matchPath, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProfileDropDown from "../core/auth/ProfileDropDown";
import { MdKeyboardArrowDown } from "react-icons/md";
import { apiConnector } from "../../services/apiconnector";
import { categories } from "../../services/apis";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const [subLinks, setSublinks] = useState([]);

  const location = useLocation();

  const fetchSublinks = async () => {
    try {
      const result = await apiConnector("GET", categories.CATEGORIES_API);

      setSublinks(result.data.data);
    } catch (error) {
      console.log("Could not fetch cateory ");
    }
  };

  useEffect(() => {
    fetchSublinks();
  }, []);

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

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
                  <div className="group relative flex cursor-pointer items-center gap-1 text-richblack-25">
                    <p> {navItem.title} </p>
                    <MdKeyboardArrowDown />
                    <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                      <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                      {subLinks.length ? (
                        subLinks.map((sublink, index) => (
                          <Link
                            key={index}
                            className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                            to={`/category/${sublink.name}`}
                          >
                            <p> {sublink.name} </p>
                          </Link>
                        ))
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link to={navItem.path}>
                    {" "}
                    <p
                      className={`${
                        matchRoute(navItem?.path)
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      {navItem.title}
                    </p>{" "}
                  </Link>
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
