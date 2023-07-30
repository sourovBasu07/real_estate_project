import React from "react";
import logo2 from "../assets/logo2.png";

const Footer = () => {
  return (
    <section className="">
      <div className="paddings innerWidth flexCenter justify-between">
        <div className="flexColStart gap-4">
          <img src={logo2} alt="" className="" />
          <span className="secondaryText">
            Our vision is to make all people <br /> the best place to live for
            them.
          </span>
        </div>
        <div className="flexColStart">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 New York, FL 5467, USA</span>
          <div className="flexCenter gap-4 mt-4 child:cursor-pointer child-hover:text-blue">
            <span>Property</span>
            <span>Services</span>
            <span>Products</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
