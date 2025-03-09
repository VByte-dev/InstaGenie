import React from "react";

let Card = (props) => {
  let { data } = props;

  // Handle Copy
  let handleCopy = () => {
    navigator.clipboard.writeText(data);
  };

  return (
    <>
      <div className="sFont bg-zinc-300 p-0 rounded mb-5 flex items-center justify-between sm:p-3">
        <div
          id="icon"
          className="m-4 active:bg-black p-1 rounded bg-zinc-600 stroke-white active:stroke-white order-2 active:motion-preset-pop motion-duration-100"
          onClick={handleCopy}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="size-5 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
            />
          </svg>
        </div>

        <h2 className="m-4">{data}</h2>
      </div>
    </>
  );
};

export default Card;
