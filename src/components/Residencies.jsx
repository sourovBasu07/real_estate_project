import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/swiper.css";
import data from "../utils/slider.json";
import { sliderSettings } from "../utils/settings";

const SliderButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="absolute gap-4 -top-16 right-0 z-50">
      <button
        className="bg-white text-[1.2rem] px-[0.8rem] py-[0.2rem] text-blue border-none rounded-[5px] cursor-pointer"
        onClick={() => swiper.slidePrev()}
      >
        &lt;
      </button>
      <button
        className="bg-white text-[1.2rem] px-[0.8rem] py-[0.2rem] text-blue border-none rounded-[5px] cursor-pointer"
        onClick={() => swiper.slideNext()}
      >
        &gt;
      </button>
    </div>
  );
};

const Residencies = () => {
  return (
    <section className="relative">
      <div className="paddings innerWidth overflow-hidden">
        <div className="flexColStart mb-8">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="flexColStart m-auto max-w-max gap-[0.6rem] p-4 rounded-[10px] transition-all duration-300 ease-in hover:scale-[1.025] hover:cursor-pointer hover:cardGradient hover:cardShadow">
                <img
                  src={card.image}
                  alt="homeImage"
                  className="w-full max-w-[15rem]"
                />
                <span className="secondaryText font-[600] text-[1.2rem]">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText text-[1.5rem]">{card.name}</span>
                <span className="sdecondaryText w-[15rem] text-[0.7rem]">
                  {card.detail}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;
