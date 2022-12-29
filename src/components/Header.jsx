import { useState } from "react";
import logo from '../assets/thierry.png'

export default function () {

    const [currentLink , setCurrentLink] = useState(0)
    const navLikns = ['Home' , 'About me' , 'Services' , 'Experiences', 'Projects']

    const handleActiveLink = (index) => {
        console.log(currentLink)
        setCurrentLink(index)
    }
    
  return (
    <header>
        {/* <img src={logo} alt="thierry" srcset="" /> */}
        <div className="logo">
            <span className="first-letter">T</span>
            <span >hierry</span>
        </div>
        <div>
        <ul>
          {
            navLikns.map((link , index) => <li key={index} onClick={() => handleActiveLink(index)} className={currentLink == index ? 'active' : ''}>{link}</li>)
          }
      </ul>
      <button>Hire me</button>
        </div>
    </header>
  );
}
