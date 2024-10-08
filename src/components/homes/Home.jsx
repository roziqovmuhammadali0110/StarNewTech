import Header from "../../pages/Header";
import Abouts from "../Abouts";

import Carusel from "../Carusel";
import ClientsSection from "../clents/Clents";
import ContactForm from "../Contact";
import Faq from "../Faq";
import OurTeam from "../OurTeam";
import Services from "../Service";
import Solution from "../Solution";

const Home = () => {
  return (
    <div className=" space-y-4 bg-gray-100">
      <Header />
      <Abouts />
      <Carusel />
      <Solution />
      <Services />
      <ClientsSection />
      <OurTeam />
      <Faq />
      <ContactForm />
    </div>
  );
};

export default Home;
