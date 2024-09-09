import { Route, Routes } from "react-router-dom";
import Footer from "./pages/Footer";
import Home from "./components/homes/Home";
import About from "./components/about/About";
import Proects from "./components/proect/Proects";
import Xizmatlar from "./components/xizmatlar/Xizmatlar";
import Blogs from "./components/blog/Blogs";
import Clents from "./components/clents/Clents";
import Contacts from "./components/contact/Contacts";
import Navbar from "./components/navbar/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Proects />} />
        <Route path="/services" element={<Xizmatlar />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/client" element={<Clents />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}
