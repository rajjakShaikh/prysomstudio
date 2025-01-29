import React from 'react'
import FinalPres from "../pages/images/FinalPres.png";
import newone from "../pages/images/newone.jpg";

export default function Test() {
  return (
    <div className='overflow-y-hidden'>
      <img
        src={newone}
        alt="img-1"
        className="w-full h-auto object-cover"
      />
    </div>
  );
}
