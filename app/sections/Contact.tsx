import "../css/sections/contact.scss"
import Buttons from "./Buttons"
// import { motion } from "framer-motion"
function Contact() {
  return (
    <div className='contact' id='contact'>
      <h2 className='contact-title'>What&apos;s Next?</h2>
      <h2 className='contact-sub-title'>Get In Touch</h2>
      <p className='contact-text'>
        Currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <div className='contact-cta'>
        <Buttons link='' text='Say Hello' />
      </div>
    </div>
  )
}

export default Contact
// mailto:adenugbamicke@gmail.com
