import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import { AdvancedVideo } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";
import { videoCodec } from "@cloudinary/url-gen/actions/transcode";
import { auto } from "@cloudinary/url-gen/qualifiers/videoCodec";
import { scale } from "@cloudinary/url-gen/actions/resize";

import logo from "../images/icon.png";
import instagram from "../images/instagram.svg";
import linkedin from "../images/linkedin.png";
import portrait from "../images/portrait.jpeg";

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
  "nature": [
    {
      "title": "Canyon Dashbashi",
      "desc": "Description of lisa content",
      "cover": "https://res.cloudinary.com/dracbyle6/image/upload/f_auto,q_auto/v1/iripoliri/thumbnails/canyon_dashbashi",
      "videoId": "iripoliri/nature/canyon_dashbashi"
    },
    {
      "title": "Gomis Mta",
      "desc": "Description of lisa content",
      "cover": "https://res.cloudinary.com/dracbyle6/image/upload/f_auto,q_auto/v1/iripoliri/thumbnails/gomis_mta",
      "videoId": "iripoliri/nature/gomis_mta"
    },
    {
      "title": "Banana Oasis",
      "desc": "Description of lisa content",
      "cover": "https://res.cloudinary.com/dracbyle6/image/upload/f_auto,q_auto/v1/iripoliri/thumbnails/banana_oasis",
      "videoId": "iripoliri/nature/banana_oasis"
    },
    {
      "title": "Gonio Fortress",
      "desc": "Description of lisa content",
      "cover": "",
      "videoId": "iripoliri/nature/gonio_fortress"
    },
    {
      "title": "Magnet sands",
      "desc": "Description of lisa content",
      "cover": "https://res.cloudinary.com/dracbyle6/image/upload/f_auto,q_auto/v1/iripoliri/thumbnails/magnet_sands",
      "videoId": "iripoliri/nature/magnet_sands"
    }
  ],
  "animated": [
    {
      "title": "Introduction",
      "desc": "Description of lisa content",
      "cover": "",
      "videoId": "iripoliri/animated content/intro"
    },
    {
      "title": "Mold 1",
      "desc": "Description of lisa content",
      "cover": "",
      "videoId": "iripoliri/animated content/mold_1"
    },
    {
      "title": "Mold 2",
      "desc": "Description of lisa content",
      "cover": "",
      "videoId": "iripoliri/animated content/mold_2"
    },
    {
      "title": "My brain",
      "desc": "Description of lisa content",
      "cover": "",
      "videoId": "iripoliri/animated content/lisa_brain"
    },
    {
      "title": "Kobuleti",
      "desc": "Description of lisa content",
      "cover": "",
      "videoId": "iripoliri/animated content/kobuleti"
    }
  ],
  "hotel cooperation": [
    {
      "title": "Cottage turo house",
      "desc": "Description of lisa content",
      "cover": "https://res.cloudinary.com/dracbyle6/image/upload/f_auto,q_auto/v1/iripoliri/thumbnails/turo_house",
      "videoId": "iripoliri/hotels cooperations/turo_house"
    },
    {
      "title": "Villa golden sunset",
      "desc": "Description of lisa content",
      "cover": "https://res.cloudinary.com/dracbyle6/image/upload/f_auto,q_auto/v1/iripoliri/thumbnails/villa_golden_sunset_review",
      "videoId": "iripoliri/hotels cooperations/villa_golden_sunset"
    },
    {
      "title": "Villa golden sunset, Bath time",
      "desc": "Description of lisa content",
      "cover": "https://res.cloudinary.com/dracbyle6/image/upload/f_auto,q_auto/v1/iripoliri/thumbnails/villa_golden_sunet_bath",
      "videoId": "iripoliri/hotels cooperations/villa_golden_sunset_bath_time"
    },
    {
      "title": "Hotel monument 1880",
      "desc": "Description of lisa content",
      "cover": "https://res.cloudinary.com/dracbyle6/image/upload/f_auto,q_auto/v1/iripoliri/thumbnails/hotel_monument_1880",
      "videoId": "iripoliri/hotels cooperations/hotel_monument_1880"
    },
    {
      "title": "Hotel mtirala",
      "desc": "Description of lisa content",
      "cover": "",
      "videoId": "iripoliri/hotels cooperations/hotel_mtirala"
    },
    {
      "title": "Hotel mtirala, tea time",
      "desc": "Description of lisa content",
      "cover": "",
      "videoId": "iripoliri/hotels cooperations/hotel_mtirala_tea_time"
    },
    {
      "title": "Cottage la familia",
      "desc": "Description of lisa content",
      "cover": "https://res.cloudinary.com/dracbyle6/image/upload/f_auto,q_auto/v1/iripoliri/thumbnails/la_familia_review",
      "videoId": "iripoliri/hotels cooperations/la_familia_cottage"
    },
    {
      "title": "Cottage la familia summer time",
      "desc": "Description of lisa content",
      "cover": "https://res.cloudinary.com/dracbyle6/image/upload/f_auto,q_auto/v1/iripoliri/thumbnails/la_familia_summer_time",
      "videoId": "iripoliri/hotels cooperations/la_familia_cottage_summer_time"
    },
    {
      "title": "Hotel graf Tbilisi",
      "desc": "Description of lisa content",
      "cover": "https://res.cloudinary.com/dracbyle6/image/upload/f_auto,q_auto/v1/iripoliri/thumbnails/hotel_graf_t",
      "videoId": "iripoliri/hotels cooperations/hotel_graf_t"
    },
    {
      "title": "Chateau iveri",
      "desc": "Description of lisa content",
      "cover": "https://res.cloudinary.com/dracbyle6/image/upload/f_auto,q_auto/v1/iripoliri/thumbnails/chateau_iveri",
      "videoId": "iripoliri/hotels cooperations/chateau_iveri_bath_time"
    },
  ],
  "humour": [
    {
      "title": "",
      "desc": "Description of lisa content",
      "cover": "",
      "videoId": "iripoliri/humour content/cv0qsxxd0c2gwrpckijs"
    },
    {
      "title": "",
      "desc": "Description of lisa content",
      "cover": "",
      "videoId": "iripoliri/humour content/vboc8zx7hqgdboi1opjb"
    },
    {
      "title": "",
      "desc": "Description of lisa content",
      "cover": "",
      "videoId": "iripoliri/humour content/o7kb9pxvdclbklbzlrbb"
    },
    {
      "title": "",
      "desc": "Description of lisa content",
      "cover": "",
      "videoId": "iripoliri/humour content/ayfrz3obhdzb1kmhngxh"
    },
    {
      "title": "",
      "desc": "Description of lisa content",
      "cover": "",
      "videoId": "iripoliri/humour content/rn5j32mx4ys84wskg3al"
    },
    {
      "title": "",
      "desc": "Description of lisa content",
      "cover": "",
      "videoId": "iripoliri/humour content/ccjdq2hnuid8y3kcprvj"
    },
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
  
    const videoSource = cld.video(videoId)
      .quality('auto')
      .format('auto')
      .transcode(videoCodec(auto()))
      .resize(scale().width(480).height(854));
  
    return (
      <div 
        className="video-container relative w-full md:w-[calc(25%-1rem)] aspect-[9/16] mb-6 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`
            absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-700 ease-in-out
            ${isHovered ? 'opacity-0 z-5' : 'opacity-100 z-30'}
          `}
        >
          <div className="absolute top-0 left-0 p-4 bg-slate-800 bg-opacity-80 text-white w-full">
            <h2 className="text-md font-bold text-center">{title}</h2>
          </div>
          <div className="absolute bottom-0 left-0 p-4 bg-slate-800 bg-opacity-60 text-white w-full">
            <p className="text-xs">{desc}</p>
          </div>
        </div>
        <AdvancedVideo 
          className={`
            w-full h-full absolute top-0 left-0 transition-opacity duration-400 ease-in-out
            ${isHovered ? 'z-20' : 'z-10'}
          `}
          cldVid={videoSource}
          controls={isHovered}
          preload="metadata"
          poster={cover}
        />
      </div>
    );
  };

  return (
    <main className='font-mulish bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen scroll-smooth'>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="py-6 flex justify-between items-center">
          <p className="font-prata text-xl font-bold text-accent">iripoliri</p>
          <ul className="hidden md:flex space-x-8">
            {['ABOUT', 'PROJECTS', 'PRICING', 'CONTACT'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-accent transition-all duration-300">{item}</a>
              </li>
            ))}
          </ul>
        </nav>

        <header className="py-16 text-center">
          <h1 className="font-prata text-4xl md:text-6xl text-gray-900 flex items-center justify-center flex-wrap">
            iripoliri
            <img
              alt="Irina's Portrait"
              src={portrait}
              className="rounded-full w-32 h-32 mx-4 my-2 border-4 border-white shadow-lg"
            />
            Creative Agency
          </h1>
        </header>

        <section className="mb-16">
          <div className='flex flex-col items-center mb-20'>
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
            <h2 className='font-prata text-3xl text-center text-secondary mb-6'>Who am I ?</h2>
            <p className='max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed text-justify'>{profilDescription}</p>
          </div>

          <div id="projects" className="mb-16">
            {Object.entries(videos).map(([category, videoList]) => (
              <div key={category} className="mb-12">
                <h2 className="font-prata text-3xl font-bold text-center text-secondary mb-8">{category.charAt(0).toUpperCase() + category.slice(1)} Content</h2>
                <VideoGallery videos={videoList} />
              </div>
            ))}
          </div>

          <div id="pricing" className="mb-16">
            <h2 className="font-prata text-3xl font-bold text-center text-secondary mb-8">Pricing</h2>
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
