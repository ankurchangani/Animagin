import React from "react";
import landing from "../assets/banner/landing.jpg";
import Logo from "../assets/about/logo.png";
import { galleryData, servicesData } from "../data/data";
import Discover from "../components/Discover/Discover";
const Home = () => {
  return (
    <>
      {/* banner */}
      <section
        className="w-full h-[80vh] bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${landing})` }}
      >
        <div className="container mx-auto h-full flex items-center justify-center ">
          <h1 className="font-montserrat font-bold text-5xl md:text-6xl text-white text-center leading-snug">
            Branding and Into <br className="hidden md:block" /> Social Impact
          </h1>
        </div>
      </section>

      {/* Discover section */}


      <Discover />

      {/* What can Animagin do for you */}
      <section className="py-12 bg-[#131313]">
        <div className="container mx-auto">
          <div className="w-full">
            <h3 className="font-montserrat font-bold text-4xl text-center text-white mb-8">
              What Can <span className="text-[#0094EE]">Animagin</span> Do For
              You
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {servicesData.map((item, index) => (
              <div key={index} className="w-full sm:w-5/12 lg:w-1/3 p-2">
                <div className="bg-[#D9D9D9] px-4 py-6 rounded-lg h-full">
                  <h3 className="font-montserrat font-bold text-xl text-black mb-3 text-center">
                    {item.title}
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-black">
                    {item.services.map((service, i) => (
                      <li key={i}>{service}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full">
            <div>
              <p className="text-white font-inter text-center mt-3 whitespace-break-spaces">
                With years of expertise in the creative and digital space,
                Animagin stands as a premier marketing agency <br></br>
                crafting impactful brand identities and delivering scalable
                design, media, and digital marketing solutions <br></br>
                Rooted in creativity and driven by strategy, we’ve built a
                forward-thinking ecosystem that empowers<br></br>
                businesses to shine across social, web, and beyond
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <div className="w-full mb-12">
            <h3 className="font-montserrat font-bold text-4xl text-center mb-6">
              Gallery of Success
            </h3>
            <p className="text-black font-inter text-center mt-3 whitespace-pre-line">
              {`Behind each project lies a story—a journey of collaboration, creativity, and innovation. We thrive on challenges, turning complex
concepts into seamless IT solutions that exceed expectations. Our portfolio reflects not just what we’ve accomplished, but the
relationships we’ve built and the trust we’ve earned along the way as a leading software development company.`}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {galleryData.map((item, index) => (
              <div
                key={index}
                className="bg-[#0094EE] px-2 py-3 rounded-full font-montserrat font-bold text-base text-white text-center cursor-pointer"
              >
                <h3 className="font-montserrat font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#131313] ">
        <div>
          <h3 className="font-montserrat font-bold text-white text-3xl text-center">
            FAQs
          </h3>
        </div>
      </section>
    </>
  );
};

export default Home;
