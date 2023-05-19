
import  Navbar from "./components/Navbar";
import IntroSection from "./components/IntroSection"
import About from "./components/About";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "../src/components/App.css"
function App() {
  return (
  <div>
  <Navbar/>
  <IntroSection/>
  <About/>
  <Services/>
  <Resume/>
  <Contact/>
  <Footer/>
  </div>
  
  );
}

export default App;