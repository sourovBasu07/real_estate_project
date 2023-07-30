import React from "react";
import HeroImage from "../assets/hero-image.png";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative bg-black text-white pb-8">
      <div className="paddings innerWidth flex max-[768px]:flex-col md:justify-between mt-8 sm:mt-0 gap-16">
        <div className=" flexColStart flex-1 gap-12">
          <div className="relative z-[100]">
            <div className="absolute right-[28%] -top-[10%] w-[4rem] h-[4rem] rounded-full orangeGradient -z-[10]" />
            <motion.h1
              className="font-[600] text-[2.5rem] sm:text-[3.8rem] leading-[3rem] sm:leading-[4rem] z-50"
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 3, type: "spring" }}
            >
              Discover <br />
              Most Suitable <br /> Property
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText">
            <span className="">
              Find a variety of properties that suit you very easily
            </span>
            <span className="">
              Forget all difficulties in finding residences for you
            </span>
          </div>
          <div className="w-full flex justify-between items-center bg-white border-[3px] border-solid border-[rgba(120,120,120,0.374)] rounded-[5px] px-4 py-2">
            <HiLocationMarker color="blue" size={25} />
            <input
              type="text"
              className="border-none outline-none text-black"
            />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter w-full justify-center sm:justify-between gap-6 sm:gap-0 [&>*>*:nth-child(1)]:text-[2rem] [&>*>*>*:last-child]:text-orange-500">
            <div className="flexColStart">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColStart">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColStart">
              <span>
                <CountUp end={28} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winnings</span>
            </div>
          </div>
        </div>
        <div className="flex flex-1">
          <motion.div
            className="w-[25rem] h-auto mx-auto border-8 border-solid border-[rgba(255,255,255,0.12)] rounded-t-[15rem] overflow-hidden"
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 3, type: "spring" }}
          >
            <img src={HeroImage} alt="heroImage" className="w-full h-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
