import React from 'react';
import  Image from '../assets/avatar.svg';
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';
import {TypeAnimation} from 'react-type-animation';
import { motion } from 'framer-motion';
import {fadeIn} from '../variants';


const Banner = () => {
  return (<div id='home' className='min-h-[85vh] lg:min-h-[78vh] flex items-center'>
    <div className="container mx-auto">
      <div className='flex  flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        <div className=' flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once:false, amount:0.7}}
          className=' text-[55px] font-bold leading-[0.8] lg:text-[100px]'>
            JUNIOR <span>TORRES</span>
            </motion.h1>
            <motion.div 
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false, amount:0.7}}
            className='mb-6 mt-4 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase
            leading=[1]'>
              <span className=' text-white mr-4 '>I am a</span>
              <TypeAnimation  sequence={[
                'MLOps Engineer',
                2000,
                'ML Engineer',
                2000,
                'Data Scientist',
                2000,
                'Data Analyst',
                2000,
              ]}
              speed={50}
              className=' text-accent'
              wrapper='span'
              repeat={Infinity}
              />
              
            </motion.div>
            <motion.p 
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false, amount:0.7}}
            className=' mb-8 max-wlg mx-auto lg:mx-0'>
              Welcome to my portfolio. Here, you'll find my projects, every position I've held, and all the services I offer to help you achieve your goals.</motion.p>
        <motion.div
        variants={fadeIn('up', 0.6)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once:false, amount:0.7}}
        className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
          <a href="https://www.linkedin.com/in/marivaldotorres/">
          <button className='btn btn-lg'>Contact me</button></a>
          <a className='text-gradient btn-link' href="https://github.com/JuniorTorresMTJ">
            My Portfolio
            </a>
        </motion.div>
        <motion.div
        variants={fadeIn('up', 0.7)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once:false, amount:0.7}}
        className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:-mx-0'>
          <a href="https://github.com/JuniorTorresMTJ" target="_blank" className='text-[25px] hover:text-[#2C8A43]'>
          <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/marivaldotorres/" target="_blank" className=' text-[25px] hover:text-[#2C8A43]'>
          <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/mlengineer.py/" target="_blank" className=' text-[25px] hover:text-[#2C8A43]'>
          <FaInstagram />
          </a>
        </motion.div>
        </div>
        <motion.div 
        variants={fadeIn('down', 0.5)}
        initial="hidden"
        whileInView={'show'}
        className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
          <img src={Image} alt="" />
        </motion.div>
      </div>
    </div>
    </div>);
};

export default Banner;
