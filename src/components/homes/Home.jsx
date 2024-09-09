import Header from "../../pages/Header";
import About from "../about/About";
import Carusel from "../Carusel";
import ClientsSection from "../clents/Clents";
import Services from "../Service";
import Solution from "../Solution";

const Home = () => {
  return (
    <div className=" space-y-4 bg-gray-100">
      <Header />
      <About />
      <Carusel />
      <Solution />
      <Services />
      <ClientsSection />
    </div>
  );
};

export default Home;
