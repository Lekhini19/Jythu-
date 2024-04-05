import React from "react";
import "./Seo.css";
import leftImg from "../../assets/seo-img.png";
import Button from "../Button/Button";
import dial from "../../assets/dial-icon.svg";

const Seo = () => {
  return (
    <section id="seo" className="w-full px-4 lg:px-12 py-8 md:py-8 lg:py-16">
      <div className="container w-full flex flex-col lg:flex-row items-center justify-center lg:gap-16  py-8 px-6 lg:px-8 mt-10">
        <div className="seo-left w-full lg:w-[50%] flex justify-center items-center">
          <img src={leftImg} alt="" className="w-full" />
        </div>
        <div className="seo-right w-full lg:w-[50%] py-6 lg:py-0">
          <div className="section-title ">
            <i class="fa-solid fa-arrow-right text-green-300/80 pl-4"></i>
            <span className=" lg:px-2 font-semibold text-sm lg:text-base text-start">WITH SEO OPTIMIZATION</span>
            <h2 data-aos='fade-right' data-aos-offset={400} className=" text-4xl text-[#0D141C] lg:text-[55px] leading-tight font-[900] py-4 w-full ">
              Marketing And Creative <br /> Solutions Seo
            </h2>
            <p className="lg:max-w-[95%] leading-tight py-6 lg:py-2 text-[#4F7396] text-xl lg:text-[24px] font-semibold">
              We are 100+ professional software engineers with more than 10 year
              of experience in delivering superior products.
            </p>
          </div>

          <div className="range-input-div py-8 lg:py-10 flex flex-col gap-8 ">
            <div className="range lg:px-4">
              <h6 className="font-semibold text-2xl pb-4">
                Finance Consultancy{" "}
              </h6>
              <div className="input relative w-full  rounded-full">
                <div data-aos='zoom-in-right'  className=" bg-gradient-to-l from-[#38EF7D] to-[#11998E] w-[80%] h-2 rounded-full"></div>
                <span className=" range-value absolute right-0 -top-12 text-2xl font-semibold">
                  80%
                </span>
              </div>
            </div>

            <div className="range lg:px-4">
              <h6 className="font-semibold text-2xl pb-4">
                Finance Consultancy{" "}
              </h6>
              <div className="input relative w-full  rounded-full  ">
                <div data-aos='zoom-in-right' className=" bg-gradient-to-r from-[#055555] to-[#40E0D0] w-[80%] h-2 rounded-full"></div>
                <span className=" range-value absolute right-0 -top-12 text-2xl font-semibold">
                  80%
                </span>
              </div>
            </div>

            <div className="range lg:px-4">
              <h6 className="font-semibold text-2xl pb-4">
                Finance Consultancy{" "}
              </h6>
              <div className="input relative w-full  rounded-full  ">
                <div data-aos='zoom-in-right' className=" bg-gradient-to-l from-[#38EF7D] to-[#11998E] w-[80%] h-2 rounded-full"></div>
                <span className=" range-value absolute right-0 -top-12 text-2xl font-semibold">
                  80%
                </span>
              </div>
            </div>
          </div>
          <div className="seo-btns w-full pt-10 lg:pt-2 px-4 flex flex-col sm:flex-row gap-8 lg:gap-24 items-center ">
            <Button text={"VIEW ALL SERVICES"} className="px-6" />
            <div className="callus-btn flex flex-col lg:flex-row gap-2 items-center ">
                <img src={dial} alt="call us" className=" w-16" />
                <div>
                    <p className="callus-text text-sm text-center lg:text-start lg:text-[18px] leading-tight font-semibold">Call Us Anytime</p>
                    <h3 className="text-3xl leading-tight font-semibold lg:font-bold">0215 6856 9875</h3>
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Seo;
