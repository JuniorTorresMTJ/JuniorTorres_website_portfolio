import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            <div>
              <h2 className="h2 leading-tight font-semibold text-accent">
                My Projects.
              </h2>
              <p className="max-w-sm mb-16">
                Explore key projects from my journey in MLOps Engineering, Data
                Science, and Data Analytics, showcasing my diverse expertise in
                optimizing workflows and deriving insights.
              </p>
              <a href="https://github.com/JuniorTorresMTJ" target="_blank">
                <button className="btn btn-sm mb-2">View all projects</button>
              </a>
            </div>
            <a href="https://github.com/JuniorTorresMTJ/model_api_mlops_project" target="_blank">
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className=" group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={Img1}
                  alt=""
                />
                <div
                  className=" absolute -bottom-full left-12
          group-hover:bottom-24 transition-all duration-500 z-50"
                >
                  <span className="text-gradient">MLOps/MLE</span>
                </div>
                <div
                  className=" absolute -bottom-full left-12
          group-hover:bottom-14 transition-all duration-700 z-50"
                >
                  <span className="text-3x1 text-white">
                    Model API MLOps Project
                  </span>
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            <a href="https://github.com/JuniorTorresMTJ/TowerBank" target="_blank">
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className=" group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              <div
                className=" absolute -bottom-full left-12
          group-hover:bottom-24 transition-all duration-500 z-50"
              >
                <span className="text-gradient">Data Science</span>
              </div>
              <div
                className=" absolute -bottom-full left-12
          group-hover:bottom-14 transition-all duration-700 z-50"
              >
                <span className="text-3x1 text-white">TowerBank</span>
              </div>
            </div>
            </a>
            <a href="https://github.com/JuniorTorresMTJ/Projeto_DeuPositivo" target="_blank">
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className=" group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
              <div
                className=" absolute -bottom-full left-12
          group-hover:bottom-24 transition-all duration-500 z-50"
              >
                <span className="text-gradient">Data Analytics</span>
              </div>
              <div
                className=" absolute -bottom-full left-12
          group-hover:bottom-14 transition-all duration-700 z-50"
              >
                <span className="text-3x1 text-white">Deu Positivo</span>
              </div>
            </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
