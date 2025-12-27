import { useEffect, useRef, useState } from "react";

function About() {
  return (
    <div className="p-3 h-fit bg-[#151b1f]" id="about">
      <h1 className="text-white text-center text-2xl font-raleway pt-3 mb-2">
        <span className="inline-block h-5 w-5 bg-[#46a293]/50 animate-spin"></span>
        &nbsp;About&nbsp;
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
        threshold: 0.5,
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
    <div className="sm:grid sm:grid-cols-[1fr_2fr] gap-2">
      <div>
        <img
          src="./images/deon.png"
          alt="deon"
          className="w-35 h-35 sm:w-45 sm:h-45 border-2 border-[#46a293] rounded-full 
                      relative left-[50%] -translate-x-[50%] sm:top-[50%] sm:-translate-y-[50%]
                      lg:w-55 lg:h-55"
        />
      </div>
      <div
        ref={domRef}
        className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        } delay-50`}
      >
        <div className=" bg-[#151b1f] p-2 pb-3 lg:w-160 xl:w-200">
          <h2 className="text-[20px] font-raleway text-white mt-2 mb-2 animate-bounce">
            Hello... again!
          </h2>
          <p className="text-gray-300 font-mono text-[13px] sm:text-justify lg:text-[16px]">
            I am a full-stack developer with a strong focus on frontend
            development and thoughtful UI design. Besides participating in many
            tech programs where i have been trained to have both technical and
            soft skills, I am passionate about leveraging my diverse backgrounds
            to decipher challenging problems and create delightful experience. I
            develop websites and web applications with different languages and
            frameworks including HTML, CSS, Tailwind, Javascript, React, and
            Next.js. I also briefly worked with Python and Django, which helped
            strengthen my understanding of backend architecture and server-side
            development. When I'm not coding or improving on the languages and
            frameworks, I am either reading, playing video games or watching
            movies(animes too 😏). Being a dilligent, hardworking and result
            oriented person, I always work towards achieving best result on
            each project I lay hands on.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
