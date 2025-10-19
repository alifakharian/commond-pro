import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Aboutus from "../Aboutus/Aboutus";
import Footer from "../Footer/Footer";

function Wapper() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Aboutus" element={<Aboutus />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Wapper;
