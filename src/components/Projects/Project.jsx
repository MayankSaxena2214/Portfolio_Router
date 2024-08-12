import React from 'react';
import Airbnb from "../../assets/Airbnb.png"
import Spotify from "../../assets/Spotify.png"
import todo from "../../assets/todo.png"
import simon from "../../assets/simon.png"
import gallery from "../../assets/Gallery.png"
import blogapp from "../../assets/Blog.png"
import job from "../../assets/Job.png"
import rest from "../../assets/rest.png"
import landing from "../../assets/LandingPage.png"
import {Fade,JackInTheBox} from "react-awesome-reveal"
const ProjectCard = ({ title, description, link, imageUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-4">
      <img src={imageUrl} alt={title} className="w-full h-60 object-cover object-center" />
      <div className="p-4 bg-gray-700">
        <h4 className="text-lg text-white font-medium mb-2">{title}</h4>
        <p className="text-white mb-4">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:underline">Link to Project</a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="bg-black-300 py-8">
      <h1 className='text-6xl text-center font-bold  text-purple-700'>Major Projects</h1>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Projects</h2>

          {/* Major Projects */}
          
          <div className="mb-8 flex flex-wrap justify-center gap-8">
            {/* Project 1: Airbnb-like Website */}
            <div className="w-full sm:w-1/2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <Fade>
  <ProjectCard
    title="Airbnb-like Website"
    description="This responsive Airbnb-like website features user authentication, dynamic property listings, and booking functionalities. Built with modern web technologies, including React for the frontend and Node.js with Express for the backend, it provides a seamless user experience for exploring and booking accommodations, highlighting robust frontend development and backend API integration."
    link="https://airbnb-8pav.onrender.com"
    imageUrl={Airbnb}
  />
</Fade>
</div>

            {/* Project 2: Blog App */}
            <div className="w-full sm:w-1/2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <Fade>
  <ProjectCard
    title="Blog Website"
    description="Developed a blog application with user authentication, CRUD operations, and a rich text editor. Ensured responsive design and seamless integration between front-end and back-end."
    link="https://blog-frontend-hy4a.onrender.com/"
    imageUrl={blogapp}
  />
  </Fade>
</div>
            {/* Project -3 */}
            <div className="w-full sm:w-1/2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <Fade>
  <ProjectCard
    title="Job Portal"
    description="Built a job portal with MongoDB, Express, React, and Node.js, featuring job postings, application tracking, and user management, demonstrating expertise in both front-end and back-end development"
    link="https://jobportalfrontend-1-0zvc.onrender.com/"
    imageUrl={job}
  />
  </Fade>
</div>
          </div>

          {/* Minor Projects */}
          <h1 className='text-6xl text-center font-bold  text-purple-700'>Mini Projects</h1>
          <div>
            <h3 className="text-xl font-bold mb-4">Mini Projects</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Project 1: Simon Game */}
  <JackInTheBox>
  <ProjectCard
    className="transition-transform transform hover:scale-105 hover:shadow-lg"
    title="Simon Game"
    description="A classic Simon Game implementation using HTML, CSS, and JavaScript. Test memory skills by repeating patterns. Features include dynamic UI updates and game logic, emphasizing front-end interactivity and design"
    link="https://simon-says-zsng.onrender.com"
    imageUrl={simon}
  />
  </JackInTheBox>

  {/* Project 2: Todo */}
  <JackInTheBox>
  <ProjectCard
    className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
    title="Todo App"
    description="A simple Todo application for managing tasks efficiently. Features include adding, editing, and deleting tasks, organizing tasks into categories or lists, and marking tasks as completed. Designed for productivity and task management."
    link="https://simon-says-zsng.onrender.com"
    imageUrl={todo}
  />
  </JackInTheBox>

  {/* Project 3: Gallery Using Grid */}
  <JackInTheBox>
  <ProjectCard
    className="transition-transform transform hover:scale-105 hover:shadow-lg"
    title="Gallery Using Grid"
    description="A responsive gallery built solely with HTML and CSS, showcasing images using CSS Grid for layout. Features include grid-based organization, responsive design for various screen sizes, and minimalistic frontend development"
    link="https://gallery-using-grid.onrender.com"
    imageUrl={gallery}
  />
  </JackInTheBox>
  {/* Project 4: REST API */}
  <JackInTheBox>
  <ProjectCard
    className="transition-transform transform hover:scale-105 hover:shadow-lg"
    title="REST API"
    description="A RESTful API developed with SQL database integration for data storage and retrieval. Implements CRUD operations, authentication, and data validation, emphasizing backend development with SQL database management"
    link="https://rest-api-cygw.onrender.com"
    imageUrl={rest}
  />
  </JackInTheBox>

  {/* Project 5: Landing Page */}
  <JackInTheBox>
  <ProjectCard
    className="transition-transform transform hover:scale-105 hover:shadow-lg"
    title="Landing Page"
    description="A sleek landing page crafted with HTML and CSS, featuring responsive design principles for optimal viewing on various devices. Highlights include clean layout, modern aesthetics, and intuitive user interface elements."
    link="https://octanet-may1.onrender.com"
    imageUrl={landing}
  />
  </JackInTheBox>
  {/* Project 6: Spotify Clone */}
  <JackInTheBox>
  <ProjectCard
    className="transition-transform transform hover:scale-105 hover:shadow-lg"
    title="Spotify Clone"
    description="A Spotify-inspired music player clone created with HTML and CSS. Features include responsive design, media player controls, and a visually appealing interface mimicking the Spotify UI for a seamless music listening experience"
    link="https://spotifyclone-kgia.onrender.com"
    imageUrl={Spotify}
  />
  </JackInTheBox>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
