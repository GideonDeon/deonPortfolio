import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import MyWorks from "./pages/MyWorks";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import ScrollToTop from "./components/ScrollToTop";

library.add(fas, far, fab);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/home" element={<Home />} />
        <Route path="/myworks" element={<MyWorks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
