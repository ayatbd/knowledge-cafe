import React from "react";
import img1 from "../../assets/images/Ellipse 1.png";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center mt-9 mb-7">
        <div>
          <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
        </div>
        <div>
          <img src={img1} />
        </div>
      </div>
        <hr className="mb-6" />
    </>
  );
};

export default Header;
