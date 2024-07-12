import React,{useState} from 'react'
import {Link,NavLink} from 'react-router-dom';
// import React, { useState } from 'react';
// import { Link, NavLink } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img className="h-12 w-32 rounded-2xl" src="https://p.kindpng.com/picc/s/238-2384314_circle-hd-png-download.png" alt="Logo" />
          </Link>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          <div className={`w-full md:flex md:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {/* Your NavLink items */}
              <li>
            <NavLink to="/" className={({isActive}) => `block py-2 ${isActive? "text-orange-700": "text-white"} pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-400 lg:p-0`}
                >Home
            </NavLink>
      </li>
      <li>
            <NavLink to="/education" className={({isActive}) => `block py-2 ${isActive? "text-orange-700": "text-white"} pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-500 lg:p-0`}
                >Education
            </NavLink>
      </li>
      <li>
            <NavLink to="/skills" className={({isActive}) => `block py-2 ${isActive? "text-orange-700": "text-white"} pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-500 lg:p-0`}
                >Skills
            </NavLink>
      </li>
      <li>
            <NavLink to="/experience" className={({isActive}) => `block py-2 ${isActive? "text-orange-700": "text-white"} pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-500 lg:p-0`}
                >Experience
            </NavLink>
      </li>
      <li>
            <NavLink to="/projects" className={({isActive}) => `block py-2 ${isActive? "text-orange-700": "text-white"} pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-500 lg:p-0`}
                >Projects
            </NavLink>
      </li>
      <li>
            <NavLink to="/certificates" className={({isActive}) => `block py-2 ${isActive? "text-orange-700": "text-white"} pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-500 lg:p-0`}
                >Certificates
            </NavLink>
      </li>
      <li>
            <NavLink to="/socials" className={({isActive}) => `block py-2 ${isActive? "text-orange-700": "text-white"} pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-500 lg:p-0`}
                >Socials
            </NavLink>
      </li>
      <li>
            <NavLink to="/contact" className={({isActive}) => `block py-2 ${isActive? "text-orange-700": "text-white"} pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-500 lg:p-0`}
                >Contact
            </NavLink>
      </li>
        
       
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;

// function Header() {
//   return (
//     <>
      

// <nav className="bg-white border-gray-200 dark:bg-gray-900">
//   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//     <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//         <img className="h-12 w-32 rounded-2xl" src="https://p.kindpng.com/picc/s/238-2384314_circle-hd-png-download.png" />
//         {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
//     </Link>
//     <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
//         <span className="sr-only">Open main menu</span>
//         <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
//         </svg>
//     </button>
//     <div className="hidden w-full md:block md:w-auto" id="navbar-default">
//       <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//       <li>
//             <NavLink to="/" className={({isActive}) => `block py-2 ${isActive? "text-orange-700": "text-white"} pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-400 lg:p-0`}
//                 >Home
//             </NavLink>
//       </li>
//       <li>
//             <NavLink to="/education" className={({isActive}) => `block py-2 ${isActive? "text-orange-700": "text-white"} pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-500 lg:p-0`}
//                 >Education
//             </NavLink>
//       </li>
//       <li>
//             <NavLink to="/skills" className={({isActive}) => `block py-2 ${isActive? "text-orange-700": "text-white"} pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-500 lg:p-0`}
//                 >Skills
//             </NavLink>
//       </li>
//       <li>
//             <NavLink to="/experience" className={({isActive}) => `block py-2 ${isActive? "text-orange-700": "text-white"} pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-500 lg:p-0`}
//                 >Experience
//             </NavLink>
//       </li>
//       <li>
//             <NavLink to="/projects" className={({isActive}) => `block py-2 ${isActive? "text-orange-700": "text-white"} pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-500 lg:p-0`}
//                 >Projects
//             </NavLink>
//       </li>
//       <li>
//             <NavLink to="/certificates" className={({isActive}) => `block py-2 ${isActive? "text-orange-700": "text-white"} pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-500 lg:p-0`}
//                 >Certificates
//             </NavLink>
//       </li>
//       <li>
//             <NavLink to="/socials" className={({isActive}) => `block py-2 ${isActive? "text-orange-700": "text-white"} pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-500 lg:p-0`}
//                 >Socials
//             </NavLink>
//       </li>
//       <li>
//             <NavLink to="/contact" className={({isActive}) => `block py-2 ${isActive? "text-orange-700": "text-white"} pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-500 lg:p-0`}
//                 >Contact
//             </NavLink>
//       </li>
        
       
//       </ul>
//     </div>
//   </div>
// </nav>

//     </>
//   )
// }

// export default Header
