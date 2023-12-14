import React from "react";

import logo from "../utils/images/logo.svg";
import search from "../utils/images/search.svg";

function Navbar() {
  return (
    <div className="flex justify-between p-8 relative w-screen top-0 h-1/5">
      <img src={logo} alt="logo not found" />
      <div className="w-72 h-14 flex items-center rounded-2xl bg-white shadow-md divide-x">
        <input className="w-6/12 px-5 py-2.5 text-sm" />
        <input
          className="h-full text-center w-4/12 text-sm"
          placeholder="Add guests"
        />
        <button className="w-2/12 px-2.5 py-5">
          <img width={20} height={20} src={search} alt="search icon" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
