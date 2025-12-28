import PageNavWork from "../layout/PageNavWork";
import ProjectsDetailed from "../components/ProjectsDetailed";
import ScrollToTopOnRoute from "../components/ScrollToTop";
import Footer from "../layout/Footer";
import Floaters from "../components/Floaters";

function MyWorks() {
  return (
    <>
      <ScrollToTopOnRoute matchPath="/myworks" />
      <div className="p-3 lg:p-5 bg-[#1f2326]">
        <ShadowEffect />
      </div>
    </>
  );
}

function ShadowEffect() {
  return (
    <div className="h-fit shadow-[0px_0px_20px_black] relative">
      <PageNavWork />
      <Floaters />
      <ProjectsDetailed />
      <Footer />
    </div>
  );
}
export default MyWorks;
