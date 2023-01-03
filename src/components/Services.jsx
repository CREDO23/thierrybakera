import frontend from "../assets/frontend.png";
import backend from "../assets/backend.png";
import uiux from "../assets/uxui.png";
import { IoIosArrowForward } from "react-icons/io";

export default function () {
  return (
    <section className="services">
      <div className="ui-ux">
       
        <img src={uiux} alt="" srcset="" />

        <div className="comments">
          <div >
            <p>I value simple content structure , clean desugn patterns .</p>
            <p>
              <b>Tools</b>   : Figma , Photoshop , Ullustrator , AdobeXD , Font Awasome
            </p>
          </div>
        </div>
      </div>
      <div className="frontend">
        <img src={frontend} alt="" srcset="" />

        <div  className="comments">
          <div>
            <p>
              I like code things from scratch , and enjoy bringing ideas to file
              in browser.
            </p>

            <p>
               <b>Language</b> : Javascript with React , Redux , Material UI and AJAX
            </p>
          </div>
        </div>
      </div>
      <div className="backend">
      <img src={backend} alt="" srcset="" />

        <div  className="comments">
          <div>
            <p>
              Apart from doing the frontend , I also do the backend well and I
              fell very comfortable on the backend side
            </p>
            <p> <b>Languages</b>  : PHP , Ruby , Python .</p>
          </div>
        </div>
      </div>
    </section>
  );
}