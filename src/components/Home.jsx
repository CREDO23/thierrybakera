import profil from "../assets/profil.png";
import { FaCheck } from "react-icons/fa";

export default function () {
  return (
    <section id="Home" className="home">
      <div className="catch-phrase">
        <h1>
          Hi , I am Thierry <br /> <span>Software Developper</span>
        </h1>
        <p>
          I Design and code beautifully Web Application and <br /> I love what I
          do
        </p>
        <div className="buttons">
          <button className="cv">Download CV</button>
          <button className="hire-me">Hire me now</button>
        </div>
      </div>
      <div className="profil">
        <img src={profil} alt="" srcset="" />
        <div className="developper">
          <div className="check">
            <FaCheck />
          </div>
          <div>
            <h4>Web Developper</h4>
            <p>Creatives Websites for you </p>
          </div>
        </div>
        <div className="freelancer">
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
