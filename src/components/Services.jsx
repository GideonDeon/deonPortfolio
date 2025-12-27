import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Services() {
  return (
    <div className="p-3 h-fit lg:h-100 bg-[#1f2326]" id="services">
      <h1 className="text-white text-center text-2xl font-raleway mt-2 mb-2 sm:mb-5">
        <span className="inline-block h-5 w-5 bg-[#46a293]/50 animate-spin"></span>
        &nbsp;My Services&nbsp;
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
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:mt-10 xl:pl-10 xl:pr-10 place-items-center">
      <div
        ref={domRef}
        className={`transition-all duration-1000 ${
          isVisible
            ? "sm:opacity-100 sm:translate-y-0"
            : "sm:opacity-0 sm:-translate-y-5"
        } delay-50 `}
      >
        <div className=" bg-[#151b1f] p-2 mt-2 h-45 lg:h-60 lg:w-60 xl:w-70 shadow-[0px_0px_10px_black] hover:-translate-y-2 transition-all duration-200 sm:mt-0">
          <FontAwesomeIcon
            icon="fa-solid fa-code"
            className="text-[#46a293] text-3xl relative left-[50%] -translate-x-[50%] pt-2"
          />
          <h2 className="text-[20px] font-raleway text-white text-center mt-3 mb-3 lg:text-[17px]">
            Web design & development
          </h2>
          <p className="text-gray-300 font-mono text-[13px] text-center">
            I use various web technologies to develop atrractive websites and
            web applications which converts visitors to customers.
          </p>
        </div>
      </div>
      <div
        ref={domRef}
        className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        } delay-200`}
      >
        <div className=" bg-[#151b1f] p-2 pb-3 h-45 lg:h-60 lg:w-60 xl:w-70 shadow-[0px_0px_10px_black] hover:-translate-y-2 transition-all duration-200">
          <FontAwesomeIcon
            icon="fa-brands fa-connectdevelop"
            className="text-[#46a293] text-3xl relative left-[50%] -translate-x-[50%] pt-2"
          />
          <h2 className="text-[20px] font-raleway text-white text-center mt-3 mb-3">
            UI/UX Implementation
          </h2>
          <p className="text-gray-300 font-mono text-[13px] text-center">
            I transform design ideas into clean, interactive, and user-friendly
            digital experiences.
          </p>
        </div>
      </div>
      <div
        ref={domRef}
        className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        } delay-600`}
      >
        <div className=" bg-[#151b1f] p-2 pb-3 h-45 lg:h-60 lg:w-60 xl:w-70 shadow-[0px_0px_10px_black] hover:-translate-y-2 transition-all duration-200">
          <FontAwesomeIcon
            icon="fa-regular fa-handshake"
            className="text-[#46a293] text-3xl relative left-[50%] -translate-x-[50%] pt-2"
          />
          <h2 className="text-[20px] font-raleway text-white text-center mt-3 mb-3">
            Project Collaboration
          </h2>
          <p className="text-gray-300 font-mono text-[13px] text-center">
            I work effectively with teams to deliver meaningful, responsive and
            scalable digital products.
          </p>
        </div>
      </div>
      <div
        ref={domRef}
        className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        } delay-1000`}
      >
        <div className=" bg-[#151b1f] p-2 pb-3 h-45 lg:h-60 lg:w-60 xl:w-70 shadow-[0px_0px_10px_black] hover:-translate-y-2 transition-all duration-200">
          <FontAwesomeIcon
            icon="fa-solid fa-wrench"
            className="text-[#46a293] text-3xl relative left-[50%] -translate-x-[50%] pt-2"
          />
          <h2 className="text-[20px] font-raleway text-white text-center mt-3 mb-3">
            Maintenance & Support
          </h2>
          <p className="text-gray-300 font-mono text-[13px] text-center">
            I help maintain and support applications by fixing bugs, updating
            interfaces, and optimizing performances.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
