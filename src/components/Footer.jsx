import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Navigation from "./Navigation";

export default function () {
  const navLikns = ["Home", "About me", "Services", "Experiences", "Projects"];
  return (
    <footer>
      <div className="navigation-section">
        <ul>
          {navLikns.map((link, index) => (
            <li key={index} onClick={() => handleActiveLink(index)}>
              <a href={"#" + link}>{link}</a>
            </li>
          ))}
        </ul>
        <ul className="media">
          <a href="https://github.com/CREDO23">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/thierrybakera/">
            <FaLinkedin size={20} />
          </a>
          <a href="https://twitter.com/ThierryBakera">
            <FaTwitter size={20} />
          </a>
        </ul>
      </div>
    </footer>
  );
}
