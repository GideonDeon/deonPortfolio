import PageNav from "../layout/PageNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Services from "../components/Services";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Floaters from "../components/Floaters";
import Footer from "../layout/Footer";
import Snowfall from "react-snowfall";

function Home() {
  return (
    <div className="p-3 lg:p-5 bg-[#1f2326]">
      <ShadowEffect />
    </div>
  );
}

function ShadowEffect() {
  const period = new Date().getMonth();
  const isWinter = period === 11 || period === 0;
  return (
    <>
      {isWinter ? (
        <div className="h-fit shadow-[0px_0px_20px_black] relative">
          <Snowfall color="white" style={{zIndex:50}} />
          <Header />
          <Floaters />
          <Services />
          <div>
            <div className="sticky top-0">
              <About />
            </div>
            <div className="sticky top-0 z-1">
              <Skills />
            </div>
            <div className="sticky top-0 z-2">
              <Projects />
            </div>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      ) : (
        <div className="h-fit shadow-[0px_0px_20px_black] relative">
          <Header />
          <Floaters />
          <Services />
          <div>
            <div className="sticky top-0">
              <About />
            </div>
            <div className="sticky top-0 z-1">
              <Skills />
            </div>
            <div className="sticky top-0 z-2">
              <Projects />
            </div>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

function Header() {
  return (
    <div className="bg-[url(/images/future.png)] w-full h-82 lg:h-screen bg-center bg-cover bg-no-repeat bg-black/40 bg-blend-color">
      <PageNav />
      <div className="lg:grid grid-cols-2 gap-15">
        <div className="lg:mt-30 xl:ml-35">
          <span className="text-white text-2xl ml-2 sm:ml-20 lg:ml-10">
            <a href="https://github.com/GideonDeon" className="ml-0.5">
              <FontAwesomeIcon
                icon="fa-brands fa-github"
                className="lg:text-4xl"
              />
            </a>
            <a href="https://www.linkedin.com/in/deon000/" className="ml-0.5">
              <FontAwesomeIcon
                icon="fa-brands fa-linkedin-in"
                className="lg:text-4xl"
              />
            </a>
            <a href="https://wa.me/+2348154027435" className="ml-0.5">
              <FontAwesomeIcon
                icon="fa-brands fa-whatsapp"
                className="lg:text-4xl"
              />
            </a>
            <a href="" className="ml-0.5">
              <FontAwesomeIcon
                icon="fa-brands fa-twitter"
                className="lg:text-4xl"
              />
            </a>
            <a href="https://t.me/DeonPriest" className="ml-0.5">
              <FontAwesomeIcon
                icon="fa-brands fa-telegram"
                className="lg:text-4xl"
              />
            </a>
          </span>
          <p
            className="text-white text-[18px] font-mono uppercase ml-8 mt-5 sm:ml-25 lg:text-2xl 
                        lg:ml-20"
          >
            I am a Full-
            <span className=" inline-block animate-blink">stack</span> develope
            <span className="inline-block animate-blinky">r</span>
          </p>
          <p
            className="text-white text-[14px] font-mono font-light ml-8 pr-5 mt-2 text-justify 
                        sm:w-120 sm:ml-25 lg:text-[16px] lg:ml-20 lg:w-100"
          >
            Hello! I'm Gideon, a professional Full-Stack Developer with a strong
            frontend focus, experienced in building end-to-end web applications.
          </p>
          <div className="pt-3 w-fit ml-8 sm:ml-25 lg:ml-20 lg:mt-2">
            <a
              href="#contact"
              className="text-gray-300 mr-5 p-2 pt-1 border-2 rounded-[10px] border-[#46a293] hover:bg-gray-400 hover:text-white"
            >
              Hire me
            </a>
            <a
              href="/cv/gideon_oluwanifemi.pdf"
              className="text-gray-300 mr-5 p-2 pt-1 border-2 rounded-[10px] border-[#46a293] hover:bg-gray-400 hover:text-white"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="hidden lg:block">
          <img
            src="/images/illustration.png"
            alt="illustration"
            className="w-110 h-120 xl:w-120 opacity-75 mt-5 hover:scale-110 hover:opacity-100 cursor-pointer transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
