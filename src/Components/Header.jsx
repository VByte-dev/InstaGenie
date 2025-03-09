import React from "react";

let Header = () => {
  return (
    <>
      <div className="bg-purple-900 text-white pFont flex items-center justify-between mx-5 my-10 py-5 px-10 rounded-xl sm:mx-10 md:mx-20 lg:mx-30 xl:mx-40 2xl:mx-50">
        <h1 className="text-xl lg:text-2xl">InstaGenie</h1>
        <a
          href="https://linktr.ee/vbyte"
          target="_blank"
          className="border-2 px-3 py-0 rounded-full text-md lg:text-lg active:bg-black active:border-black active:motion-preset-pop motion-duration-100"
        >
          Connect
        </a>
      </div>
    </>
  );
};

export default Header;
