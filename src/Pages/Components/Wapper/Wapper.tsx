import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from '../../ShareLayout';
import Home from '../../Home';
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
        <Route path='/commond-pro' element={<SharedLayout />}>
           <Route index element={<Home/>}/>
        </Route>
        <Route path="/commond-pro/Aboutus" element={<Aboutus />}></Route>
        <Route path="/commond-pro/OurServices" element={<OurServices/>}></Route>
        <Route path="/commond-pro/OurProjects" element={<OurProjects/>}></Route>
        <Route path="/commond-pro/ContactUs" element={<ContactUs/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Wapper;
