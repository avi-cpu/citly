import React from "react";

const PageLoader = () => {
  return (
    <div className="flex flex-row items-center justify-center w-screen h-screen">
      <img src={window.loader} />
    </div>
  );
};

export default PageLoader;
