import React, { useState } from 'react';
import HeroSlider from 'react-slick';

const HeroCarousal = () => {
  const[images, setImages] =useState([]);
  return (
    <>
      <div className='lg:hidden'>
        <HeroSlider>
          {
            images.map(image =>
              <div></div> )
          }
        </HeroSlider>
      </div>
      <div className='hidden lg:block'></div>
    </>
  )
}

export default HeroCarousal