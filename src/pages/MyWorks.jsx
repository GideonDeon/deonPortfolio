import PageNavWork from "../layout/PageNavWork";
import ProjectsDetailed from "../components/ProjectsDetailed";
import Footer from "../layout/Footer";
import Floaters from "../components/Floaters";
import Snowfall from "react-snowfall";

function MyWorks() {
  return (
    <>
      <div className="p-3 lg:p-5 bg-[#1f2326]">
        <ShadowEffect />
      </div>
    </>
  );
}

function ShadowEffect() {
  const period = new Date().getMonth();
  const isWinter = period === 11 || period === 0;
  return (
    <>
      {isWinter ? (
        <div className="h-fit shadow-[0px_0px_20px_black] relative">
          <Snowfall color="white" style={{zIndex:50}}/>
          <PageNavWork />
          <Floaters />
          <ProjectsDetailed />
          <Footer />
        </div>
      ) : (
        <div className="h-fit shadow-[0px_0px_20px_black] relative">
          <PageNavWork />
          <Floaters />
          <ProjectsDetailed />
          <Footer />
        </div>
      )}
    </>
  );
}
export default MyWorks;
