import profil from "../assets/profil.png";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function () {
  return (
    <section className="about">
      <div className="image">
        <img src={profil} alt="" srcset="" />
      </div>
      <div className="about-me">
        <div>
          <h2>Developing With a Passion While Exploring The World.</h2>
          <p>
            Since beginning my journey as a freelance developper , I’ve done
            remote work for agencies , consulted for statups , and collaborate
            with talend people to create digital products for both business and
            consumer use . I’m quietly confident , naturally curious , and
            perpetually working on improving my chops one design problem at a
            time
          </p>
          <button>Contact Me</button>
        </div>
        <div className="media-socials">
          <h3>You can also follow me here :</h3>
          <ul>
            <li className="instagram">
              <FaInstagram size={30} />
             <span>INSTAGRAM</span> 
            </li>
            <li className="linkedin">
              <FaLinkedin size={30} />
              <span>LINKEDIN</span> 
            </li>
            <li className="twitter">
              <FaTwitter size={30} />
              <span>TWITTER</span> 
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
