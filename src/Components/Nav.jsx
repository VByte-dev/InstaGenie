import React from "react";
import { NavLink } from "react-router-dom";

let Nav = () => {
  return (
    <>
      <div className="flex justify-around">
        <NavLink
          to="/"
          className={({ isActive }) => {
            return `${
              isActive ? "bg-purple-900 text-white" : "bg-zinc-200 text-black"
            } active:bg-black active:text-white px-6 py-2 rounded pFont active:motion-preset-pop motion-duration-100`;
          }}
        >
          Captions
        </NavLink>

        <NavLink
          to="/hashtags"
          className={({ isActive }) =>
            `${
              isActive ? "bg-purple-900 text-white" : "bg-zinc-200 text-black"
            } active:bg-black active:text-white  px-6 py-2 rounded pFont active:motion-preset-pop motion-duration-100`
          }
        >
          Hashtags
        </NavLink>
      </div>
    </>
  );
};

export default Nav;
