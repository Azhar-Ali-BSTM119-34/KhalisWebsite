import { BrowserRouter } from "react-router-dom";
import { webBanner } from "./assets";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer,
} from "./components";
// Import the CSS file for your component styling
import "./App.css"; // Create an App.css file in the same directory as this file

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        {/* <Tech /> */}
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0 p-10">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
