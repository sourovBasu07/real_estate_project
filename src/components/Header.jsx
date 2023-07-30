import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  return (
    <section className="bg-black text-white">
      <div className="flexCenter paddings innerWidth justify-between py-4 text-secondary">
        <img src={Logo} alt="Logo" className="w-[100px]" />
        <div className="hidden max-[768px]:block">
          <BiMenuAltRight
            onClick={() => setIsMenuOpened((prev) => !prev)}
            size={30}
          />
        </div>
        <div className="hidden gap-x-8 child-hover:text-white child-hover:cursor-pointer md:flexCenter">
          <a href="" className="">
            Residencies
          </a>
          <a href="" className="">
            Our Value
          </a>
          <a href="" className="">
            Contact Us
          </a>
          <a href="" className="">
            Get Started
          </a>
          <button className="button">
            <a href="" className="">
              Contact
            </a>
          </button>
        </div>
        <div
          className={`absolute top-[4rem] flex-col items-start gap-x-8 bg-white text-black font-[500] gap-8 rounded-[10px] shadow-md p-12 transition-all duration-300 ease-in-out z-50 child-hover:text-white child-hover:cursor-pointer flex md:hidden ${
            isMenuOpened ? "right-[10%]" : "-right-[50%]"
          }`}
        >
          <a href="" className="">
            Residencies
          </a>
          <a href="" className="">
            Our Value
          </a>
          <a href="" className="">
            Contact Us
          </a>
          <a href="" className="">
            Get Started
          </a>
          <button className="button">
            <a href="" className="">
              Contact
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
