import React from "react";
import PropTypes from "prop-types";

const Button = ({ type = "button", buttonText, onClick, loading }) => {
  return (
    <div className="mt-6">
      <button
        type={type}
        onClick={onClick}
        className="relative flex justify-center text-m text-bold w-full px-3 py-2
         sm:leading-5 text-white transition duration-150
         ease-in-out bg-bb-blueviolet bg-opacity-80 hover:bg-bb-blueviolet-200 border border-transparent rounded rounded-l-none
         group cursor-pointer focus:outline-none my-1"
      >
        {loading ? "Loading..." : buttonText}
      </button>
    </div>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  buttonText: PropTypes.string,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};
export default Button;

//text-m font-medium    hover:bg-opacity-20
