import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import About from './components/About.tsx'
import Navbar from './components/Navbar.tsx'
import Landing from './components/Landing.tsx'
import Projects from './components/Projects.tsx'
import Blog from './components/Blog.tsx'
import Form from './components/Form.tsx'
import Footer from './components/Footer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <Landing />
    <About />
    <Projects />
    <Blog />
    <Form />
    <Footer />
  </React.StrictMode>,
)
