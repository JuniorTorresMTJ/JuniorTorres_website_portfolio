import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';


const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
  <section id='about' ref={ref} className='section'>
    <div className="container mx-auto">
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center
      lg:gap-x-20 lg:gap-y-0 h-screen'>
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once:false, amount:0.3}}
        className='flex-1 bg-about bg-contain bg-no-repeat h-[640px]
        mix-blend-lighten bg-top'>
        </motion.div>
        <motion.div
                variants={fadeIn('left', 0.5)}
                initial="hidden"
                whileInView={'show'}
                viewport={{once:false, amount:0.3}}
        className='flex-1'>
          <h2 className=' h2 text-accent font-semibold'>About me.</h2>
          <h3 className=' h3 mb-4 '>I'm a Freelance Front-end Developer with over 5 years of experience.
          </h3>
          <p className='mb-6'>
          I am a Machine Learning Engineering professional with experience in Python, MLOps, MLflow, SQL, PowerBI, PySpark, Databricks, Git, Docker, Poetry,Azure Cloud, Azure DevOps, HTML, CSS, ReactJS and AngularJS.
          </p>
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient'>
               +{ inView ? <CountUp start={0} end={3} duration={3} /> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                 Years of <br />
                Experience
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient'>
               +{ inView ? <CountUp start={0} end={15} duration={3} /> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
              Projects <br />
              Completed
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient'>
               { inView ? <CountUp start={0} end={8} duration={3} /> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Models in  <br />
                Production
              </div>
            </div>
          </div>
          <div className=' flex gap-x-8 items-center mr-8 lg:justify-end'>
            <a href="https://www.linkedin.com/in/marivaldotorres/" target="_blank">
            <button className=' btn btn-lg'>
              Contact me
            </button></a>
            <a href="https://github.com/JuniorTorresMTJ" className='text-gradient btn-link' target="_blank">
              My Portfólio
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>);
};

export default About;
