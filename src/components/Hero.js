import React from "react";
import HeroImg from "../assets/mecoding.jpeg";
import { motion } from "framer-motion";
import { fadeIn } from "../components/variants";

import { AiFillGithub, AiFillLinkedin, AiOutlineLink } from "react-icons/ai";


const Hero = () => {
  return (
    <section className="text-white py-32 max-w-screen-xl mx-auto">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0 mx-auto text-center md:text-left">
          <motion.div 
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount : 0.3 }}
          >
          <h1 className="text-4xl lg:text-6xl">
            Hi, my name is <span className="text-accent">Cliff!</span>
          </h1>
          </motion.div>
          <motion.div 
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount : 0.3 }}
          >
          <p className="py-5">
            I am a Frontend Developer with 2 years of experience in building
            websites and web applications. I specialize in JavaScript and frameworks like React and Next.JS and Tailwindcss.
          </p>
          </motion.div>

          <motion.div 
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount : 0.3 }}
          >

          <div className="flex justify-center md:justify-start py-5 ">
            {/* GitHub */}
            <a href="https://github.com/CliffVille" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white mr-2">
              <AiFillGithub size={40} />
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/clifford-villeneuve-401299a3/" target="_blank" rel="noopener noreferrer" className="text-accent mr-2 hover:text-white">
              <AiFillLinkedin size={40} />
            </a>
            {/* Personal Website */}
            <a href="https://cliffville.github.io/" target="_blank" rel="noopener noreferrer" className="text-accent mb-2 hover:text-white">
              <AiOutlineLink size={40} />
            </a>
          </div>
          </motion.div>
          <motion.div 
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount : 0.3 }}
          >
          <a
            href="/#projects"
            className=" btn bg-accent  border-2 border-[#48A14D] text-white px-6 py-3 hover:bg-transparent"
          >
            See Projects
          </a>
          </motion.div>
        </div>
        
        <motion.div 
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount : 0.3 }}
          >
        <div className="hero-img mt-8">
          <img
            src={HeroImg}
            alt="hero image"
            className="w-[90%] mx-auto rounded-lg"
          />
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;