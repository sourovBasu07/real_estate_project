import React from "react";

const GetStarted = () => {
  return (
    <section className="">
      <div className="paddings innerWidth">
        <div className="flexColCenter bg-[#4161df] gap-6 p-8 rounded-[10px] border-[6px] border-solid border-[#5d77d6] text-center">
          <span className="primaryText text-white">Get started with Homyz</span>
          <span className="secondaryText text-white">
            Subscribe and find super attractive price quotes from us.
            <br />
            Find your residence soon
          </span>
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Email"
              className="w-[300px] h-[43px] border-none outline-none text-[12px] text-black px-6 py-4 placeholder:"
            />
            <button className="button">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
