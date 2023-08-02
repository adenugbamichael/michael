"use client"
/* eslint-disable react/no-unescaped-entities */
import "../css/sections/about.scss"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import SocialIcons from "../components/SocialIcons"

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='title'>
        <h2>Programming Journey 💻</h2>
      </div>
      <div className='about-grid'>
        <div className='about-grid-info'>
          <p className='about-grid-info-text'>
            I have always been fascinated by the world of programming, which is
            why I started to use my free time to practice programming
            fundamentals. Since then I haven’t stopped learning and creating.
          </p>

          <p className='about-grid-info-text'>
            Fast-forward to today, I specialize in{" "}
            <Link
              className='link'
              target='_blank'
              href='https://github.com/adenugbamichael'
            >
              frontend
            </Link>
            , and I consider myself lucky to have found a career that aligns
            with my passions.
          </p>

          <p className='about-grid-info-text'>
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className='about-grid-info-list'>
            <li className='about-grid-info-list-item'>React</li>
            <li className='about-grid-info-list-item'>Javascript</li>
            <li className='about-grid-info-list-item'>Next.js</li>
            <li className='about-grid-info-list-item'>Typescript</li>
            <li className='about-grid-info-list-item'>Redux Toolkit</li>
            <li className='about-grid-info-list-item'>Node.js</li>
            <li className='about-grid-info-list-item'> API</li>
            <li className='about-grid-info-list-item'>Firebase</li>
            <li className='about-grid-info-list-item'>CSS</li>
          </ul>
        </div>
        <div className='about-grid-photo'>
          {/* <div className='overlay'></div> */}
          {/* <div className='overlay-border'></div> */}

          <div className='about-grid-photo-container'>
            <Image src='/profile.jpg' alt='profile' priority fill />
          </div>
          <div className='about-grid-photo-social'>
            <SocialIcons />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
