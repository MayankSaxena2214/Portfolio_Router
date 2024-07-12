import React from 'react';
import Airbnb from "../../assets/Airbnb.png"
import Spotify from "../../assets/Spotify.png"
import todo from "../../assets/todo.png"
import simon from "../../assets/simon.png"
import gallery from "../../assets/Gallery.png"
import chatapp from "../../assets/Chatapp.png"
import rest from "../../assets/rest.png"
import landing from "../../assets/LandingPage.png"
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
            <div className="w-full sm:w-1/2">
              <ProjectCard
                title="Airbnb-like Website"
                description="This responsive Airbnb-like website features user authentication, dynamic property listings, and booking functionalities. Built with modern web technologies, including React for the frontend and Node.js with Express for the backend, it provides a seamless user experience for exploring and booking accommodations, highlighting robust frontend development and backend API integration."
                link="https://airbnb-8pav.onrender.com"
                imageUrl={Airbnb}
              />
            </div>

            {/* Project 2: MERN Chat App */}
            <div className="w-full sm:w-1/2">
              <ProjectCard
                title="MERN Chat App"
                description="Built on the MERN (MongoDB, Express.js, React, Node.js) stack, this chat application provides real-time messaging with secure user authentication. It supports both private and group chats, ensuring seamless communication. Designed for scalability, it showcases robust backend architecture and responsive frontend design, making it ideal for interactive and dynamic communication environments."
                link="https://talk-a-tive-7fgq.onrender.com/"
                imageUrl={chatapp}
              />
            </div>
          </div>

          {/* Minor Projects */}
          <h1 className='text-6xl text-center font-bold  text-purple-700'>Mini Projects</h1>
          <div>
            <h3 className="text-xl font-bold mb-4">Mini Projects</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Project 1: Simon Game */}
              <ProjectCard
                title="Simon Game"
                description="A classic Simon Game implementation using HTML, CSS, and JavaScript. Test memory skills by repeating patterns. Features include dynamic UI updates and game logic, emphasizing front-end interactivity and design"
                link="https://simon-says-zsng.onrender.com"
                imageUrl={simon}
              />

              {/* Project 2: Todo */}
              <ProjectCard
                title="Todo App"
                description="A simple Todo application for managing tasks efficiently. Features include adding, editing, and deleting tasks, organizing tasks into categories or lists, and marking tasks as completed. Designed for productivity and task management."
                link="https://simon-says-zsng.onrender.com"
                imageUrl={todo}
              />

              {/* Project 3: Gallery Using Grid */}
              <ProjectCard
                title="Gallery Using Grid"
                 description="A responsive gallery built solely with HTML and CSS, showcasing images using CSS Grid for layout. Features include grid-based organization, responsive design for various screen sizes, and minimalistic frontend development"
                link="https://gallery-using-grid.onrender.com"
                imageUrl={gallery}
              />

              {/* Project 4: REST API */}
              <ProjectCard
                title="REST API"
                description="A RESTful API developed with SQL database integration for data storage and retrieval. Implements CRUD operations, authentication, and data validation, emphasizing backend development with SQL database management"
                link="https://rest-api-cygw.onrender.com"
                imageUrl={rest}
              />

              {/* Project 5: Landing Page */}
              <ProjectCard
                title="Landing Page"
                description="A sleek landing page crafted with HTML and CSS, featuring responsive design principles for optimal viewing on various devices. Highlights include clean layout, modern aesthetics, and intuitive user interface elements."
                link="https://octanet-may1.onrender.com"
                imageUrl={landing}
              />

              {/* Project 6: Spotify Clone */}
              <ProjectCard
                title="Spotify Clone"
                description="A Spotify-inspired music player clone created with HTML and CSS. Features include responsive design, media player controls, and a visually appealing interface mimicking the Spotify UI for a seamless music listening experience"
                link="https://spotifyclone-kgia.onrender.com"
                imageUrl={Spotify}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
