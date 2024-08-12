import React from 'react'
import Typewriter from 'typewriter-effect';
import ProfileImage from '../../assets/Profile.png';
import "./Home.css";
import {Slide} from "react-awesome-reveal";
function Home() {
  return (
    
    <div className=" mt-0">
      {/* //Now we want the imagediv and text div on the center on the same line so we have to use the flexbox */}
      <Slide>
      <div className="mt-16 flex flex-col items-center justify-center bg-black">
  <div className="main1 flex justify-center items-center w-full bg-black">
    <div><img className="h-80 w-80" src={ProfileImage} alt="Profile" /></div>
    <div className="pretext text-8xl text-blue-500">Hello I'm a 
      <div className="text-4xl mt-4 ml-4 text-red-400">
        <Typewriter
          options={{
            strings: ["MERN Stack Developer","Backend Developer","Frontend Developer"],
            autoStart: true,
            loop: true,
          }}
      />
    </div>
  </div>
  </div>
  <div className="intro bg-blue-600 rounded-2xl text-justify text-1xl main2 p-4 h-auto w-1/2 mb-16 mt-8 flex justify-center items-center  text-white">
    <div>
    As a Full Stack Developer I specialize in the MERN stack, offering comprehensive web development services. My skills span frontend and backend development, allowing me to manage web applications from concept to deployment. Passionate about coding, I excel in creating responsive, user-centric designs with React, efficient database management with MongoDB, and robust server-side solutions with Node.js and Express.js. Known for problem-solving and detailed-oriented coding, I ensure quality and scalability in projects. Actively seeking opportunities to apply my skills and grow. Contact me at mayanksaxena2214@gmail.com for collaborations or discussions.
    </div>
  </div>
</div>
</Slide>
</div>
    
  )
}

export default Home;
