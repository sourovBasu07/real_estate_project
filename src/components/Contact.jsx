import React from "react";
import contact from "../assets/contact.jpg";
import { MdCall } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { BsFillCameraVideoFill, BsFillChatLeftTextFill } from "react-icons/bs";

const Contact = () => {
  return (
    <section className="">
      <div className="paddings innerWidth flexCenter justify-between">
        <div className="flexColStart flex-1 gap-2">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better
          </span>
          <div className="my-6 flex flex-col gap-6">
            <div className="flex flex-wrap gap-8">
              <div className="flexColCenter border border-solid border-[rgba(128,128,128,0.143)] px-6 py-4 gap-4 transition-all duration-300 ease-in hover:scale-110 hover:shadow-md">
                <div className="flexStart gap-6">
                  <div className="flexCenter p-2 bg-[#eeeeff] rounded-[5px] text-blue">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart">
                    <span className="primaryText text-[1.1rem]">Call</span>
                    <span className="secondaryText">+1 023 456 789</span>
                  </div>
                </div>
                <button className="w-full bg-lightBlue py-2 hover:blueGradient hover:text-white hover:transition-all duration-300 ease-in-out">
                  Call Now
                </button>
              </div>

              <div className="flexColCenter border border-solid border-[rgba(128,128,128,0.143)] px-6 py-4 gap-4 transition-all duration-300 ease-in hover:scale-110 hover:shadow-md">
                <div className="flexStart gap-6">
                  <div className="flexCenter p-2 bg-[#eeeeff] rounded-[5px] text-blue">
                    <AiFillMessage size={25} />
                  </div>
                  <div className="flexColStart">
                    <span className="primaryText text-[1.1rem]">Message</span>
                    <span className="secondaryText">+1 023 456 789</span>
                  </div>
                </div>
                <button className="w-full bg-lightBlue py-2 hover:blueGradient hover:text-white hover:transition-all duration-300 ease-in-out">
                  Message Now
                </button>
              </div>
            </div>
            <div className="flex flex-wrap gap-8">
              <div className="flexColCenter border border-solid border-[rgba(128,128,128,0.143)] px-6 py-4 gap-4 transition-all duration-300 ease-in hover:scale-110 hover:shadow-md">
                <div className="flexStart gap-6">
                  <div className="flexCenter p-2 bg-[#eeeeff] rounded-[5px] text-blue">
                    <BsFillCameraVideoFill size={25} />
                  </div>
                  <div className="flexColStart">
                    <span className="primaryText text-[1.1rem]">
                      Video Call
                    </span>
                    <span className="secondaryText">+1 023 456 789</span>
                  </div>
                </div>
                <button className="w-full bg-lightBlue py-2 hover:blueGradient hover:text-white hover:transition-all duration-300 ease-in-out">
                  Video Call Now
                </button>
              </div>

              <div className="flexColCenter border border-solid border-[rgba(128,128,128,0.143)] px-6 py-4 gap-4 transition-all duration-300 ease-in hover:scale-110 hover:shadow-md">
                <div className="flexStart gap-6">
                  <div className="flexCenter p-2 bg-[#eeeeff] rounded-[5px] text-blue">
                    <BsFillChatLeftTextFill size={25} />
                  </div>
                  <div className="flexColStart">
                    <span className="primaryText text-[1.1rem]">Chat</span>
                    <span className="secondaryText">+1 023 456 789</span>
                  </div>
                </div>
                <button className="w-full bg-lightBlue py-2 hover:blueGradient hover:text-white hover:transition-all duration-300 ease-in-out">
                  Chat Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flexColEnd m-auto">
          <div className="w-[30rem] h-[35rem] border-8 border-solid border-[rgba(255,255,255,0.12)] rounded-t-[15rem] overflow-hidden">
            <img
              src={contact}
              alt="contact"
              className="w-full h-full
            "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
