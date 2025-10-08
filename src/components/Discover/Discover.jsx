import { motion } from "framer-motion";
import Logo from "../../assets/logo/logo.png";
import { aboutData } from "../../data/data";

const titleFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

const logoScale = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1.2,
    transition: { delay: 0.1, duration: 0.8, ease: "easeInOut" },
  },
};

const itemFade = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.8 + i * 0.2, duration: 0.6, ease: "easeInOut" },
  }),
};
const Discover = () => {
  return (
    <section className="py-12 ">
      <motion.h3
       initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={titleFade}
        className="text-center font-montserrat font-bold text-2xl mb-12"
      >
        Discover why hundreds of clients entrust their <br /> business success
        to <span className="text-[#0094EE]">Animagin</span>
      </motion.h3>

      <div className="flex justify-between items-center w-8/12 mx-auto gap-8">
        <div className="flex flex-col justify-between gap-24">
          {aboutData.slice(0, 2).map((item, index) => (
            <motion.div
             key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={itemFade}
              className="flex items-center gap-4"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={`about${index + 1}`}
                className="w-20 h-auto object-contain"
              />
              {/* Title */}
              <h3 className="font-montserrat font-bold text-lg text-left">
                {item.title.map((t, i) => (
                  <span key={i} className="block">
                    {t}
                  </span>
                ))}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Logo */}
        <motion.div
         initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={logoScale}
          className="flex justify-center items-center"
        >
          <img
            src={Logo}
            alt="Logo"
            className="w-[150px] md:w-[200px] h-auto"
          />
        </motion.div>

        <div className="flex flex-col justify-between w-1/3 gap-24">
          {aboutData.slice(2, 4).map((item, index) => (
            <motion.div
             key={index}
              custom={index + 2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={itemFade}
              className="flex items-center gap-4"
            >
              {/* Title */}
              <h3 className="font-montserrat font-bold text-lg text-right">
                {item.title.map((t, i) => (
                  <span key={i} className="block">
                    {t}
                  </span>
                ))}
              </h3>
              {/* Image */}
              <img
                src={item.img}
                alt={`about${index + 3}`}
                className="w-20 h-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discover;
