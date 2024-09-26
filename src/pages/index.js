import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import logo from "../images/icon.png";
import instagram from "../images/instagram.svg";
import linkedin from "../images/linkedin.png";
import portrait from "../images/portrait.jpeg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const IndexPage = () => {

  const profilDescription = `Hello! I'm Irina, a dedicated content creator with a passion for showcasing the unique charm of hotels. Over the past year, I've been collaborating with hotels to produce visually captivating content that highlights their establishments in the best light.

I specialize in visual storytelling, using creative camera angles and dynamic video techniques to craft engaging videos. My work includes creating and editing posts and reels that are perfectly suited for social media, designed to boost online visibility. I also share this content with my network to further enhance the hotel's presence and attract more visitors.`;
const stats = [
  "https://iripoliri.b-cdn.net/stats/photo_2024-09-26_21-03-42.jpg",
  "https://iripoliri.b-cdn.net/stats/photo_2024-09-26_21-03-28.jpg",
  "https://iripoliri.b-cdn.net/stats/photo_2024-09-26_21-03-51.jpg",
  "https://iripoliri.b-cdn.net/stats/photo_2024-09-26_21-04-13.jpg",
  "https://iripoliri.b-cdn.net/stats/photo_2024-09-26_21-04-10.jpg",
  "https://iripoliri.b-cdn.net/stats/photo_2024-09-26_21-03-48.jpg",
  "https://iripoliri.b-cdn.net/stats/photo_2024-09-26_21-04-16.jpg",
  "https://iripoliri.b-cdn.net/stats/photo_2024-09-26_21-04-04.jpg",
  "https://iripoliri.b-cdn.net/stats/photo_2024-09-26_21-03-14.jpg",
  "https://iripoliri.b-cdn.net/stats/photo_2024-09-26_21-04-07.jpg",
]

const videos = {
  "nature": [
    {
      "title": "Canyon Dashbashi",
      "desc": "Description of lisa content",
      "videoId": "9a5f4f29-1958-4e66-aa86-d5ebd70c8d57"
    },
    {
      "title": "Gomis Mta",
      "desc": "Description of lisa content",
      "videoId": "2f92725d-da15-49df-a2b3-e3e3209bdc28"
    },
    {
      "title": "Banana Oasis",
      "desc": "Description of lisa content",
      "videoId": "f53147d0-25c7-411f-b12a-ec21af126dd1"
    },
    {
      "title": "Gonio Fortress",
      "desc": "Description of lisa content",
      "videoId": "0f9392d6-0f9d-426f-814c-dbf0b6b8c0ae"
    },
    {
      "title": "Magnet sands",
      "desc": "Description of lisa content",
      "videoId": "12550f6c-3eff-4bb5-afa2-ddf7521f7aea"
    },
    {
      "title": "Truso valley",
      "desc": "Description of lisa content",
      "videoId": "8e8a4601-ca34-4780-a438-7ddfe0c7f70d"
    }
  ],
  "animated": [
    {
      "title": "Introduction",
      "desc": "Description of lisa content",
      "videoId": "53d569bd-7d2f-48e4-9699-b1fa4ac01eca"
    },
    {
      "title": "Mold 1",
      "desc": "Description of lisa content",
      "videoId": "1e58fa3c-8bb3-4c79-83ac-fbe8e87ec3b6"
    },
    {
      "title": "Mold 2",
      "desc": "Description of lisa content",
      "videoId": "b56d4485-7804-4c00-95b5-660add00b55c"
    },
    {
      "title": "My brain",
      "desc": "Description of lisa content",
      "videoId": "c08c49d3-eb17-4d20-8ca6-e3b81da36de4"
    },
    {
      "title": "Kobuleti",
      "desc": "Description of lisa content",
      "videoId": "0c44ae4e-83cd-49d3-8396-790b85bf65c1"
    },
    {
      "title": "Frog animated",
      "desc": "Description of lisa content",
      "videoId": "99377dca-1b9d-4adb-8e3e-c8fb060f980b"
    }
  ],
  "hotel cooperation": [
    {
      "title": "Cottage turo house",
      "desc": "Description of lisa content",
      "videoId": "840bc3f4-20d7-448a-9682-8c719af514ef"
    },
    {
      "title": "Villa golden sunset",
      "desc": "Description of lisa content",
      "videoId": "33321eac-8612-4fec-868f-85d5f239c436"
    },
    {
      "title": "Hotel monument 1880",
      "desc": "Description of lisa content",
      "videoId": "ab280622-cfc2-4729-ad01-65548bb28410"
    },
    {
      "title": "Hotel mtirala",
      "desc": "Description of lisa content",
      "videoId": "cdc97df2-8b6c-4d5a-a5bf-c06def5f0651"
    },
    {
      "title": "Cottage la familia",
      "desc": "Description of lisa content",
      "videoId": "10be96db-de7a-4a4b-91d4-7e851c5a6bef"
    },
    {
      "title": "Hotel graf Tbilisi",
      "desc": "Description of lisa content",
      "videoId": "4d587210-b4f6-4c1b-9403-f1c6b746064f"
    },
  ],
  "humour": [
    {
      "title": "",
      "desc": "Description of lisa content",
      "videoId": "2ac435b2-0617-4b56-b879-4ad316d2c1e3"
    },
    {
      "title": "",
      "desc": "Description of lisa content",
      "videoId": "deb2f6b6-1cf0-4a83-a4ad-383e7d69d414"
    },
    {
      "title": "",
      "desc": "Description of lisa content",
      "videoId": "cb44e9fd-6fe9-460f-a671-03db641a5ad7"
    },
    {
      "title": "",
      "desc": "Description of lisa content",
      "videoId": "4fb5af73-4e7e-4f4c-951f-95ad782ba328"
    },
    {
      "title": "",
      "desc": "Description of lisa content",
      "videoId": "74daf718-3fb6-4290-9f24-3fca2364040a"
    },
    {
      "title": "",
      "desc": "Description of lisa content",
      "videoId": "7c6fcfac-6bed-4f88-a5d5-9ba83fdcafee"
    },
  ],
  "aesthetic": [
    {
      "title": "",
      "desc": "Description of lisa content",
      "videoId": "0cdcc127-cb79-4fdc-8ec0-457579a28559"
    },
    {
      "title": "",
      "desc": "Description of lisa content",
      "videoId": "5addc853-1af7-45d1-9b39-4292e2f37563"
    },
    {
      "title": "",
      "desc": "Description of lisa content",
      "videoId": "8503ff49-05a8-4883-a596-10dfa223a44e"
    },
    {
      "title": "",
      "desc": "Description of lisa content",
      "videoId": "c137d024-b454-4435-8d4b-2f7f83eaf11a"
    },
    {
      "title": "",
      "desc": "Description of lisa content",
      "videoId": "74e6caa7-b321-4b70-91b7-ab2c6b9e6b8d"
    },
    {
      "title": "",
      "desc": "Description of lisa content",
      "videoId": "7b2fc7ab-005c-45ca-ae83-16d4742afe4f"
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
            <VideoComponent key={video.videoId} videoId={video.videoId} title={video.title} desc={video.desc}/>
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
                  <VideoComponent key={video.videoId} videoId={video.videoId} title={video.title} desc={video.desc}/>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </>
    )
  };

  const VideoComponent = ({ videoId, title, desc }) => {
    return (
      <div className='rounded-lg' style={{ aspectRatio: '9 / 16', position: 'relative', overflow: 'hidden' }}>
        <iframe 
          id={`video-${videoId}`}
          src={`https://iframe.mediadelivery.net/embed/310366/${videoId}?autoplay=false&loop=false&muted=false&preload=true&responsive=true&controls=0`} 
          loading="lazy" 
          style={{ height: '100%', width: '100%' }} 
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" 
          allowFullScreen={true}
        ></iframe>
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

          <div id="projects" className="mb-16">
            <h2 className="font-prata text-3xl font-bold text-center text-secondary mb-8">My Statistics</h2>
            <div className="w-full justify-center md:flex md:flex-wrap md:gap-6">
              {stats.map((statUrl, index) => (
                <img key={index} className='rounded-lg hover:scale-105 transition-transform duration-200' src={statUrl} style={{width: '200px', height: 'auto', marginBottom: '10px'}}/>
              ))}
            </div>
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

