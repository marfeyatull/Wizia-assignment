import Allocation from "./components/Allocation";
import Features from "./components/Features";
import FooterSection from "./components/FooterSection";
import GetStarted from "./components/GetStarted";
import NavBarSection from "./components/Header/NavBarSection";
import HeroSection from "./components/HeroSection";
import Partners from "./components/Partners";
import TestimonialCarousel from "./components/Testimonials";
import TrainUp from "./components/TrainUp";

function App() {

  return (
    <>
      <NavBarSection/>
        <div className="bg-primary ">
        <HeroSection/>
        <Partners/>
        <Features/>
        <TrainUp/>
        <TestimonialCarousel/>
        <Allocation/>
        <GetStarted/>
        </div>
      <FooterSection/>
    </>
  )
}

export default App;
