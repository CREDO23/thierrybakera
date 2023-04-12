import chataw from '../assets/projects_images/chataw.png';
import quiz from '../assets/projects_images/quiz.png';
import spes from '../assets/projects_images/spes.png';
import streaming from '../assets/projects_images/streaming.png';

export default function () {
  return (
    <section id="Projects" className="projects">
      <h2>My Recents Projects</h2>
      <div className="content">
        <div data-aos='flip-left'>
          <div className="project-img">
            <img src={chataw} alt="" srcset="" />
          </div>
          <hr />
          <div className="description">
            <p>
            A Real Time Chat App that allows people to discuss either on a private chat or a channel chat .
            </p>
            <button> <a href="https://chataw.vercel.app/home">View more</a> </button>
          </div>
        </div>
        <div data-aos='flip-left'>
          <div className="project-img">
            <img src={quiz} alt="" srcset="" />
          </div>
          <hr />
          <div className="description">
            <p>
              A Quiz App . <br /> Enables the user to undertake a series of questions on Javascript language.</p>
            <button> <a href="https://credo23.github.io/QuizApp/">View more</a> </button>
          </div>
        </div>
        <div data-aos='flip-left'>
          <div className="project-img">
            <img src={spes} alt="" srcset="" />
          </div>
          <hr />
          <div className="description">
            <p>
              A Quick Book app , its allow you to keep track your financials functions like incomes , expenses and can generate a repport .
            </p>
            <button> <a href="https://spes-sigma.vercel.app/">View more</a> </button>
          </div>
        </div>
        <div data-aos='flip-left'>
          <div className="project-img">
            <img src={streaming} alt="" srcset="" />
          </div>
          <hr />
          <div className="description">
            <p>
             A streaming web site that consume the spotify API , its allow you to listen and have acess to your spotify playlist and songs.
            </p>
            <button> <a href="https://streamingcr.netlify.app/">View more</a> </button>
          </div>
        </div>
      </div>
    </section>
  );
}
