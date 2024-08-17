import React, { useState } from 'react';
import { AdvancedVideo } from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import logo from "../images/icon.png"
import instagram from "../images/instagram.svg"
import linkedin from "../images/linkedin.png"
import portrait from "../images/portrait.jpeg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const IndexPage = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dracbyle6'
    }
  });

  const profilDescription = `Hello! I’m Irina, a dedicated content creator with a passion for showcasing the unique charm of hotels. Over the past year, I’ve been collaborating with hotels to produce visually captivating content that highlights their establishments in the best light.

I specialize in visual storytelling, using creative camera angles and dynamic video techniques to craft engaging videos. My work includes creating and editing posts and reels that are perfectly suited for social media, designed to boost online visibility. I also share this content with my network to further enhance the hotel’s presence and attract more visitors.`

  const videos = {
    "regular": [
      "iripoliri/uos8eykf2ujhkfbp1o47",
      "iripoliri/mdba1lecwe4dkwdjswgx",
      "iripoliri/uos8eykf2ujhkfbp1o47",
      "iripoliri/uos8eykf2ujhkfbp1o47"
    ],
    "animatedDesign": [
      "iripoliri/animated/p6y7duacyr70pucqvyxw",
      "iripoliri/animated/zmeeciir2jvfus9lcloc",
      "iripoliri/animated/pwxlysx4ppwcf1x1sate",
      "iripoliri/animated/vubkhrrsvvguj6gsugka",
      "iripoliri/animated/cyjg4vwbnxuxkgn3v3yz",
    ],
    "review": [

    ]
  }

  const prices = [
    {
      "name": "Animated video",
      "price": "100$ / min"
    },
    {
      "name": "Reel",
      "price": "35$"
    },
    {
      "name": "Meme",
      "price": "15$"
    }
  ]

  const url = "https://res.cloudinary.com/dracbyle6/image/upload/v1716653247/samples/landscapes/beach-boat.jpg"

  const myImage = cld.image('sample');
  const [hoveredVideoId, setHoveredVideoId] = useState(null);

  const VideoGallery = ({ videos }) => {
    return (
      <>
        <div className="hidden md:flex md:flex-wrap md:gap-10 md:justify-center">
          {videos.map(videoId => (
            <VideoComponent key={videoId} videoId={videoId} />
          ))}
        </div>
        <div className="w-full md:hidden">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={5}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="mySwiper"
          >
            {videos.map((videoId) => (
              <SwiperSlide key={videoId}>
                <div className="flex justify-center items-center h-full w-full">
                  <VideoComponent videoId={videoId} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </>
    )
  }

  const VideoComponent = ({ videoId }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div 
        className="video-container relative w-[240px] h-[420px] max-w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AdvancedVideo 
          className={`
            absolute top-0 left-0 transition-opacity duration-400 ease-in-out z-20
            ${isHovered ? 'opacity-100' : 'opacity-0'}
          `}
          cldVid={cld.video(videoId).quality('auto')}
          controls
        />
        <div
          className={`
            absolute top-0 left-0 w-[240px] h-[420px] bg-cover bg-center transition-opacity duration-700 ease-in-out
            ${isHovered ? 'opacity-0' : 'opacity-100'}
          `}
          style={{ backgroundImage: `url(${url})` }}
          >
        
          <div className="absolute top-0 left-0 p-4 bg-slate-800 bg-opacity-80 text-white w-full">
            <h2 className="text-md font-bold text-center">Lisa adventure</h2>
          </div>

          <div className="absolute bottom-0 left-0 p-4 bg-slate-800 bg-opacity-60 text-white w-full">
            <p className="text-xs">This is a highlight of my recent partnership with Marriot</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="w-full md:px-20 max-w-full">
      <div className="flex flex-col p-5 gap-10 w-full md:gap-20">
        <nav className="flex flex-col justify-between md:flex-row">
          <p>Iripoliri</p>
          <ul>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#projects">PROJECTS</a></li>
            <li><a href="#pricing">PRICING</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>

        <div className='w-full'>
          <h1 className="flex items-center justify-center text-2xl text-center md:text-6xl">
          IRIPOLIRI<img
            alt="Gatsby G Logo"
            src={portrait}
            className="rounded-t-full rounded-r-full mx-5 w-1/4"
          />CREATIVE AGENCY
          </h1>
        </div>

        <div className='flex flex-col w-full gap-10'>
          <h1 id="about" className='text-3xl text-center'>Who am I ?</h1>
          <p className='w-full text-justify md:w-1/3'>{profilDescription}</p>

          <h1 id="projects" className="text-2xl text-center">Lisa content</h1>
          <VideoGallery videos={videos.regular}/>

          <h1 className="text-2xl text-center">Animated content</h1>
          <VideoGallery videos={videos.animatedDesign}/>

          <h1 className="text-2xl text-center">Reviews</h1>
          <VideoGallery videos={videos.animatedDesign}/>
          
          <h1 className="text-2xl text-center">Pricing</h1>
          <div id="pricing" className='flex gap-20 flex-col md:flex-row'>
          {
            prices.map(price => (
              <div id="price-card" className='bg-slate-500 w-2/3 mx-auto p-5 rounded-lg text-slate-200 md:w-1/3'>
                <p className='text-2xl'>{price.name}</p>
                <span className='text-4xl'>{price.price}</span>
              </div>
            ))
          }
          </div>

          <div id="contact" className='flex flex-wrap justify-center gap-5 items-center w-full'>
            <a href="mailto:irina@iripoliri.com">
              <div className='bg-slate-400 px-5 py-2 rounded-lg w-full'>
                <span className='font-bold'>irina@iripoliri.com</span>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/irina-poletaeva-60b388280/">
              <div className='flex items-center gap-2'>
                <img width={40} src={linkedin}/>
              </div>
            </a>

            <a href="https://www.instagram.com/iripoliri/">
              <div className='flex items-center gap-2'>
                <img width={40} src={instagram}/>
                <p className='font-bold'>@Iripoliri</p>
              </div>
            </a>
          </div>
          
        </div>

      </div>
      <footer className='bg-slate-400 px-2 py-5 mt-5 w-full'>
            <p>Copyright © 2024, Irina Poletaeva</p>
        </footer>
      
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
