import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  return (
    <div>
      <h1 className="text-white text-center text-2xl font-raleway mt-30 pt-2" id="contact">
        <span className="inline-block h-5 w-5 bg-[#46a293]/50 animate-spin"></span>
        &nbsp;Contact Me&nbsp;
        <span className="inline-block h-5 w-5 bg-[#46a293]/50 animate-spin"></span>
      </h1>
      <p className="font-inkfree text-[13px] text-white text-center mt-2 lg:text-[18px]">
        Connect with me from anywhere around the world, Let's Seal a Deal!
      </p>
      <div className="mt-10">
        <div className="grid grid-cols-2 font-raleway place-items-center">
          <p className="">
            <FontAwesomeIcon
              icon="fa-solid fa-envelope"
              className="text-3xl relative left-[50%] -translate-x-[50%] text-[#46a293] hover:text-[#6ef1dc] hover:text-shadow-[0px_0px_20px_white] hover:-translate-y-1 transition-all duration-150"
            />
            <a
              href="mailto:gideong351@gmail.com"
              className="block text-gray-400 hover:text-[#6ef1dc] hover:text-shadow-[0px_0px_20px_white]"
            >
              gideong351@gmail.com
            </a>
          </p>
          <p className="">
            <FontAwesomeIcon
              icon="fa-solid fa-phone"
              className="text-3xl relative left-[50%] -translate-x-[50%] text-[#46a293] hover:text-[#6ef1dc] hover:text-shadow-[0px_0px_20px_white] hover:-translate-y-1 transition-all duration-150"
            />
            <a
              href="tel:+239030739239"
              className="block text-gray-400 hover:text-[#6ef1dc] hover:text-shadow-[0px_0px_20px_white]"
            >
              +2349030739239
            </a>
          </p>
        </div>
        <span className="block w-fit relative left-[50%] -translate-x-[50%] mt-15 text-white text-2xl space-x-5">
          <a href="https://wa.me/+2348154027435" className="">
            <FontAwesomeIcon
              icon="fa-brands fa-whatsapp"
              className="text-3xl text-[#46a293] hover:text-[#6ef1dc] hover:text-shadow-[0px_0px_20px_white] hover:-translate-y-1 transition-all duration-150"
            />
          </a>
          <a href="https://github.com/GideonDeon" className="">
            <FontAwesomeIcon
              icon="fa-brands fa-github"
              className="text-3xl text-[#46a293] hover:text-[#6ef1dc] hover:text-shadow-[0px_0px_20px_white] hover:-translate-y-1 transition-all duration-150"
            />
          </a>
          <a href="https://www.linkedin.com/in/deon000/" className="">
            <FontAwesomeIcon
              icon="fa-brands fa-linkedin-in"
              className="text-3xl text-[#46a293] hover:text-[#6ef1dc] hover:text-shadow-[0px_0px_20px_white] hover:-translate-y-1 transition-all duration-150"
            />
          </a>
          <a href="" className="">
            <FontAwesomeIcon
              icon="fa-brands fa-twitter"
              className="text-3xl text-[#46a293] hover:text-[#6ef1dc] hover:text-shadow-[0px_0px_20px_white] hover:-translate-y-1 transition-all duration-150"
            />
          </a>
          <a href="https://t.me/DeonPriest" className="">
            <FontAwesomeIcon
              icon="fa-brands fa-telegram"
              className="text-3xl text-[#46a293] hover:text-[#6ef1dc] hover:text-shadow-[0px_0px_20px_white] hover:-translate-y-1 transition-all duration-150"
            />
          </a>
        </span>
      </div>
    </div>
  );
}

export default Contact;
