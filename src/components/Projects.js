import React from "react";
import cribCleaner from "../assets/cribcleaners.png";
import simplitax from "../assets/SimpliTax.png";
import { motion } from "framer-motion";
import { fadeIn } from "../components/variants";

const Projects = () => {
  
    const projects = [
        {
          img: cribCleaner,
          title: "Crib Cleaners",
          desc: " The Crib Cleaners website, built for a power washing company, uses React and Tailwind CSS. It offers a clean navigation and dynamic visuals. ",
          live: "https://thecribcleaners.com",
          code: "https://github.com/CliffVille/cribcleaners",
        },
        {
          img: simplitax,
          title: "Simpli-Tax",
          desc: "Contract for an accounting firm. Designing and developing in React and tailwindcss.",
          live: "https://cliffville.github.io/simpli-tax/",
          code: "https://github.com/CliffVille/simpli-tax",
        },
      ]; 

  return (
    <section className="text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <motion.div 
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount : 0.3 }}
            >
              <h2 className="text-4xl font-bold mb-10 border-b-[5px] w-[180px] mx-auto md:mx-0 border-accent pb-6 text-center md:text-left">
                Projects
              </h2>
          </motion.div>
          <motion.div 
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount : 0.3 }}
            >
            <p className="mb-8 text-center md:text-left">
              These are some of my projects. I have built these with React,
              Masonary.js and vanilla JavaScript, Tailwindcss, and vanilla CSS. Check them out.
            </p>
          </motion.div>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-2 gap-12">
        {projects.map((project, i) => {
          return (
            <motion.div 
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount : 0.3 }}
            >
            <div className="relative border-[6px] border-accent" key={i}>
              <img src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-0 bottom-0 mx-auto w-[100%] h-[100%] m:h-[50%] bg-primary opacity-0 duration-500 justify-center flex-col hover:opacity-100">
                <p className="py-3 text-center font-bold px-2 text-white text-[10px] md:text-xl">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="px-4 py-1 bg-blue-500 hover:bg-blue-600 font-bold text-transform: uppercase"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="px-4 py-1 bg-blue-500 hover:bg-blue-600 font-bold text-transform: uppercase ml-2"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;