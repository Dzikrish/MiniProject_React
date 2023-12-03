import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const handleLogout = () => {
    localStorage.clear();
  };
  return (
    <>
      <nav className="py-5 px-8 bg-indigo-950 text-white">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <Link to={`/`}>
              <button className="text-2xl">Dashboard</button>
            </Link>
            <div className="border bg-red-600 py-2 px-5 rounded-xl text-black hover:bg-white">
              <Link to={`/Login`}>
                <button onClick={handleLogout}>Logout</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
