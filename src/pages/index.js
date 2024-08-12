import * as React from "react"
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

  const myImage = cld.image('sample');

  return (
    <main className="p-10">
      <nav className="flex justify-between">
        <p>Iripoliri</p>
        <ul>
          <li>HOME</li>
          <li>PROJECT</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </nav>
      <h1 className="flex items-center text-4xl font-bold text-center">
      CREA<img
        alt="Gatsby G Logo"
        src={portrait}
        width={100}
        className="rounded-t-full rounded-r-full"
      />TIVE LISA
      </h1>
      
      <div className="flex gap-10">

      <AdvancedVideo 
      width="240"
      cldVid={cld.video('iripoliri/uos8eykf2ujhkfbp1o47').quality('auto')}
      controls
      />
      <AdvancedVideo 
      width="240"
      cldVid={cld.video('iripoliri/mdba1lecwe4dkwdjswgx').quality('auto')}
      controls
      />
      <AdvancedVideo 
      width="240"
      cldVid={cld.video('iripoliri/uos8eykf2ujhkfbp1o47').quality('auto')}
      controls
      />
      </div>
    
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
