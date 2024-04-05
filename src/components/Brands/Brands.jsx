import React from "react";
import "./Brands.css";
import google from "../../assets/google.svg";
import amazon from "../../assets/amazon.svg";
import spotify from "../../assets/spotify.svg";
import slack from "../../assets/slack.svg";
import linkedin from "../../assets/linkedin.svg";
import walmart from "../../assets/walmart.svg";

const Brands = () => {
  return (
    <section id="brands" className="w-full py-16 px-4 sm:px-10 lg:px-20">
      <div className="brands-container py-12 border-b-gray-200 border-b-2">
        <h2 data-aos='fade-right' className="brands-heading text-6xl font-bold">
          <span className="brands-heading-span">200+</span> Trusted Partners
        </h2>
        <div data-aos='fade-up' className="brands-img flex flex-wrap gap-8 justify-between items-center py-6 mt-16 ">
            <img src={google} alt="" />
            <img src={amazon} alt="" />
            <img src={spotify} alt="" />
            <img src={slack} alt="" />
            <img src={linkedin} alt="" />
            <img src={walmart} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Brands;
