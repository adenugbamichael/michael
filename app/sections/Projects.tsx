"use client"
import "../css/sections/projects.scss"
import Image from "next/image"
import Link from "next/link"
import { FiGithub, FiExternalLink } from "react-icons/fi"
import React from "react"
import Btn from "../components/btn"

const Projects = () => {
  const projectsData = [
    {
      image: "/e-store.png",
      projectName: "e-store",
      projectLink: "https://e-store-appl.netlify.app",
      projectDescription:
        "Online clothing shop🛒 built with react⚛️ and redux, integrated with stripe-api to handle payments, firebase to manage storage and authentication. Also, google to provide sign-in and sign-up feature.",
      projectTech: [
        "React",
        "Redux Toolkit",
        "SCSS",
        "Firebase",
        "Typescript",
        "StripeApi",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "https://e-store-appl.netlify.app",
      },
    },
    {
      image: "/gamehub.png",
      projectName: "Gamehub",
      projectLink: "https://gamehubx.vercel.app/",
      projectDescription:
        "Gamehub is a video game discovery web app that helps you find new and interesting games to play, you can search for games by platform, genre, and more.",
      projectTech: [
        "React",
        "Typescript",
        "React-query",
        "Chakra-UI",
        "Rawg-Api ",
        "zustand",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "https://gamehubx.vercel.app/",
      },
    },
    {
      image: "/airbnb-clone.png",
      projectName: "Airbnb Next",
      projectLink: "https://airbnb-next-roan.vercel.app/",
      projectDescription:
        "Airbnb clone handle authentications, manage booking/reservation, guest and owner cancellation system, advanced search algorithm by category, date range, map location, number of guests, rooms and bathrooms.",
      projectTech: [
        "Nextjs",
        "NextAuth",
        "Prisma",
        "Cloudinary",
        "Firebase",
        "MongoDB",
        "Express",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "https://airbnb-next-roan.vercel.app/",
      },
    },
  ]
  return (
    <div className='projects' id='projects'>
      <div className='title'>
        <h2>
          Projects <Btn />{" "}
        </h2>
      </div>
      <div className='projects-container'>
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <div className='project' key={projectName}>
                <div className='project-image'>
                  <div className='project-image-overlay'></div>
                  <div className='project-image-container'>
                    <Link href={projectLink}>
                      <Image
                        src={image}
                        fill
                        alt={projectName}
                        quality={100}
                        priority
                      />
                    </Link>
                  </div>
                </div>
                <div className='project-info'>
                  <p className='project-info-overline'>Featured Project</p>
                  <h3 className='project-info-title'>{projectName}</h3>
                  <div className='project-info-description'>
                    <p>{projectDescription}</p>
                  </div>
                  <ul className='project-info-tech-list'>
                    {projectTech.map((tech) => (
                      <li className='project-info-tech-list-item' key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className='project-info-links'>
                    <li className='project-info-links-item'>
                      <Link
                        href={projectExternalLinks.github}
                        className='project-info-links-item-link'
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className='project-info-links-item'>
                      <Link
                        href={projectExternalLinks.externalLink}
                        className='project-info-links-item-link'
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )
          }
        )}
      </div>
    </div>
  )
}

export default Projects
