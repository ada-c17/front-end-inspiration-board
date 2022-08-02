import React from "react";
import "../Styles/about.css";
import Planty from "../Images/hanging_plant.png";
import Hangy from "../Images/hanging-pot.png";
import Baby from "../Images/baby-tears.png";
import "../Styles/animate.css";
import { motion } from "framer-motion/dist/framer-motion";

const About = () => {
  return (
    <div className="App">
      <div id="About">
        <h1>
          <motion.img
            src={Baby}
            alt=""
            width={80}
            height={80}
            whileHover={{ scale: 1.5 }}
          />
          InspoBoard About Page
          <img src={Hangy} alt="" width={80} height={80} />
        </h1>
        <div className="about-container">
          <h2>orange-purple</h2>
          <p>
            The members of orange-purple are students in Ada Developers cohort
            17. Together, we are the creators of this inspiration board!
          </p>
          <div className="about-text">
            ꒰ა ♡ ໒꒱ Heather ꒰ა ♡ ໒꒱ Hillary ꒰ა ♡ ໒꒱ Katina ꒰ა ♡ ໒꒱ Tyrah
            ꒰ა ♡ ໒꒱
            <img src={Planty} alt="" width={80} height={80} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
