"use client"
import "../css/components/logo.scss"
import Image from "next/image"
import logo from "../../public/images/logo.jpg"

const Logo = () => {
  return (
    <div className='logo'>
      <div className='logo-image'>
        <Image
          priority
          alt='Michael Adenugba'
          src={logo}
          width={32}
          height={32}
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  )
}

export default Logo
