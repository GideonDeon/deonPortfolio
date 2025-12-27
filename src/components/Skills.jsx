import { useEffect, useRef, useState } from "react";

const Skill = [
  {
    image: "./images/html.png",
    alt: "HTML",
    title: "HTML",
  },
  {
    image: "./images/css-3.png",
    alt: "CSS-3",
    title: "CSS 3",
  },
  {
    image: "./images/tailwind.png",
    alt: "tailwind",
    title: "TAILWIND",
  },
  {
    image: "./images/java-script.png",
    alt: "java-script",
    title: "JAVASCRIPT",
  },
  {
    image: "./images/react.png",
    alt: "react",
    title: "REACT",
  },
  {
    image: "./images/next.png",
    alt: "next.js",
    title: "NEXT",
  },
  {
    image: "./images/nodejs.png",
    alt: "node.js",
    title: "NODE",
  },
  {
    image: "./images/prisma.png",
    alt: "prisma",
    title: "PRISMA",
  },
  {
    image: "./images/supabase.png",
    alt: "supabase",
    title: "SUPABASE",
  },
];

function Skills() {
  return (
    <div className="pr-3 pl-3 min-h-screen bg-[#1f2326] relative" id="skills">
      <h1 className="text-white text-center text-2xl font-raleway mt-2 pt-3">
        <span className="inline-block h-5 w-5 bg-[#46a293]/50 animate-spin"></span>
        &nbsp;Skills&nbsp;
        <span className="inline-block h-5 w-5 bg-[#46a293]/50 animate-spin"></span>
      </h1>
      <FadeInSection />
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
    <div className="absolute top-[50%] left-[50%] -translate-[50%] w-full p-2">
      <div
        ref={domRef}
        className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        } delay-400 grid grid-cols-3 gap-2 place-items-center`}
      >
        {Skill.map((Skill, index) => (
          <div
            key={index}
            className="bg-[#151b1f] h-30 w-30 sm:h-35 sm:w-35 p-3 rounded-xl mt-5 hover:-translate-y-2 
                  transition-all duration-400 text-gray-400 hover:text-[#6ef1dc] 
                  hover:text-shadow-[0px_0px_20px_white] cursor-pointer"
          >
            <img src={`${Skill.image}`} alt={`${Skill.alt}`} />
            <p className="text-center mt-2">{Skill.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
