import "../css/components/socialIcons.scss"
import Link from "next/link"
import React from "react"
import { FiGithub, FiLinkedin, FiTwitter, FiFile, FiMail } from "react-icons/fi"

const SocialIcons = () => {
  const socialLinks = [
    {
      name: "Github",
      icon: <FiGithub />,
      link: "https://github.com/adenugbamichael",
    },

    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/adenugbamichael/",
    },

    {
      name: "Twitter",
      icon: <FiTwitter />,
      link: "https://twitter.com/MichaelAdenugba",
    },

    // {
    //   name: "Resume",
    //   icon: <FiFile />,
    //   link: "http://localhost:3000/resume.pdf",
    // },
    {
      name: "Email",
      icon: <FiMail />,
      link: "mailto:adenugbamicke@gmail.com",
    },
  ]
  return (
    <div className='social-icons '>
      <ul className='social-icons-list'>
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className='social-icons-list-item'>
            <Link
              href={link}
              className='social-icons-list-item-link'
              target='_blank'
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialIcons
