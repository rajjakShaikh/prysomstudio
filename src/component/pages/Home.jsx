import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import { LazyLoadImage } from "react-lazy-load-image-component";

// Register Swiper modules
SwiperCore.use([Autoplay, EffectFade]);

import imagenew from "../pages/images/imagenew.jpeg";
import homeimage2 from "../pages/images/homeimage2.jpg";
import homeimage3 from "../pages/images/homeimage3.jpg";
import home4 from "../pages/images/home4.png";
import home5 from "../pages/images/home5.png";
import Header from "../pages/Header";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header />
      <div className="main-container mx-5 md:mx-16 my-5 md:my-12">
        {/* Carousel Start */}
        <div className="mt-9 flex justify-center">
          <Swiper
            modules={[Autoplay, EffectFade]}
            autoplay={{
              // delay: 2000,
              disableOnInteraction: false,
            }}
            effect="fade"
            loop={true}
            // speed={1000}
            className="w-full h-full"
          >
            <SwiperSlide>
              <NavLink to={"/work/modulo"}>
                <LazyLoadImage
                  src={imagenew}
                  alt="Slide 1"
                  className="rounded-md w-full h-full"
                  height="100%"
                  width="100%"
                />
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink to={"/work/heat"}>
                <LazyLoadImage
                  src={homeimage2}
                  alt="Slide 2"
                  className="rounded-md w-full h-full"
                  height="100%"
                  width="100%"
                />
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink to={"work/casco"}>
                <LazyLoadImage
                  src={homeimage3}
                  alt="Slide 3"
                  className="rounded-md w-full h-full"
                  height="100%"
                  width="100%"
                />
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <LazyLoadImage
                src={home4}
                alt="Slide 4"
                className="rounded-md w-full h-full"
                height="100%"
                width="100%"
              />
            </SwiperSlide>
            <SwiperSlide>
              <LazyLoadImage
                src={home5}
                alt="Slide 5"
                className="rounded-md w-full h-full"
                height="100%"
                width="100%"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Carousel End */}
      </div>
    </>
  );
}
