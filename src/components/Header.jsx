
import Navigation from "./Navigation";

export default function () {
 
  const navLikns = ["Home", "About me", "Services", "Experiences", "Projects"];

 

  return (
    <header>
      <div className="logo">
        <span className="first-letter">T</span>
        <span>hierry</span>
      </div>
       <Navigation/>
        <button><a href="#Contact">Contact me</a></button>
    </header>
  );
}
