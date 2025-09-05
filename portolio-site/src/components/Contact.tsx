
"use client"


import React from 'react';
import AnimatedSection from './AnimatedSection';
import { PROFILE_DATA } from '../constants';
import { GithubIcon, LinkedinIcon, MailIcon } from './icons';

const Contact = () => {
    const { contact, social } = PROFILE_DATA;
    return (
        <AnimatedSection id="contact" className="!pb-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-100 mb-4 font-serif">Get In Touch</h2>
                <p className="text-gray-400 max-w-md mx-auto mb-8">
                    I'm open to new opportunities and collaborations. Feel free to reach out.
                </p>
                <a 
                    href={`mailto:${contact.email}`} 
                    className="inline-block bg-cyan-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-cyan-600 transition-all duration-300 shadow-lg shadow-cyan-500/20"
                >
                    Say Hello
                </a>

                <div className="mt-12 flex justify-center items-center space-x-6">
                    <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                        <LinkedinIcon className="w-8 h-8" />
                    </a>
                     <a href={`mailto:${contact.email}`} className="text-gray-400 hover:text-white transition-colors duration-300">
                        <MailIcon className="w-8 h-8" />
                    </a>
                </div>

                <footer className="mt-16 border-t border-gray-800 pt-6">
                    <p className="text-sm text-gray-600">
                        {new Date().getFullYear()} Kimi Andersson. All Rights Reserved.
                    </p>
                </footer>
            </div>
        </AnimatedSection>
    );
};

export default Contact;
