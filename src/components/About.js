import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../components/variants";

const About = () => {
  return (
    <section className="text-white mt-0" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
        <motion.div 
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount : 0.3 }}
          >
          <h2 className="text-4xl text-center md:text-flex-start font-bold mb-5 border-b-[5px] w-[180px] mx-auto md:mx-0 border-accent pb-2">
            About Me
          </h2>
        
          <p className="w-[90%] md:w-3/4 pb-5 mx-auto md:mx-0 text-center md:text-left">
            I’m from Maple Ridge and I decided to make some changes and take the leap from mental health to becoming a skilled developer.
          </p>
      
          <p className="w-[90%] md:w-3/4 pb-5 w-3/4 mx-auto md:mx-0 text-center md:text-left">
            I've got a solid grip on HTML, CSS, and JavaScript, and recently, I've been exploring React-Native, PHP, and MySQL. Ready to shake things up even more by adding more languages to my skillset.
          </p>
 
          <p className="w-[90%] md:w-3/4 mx-auto md:mx-0 text-center md:text-left">I also mess around with Adobe stuff like Photoshop, Illustrator, InDesign, Premiere Pro, After Effects, Dimensions, and XD. Also, I'm pretty good with Figma and Canva. Let's create something cool together!</p>
          </motion.div>
        </div>

       <div className="relative mt-24">

          <div className="border-r-4 border-accent absolute h-full left-1/2 transform -translate-x-1/2"></div>

          <ul className="timeline flex flex-col justify-center">
            <motion.div 
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount : 0.3 }}
            >
            
            <li className="flex items-center w-100%">
              <div className="w-1/2 pr-4 ml-2 md:ml-0 md:pr-8">
                <time className="mb-1 text-sm font-normal text-gray-400">2023</time>
                <h3 className="text-md font-bold">New Media Design & Web Development</h3>
                <p className="text-white text-sm">
                  STUDENT at BCIT
                </p>
              </div>
            </li>
            </motion.div>

            <motion.div 
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount : 0.3 }}
            >
            <li className="flex items-center w-full flex-row-reverse">
              <div className="w-1/2 pl-10 mr-4 md:mr-0 md:pl-12">
                <time className="mb-1 text-sm font-normal text-gray-400">2024</time>
                <h3 className="text-md font-bold">Internship</h3>
                <p className="text-white text-sm">
                  Internship at Evolve Branding May-July 2024
                </p>
              </div>
            </li>
            </motion.div>

            <motion.div 
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount : 0.3 }}
            >
            <li className="flex items-center w-full">
              <div className="w-1/2 pr-4 ml-2 md:ml-0 md:pr-8">
                <time className="mb-1 text-sm font-normal text-gray-400">2024</time>
                <h3 className="text-md font-bold">Graduated</h3>
                <p className="text-white text-sm">
                  Finished my diploma in New Media Design & Web Development
                </p>
              </div>
            </li>
            </motion.div>

            <motion.div 
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount : 0.3 }}
            >
            <li className="mb-4 flex items-center w-full flex-row-reverse">
              <div className="w-1/2 pl-10 mr-4 md:mr-0 md:pl-12">
                <time className="mb-1 text-sm font-normal text-gray-400">2024</time>
                <h3 className="text-lg font-bold">Contract Work</h3>
                <p className="text-white">
                  Hired on as a contract web developer at Evolve Branding
                </p>
              </div>
            </li>
            </motion.div>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;