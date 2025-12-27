import { useEffect, useRef, useState } from "react";
import { webApp } from "../data/ProjectDetailedData";
import { websites } from "../data/ProjectDetailedData";
import { templates } from "../data/ProjectDetailedData";

function ProjectsDetailed() {
  return (
    <div>
      <WebApps />
      <Websites />
      <Templates />
    </div>
  );
}

function WebApps() {
  return (
    <>
      <FadeInSectionApps />
    </>
  );
}

function Websites() {
  return (
    <>
      <FadeInSectionSites />
    </>
  );
}

function Templates() {
  return (
    <>
      <FadeInSectionTemplates />
    </>
  );
}

// Fadein for webapps
function FadeInSectionApps() {
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
    <div
      ref={domRef}
      className={`transition-all duration-1200 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
      }`}
    >
      <div className="bg-[#1f2326] font-raleway">
        <h1 className="text-white text-2xl text-center pt-2">
          <span className="inline-block h-5 w-5 bg-[#46a293]/50 animate-spin"></span>
          &nbsp;Web Applications&nbsp;
          <span className="inline-block h-5 w-5 bg-[#46a293]/50 animate-spin"></span>
        </h1>
        <div className="grid lg:grid-cols-2 gap-2 justify-items-center mt-3">
          {webApp.map(({ image, alt, url, text }) => (
            <div key={alt}>
              <img
                src={image}
                alt={alt}
                className="w-90 h-60 sm:w-130 sm:h-70 lg:w-100 xl:w-130 border border-[#46a293] hover:-translate-y-2 duration-200"
              />
              <a
                href={url}
                target="_blank"
                className="block text-white w-fit mt-2 pl-2 capitalize"
              >
                {text} ➡
              </a>
            </div>
          ))}
          <div className="w-90 h-60 sm:w-130 sm:h-70 lg:w-100 xl:w-130 bg-[#46a293]/60 border border-[#46a293] hover:-translate-y-2 duration-200 relative">
            {" "}
            <p className="text-white absolute top-[50%] left-[50%] -translate-[50%] ">
              More soon...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Fadein for websites

function FadeInSectionSites() {
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
    <div
      ref={domRef}
      className={`transition-all duration-1200 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
      }`}
    >
      <div className="bg-[#151b1f] font-raleway">
        <h1 className="text-white text-2xl text-center pt-2">
          <span className="inline-block h-5 w-5 bg-[#46a293]/50 animate-spin"></span>
          &nbsp;Websites&nbsp;
          <span className="inline-block h-5 w-5 bg-[#46a293]/50 animate-spin"></span>
        </h1>
        <div className="grid lg:grid-cols-2 gap-2 justify-items-center mt-3">
          {websites.map(({ image, alt, url, text }) => (
            <div key={alt}>
              <img
                src={image}
                alt={alt}
                className="w-90 h-60 sm:w-130 sm:h-70 lg:w-100 xl:w-130 border border-[#46a293] hover:-translate-y-2 duration-200"
              />
              <a
                href={url}
                target="_blank"
                className="block text-white w-fit mt-2 pl-2 capitalize"
              >
                {text} ➡
              </a>
            </div>
          ))}
          <div className="w-90 h-60 sm:w-130 sm:h-70 lg:w-100 xl:w-130 bg-[#46a293]/60 border border-[#46a293] hover:-translate-y-2 duration-200 relative">
            {" "}
            <p className="text-white absolute top-[50%] left-[50%] -translate-[50%] ">
              More soon...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// fadein for templates

function FadeInSectionTemplates() {
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
    <div
      ref={domRef}
      className={`transition-all duration-1200 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
      }`}
    >
      <div className="bg-[#1f2326] font-raleway">
        <h1 className="text-white text-2xl text-center pt-2">
          <span className="inline-block h-5 w-5 bg-[#46a293]/50 animate-spin"></span>
          &nbsp;Templates&nbsp;
          <span className="inline-block h-5 w-5 bg-[#46a293]/50 animate-spin"></span>
        </h1>
        <div className="grid lg:grid-cols-2 gap-2 justify-items-center mt-3">
          {templates.map(({ image, alt, url, text }) => (
            <div key={alt}>
              <img
                src={image}
                alt={alt}
                className="w-90 h-60 sm:w-130 sm:h-70 lg:w-100 xl:w-130 border border-[#46a293] hover:-translate-y-2 duration-200"
              />
              <a
                href={url}
                target="_blank"
                className="block text-white w-fit mt-2 pl-2 capitalize"
              >
                {text} ➡
              </a>
            </div>
          ))}
          <div className="w-90 h-60 sm:w-130 sm:h-70 lg:w-100 xl:w-130 bg-[#46a293]/60 border border-[#46a293] hover:-translate-y-2 duration-200 relative">
            {" "}
            <p className="text-white absolute top-[50%] left-[50%] -translate-[50%] ">
              More soon...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsDetailed;
