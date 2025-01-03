import Navbar from "../components/Navbar";
import AboutSection from "../Home/AboutSection";
import FiberSection from "../Home/FiberSection";
import FooterSection from "../Home/FooterSection";
import InfoSection from "../Home/InfoSection";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  
  return (
    <>
      <div className="w-full font-poppins">
        {/* About Section */}
        <section className="h-screen bg-[url('/AboutUsPage.png')] bg-cover bg-center relative">
          {/* Navbar */}
          <Navbar />
          <div className="flex flex-col relative top-1/3 pl-5 sm:pl-10 2xl:pl-32  mx-auto  ">
            <h1
              className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl  text-black mb-4 z-20 relative "
              data-aos="fade-right"
              data-aos-delay="200"
              style={{ fontFamily: "MADE Gentle, sans-serif" }}
            >
              About Us{" "}
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl font-semibold"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              Reliable broadband services connecting you to high-speed internet
              anytime, anywhere.
            </p>
          </div>
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center flex items-center space-x-1 font-medium"
          >
            <a href="#about" className="scroll-down">
              Scroll Down{" "}
              <i className="fas fa-arrow-down animate-arrow-down text-[#3572EF]" />
            </a>
          </div>
        </section>

        {/* About Us Section */}
        <div className="relative max-w-[1712px] mx-auto pt-24 px-8 pb-8 ">
          <AboutSection />{" "}
        </div>

        {/* Fiber Section */}
        <FiberSection />

        {/* Info Section */}
        <InfoSection />

        {/* Footer */}
        <FooterSection />
      </div>
    </>
  );
};

export default About;
