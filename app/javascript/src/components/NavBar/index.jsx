import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
        <div className="flex justify-between h-16 item-center">
          <div className="flex px-2 lg:px-0 my-auto">
            <div className="lg:flex text-2xl font-bold font-sans leading-5 text-black">
              Citly
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
