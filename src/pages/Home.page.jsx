import React, { useState } from 'react';


import EntertainmentCard from '../components/Entertainment/EntertainmentCard.Component';
import HeroCarousal from '../components/HeroCarousel/HeroCarousal.component';
import PosterSlider from '../components/PosterSllider/PosterSlider.component'


import DefaultLayoutHoc  from '../layout/Default.layout'
const HomePage = () => {
  const[recommendedMOvies,setRecommendedMovies] = useState([]);
  return (
    <>
    <HeroCarousal />
    <div className='container mx-auto px-4 md:px-12 my-8'>
      <h1 className='text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3'>
        The Best Of Entertainment
      </h1>
      <EntertainmentCard />
    </div>
  
    <div className='container mx-auto px-4 md:px-12 my-8'>
      <PosterSlider
      title="Recommended Movies"
      subject="List of recommended Movies" 
      poster={recommendedMOvies}
      isDark={false}/>
    </div>
  
    <div className='bg-premier-800 py-12'>
      <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>

        <div className='hidden md:flex'>
          <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="Rupay" className="w-full h-full" />
        </div>
        <PosterSlider
          title="Premiers"
          subject="Brand new Releases every Friday" 
          poster=''
          isDark={true}/>


      </div>
    </div>
  
      <div className='container mx-auto px-4 md:px-12 my-8'>
        <PosterSlider
        title="Online Streaming Event"
        subject="" 
        poster=''
        isDark={false}/>
      </div>


    </>
  )
}

export default DefaultLayoutHoc(HomePage)