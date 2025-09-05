"use client"


import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE_DATA } from '../constants';
import { PhoneIcon, MailIcon, LocationIcon, GithubIcon, LinkedinIcon } from './icons';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  const { name, title, contact, social } = PROFILE_DATA;

  return (
    <motion.section 
        id="home"
        className="min-h-screen flex flex-col justify-center text-center -mt-[64px]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
    >
      <motion.h1 
        className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-gray-100"
        variants={itemVariants}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            {name}
        </span>
      </motion.h1>
      <motion.h2 
        className="mt-4 text-xl md:text-2xl font-semibold text-cyan-300 tracking-wider"
        variants={itemVariants}
      >
        {title}
      </motion.h2>
      
      <motion.div 
        className="mt-8 flex justify-center items-center space-x-4 md:space-x-6 text-gray-400"
        variants={itemVariants}
      >
        <div className="flex items-center space-x-2">
            <MailIcon className="w-5 h-5" />
            <a href={`mailto:${contact.email}`} className="hover:text-cyan-400 transition-colors duration-300 text-sm">{contact.email}</a>
        </div>
        <div className="flex items-center space-x-2">
            <LocationIcon className="w-5 h-5" />
            <span className="text-sm">{contact.location}</span>
        </div>
      </motion.div>
      <motion.div
        className="mt-6 flex justify-center items-center space-x-6"
        variants={itemVariants}
      >
        <a href={social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            <GithubIcon className="w-7 h-7" />
        </a>
        <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            <LinkedinIcon className="w-7 h-7" />
        </a>
         <a href={`tel:${contact.phone}`} className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2">
            <PhoneIcon className="w-6 h-6" />
            <span className="text-sm">{contact.phone}</span>
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
