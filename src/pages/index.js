import React, { useState } from 'react';
import { AdvancedVideo } from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import logo from "../images/icon.png"
import instagram from "../images/instagram.svg"
import portrait from "../images/portrait.jpeg"

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

  const VideoComponent = ({ videoId }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div 
        className="video-container relative w-[240px] h-[420px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AdvancedVideo 
          width="240"
          className={`
            absolute top-0 left-0 transition-opacity duration-400 ease-in-out z-10
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
    <main className="px-5 pt-5 md:px-20">
      <nav className="flex flex-col justify-between md:flex-row">
        <p>Iripoliri</p>
        <ul>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#pricing">PRICING</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>
      
      <div className="flex flex-col items-center gap-20">
        <h1 className="flex items-center text-6xl text-center">
        CREA<img
          alt="Gatsby G Logo"
          src={portrait}
          width={100}
          className="rounded-t-full rounded-r-full mx-5"
        />TIVE LISA
        </h1>

        <h1 id="about" className='text-3xl'>Who am I ?</h1>
        <p className='w-full text-justify md:w-1/3'>{profilDescription}</p>

        <h1 id="projects" className="text-2xl">Lisa content</h1>
        <div className="flex flex-wrap gap-10 justify-center">
        {
          videos.regular.map(videoId => (
            <VideoComponent key={videoId} videoId={videoId} />
          ))
        }
        </div>
        <h1 className="text-2xl">Animated content</h1>
        <div className="flex flex-wrap gap-10 justify-center">
        {
          videos.animatedDesign.map(videoId => (
            <VideoComponent key={videoId} videoId={videoId} />
          ))
        }
        </div>

        <h1 className="text-2xl">Reviews</h1>
        <div className="flex flex-wrap gap-10 justify-center">
        {
          videos.regular.map(videoId => (
            <div className="bg-black w-[240px] h-[420px]"></div>
          ))
        }
        </div>
        
        <h1 className="text-2xl">Pricing</h1>
        <div id="pricing" className='flex gap-20 flex-col md:flex-row'>
        {
          prices.map(price => (
            <div id="price-card" className='bg-slate-500 p-5 rounded-lg text-slate-200 w-full md:w-1/3'>
              <p className='text-2xl'>{price.name}</p>
              <span className='text-4xl'>{price.price}</span>
            </div>
          ))
        }
        </div>

        <div id="contact" className='flex gap-5 items-center'>
          <a href="https://www.instagram.com/iripoliri/">
            <div className='flex items-center gap-2'>
              <img width={40} src={instagram}/>
              <p className='font-bold'>@Iripoliri</p>
            </div>
          </a>

          <a href="mailto:irina@iripoliri.com">
            <div className='bg-slate-400 px-10 py-4 rounded-lg'>
              <span className='font-bold'>irina@iripoliri.com</span>
            </div>
          </a>
        </div>

        <footer className='bg-slate-400 px-2 py-5 mt-5 w-full'>
            <p>Copyright © 2024, Irina Poletaeva</p>
        </footer>
      </div>
      
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
