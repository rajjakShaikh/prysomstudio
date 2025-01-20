import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";

// Register Swiper modules
SwiperCore.use([Autoplay, EffectFade]);

import imagenew from "../pages/images/imagenew.jpeg";
import homeimage2 from "../pages/images/homeimage2.jpg";
import homeimage3 from "../pages/images/homeimage3.jpg";
import home4 from "../pages/images/home4.png";
import home5 from "../pages/images/home5.png";

export default function Home() {
  return (
    <div className="main-container mx-16 my-8">
      {/* Carousel Start */}
      <div className="mt-9 flex justify-center">
        <Swiper
          modules={[Autoplay, EffectFade]} // Specify the modules here
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          effect="fade"
          loop={true}
          speed={1000}
          className="w-full h-[739px]"
        >
          <SwiperSlide>
            <img
              src={imagenew}
              alt="Slide 1"
              className="rounded-md w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={homeimage2}
              alt="Slide 2"
              className="rounded-md w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={homeimage3}
              alt="Slide 3"
              className="rounded-md w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={home4}
              alt="Slide 3"
              className="rounded-md w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={home5}
              alt="Slide 3"
              className="rounded-md w-full h-full"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Carousel End */}
    </div>
  );
}
