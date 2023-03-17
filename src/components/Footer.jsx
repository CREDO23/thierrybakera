import {FaFacebook , FaGithub , FaLinkedin , FaInstagram , FaTwitter} from 'react-icons/fa'
import Navigation from './Navigation';


export default function () {
  const navLikns = ["Home", "About me", "Services", "Experiences", "Projects"];
  return (
    <footer>
      <div className="navigation-section">
      <ul>
        {navLikns.map((link, index) => (
          <li
            key={index}
            onClick={() => handleActiveLink(index)}
          >
            <a href={'#'+link}>{link}</a>
          </li>
        ))}
      </ul>
          <ul className="media">
          <li><FaGithub size={20}/></li>
            <li><FaFacebook size={20}/></li>
            <li><FaInstagram size={20}/></li>
            <li><FaLinkedin size={20}/></li>
             <li><FaTwitter size={20}/></li>
        </ul>
      </div>
    </footer>
  );
}
