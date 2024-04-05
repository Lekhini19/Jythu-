import React from "react";
import "./Services.css";
import card1img from "../../assets/card1-img.svg";
import card2img from "../../assets/card2-img.svg";
import card3img from "../../assets/card3-img.svg";
import card4img from "../../assets/card4-img.svg";
import card5img from "../../assets/card5-img.svg";
import card6img from "../../assets/card6-img.svg";
import cardArrow from "../../assets/card-arrow.svg";
import Button from "../Button/Button";

const Services = () => {
  return (
    <section id="services" className="w-full lg:px-6 ">
      <div className="section-title text-center">
        <i
          data-aos="fade-right"
          className="fa-solid fa-arrow-right text-green-300/80 pl-4"
        ></i>
        <span data-aos="fade-right" className="px-2">
          OUR BEST SERVICES
        </span>
        <h2
          data-aos="fade-right"
          data-aos-delay={50}
          className="text-5xl font-bold py-4 "
        >
          We Provide Best Services
        </h2>
      </div>
      <div className="content-wrapper lg:px-20 flex flex-col items-center justify-center lg:pb-8">
        <div
          data-aos="fade-right"
          data-aos-offset={100}
          className="services-container w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 py-16 px-4 sm:px-8 md:px-8 lg:px-10"
        >
          <div className="service-card w-full h-full text-center flex flex-col items-center justify-center gap-4 rounded-3xl shadow-xl px-4 py-12 relative   ">
            <div className="card-inner absolute w-full h-full  ">
              <div className="card-front absolute w-full h-full flex flex-col items-center justify-center gap-4 rounded-3xl ">
                <div className="service-icon w-20 h-20 rounded-full flex items-center justify-center py-4">
                  <img src={card1img} alt="" />
                </div>
                <h3 className="text-2xl font-bold py-4">Strategy & Planning</h3>
                <p className="text-lg  px-6">
                  Lorem ipsum dolor sit amet bibendum elit sit finibus. Maximus
                  sodales parturien lore arcu eros vel erat pede netus qu.
                </p>
                <img src={cardArrow} alt="" />
              </div>

              <div className="card-back  absolute w-full h-full flex flex-col items-center justify-center gap-4 rounded-3xl">
                <div className="service-icon w-20 h-20 rounded-full flex items-center justify-center py-4">
                  <img src={card1img} alt="" />
                </div>
                <h3 className="text-2xl font-bold py-4">Strategy & Planning</h3>
                <p className="text-lg  px-6">
                  Lorem ipsum dolor sit amet bibendum elit sit finibus. Maximus
                  sodales parturien lore arcu eros vel erat pede netus qu.
                </p>
                <img src={cardArrow} alt="" />
              </div>
            </div>
          </div>

          <div className="service-card w-full h-full text-center flex flex-col items-center justify-center gap-4 rounded-3xl shadow-xl px-4 py-12 relative   ">
            <div className="card-inner absolute w-full h-full  ">
              <div className="card-front absolute w-full h-full flex flex-col items-center justify-center gap-4 rounded-3xl ">
                <div className="service-icon w-20 h-20 rounded-full flex items-center justify-center py-4">
                  <img src={card2img} alt="" />
                </div>
                <h3 className="text-2xl font-bold py-4">Planning & Strategy</h3>
                <p className="text-lg  px-6">
                  Lorem ipsum dolor sit amet bibendum elit sit finibus. Maximus
                  sodales parturien lore arcu eros vel erat pede netus qu.
                </p>
                <img src={cardArrow} alt="" />
              </div>

              <div className="card-back  absolute w-full h-full flex flex-col items-center justify-center gap-4 rounded-3xl">
                <div className="service-icon w-20 h-20 rounded-full flex items-center justify-center py-4">
                  <img src={card1img} alt="" />
                </div>
                <h3 className="text-2xl font-bold py-4">Planning & Strategy</h3>
                <p className="text-lg  px-6">
                  Lorem ipsum dolor sit amet bibendum elit sit finibus. Maximus
                  sodales parturien lore arcu eros vel erat pede netus qu.
                </p>
                <img src={cardArrow} alt="" />
              </div>
            </div>
          </div>

          <div className="service-card w-full h-full text-center flex flex-col items-center justify-center gap-4 rounded-3xl shadow-xl px-4 py-12 relative   ">
            <div className="card-inner absolute w-full h-full  ">
              <div className="card-front absolute w-full h-full flex flex-col items-center justify-center gap-4 rounded-3xl ">
                <div className="service-icon w-20 h-20 rounded-full flex items-center justify-center py-4">
                  <img src={card3img} alt="" />
                </div>
                <h3 className="text-2xl font-bold py-4">Design & Development</h3>
                <p className="text-lg  px-6">
                  Lorem ipsum dolor sit amet bibendum elit sit finibus. Maximus
                  sodales parturien lore arcu eros vel erat pede netus qu.
                </p>
                <img src={cardArrow} alt="" />
              </div>

              <div className="card-back  absolute w-full h-full flex flex-col items-center justify-center gap-4 rounded-3xl">
                <div className="service-icon w-20 h-20 rounded-full flex items-center justify-center py-4">
                  <img src={card4img} alt="" />
                </div>
                <h3 className="text-2xl font-bold py-4">Design & Development</h3>
                <p className="text-lg  px-6">
                  Lorem ipsum dolor sit amet bibendum elit sit finibus. Maximus
                  sodales parturien lore arcu eros vel erat pede netus qu.
                </p>
                <img src={cardArrow} alt="" />
              </div>
            </div>
          </div>

          <div className="service-card w-full h-full text-center flex flex-col items-center justify-center gap-4 rounded-3xl shadow-xl px-4 py-12 relative   ">
            <div className="card-inner absolute w-full h-full  ">
              <div className="card-front absolute w-full h-full flex flex-col items-center justify-center gap-4 rounded-3xl ">
                <div className="service-icon w-20 h-20 rounded-full flex items-center justify-center py-4">
                  <img src={card5img} alt="" />
                </div>
                <h3 className="text-2xl font-bold py-4">Seo Audits & Strategy</h3>
                <p className="text-lg  px-6">
                  Lorem ipsum dolor sit amet bibendum elit sit finibus. Maximus
                  sodales parturien lore arcu eros vel erat pede netus qu.
                </p>
                <img src={cardArrow} alt="" />
              </div>

              <div className="card-back  absolute w-full h-full flex flex-col items-center justify-center gap-4 rounded-3xl">
                <div className="service-icon w-20 h-20 rounded-full flex items-center justify-center py-4">
                  <img src={card6img} alt="" />
                </div>
                <h3 className="text-2xl font-bold py-4">Seo Audits & Strategy</h3>
                <p className="text-lg  px-6">
                  Lorem ipsum dolor sit amet bibendum elit sit finibus. Maximus
                  sodales parturien lore arcu eros vel erat pede netus qu.
                </p>
                <img src={cardArrow} alt="" />
              </div>
            </div>
          </div>

          <div className="service-card w-full h-full text-center flex flex-col items-center justify-center gap-4 rounded-3xl shadow-xl px-4 py-12 relative   ">
            <div className="card-inner absolute w-full h-full  ">
              <div className="card-front absolute w-full h-full flex flex-col items-center justify-center gap-4 rounded-3xl ">
                <div className="service-icon w-20 h-20 rounded-full flex items-center justify-center py-4">
                  <img src={card1img} alt="" />
                </div>
                <h3 className="text-2xl font-bold py-4">Design & Development</h3>
                <p className="text-lg  px-6">
                  Lorem ipsum dolor sit amet bibendum elit sit finibus. Maximus
                  sodales parturien lore arcu eros vel erat pede netus qu.
                </p>
                <img src={cardArrow} alt="" />
              </div>

              <div className="card-back  absolute w-full h-full flex flex-col items-center justify-center gap-4 rounded-3xl">
                <div className="service-icon w-20 h-20 rounded-full flex items-center justify-center py-4">
                  <img src={card1img} alt="" />
                </div>
                <h3 className="text-2xl font-bold py-4">Design & Development</h3>
                <p className="text-lg  px-6">
                  Lorem ipsum dolor sit amet bibendum elit sit finibus. Maximus
                  sodales parturien lore arcu eros vel erat pede netus qu.
                </p>
                <img src={cardArrow} alt="" />
              </div>
            </div>
          </div>

          <div className="service-card w-full h-full text-center flex flex-col items-center justify-center gap-4 rounded-3xl shadow-xl px-4 py-12 relative   ">
            <div className="card-inner absolute w-full h-full  ">
              <div className="card-front absolute w-full h-full flex flex-col items-center justify-center gap-4 rounded-3xl ">
                <div className="service-icon w-20 h-20 rounded-full flex items-center justify-center py-4">
                  <img src={card1img} alt="" />
                </div>
                <h3 className="text-2xl font-bold py-4">Seo Audits & Strategy</h3>
                <p className="text-lg  px-6">
                  Lorem ipsum dolor sit amet bibendum elit sit finibus. Maximus
                  sodales parturien lore arcu eros vel erat pede netus qu.
                </p>
                <img src={cardArrow} alt="" />
              </div>

              <div className="card-back  absolute w-full h-full flex flex-col items-center justify-center gap-4 rounded-3xl">
                <div className="service-icon w-20 h-20 rounded-full flex items-center justify-center py-4">
                  <img src={card1img} alt="" />
                </div>
                <h3 className="text-2xl font-bold py-4">Seo Audits & Strategy</h3>
                <p className="text-lg  px-6">
                  Lorem ipsum dolor sit amet bibendum elit sit finibus. Maximus
                  sodales parturien lore arcu eros vel erat pede netus qu.
                </p>
                <img src={cardArrow} alt="" />
              </div>
            </div>
          </div>
        </div>

        <Button text={"VIEW ALL SERVICES"} className="lg:py-16 mt-6" />
      </div>
    </section>
  );
};

export default Services;
