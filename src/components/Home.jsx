import profil from "../assets/me.png";
import { FaCheck } from "react-icons/fa";
import mycv from '../assets/Credo-CV.pdf'

export default function () {
  return (
    <section  id="Home" className="home">
      <div data-aos='fade-right' className="catch-phrase">
        <h1>
          Hi , I am Thierry <br /> <span>Software Developer</span>
        </h1>
        <p>
          I Design and code beautifully Web Application and <br /> I love what I
          do
        </p>
        <div className="buttons">
          <button className="cv"> <a download="Credo-CV.pdf" href={mycv} >Download My Cv</a></button>
        </div>
      </div>
      <div  className="profil">
        <img width={460} height={550} src={profil} alt="" srcset="" />
        <div  data-aos='fade-up' className="developper">
          <div className="check">
            <FaCheck />
          </div>
          <div>
            <h4>Web Developper</h4>
            <p>Creatives Websites for you </p>
          </div>
        </div>
        <div  data-aos='fade-down' className="freelancer">
          <div className="check">
            <FaCheck />
          </div>
          <div>
            <h4>Freelancer</h4>
            <p>You can hire me now</p>
          </div>
        </div>
      </div>
    </section>
  );
}
