import React, { useState } from 'react';
import { AdvancedVideo } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";
import logo from "../images/icon.png";
import instagram from "../images/instagram.svg";
import linkedin from "../images/linkedin.png";
import portrait from "../images/portrait.jpeg";
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

  const profilDescription = `Hello! I'm Irina, a dedicated content creator with a passion for showcasing the unique charm of hotels. Over the past year, I've been collaborating with hotels to produce visually captivating content that highlights their establishments in the best light.

I specialize in visual storytelling, using creative camera angles and dynamic video techniques to craft engaging videos. My work includes creating and editing posts and reels that are perfectly suited for social media, designed to boost online visibility. I also share this content with my network to further enhance the hotel's presence and attract more visitors.`;

const videos = {
  "regular": [
    {
      "title": "Lisa content",
      "desc": "Description of lisa content",
      "cover": "https://res.cloudinary.com/dracbyle6/image/upload/v1725102590/iripoliri/thumbnails/photo_2024-08-31_15-09-29_mpvvqc.jpg",
      "videoId": "iripoliri/uos8eykf2ujhkfbp1o47"
    },
    {
      "title": "Lisa content",
      "desc": "Description of lisa content",
      "cover": "https://res.cloudinary.com/dracbyle6/image/upload/v1725102589/iripoliri/thumbnails/photo_2024-08-31_15-09-24_phgqmj.jpg",
      "videoId": "iripoliri/mdba1lecwe4dkwdjswgx"
    },
    {
      "title": "Lisa content",
      "desc": "Description of lisa content",
      "cover": "https://res.cloudinary.com/dracbyle6/image/upload/v1725102590/iripoliri/thumbnails/photo_2024-08-31_15-09-29_mpvvqc.jpg",
      "videoId": "iripoliri/uos8eykf2ujhkfbp1o47"
    },
    {
      "title": "Lisa content",
      "desc": "Description of lisa content",
      "cover": "https://res.cloudinary.com/dracbyle6/image/upload/v1725102589/iripoliri/thumbnails/photo_2024-08-31_15-09-24_phgqmj.jpg",
      "videoId": "iripoliri/uos8eykf2ujhkfbp1o47"
    }
  ],
  "animatedDesign": [
    {
      "title": "Lisa content",
      "desc": "Description of lisa content",
      "cover": "https://res.cloudinary.com/dracbyle6/image/upload/v1725102589/iripoliri/thumbnails/photo_2024-08-31_15-09-24_phgqmj.jpg",
      "videoId": "iripoliri/mdba1lecwe4dkwdjswgx"
    },
    {
      "title": "Lisa content",
      "desc": "Description of lisa content",
      "cover": "https://res.cloudinary.com/dracbyle6/image/upload/v1725102590/iripoliri/thumbnails/photo_2024-08-31_15-09-29_mpvvqc.jpg",
      "videoId": "iripoliri/uos8eykf2ujhkfbp1o47"
    },
    {
      "title": "Lisa content",
      "desc": "Description of lisa content",
      "cover": "https://res.cloudinary.com/dracbyle6/image/upload/v1725102589/iripoliri/thumbnails/photo_2024-08-31_15-09-24_phgqmj.jpg",
      "videoId": "iripoliri/uos8eykf2ujhkfbp1o47"
    }
  ],
  "review": [
    {
      "title": "Lisa content",
      "desc": "Description of lisa content",
      "cover": "",
      "videoId": "iripoliri/animated/vubkhrrsvvguj6gsugka"
    },
    {
      "title": "Lisa content",
      "desc": "Description of lisa content",
      "cover": "",
      "videoId": "iripoliri/animated/cyjg4vwbnxuxkgn3v3yz"
    }
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
      "name": "Memes",
      "price": "15$"
    }
  ]

  const VideoGallery = ({ videos }) => {
    return (
      <>
        <div className="hidden w-full justify-center md:flex md:flex-wrap md:gap-6">
          {videos.map(video => (
            <VideoComponent key={video.videoId} videoId={video.videoId} cover={video.cover} title={video.title} desc={video.desc}/>
          ))}
        </div>
        <div className="w-full md:hidden">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={5}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="mySwiper w-full h-full"
          >
            {videos.map((video) => (
              <SwiperSlide key={video.videoId}>
                <div className="flex justify-center items-center h-full w-full">
                  <VideoComponent key={video.videoId} videoId={video.videoId} cover={video.cover} title={video.title} desc={video.desc}/>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </>
    )
  };

  const VideoComponent = ({ videoId, cover, title, desc }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div 
        className="video-container relative w-full md:w-[calc(25%-1rem)] aspect-[9/16] mb-6 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AdvancedVideo 
          className={`
            w-full absolute top-0 left-0 transition-opacity duration-400 ease-in-out z-20
            ${isHovered ? 'opacity-100' : 'opacity-0'}
          `}
          cldVid={cld.video(videoId).quality('auto')}
          controls
        />
        <div
          className={`
            absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-700 ease-in-out
            ${isHovered ? 'opacity-0' : 'opacity-100'}
          `}
          style={{ backgroundImage: `url(${cover})`}}
        >
          <div className="absolute top-0 left-0 p-4 bg-slate-800 bg-opacity-80 text-white w-full">
            <h2 className="text-md font-bold text-center">{title}</h2>
          </div>
          <div className="absolute bottom-0 left-0 p-4 bg-slate-800 bg-opacity-60 text-white w-full">
            <p className="text-xs">{desc}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className='bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen  scroll-smooth'>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="py-6 flex justify-between items-center">
          <p className="text-xl font-bold text-accent">Iripoliri</p>
          <ul className="hidden md:flex space-x-8">
            {['ABOUT', 'PROJECTS', 'PRICING', 'CONTACT'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-accent transition-all duration-300">{item}</a>
              </li>
            ))}
          </ul>
        </nav>

        <header className="py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 flex items-center justify-center flex-wrap">
            IRIPOLIRI
            <img
              alt="Irina's Portrait"
              src={portrait}
              className="rounded-full w-32 h-32 mx-4 my-2 border-4 border-white shadow-lg"
            />
            CREATIVE AGENCY
          </h1>
        </header>

        <section className="mb-16">
          <div className='flex flex-col items-center mb-20'>
            <h2 className='text-2xl font-semibold mb-4'>Contact me</h2>
            <div className='flex items-center space-x-3'>
              <a href="mailto:irina@iripoliri.com" className="bg-accent text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
                irina@iripoliri.com
              </a>
              <a href="https://www.linkedin.com/in/irina-poletaeva-60b388280/" className="transition-transform duration-300 hover:scale-110">
                <img width={40} src={linkedin} alt="LinkedIn" />
              </a>
              <a href="https://www.instagram.com/iripoliri/" className="transition-transform duration-300 hover:scale-110">
                <img width={40} src={instagram} alt="Instagram" />
              </a>
            </div>
            
          </div>

          <div id="about" className="mb-16">
            <h2 className='text-3xl font-bold text-center text-secondary mb-6'>Who am I?</h2>
            <p className='max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed text-justify'>{profilDescription}</p>
          </div>

          <div id="projects" className="mb-16">
            {Object.entries(videos).map(([category, videoList]) => (
              <div key={category} className="mb-12">
                <h2 className="text-3xl font-bold text-center text-secondary mb-8">{category.charAt(0).toUpperCase() + category.slice(1)} Content</h2>
                <VideoGallery videos={videoList} />
              </div>
            ))}
          </div>

          <div id="pricing" className="mb-16">
            <h2 className="text-3xl font-bold text-center text-secondary mb-8">Pricing</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {prices.map((price, index) => (
                <div key={index} className='bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105'>
                  <div className='bg-secondary text-white p-4'>
                    <h3 className='text-xl font-semibold'>{price.name}</h3>
                  </div>
                  <div className='p-6'>
                    <p className='text-3xl font-bold text-accent'>{price.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      
      <footer className='bg-secondary text-white py-6'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Irina Poletaeva. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Iripoliri Creative Agency</title>;
