"use client"

import "../css/sections/navbar.scss"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import { SiAboutdotme } from "react-icons/si"
import { GoProjectSymlink } from "react-icons/go"
import { FaBlog } from "react-icons/fa"
import { LuContact } from "react-icons/lu"
import Logo from "../components/Logo"
// import Button from "../components/button"

const Navbar = () => {
  const [active, setActive] = useState("")
  const [navbarVisible, setNavbarVisible] = useState(false)
  const sectionLinks = [
    { name: "About", link: "/#about", icon: <SiAboutdotme /> },
    { name: "Blog", link: "/blog", icon: <FaBlog /> },
    { name: "Projects", link: "/#projects", icon: <GoProjectSymlink /> },
    {
      name: "Contact",
      link: "/#contact",
      icon: <LuContact />,
    },
  ]

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 100
        ? setNavbarVisible(true)
        : setNavbarVisible(false)
    })
  }, [])

  return (
    <nav className='max-w-4xl mx-auto px-4'>
      <div className={`wrapper ${navbarVisible ? "blur-nav" : ""}`}>
        <div className='brand'>
          <Link href='/'>
            <Logo />
          </Link>
        </div>
        <div className='nav-items'>
          <ul className='nav-items-list'>
            {sectionLinks.map(({ name, link, icon }) => (
              <li
                key={name}
                onClick={() => {
                  setActive(name)
                }}
                className='nav-items-list-item'
              >
                <Link
                  href={link}
                  className={` ${
                    active === name ? "link--current" : ""
                  }  nav-items-list-item-link`}
                >
                  <span className='nav-icon'>{icon}</span>
                  <p className='nav-text'>{name}</p>
                </Link>
              </li>
            ))}
          </ul>
          {/* <div className='nav-items-button'>
            <Button text='Resume' link='' />
          </div> */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
