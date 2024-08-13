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

  const myImage = cld.image('sample');
  const [hoveredVideoId, setHoveredVideoId] = useState(null);

  const VideoComponent = ({ videoId }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div 
        className="video-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AdvancedVideo 
          width="240"
          className={`
            flex items-center justify-center border-2 rounded-md transition duration-700 ease-in-out
            ${isHovered ? 'opacity-100' : 'opacity-80'}
          `}
          cldVid={cld.video(videoId).quality('auto')}
          controls={isHovered}
        />
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
        <h1 className="flex items-center text-4xl font-bold text-center">
        CREA<img
          alt="Gatsby G Logo"
          src={portrait}
          width={100}
          className="rounded-t-full rounded-r-full"
        />TIVE LISA
        </h1>

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
            <div className="bg-black w-[240px] h-[380px]"></div>
          ))
        }
        </div>
      </div>
      
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
