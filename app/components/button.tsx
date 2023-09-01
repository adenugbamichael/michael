/* eslint-disable react/no-unescaped-entities */
import "../css/components/button.scss"
import { BsArrowRight } from "react-icons/bs"
import Link from "next/link"
import React from "react"

const Button = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link
      href={link}
      className='btn gap-2 flex flex-row items-center justify-center'
    >
      {text}
      <div className='btn-text'>
        <BsArrowRight />
      </div>
    </Link>
  )
}

export default Button
