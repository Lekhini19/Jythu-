import React from "react";
import "./Hero.css";
import heroleftimg1 from "../../assets/hero-left-img1.png";
import heroleftimg2 from "../../assets/hero-left-img2.png";
import arrow from "../../assets/arrow.svg";
import video from "../../assets/video.svg";
import Button from "../../components/Button/Button";

const Hero = () => {
  return (
    <section className="hero w-full">
      <div className="hero-content w-full h-full  flex flex-col lg:flex-row gap-6 items-center justify-items-end px-8">
        <div className="hero-left px-8 pt-12 sm:pt-4 md:pt-6 lg:pt-8  w-screen lg:w-[50%] py-8 lg:h-full flex flex-col justify-center lg:justify-end items-center relative ">
          <img
            src={heroleftimg1}
            alt="model"
            className=" w-[95%] md:w-[85%] lg:w-[80%] lg:absolute lg:bottom-[-230px]"
          />
          <img
            src={heroleftimg2}
            alt=""
            className=" shadow-xl rounded-2xl w-[80%] sm:w-[65%] lg:w-[60%] mr-14 lg:mr-8 lg:absolute lg:bottom-[-350px]"
          />
        </div>
        <div className="hero-right w-[95%] lg:w-[50%]  sm:px-10 md:px-4 flex flex-col justify-center md:justify-end py-4 lg:pb-0 pb-24  ">
          <div className="heading ">
            <p className="flex gap-2 items-center">
              <i class="fa-solid fa-arrow-right text-green-300/50"></i> WELCOME
              TO JYTHU
            </p>
            <h1
              data-aos="fade-left"
              data-aos-offset={0}
              className=" text-2xl sm:text-[40px] lg:text-[74px] text-white font-bold leading-tight"
            >
              A Marketing <br /> <span className="hero-span">Agency</span> To
              Grow Your Business
            </h1>
          </div>

          <p
            data-aos="fade-left"
            className="mt-8 text-slate-200 leading-tight text-md"
          >
            We are 100+ professional software engineers with more than 10 year
            of <br /> experience in delivering superior products Believe it
            because you have <br /> seen it. Here are real numbers
          </p>

          <div className="hero-buttons mt-10 flex flex-col lg:flex-row gap-6 lg:gap-20 items-start lg:items-center justify-start">
            <div
              data-aos="fade-left"
              data-aos-offset={0}
              data-aos-delay={100}
              className="btn1 flex items-center"
            >
              <Button text={"GET STARTED"} className="px-4" />

            </div>

            <div
              data-aos="fade-left"
              data-aos-offset={0}
              data-aos-delay={200}
              className="btn2 flex lg:ml-8"
            >
              <button className="flex gap-2 items-center text-white text-lg">
                {" "}
                <img src={video} alt="" /> WATCH VIDEO
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
