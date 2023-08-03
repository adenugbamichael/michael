"use client"

import "../css/sections/hero.scss"
import Link from "next/link"
import React from "react"
import Button from "../components/button"

const Hero = () => {
  return (
    <div className='hero'>
      {/* <h1 className="hero-title">Hi my name is </h1> */}
      <h2 className='hero-title-large'>Michael Adenugba</h2>
      <p className=' hero-title-sub'>Frontend & software developer</p>
      <p className='hero-text '>
        I&apos;m a software developer specializing in TypeScript, React, and
        applications📲, as part of a team at{" "}
        <Link
          href='href=//www.dexp2p.com/'
          target='_blank'
          className='link underline'
        >
          Dexp2p
        </Link>
      </p>
      {/* <SocialIcons /> */}
      <div className='hero-button'>
        <Button text='Welcome✨' link='' />
      </div>
    </div>
  )
}

export default Hero
