import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="image h-[450px] container mx-auto w-full px-3 min-h-screen flex flex-col items-start justify-center">
      <div className="font-bold text-white text-[6px] xs:text-[18px] md:text-[30px] lg:text-[45px] xl:text-[55px]">
        <h1>ОТКРОЙТЕ ДЛЯ СЕБя</h1>
        <h1>
          НОВОЕ <span className="text-[#F24C1A]">В МИРЕ</span>
        </h1>
        <h1>
          <span className="text-[#F24C1A]">ИТ</span> ВМЕСТЕ С НАМИ
        </h1>
        <Link to="/about">
          <button className="w-[162px] h-[60px] font-bold text-[18px] rounded-md bg-[#05319F] text-white hover:bg-[#D33F3F] focus:outline-none">
            BATAFSIL
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
