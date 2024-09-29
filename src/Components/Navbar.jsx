import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <div className="bg-gray-600 flex justify-between ">
      <div className="p-3">
        <Link to="/">
          <h1 className="text-3xl text-white pl-3 hover">QuoteZZ</h1>
        </Link>
      </div>
      <div className="text-white ">
        <ul className="p-3 flex justify-items-end">
          <li className=" p-3 gap-4 bg-slate-500 rounded-lg">
            <Link to="/random" onClick={handleRefresh}>
              Random Quotes
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
