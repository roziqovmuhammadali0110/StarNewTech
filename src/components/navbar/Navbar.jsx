import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Menu toggle function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Scroll position function
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-1 transition-colors duration-300 ${
        scrollPosition > 50 ? "bg-white" : "bg-white"
      }`}>
      <div className="flex items-center container mx-auto justify-between p-4 font-medium w-full">
        {/* Logo */}
        <div>
          <a href="/">
            <img
              src="https://progress-solution.uz/storage/platforms/1700150090logo_(2)484.png"
              alt="logo"
              className="max-w-[150px]"
            />
          </a>
        </div>

        {/* Large screen links */}
        <ul className="hidden lg:flex space-x-6">
          <li>
            <a
              href="#about"
              className="hover:text-gray-700 hover:font-bold hover:underline">
              Biz haqimizda
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="hover:text-gray-700 hover:font-bold hover:underline">
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#service"
              className="hover:text-gray-700 hover:font-bold hover:underline">
              Xizmatlar
            </a>
          </li>
          <li>
            <a
              href="#clients"
              className="hover:text-gray-700 hover:font-bold hover:underline">
              Mijozlar
            </a>
          </li>
          <li>
            <a
              href="#blogs"
              className="hover:text-gray-700 hover:font-bold hover:underline">
              Bloglar
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-gray-700 hover:font-bold hover:underline">
              Aloqa
            </a>
          </li>
        </ul>

        {/* Custom language dropdown */}
        <select name="language" id="language" className="ml-4">
          <option value="uz">Uzbek</option>
          <option value="en">English</option>
        </select>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <ul className="absolute top-16 left-0 w-full bg-white shadow-lg p-4 lg:hidden space-y-4">
            <li>
              <a
                href="#about"
                className="block hover:text-gray-700"
                onClick={toggleMenu}>
                Biz haqimizda
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="block hover:text-gray-700"
                onClick={toggleMenu}>
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#service"
                className="block hover:text-gray-700"
                onClick={toggleMenu}>
                Xizmatlar
              </a>
            </li>
            <li>
              <a
                href="#clients"
                className="block hover:text-gray-700"
                onClick={toggleMenu}>
                Mijozlar
              </a>
            </li>
            <li>
              <a
                href="#blogs"
                className="block hover:text-gray-700"
                onClick={toggleMenu}>
                Bloglar
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block hover:text-gray-700"
                onClick={toggleMenu}>
                Aloqa
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
