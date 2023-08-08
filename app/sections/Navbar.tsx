"use client"

import "../css/sections/navbar.scss"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import { GiHamburgerMenu } from "react-icons/gi"
import { CgClose } from "react-icons/cg"
import { SiAboutdotme } from "react-icons/si"
import { GoProjectSymlink } from "react-icons/go"
import { FaBlog } from "react-icons/fa"
import { LuContact } from "react-icons/lu"
import Logo from "../components/Logo"
// import Button from "../components/button"

const Navbar = () => {
  const [active, setActive] = useState("")
  const [navbarVisible, setNavbarVisible] = useState(false)
  const [responsiveNavVisible, setResponsiveNavVisible] = useState(false)
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
      window.scrollY > 100 ? setNavbarVisible(true) : setNavbarVisible(false)
    })
  }, [])
  // max-w-4xl mx-auto px-4
  // max-w-4xl
  return (
    <nav>
      <div className={`wrapper ${navbarVisible ? "blur-nav" : ""}`}>
        <div className='brand'>
          <Link href='/'>
            <Logo />
          </Link>
        </div>
        <div className='nav-responsive-toggle'>
          {responsiveNavVisible ? (
            <CgClose
              onClick={(e) => {
                e.stopPropagation()
                setResponsiveNavVisible(false)
              }}
            />
          ) : (
            <GiHamburgerMenu
              onClick={(e) => {
                e.stopPropagation()
                setResponsiveNavVisible(true)
              }}
            />
          )}
        </div>

        <div
          className={`${responsiveNavVisible && "nav-responsive"} nav-items`}
        >
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
        </div>
      </div>
    </nav>
  )
}

export default Navbar
