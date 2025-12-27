import { NavLink } from "react-router-dom";

function Explore() {
  return (
    <div className="p-3 bg-[#1f2326] h-screen">
      <div className="bg-[#1f2326] shadow-[0px_0px_20px_black] w-full h-full relative">
        <NavLink
          to="/home"
          className=" block w-fit h-12 p-2 bg-black/30 text-white border-2 border-[#46a293] rounded-2xl 
          absolute bottom-[20%] left-[50%] -translate-x-[50%] font-poiretone peer cursor-pointer"
        >
          Explore<span>.</span><span>.</span><span>.</span>
        </NavLink>
        <div className="h-30 w-30 absolute top-[30%] left-[50%] -translate-x-[50%] 
                    text-center text-white text-8xl font-ephesis -rotate-45 border-3 border-black bg-[#46a293]/50 pt-3 peer-hover:rotate-0
                    transition-transform duration-400 animate-pulse">
            D
        </div>
      </div>
    </div>
  );
}

export default Explore;