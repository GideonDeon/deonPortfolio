import { useEffect, useRef, useState } from "react";
import Contact from "../components/Contact";
import { NavLink } from "react-router-dom";

const projectImages = [
  {
    image: "./images/aspoi.png",
    alt: "project image",
  },
  {
    image: "./images/template1.png",
    alt: "project image",
  },
  {
    image: "./images/template3.png",
    alt: "project image",
  },
  {
    image: "./images/template4.png",
    alt: "project image",
  },
  {
    image: "./images/savantbakes.png",
    alt: "project image",
  },
];
function Projects() {
  return (
    <div className="pr-3 pl-3 min-h-screen bg-[#151b1f]" id="works">
      <h1 className="text-white text-center text-2xl font-raleway mt-2 pt-2">
        <span className="inline-block h-5 w-5 bg-[#46a293]/50 animate-spin"></span>
        &nbsp;Projects&nbsp;
        <span className="inline-block h-5 w-5 bg-[#46a293]/50 animate-spin"></span>
      </h1>
      <p className="font-inkfree text-2xl text-white text-center mt-2 ">
        Click image to see more!
      </p>
      <FadeInSection />
      <Contact />
    </div>
  );
}

function FadeInSection() {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const currentElement = domRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div className="mt-10">
      <div
        ref={domRef}
        className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        } delay-500`}
      >
        <Carousel />
      </div>
    </div>
  );
}

function Carousel() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % projectImages.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full">
        <NavLink to="/myworks">
          <img
            src={projectImages[index].image}
            alt={projectImages[index].name}
            className="h-60 w-full sm:h-80 sm:w-135 sm:relative sm:left-[50%] sm:-translate-x-[50%]"
          />
        </NavLink>
      </div>
      <div className="w-fit relative left-[50%] -translate-x-[50%] mt-2">
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className={`inline-block h-2.5 w-2.5 rounded-full ml-2 ${
              index === i ? "bg-[#46a293]" : "bg-gray-500"
            }`}
          ></span>
        ))}
      </div>
    </>
  );
}

export default Projects;
