"use client"
import "../css/components/email.scss"
import React from "react"
import { motion } from "framer-motion"
const Email = () => {
  return (
    <motion.div
      className='email'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
      <a href='mailto:adenugbamicke@gmail.com' className='email-link'>
        adenugbamicke@gmail.com
      </a>
    </motion.div>
  )
}

export default Email
