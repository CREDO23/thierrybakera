import {FaFacebook , FaGithub , FaLinkedin , FaInstagram} from 'react-icons/fa'


export default function () {
  return (
    <footer>
      <div className="hire-me-section">
        <div>
          <span>Have any project in mind ?</span>
          <div></div>
        </div>
        <button>Hire me</button>
      </div>
      <div className="navigation-section">
          <ul>
            <li>About me</li>
            <li>Projects</li>
            <li>Services</li>
            <li>Experiences</li>
          </ul>
          <ul className="media">
            <li><FaFacebook size={20}/></li>
            <li><FaGithub size={20}/></li>
            <li><FaInstagram size={20}/></li>
            <li><FaLinkedin size={20}/></li>
        </ul>
      </div>
    </footer>
  );
}
