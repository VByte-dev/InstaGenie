import React from "react";
import { NavLink } from "react-router-dom";

let Nav = () => {
  return (
    <>
      <div className="flex justify-around">
        <NavLink
          to="/captions"
          className={({ isActive }) => {
            return `${
              isActive ? "bgColor text-white" : "bg-zinc-200 text-black"
            } active:bg-black active:text-white px-6 py-2 rounded pFont`;
          }}
        >
          Captions
        </NavLink>

        <NavLink
          to="/hashtags"
          className={({ isActive }) =>
            `${
              isActive ? "bgColor text-white" : "bg-zinc-200 text-black"
            } active:bg-black active:text-white  px-6 py-2 rounded pFont`
          }
        >
          Hashtags
        </NavLink>
      </div>
    </>
  );
};

export default Nav;
