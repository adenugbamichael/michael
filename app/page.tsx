"use client"

import Email from "./components/Email"
import SocialIcons from "./components/SocialIcons"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"
import "./css/main.scss"

import About from "./sections/About"
import FeaturedProject from "./sections/FeaturedProject"

const page = () => {
  return (
    <div className='app'>
      <main>
        <Hero />
        <About />
        <FeaturedProject />
      </main>
    </div>
  )
}

export default page
