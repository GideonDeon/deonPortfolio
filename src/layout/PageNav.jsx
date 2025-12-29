import { NavLink } from "react-router-dom";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PageNav() {
  return (
    <>
      <PageNavMobile />
      <PageNavDesktop />
    </>
  );
}
const NavItems = [
  {
    href: "#services",
    text: "Services",
    icon: "fa-solid fa-code-branch",
  },
  {
    href: "#about",
    text: "About",
    icon: "fa-regular fa-address-card",
  },
  {
    href: "#skills",
    text: "Skills",
    icon: "fa-solid fa-code",
  },
  {
    href: "#works",
    text: "Projects",
    icon: "fa-regular fa-folder",
  },
];
function PageNavMobile() {
  const checkboxRef = useRef(null);

  const HandleLinkClick = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
  };
  const period = new Date().getMonth();
  const isWinter = period === 11 || period === 0;
  return (
    <div className="grid grid-cols-[1fr_1fr] bg-black/10 h-25 w-full relative lg:hidden ">
      <div>
        {
          isWinter ? (<p className="text-white font-ephesis text-2xl ml-3 mt-4 w-fit">
          <span className="inline-block h-5 w-5 -rotate-45 relative -top-2 left-2">
            <img src="/images/santa-hat.png" alt="santa-hat" />
          </span>
          Deon
        </p>):(<p className="text-white font-ephesis text-2xl ml-3 mt-4 w-fit">
          Deon
        </p>)
        } 
      </div>
      <div className="">
        <input
          type="checkbox"
          ref={checkboxRef}
          className="w-8 h-8 absolute right-5 top-5 peer cursor-pointer opacity-0 z-1"
        />
        <div className=" opacity-0 text-white font-bold absolute right-7 top-4 peer-checked:opacity-100 transition-all duration-200">
          <p>X</p>
        </div>
        <div className="w-10 h-8 absolute right-2 top-4.5 peer-checked:opacity-0 transition-all duration-200">
          <div className="bg-white w-6 h-1.5 m-0.5 rounded-[5px]"></div>
          <div className="bg-white w-6 h-1.5 m-0.5 rounded-[5px]"></div>
          <div className="bg-white w-6 h-1.5 m-0.5 rounded-[5px]"></div>
        </div>
        <ul
          className="bg-black/90 w-0 h-50 absolute right-0 top-13 peer-checked:w-[20rem]
                        overflow-hidden transition-all duration-500 ease-in-out font-aldrich text-left
                        pl-3.5 border-2 border-t-8 border-b-8 border-[#46a293] rounded-xl opacity-0 peer-checked:opacity-100 z-5 space-y-1"
        >
          <li className="w-fit h-8 pt-1 block font-aldrich text-white">
            <FontAwesomeIcon
              icon="fa-regular fa-house"
              className="text-[#6ef1dc]"
            />
            &nbsp;
            <NavLink to="/home" onClick={HandleLinkClick}>
              Home
            </NavLink>
          </li>
          {NavItems.map(({ href, text, icon }) => (
            <li
              key={text}
              onClick={HandleLinkClick}
              className="w-fit h-8 pt-1 block font-aldrich text-white"
            >
              <FontAwesomeIcon icon={icon} className="text-[#6ef1dc]" />
              &nbsp;<a href={href}>{text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
function PageNavDesktop() {
  const checkboxRef = useRef(null);

  const HandleLinkClick = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
  };
  const period = new Date().getMonth();
  const isWinter = period === 11 || period === 0;
  return (
    <div className="hidden lg:grid grid-cols-[2fr_1fr] bg-black/10 h-15 w-ful">
      <div>
        {
          isWinter ? (<p className="text-white font-ephesis text-2xl mt-3 ml-10 cursor-grab w-fit">
          <span className="inline-block h-5 w-5 -rotate-45 relative -top-2 left-2">
            <img src="/images/santa-hat.png" alt="santa-hat" />
          </span>
          Deon
        </p>):(<p className="text-white font-ephesis text-2xl mt-3 ml-10 cursor-grab w-fit">
          Deon
        </p>)
        }
      </div>
      <div>
        <ul className="flex gap-15 mt-3 pr-6">
          <li
            className="font-aldrich font-bold text-gray-400 hover:text-[#6ef1dc] hover:text-shadow-[0px_0px_20px_white] 
              overflow-y-scroll no-scrollbar w-6 hover:w-24 flex place-items-center gap-1.5 cursor-pointer transition-all duration-500"
          >
            <FontAwesomeIcon
              icon="fa-regular fa-house"
              className="text-[20px]"
            />
            <NavLink to="/home" onClick={HandleLinkClick}>
              Home
            </NavLink>
          </li>
          {NavItems.map(({ href, text, icon }) => (
            <li
              key={text}
              onClick={HandleLinkClick}
              className="font-aldrich font-bold text-gray-400 hover:text-[#6ef1dc] hover:text-shadow-[0px_0px_20px_white] 
              overflow-y-scroll no-scrollbar w-6 hover:w-24 flex place-items-center gap-1.5 cursor-pointer transition-all duration-500 "
            >
              <FontAwesomeIcon icon={icon} className="text-[20px]" />
              <a href={href}>{text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default PageNav;
