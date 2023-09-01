"use client"

import Link from "next/link"
import { HiDownload } from "react-icons/hi"
import Button from "../components/button"
import "../css/sections/hero.scss"

const Hero = () => {
  return (
    <div className='hero'>
      {/* <h1 className="hero-title">Hi my name is </h1> */}
      <h2 className='hero-title-large'>Michael Adenugba</h2>
      <p className=' hero-title-sub'>Frontend & software developer</p>
      <p className='hero-text '>
        I&apos;m a frontend developer as part of a team at{" "}
        <Link
          href='href=//www.dexp2p.com/'
          target='_blank'
          className='font-bold'
        >
          Dexp2p
        </Link>
        . I enjoy✨ building sites and applications📲. My focus is react
        (next.js) and typescript.
      </p>
      {/* <SocialIcons /> */}
      <div className='hero-button'>
        <Button
          text='View full résumé'
          link='http://localhost:3000/resume.pdf'
        />
      </div>
    </div>
  )
}

export default Hero
// specializing in TypeScript, React, and
//         applications📲,
