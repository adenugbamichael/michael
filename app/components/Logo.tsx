"use client"
import "../css/components/logo.scss"
import Image from "next/image"

const Logo = () => {
  return (
    <div className='logo'>
      <div className='logo-image'>
        <Image
          priority
          alt='Michael Adenugba'
          src='/logo.jpg'
          width={32}
          height={32}
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  )
}

export default Logo
