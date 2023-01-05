
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./styles/css/index.css";

function App() {

  return (
    <>
      <Header />
      <main>
      <Home/>
      <About/>
      <Services/>
      <Experiences/>
      <Projects/>
      <Contact/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
