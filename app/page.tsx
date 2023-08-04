"use client"

import Email from "./components/Email"
import SocialIcons from "./components/SocialIcons"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"
import "./css/main.scss"

import About from "./sections/About"
import FeaturedProject from "./sections/FeaturedProject"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"

const page = () => {
  return (
    <div className='app'>
      <Hero />
      <About />
      <FeaturedProject />
      <Projects />
      <Contact />
    </div>
  )
}

export default page
