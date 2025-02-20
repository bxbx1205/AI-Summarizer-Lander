import { About } from "./components/About";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";


import "./App.css";


function App() {
  return (
    <>


      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Features />
      <Services />
      
      <FAQ />
      <ScrollToTop />
    </>
  );
}

export default App;
