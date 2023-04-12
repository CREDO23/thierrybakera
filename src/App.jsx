import  { Toaster } from 'react-hot-toast';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./styles/css/index.css";
import 'aos/dist/aos.css'
import AOS from 'aos'
import {useEffect} from 'react'

function App() {

  useEffect(() => {
    AOS.init();
  },[])

  return (
    <>
      <Header />
      <main className="main">
      <Home/>
      <About/>
      <Services/>
      <Experiences/>
      <Projects/>
      <Contact/>
      <Toaster/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
