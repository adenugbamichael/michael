import "../css/sections/Buttons.scss"
import Link from "next/link"
import React from "react"

function Buttons({ text, link }: { text: string; link: string }) {
  return (
    <Link className='btns' href={link}>
      {text}
    </Link>
  )
}

export default Buttons
