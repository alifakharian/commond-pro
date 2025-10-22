import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Aboutus from "../Aboutus/Aboutus";
import Footer from "../Footer/Footer";
import OurServices from "../../OurServices";
import OurProjects from "../../OurProjects";
import ContactUs from "../../ContactUs";

function Wapper() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Aboutus" element={<Aboutus />}></Route>
        <Route path="/OurServices" element={<OurServices/>}></Route>
        <Route path="/OurProjects" element={<OurProjects/>}></Route>
        <Route path="/ContactUs" element={<ContactUs/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Wapper;
