import Header from "../../pages/Header";
import Carusel from "../Carusel";
import Services from "../Service";
import Solution from "../Solution";

const Home = () => {
  return (
    <div className="py-5 space-y-4 bg-gray-100">
      <Header />
      <Carusel />
      <Solution />
      <Services />
    </div>
  );
};

export default Home;
