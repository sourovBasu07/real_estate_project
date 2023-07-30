import React from "react";
import prologis from "../assets/prologis.png";
import tower from "../assets/tower.png";
import equinix from "../assets/equinix.png";
import realty from "../assets/realty.png";

const Companies = () => {
  return (
    <section className="">
      <div className="paddings innerwidth flexCenter justify-around gap-4 [&>*]:w-[9rem]">
        <img src={prologis} alt="prologis" />
        <img src={tower} alt="tower" />
        <img src={equinix} alt="equinix" />
        <img src={realty} alt="realty" />
      </div>
    </section>
  );
};

export default Companies;
