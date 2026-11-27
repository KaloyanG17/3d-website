import { BrowserRouter } from "react-router-dom";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { About, Contact, Experience, Footer, Hero, Lab, Navbar, ScrollGallery, Tech, Works, StarsCanvas } from './components';

const App = () => {
  useSmoothScroll();
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <ScrollGallery />
        <Works />
        <Lab />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
