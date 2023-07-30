import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import value from "../assets/value.png";
import data from "../utils/accordions";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Value = () => {
  return (
    <section className="">
      <div className="paddings innerWidth flexCenter max-[768px]:flex-col">
        <div className="flex flex-1">
          <div className="border-8 border-solid border-[rgb(232,232,232)]/[0.93] w-[30rem] h-[35rem] rounded-t-[15rem] overflow-hidden">
            <img src={value} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="flexColStart flex-1 gap-2">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give to You</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you.
            <br />
            We beleive a good blace to live can make your life better
          </span>
          <Accordion
            className={`w-full mt-8 border-none `}
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, index) => {
              return (
                <AccordionItem
                  className={`w-full bg-white mb-[20px] border border-solid border-[rgba(128,128,128,0.143)] rounded-[8px] overflow-hidden shadow`}
                  key={index}
                  uuid={index}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter w-full justify-between bg-white p-4 cursor-pointer">
                      <div className="flexCenter p-2 bg-[#eeeeff] rounded-[5px] text-blue">
                        {item.icon}
                      </div>
                      <span className="primaryText text-[1.1rem]">
                        {item.heading}
                      </span>
                      <div className="flexCenter">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
