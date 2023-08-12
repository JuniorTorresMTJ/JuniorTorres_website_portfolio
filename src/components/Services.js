import React from 'react';
import {BsArrowUpRight} from 'react-icons/bs';
import { motion } from 'framer-motion';
import {fadeIn} from '../variants';


const services = [
  {
    name:'Machine Learning Engineering',
    description: 'I worked as a machine learning engineer at the largest life insurance company in Brazil, where I co-founded the MLOps department, designing the architecture and deploying 7 models into production.',
    link: 'Learn more',

  },
  {
    name:'Data Analytics',
    description: 'I worked in Data & Analytics at the third-largest e-commerce company in Brazil, which is also well-known worldwide. There, I assisted in the retention and acquisition of new users through insights and studies on the data of active platform users.',
    link: 'Learn more',

  },
  {
    name:'Data Science',
    description: 'I worked as a data scientist at one of the top three banks in Brazil. There, I focused on analyzing, conducting studies, and identifying patterns in customer behavior. This comprehensive analysis allowed us to develop tailored strategies that enhanced customer engagement and loyalty.',
    link: 'Learn more',

  }
]


const Services = () => {
  return (
  <section id='services' className=' flex items-center lg:h-screen'>
    <div className="container mx-auto">
      <div className=' flex flex-col lg:flex-row'>
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={'show'}
         viewport={{once:false, amount:0.3}}
        className=' flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten m-2 mb-10 lg:mb-0 max-w-[320px] lg:max-w-[482px]'>
          <h2 className='h2 text-accent font-semibold m-5 ml-0'>What I Do.</h2>
          <h3 className='h4  leading-tight mb-10 mr-3 pr-2'>Welcome to my professional overview. Dive into my journey through machine learning engineering, data analytics, and data science across Brazil's top industries.</h3>
          <a href="https://www.linkedin.com/in/marivaldotorres/" target="_blank" ><button className='btn btn-sm'  >See my work</button></a>
        </motion.div>
        <div>
          <motion.div
                  variants={fadeIn('left', 0.5)}
                  initial="hidden"
                  whileInView={'show'}
                   viewport={{once:false, amount:0.3}}
          className='flex-1 '>
            
          {services.map((service, index) => {
             const { name, description, link } = service;

    return (
        <div className='border-b border-white/20 h-[220px] lg:h-[150px] mb-[38px] flex' key={index}>
            <div className='lg:max-w-[600px] max-x-[700px]'>
                <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'> 
                    {name}
                </h4>
                <p className='font-secondary leading-tight'>
                    {description}
                </p>
            </div>
            {/* <div className=' flex flex-col flex-1 items-end'> 
               <a href="https://www.linkedin.com/in/marivaldotorres/" target="_blank" className='btn w-9 h-9 mb-[42] flex justify-center items-center'>
                <BsArrowUpRight />
               </a>
               <a href="https://www.linkedin.com/in/marivaldotorres/" target="_blank" className='text-gradient text-sm'>{link}</a>
            </div> */}
        </div>
    );
})}

          </motion.div>
        </div>
      </div>
    </div>
    </section>);
};

export default Services;
