import React, { useState } from 'react';
import { AdvancedVideo } from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import logo from "../images/icon.png"
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
            absolute top-0 left-0 transition-opacity duration-400 ease-in-out z-0
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
    <main className="p-20">
      <nav className="flex justify-between">
        <p>Iripoliri</p>
        <ul>
          <li>HOME</li>
          <li>PROJECT</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
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

        <h1 className='text-3xl'>Who am I ?</h1>
        <p className='w-1/3'>{profilDescription}</p>

        <h1 className="text-2xl">Lisa content</h1>
        <div className="flex flex-wrap gap-10">
        {
          videos.regular.map(videoId => (
            <VideoComponent key={videoId} videoId={videoId} />
          ))
        }
        </div>
        <h1 className="text-2xl">Animated content</h1>
        <div className="flex flex-wrap gap-10">
        {
          videos.animatedDesign.map(videoId => (
            <VideoComponent key={videoId} videoId={videoId} />
          ))
        }
        </div>

        <h1 className="text-2xl">Reviews</h1>
        <div className="flex flex-wrap gap-10">
        {
          videos.regular.map(videoId => (
            <div className="bg-black w-[240px] h-[420px]"></div>
          ))
        }
        </div>
      </div>
      
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
