import React from 'react';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

import { FiGithub } from 'react-icons/fi';
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiCodingninjas } from "react-icons/si";
import { Bounce,Slide } from 'react-awesome-reveal';

const Socials = () => {
  return (
    <>
    <Slide>
    <h1 className="text-center font-family-sans font-bold text-5xl text-blue-600">Connect with me on following platform</h1>
    <div className="grid mt-16 mb-16 grid-cols-2 gap-4 justify-items-center">
      {/* Instagram */}
      <div className="flex items-center justify-center mb-4">
        <Bounce>
        <a href="https://instagram.com/mayanksaxena2214" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-pink-600" size={32} />
        </a>
        </Bounce>
      </div>
      
      {/* LinkedIn */}
      <div className="flex items-center justify-center mb-4">
        <Bounce>
        <a href="https://www.linkedin.com/in/mayank-saxena-419388239/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-blue-600" size={32} />
        </a>
        </Bounce>
        </div>

      {/* GitHub */}
      <div className="flex items-center justify-center mb-4">
        <Bounce>
        <a href="https://github.com/mayanksaxena2214" target="_blank" rel="noopener noreferrer">
          <FiGithub className="text-gray-800" size={32} color='white'/>
        </a>
        </Bounce>
        </div>      
      {/* WhatsApp */}
      <div className="flex items-center justify-center mb-4">
        <Bounce>
        <a href="http://wa.me/+919760159922" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-green-600" size={32} />
        </a>
        </Bounce>
        </div>

      {/* Gmail */}
    
      <div className="flex items-center justify-center mb-4">
        <br />
        <Bounce>
        <a href="mailto:mayanksaxena2214@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="text-red-600" size={32} />
        </a>
        </Bounce>
        </div>

      {/* LeetCode */}
      <div className="flex items-center justify-center mb-4">
        <Bounce>
        <a href="https://leetcode.com/u/Mayanksaxena2114/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode className="text-orange-500" size={32} />
        </a>
        </Bounce>
        </div>

      {/* GeeksforGeeks */}
      <div className="flex items-center justify-center mb-4">
        <Bounce>
        <a href="https://www.geeksforgeeks.org/user/mayanksaxena2114/" target="_blank" rel="noopener noreferrer">
          <SiGeeksforgeeks className="text-purple-600" size={32} />
        </a>
        </Bounce>
        </div>

      {/* CodingNinjas */}
      <div className="flex items-center justify-center mb-4">
        <Bounce>
        <a href="https://www.naukri.com/code360/profile/c5bda087-b028-45a8-b194-ddc0ce93bd8f" target="_blank" rel="noopener noreferrer">
          <SiCodingninjas className="text-indigo-600" size={32} />
        </a>
        </Bounce>
        </div>

      {/* Additional Icons to fill the grid */}
     
    </div>
    </Slide>
    </>
  );
};

export default Socials;