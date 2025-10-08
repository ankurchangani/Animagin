import React from "react";
import Logo from "../../assets/logo/logo.png";

const Header = () => {
  const navItems = ["Home", "Services", "Portfolio", "Career", "About Us"];

  return (
    <header className="px-4 py-2 ">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="w-1/6">
            <div className="logo w-full">
              <img
                src={Logo}
                alt="Logo"
                className="w-full object-contain"
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="w-4/6">
            <nav>
              <ul className="flex items-center justify-center gap-8">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className="font-montserrat font-bold text-[18px] text-[#000000] cursor-pointer  transition"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Button */}
          <div className="w-1/6 flex justify-end">
            <button className="outline-none bg-[#0094EE] px-4 py-2 rounded-full font-montserrat  text-sm text-black font-bold">
              Quick Enquiry
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
