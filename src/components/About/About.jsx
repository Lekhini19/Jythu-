import React, { useEffect, useState, useRef } from "react";
import "./About.css";
import aboutimg from "../../assets/about-img.svg";
import check from "../../assets/check.svg";
import Button from "../Button/Button";

const About = () => {
  const [count, setCount] = useState(0);
  const [startCounting, setStartCounting] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
        }
      });
    });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let interval;
    if (startCounting && count < 24) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 100);
    }

    return () => clearInterval(interval);
  }, [startCounting, count]);

  return (
    <section id="about" className="w-full py-4 lg:py-8 px-3">
      <div className="about-container w-full py-4 md:py-6 lg:py-8 flex flex-col lg:flex-row gap-4 lg:pl-16">
        <div className="about-left w-full lg:w-[50%] flex flex-col items-start">
          <div className="section-title">
            <i class="fa-solid fa-arrow-right text-green-300/80 pl-4"></i>
            <span className=" lg:pl-2 text-lg font-semibold">ABOUT US</span>
            <h2
              data-aos="fade-right"
              className=" text-3xl md:text-5xl lg:text-6xl leading-normal font-bold lg:px-4 py-2 lg:py-6"
            >
              We Want To Give You <br /> The Best Service
            </h2>
            <p className=" md:max-w-[80%] lg:max-w-[80%] lg:px-4 lg:py-2 text-[#4F7396] text-[20px]">
              We are 100+ professional software engineers with more than 10 year
              of experience in delivering superior products Believe it because
              you have seen it. Here are real numbers
            </p>
          </div>

          <div className="flex lg:flex-row md:gap-10 lg:gap-4 items-center justify-start w-[90%] lg:w-[75%] md:px-4 lg:px-4 py-6">
            <div className="lg:pt-8 about-experience w-28" ref={counterRef}>
              <h3 className="about-24 text-8xl font-extrabold">{count}</h3>
              <p className="text-xl font-bold text-slate-600 py-4">
                Years <br /> Experience
              </p>
            </div>
            <div className="about-ul ml-4 lg:ml-8 lg:px-8">
              <ul data-aos="fade-right" class="about-ul flex flex-col gap-3">
                <li className="flex gap-3 font-bold">
                  <img src={check} alt="" />
                  Product Engineering
                </li>
                <li className="flex gap-3 font-bold">
                  <img src={check} alt="" />
                  Digital Services
                </li>
                <li className="flex gap-3 font-bold">
                  <img src={check} alt="" />
                  IT Consultancy
                </li>
                <li className="flex gap-3 font-bold">
                  <img src={check} alt="" />
                  Digital Services
                </li>
              </ul>
            </div>
          </div>
          <Button text={"GET STARTED"} className="px-6" />
        </div>
        <div className="about-right lg:w-[50%]">
          <div className="about-img w-full h-full mt-8 lg:mt-0">
            <img src={aboutimg} alt="check" className="w-full lg:ml-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
