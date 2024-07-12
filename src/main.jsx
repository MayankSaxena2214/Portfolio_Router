import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider ,createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Education from './components/Education/Education.jsx'
import Experience from './components/Experience/Experience.jsx'
import Skills from './components/Skills/Skills.jsx'
import Contact from './components/Contact/Contact.jsx'
import Certificate from './components/Certificates/Certificate.jsx'
import Socials from './components/Socials/Socials.jsx'
import Layout from './Layout.jsx'
import Project from './components/Projects/Project.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path="/" element={<Home/>}/>
      <Route path="/education" element={<Education/>}/>
      <Route path="/experience" element={<Experience/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/projects" element={<Project/>}/>
      <Route path="/contact" element={<Contact/>}/>
      //certificate
      <Route path="/projects" element={<Project/>} />
      <Route path="/certificates" element={<Certificate/>} />
      <Route path="/socials" element={<Socials/>}/>
      </Route>
)
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
