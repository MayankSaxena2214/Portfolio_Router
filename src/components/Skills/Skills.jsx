import React from 'react';
import { FaHtml5,FaAws, FaCss3Alt, FaJsSquare, FaReact, FaGithub, FaNodeJs, FaDatabase, FaBootstrap, FaJava, FaPython, FaGitAlt } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { SiTypescript, SiNestjs, SiRedux, SiTailwindcss } from 'react-icons/si';
import { SiExpress } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import {Bounce} from "react-awesome-reveal"

const skills = [
  { icon: <FaHtml5 className="text-red-600" />, label: 'HTML' },
  { icon: <FaCss3Alt className="text-blue-600" />, label: 'CSS' },
  { icon: <FaJsSquare className="text-yellow-500" />, label: 'JavaScript' },
  { icon: <FaReact className="text-blue-500" />, label: 'React' },
  { icon: <FaGithub className="text-white" />, label: 'Github' },
  { icon: <FaNodeJs className="text-green-500" />, label: 'Node.js' },
  { icon: <DiMongodb className="text-green-600" />, label: 'MongoDB' },
  { icon: <FaAws className="text-orange-500" />, label: 'AWS' },
  { icon: <FaDatabase className="text-blue-700" />, label: 'SQL' },
  { icon: <FaBootstrap className="text-purple-600" />, label: 'Bootstrap' },
  { icon: <SiTailwindcss className="text-blue-400" />, label: 'Tailwind' },
  { icon: <SiRedux className="text-purple-500" />, label: 'Redux' },
  { icon: <FaJava className="text-red-600" />, label: 'Java' },
  { icon: <FaPython className="text-blue-500" />, label: 'Python' },
  { icon: <SiTypescript className="text-blue-600" />, label: 'TypeScript' },
  { icon: <SiNestjs className="text-red-600" />, label: 'Nest.js' },
  { icon: <FaGitAlt className="text-orange-500" />, label: 'Git' },
  { icon: <SiExpress className="text-green-500" />, label: 'Express' },
  { icon: <TbBrandCpp className="text-blue-600" />, label: 'C++' },
  // Add other technologies here with appropriate icons or placeholders
];

function Skills() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-8">Skills</h2>
      <p className="text-xl mb-12 text-center">
        I enjoy diving into and learning new things. Here's a list of technologies I've worked with.
      </p>
      <Bounce>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {skills.map((skill, index) => (
          <Bounce>
          <div
            key={index}
            className="flex flex-col items-center p-4 transition-transform transform hover:scale-110 hover:shadow-lg bg-gray-800 rounded-lg"
          >
            <div className="text-5xl mb-4">{skill.icon}</div>
            <p className="text-lg">{skill.label}</p>
          </div>
          </Bounce>
        ))}
      </div>
      </Bounce>
    </div>
  );
}


export default Skills;
