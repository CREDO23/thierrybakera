import { RxHamburgerMenu } from "react-icons/rx";
import {MdCancelPresentation} from 'react-icons/md'
import { useState } from "react";

export default function () {

    const [currentLink, setCurrentLink] = useState(0);
    const [hamburgerOpen , setHamburgerOpen] = useState(false);


  const navLikns = ["Home", "About me", "Services", "Experiences", "Projects"];

  const handleActiveLink = (index) => {
    console.log(currentLink);
    setCurrentLink(index);
  };

  return (
    <nav>
      <div className="hamburger" onClick={() => setHamburgerOpen(!hamburgerOpen)}>
      {
        hamburgerOpen ? <MdCancelPresentation className={hamburgerOpen ? 'cancel-hamburger' : ''} /> :  <RxHamburgerMenu />
      }
      </div>
      <ul className={hamburgerOpen ? 'mobile-menu' : ''}>
        {navLikns.map((link, index) => (
          <li
            key={index}
            onClick={() => handleActiveLink(index)}
            className={currentLink == index ? "active" : ""}
          >
            <a href={'#'+link}>{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
