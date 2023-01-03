
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Experiences from "./components/Experiences";
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
      <Footer />
      </main>
    </>
  );
}

export default App;
