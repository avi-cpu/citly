import React from "react";
import NavBar from "components/NavBar";

import PropTypes from "prop-types";
const Container = ({ children }) => {
  return (
    <div className="bg-bb-sky">
      <NavBar />
      <div className="px-4 py-2 mx-auto max-w-7xl sm:px-6  bg-bb-sky lg:px-8 h-full">
        <div className="max-w-3xl mt-2 p-2 mx-auto bg-bb-sky">{children}</div>
      </div>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
