import React from "react";

import imagenew from "../pages/images/imagenew.jpeg";
import homeimage2 from "../pages/images/homeimage2.jpg";
import homeimage3 from "../pages/images/homeimage3.jpg";
import home4 from "../pages/images/home4.png";
import home5 from "../pages/images/home5.png";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Work() {
  const navigate = useNavigate();
  const images = [
    { src: imagenew, name: "Modulo", path: "/work/modulo" },
    { src: homeimage2, name: "H-Eat°", path: "/work/heat" },
    { src: homeimage3, name: "Casco", path: "/work/casco" },
    { src: home4, name: "El Junto - Coming Soon" },
    {
      src: home5,
      name: "Katha Mehfil - Coming Soon",
    },
  ];

  return (
    <>
      <Header />

      <div className="mx-5 md:mx-16 my-12 md:my-12">
        <div className="grid grid-cols-1 md:grid-cols-3  gap-x-[20px] md:gap-x-[60px] gap-y-[20px] md:gap-y-[24px]">
          {images.map((image, index) => (
            <div
              key={index}
              className="group"
              onClick={() => navigate(image.path)}
            >
              {/* Image */}
              <LazyLoadImage
                alt={image.name}
                src={image.src}
                height="100%"
                width="100%"
                className="w-full h-auto cursor-pointer  rounded-md object-cover"
              />

              {/* Image name below the image */}
              <div className="mt-4 opacity-100 md:opacity-0 cursor-pointer md:group-hover:opacity-100 text-left md:text-left text-xl text-black transition-opacity duration-300">
                <span className="text-[16px] font-normal">{image.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
