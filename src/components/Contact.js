import React from 'react';
import { motion } from 'framer-motion';
import {fadeIn} from '../variants';
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';

const Contact = () => {
  return (
  <section id='contact' className=' py-16 lg:section '>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row '>
        <motion.div
        variants={fadeIn('left', 0.3)}
        initial="hidden"
        whileInView={'show'}
         viewport={{once:false, amount:0.3}}
        className='flex-1 flex justify-end lg:justify-center gap-x-7  items-center'>
          <div>
          <h2 className='uppercase  text-accent font-semibold text-[32px]'>
            Contact Me.
            </h2>
          <h2 className=' text-[45px] lg:text-[90px] leading-none mb-12'> Let's work <br /> together!
          </h2>
          </div>
        </motion.div>
        <motion.div
                variants={fadeIn('left', 0.3)}
                initial="hidden"
                whileInView={'show'}
                 viewport={{once:false, amount:0.3}}
        className='flex text-[20px]  gap-x-6 max-w-max mx-auto mb-16 lg:-mx-0 lg:items-center lg:gap-x-10 lg:mr-32 lg:pl-12' >
          <a href="https://github.com/JuniorTorresMTJ" target="_blank" className='text-[25px] lg:text-[50px] hover:text-[#2C8A43] animate-bounce'>
          <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/marivaldotorres/" target="_blank" className=' text-[25px] lg:text-[50px] hover:text-[#2C8A43] animate-bounce'>
          <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/mlengineer.py/" target="_blank" className=' text-[25px] lg:text-[50px] hover:text-[#2C8A43] animate-bounce'>
          <FaInstagram />
          </a>

        </motion.div>
      </div>
    </div>
    </section>

  );
};

export default Contact;

