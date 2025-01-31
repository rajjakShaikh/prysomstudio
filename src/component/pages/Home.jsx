import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../styles/customCursors.css";

// Register Swiper modules
SwiperCore.use([Autoplay, EffectFade]);

// import imagenew from "../pages/images/imagenew.jpeg";
import CarouselModulo from "../pages/images/CarouselModulo.png";
import homeimage2 from "../pages/images/homeimage2.jpg";
import homeimage3 from "../pages/images/homeimage3.jpg";

import home4 from "../pages/images/home4.png";
import home5 from "../pages/images/home5.png";
// import newone from "../pages/images/newone.jpg";
import Header from "../pages/Header";
import { NavLink } from "react-router-dom";

export default function Home() {
  const swiperRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = 5;

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isHovering) {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHovering]);

  // Auto-advance slides when dot animation completes
  useEffect(() => {
    const timer = setInterval(() => {
      if (swiperRef.current?.swiper) {
        swiperRef.current.swiper.slideNext();
      }
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      {isHovering && (
        <div
          className={`glass-cursor ${isHovering ? "active" : ""}`}
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
          }}
        />
      )}
      <div className="absolute top-0 left-0 right-0 z-10">
        <Header />
      </div>
      <div className="h-screen bg-[#E6E6E6]">
        {/* Home page Carousel Start */}
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, EffectFade]}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          effect="fade"
          loop={true}
          className="w-full h-full"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          speed={1000}
        >
          <SwiperSlide className="w-full h-full">
            <div className="w-full h-full">
              <div className="relative w-full h-full">
                <div
                  className="absolute left-0 top-0 w-1/3 h-full z-10 cursor-arrow-left"
                  onClick={() => swiperRef.current?.swiper?.slidePrev()}
                />
                <NavLink
                  to={"/work/modulo"}
                  className="absolute left-1/3 top-0 w-1/3 h-full z-10 cursor-none "
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                />
                <div
                  className="absolute right-0 top-0 w-1/3 h-full z-10 cursor-arrow-right"
                  onClick={() => swiperRef.current?.swiper?.slideNext()}
                />
                <div className="flex justify-center items-center w-full h-full">
                  <LazyLoadImage
                    src={CarouselModulo}
                    alt="Slide 1"
                    id="firstimgnew"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <div className="w-full h-full">
              <div className="relative w-full h-full">
                <div
                  className="absolute left-0 top-0 w-1/3 h-full z-10 cursor-arrow-left"
                  onClick={() => swiperRef.current?.swiper?.slidePrev()}
                />
                <NavLink
                  to={"/work/heat"}
                  className="absolute left-1/3 top-0 w-1/3 h-full z-10 cursor-none"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                />
                <div
                  className="absolute right-0 top-0 w-1/3 h-full z-10 cursor-arrow-right"
                  onClick={() => swiperRef.current?.swiper?.slideNext()}
                />
                <LazyLoadImage
                  src={homeimage2}
                  alt="Slide 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <div className="w-full h-full">
              <div className="relative w-full h-full">
                <div
                  className="absolute left-0 top-0 w-1/3 h-full z-10 cursor-arrow-left"
                  onClick={() => swiperRef.current?.swiper?.slidePrev()}
                />
                <NavLink
                  to={"/work/casco"}
                  className="absolute left-1/3 top-0 w-1/3 h-full z-10 cursor-none"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                />
                <div
                  className="absolute right-0 top-0 w-1/3 h-full z-10 cursor-arrow-right"
                  onClick={() => swiperRef.current?.swiper?.slideNext()}
                />
                <LazyLoadImage
                  src={homeimage3}
                  alt="Slide 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <div className="w-full h-full">
              <div className="relative w-full h-full">
                <div
                  className="absolute left-0 top-0 w-1/3 h-full z-10 cursor-arrow-left"
                  onClick={() => swiperRef.current?.swiper?.slidePrev()}
                />
                <NavLink
                  to={"/work/modulo"}
                  className="absolute left-1/3 top-0 w-1/3 h-full z-10 cursor-none"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                />
                <div
                  className="absolute right-0 top-0 w-1/3 h-full z-10 cursor-arrow-right"
                  onClick={() => swiperRef.current?.swiper?.slideNext()}
                />
                <LazyLoadImage
                  src={home5}
                  alt="Slide 4"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-screen">
              <div className="absolute inset-0 w-full h-full">
                <div
                  className="absolute left-0 top-0 w-1/3 h-full z-10 cursor-arrow-left"
                  onClick={() => swiperRef.current?.swiper?.slidePrev()}
                />
                <NavLink
                  to={"/work/heat"}
                  className="absolute left-1/3 top-0 w-1/3 h-full z-10 cursor-none"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                />
                <div
                  className="absolute right-0 top-0 w-1/3 h-full z-10 cursor-arrow-right"
                  onClick={() => swiperRef.current?.swiper?.slideNext()}
                />
                <LazyLoadImage
                  src={home4}
                  alt="Slide 5"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Custom Pagination */}
        <div className="custom-pagination">
          {[...Array(totalSlides)].map((_, index) => (
            <div
              key={index}
              className={`pagination-dot ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => {
                swiperRef.current?.swiper?.slideTo(index);
              }}
            />
          ))}
        </div>
      </div>
      {/* Home Page Carousel End */}
    </div>
  );
}
