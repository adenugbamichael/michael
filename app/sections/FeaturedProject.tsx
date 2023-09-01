"use client"

import "../css/sections/featuredProject.scss"
import Link from "next/link"
import { useState, useEffect } from "react"
import Btn from "../components/btn"

const FeaturedProject = () => {
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline")
      underline!.style.top = `${selected * 2.5}rem`
    }
    transformSelected()
  }, [selected])

  const experiences = [
    {
      name: "Dexp2p",
      role: "Frontend Developer",
      url: "https://www.dexp2p.com",
      start: "January 2023",
      end: "Present",
      shortDescription: [
        "Build site landing page and UI features.",
        "Work closely with a team that includes Project Manager, Frontend Developers, Backend Developers, and UI/UX Developers to brainstorm and develop new ways to build a digital product.",
        "Optimized codes and images to improve web performance and enhancing user experience.",
      ],
    },
    {
      name: "TalentAlt",
      role: "Frontend Developer",
      url: "___",
      start: "March 2021",
      end: "Present",
      shortDescription: [
        "Assisting in testing of talentAlt platform 2.0.",
        "Thinking through and contributing to the implementation of user interface.",
        "Design support and ideation of new features.",
      ],
    },
  ]
  return (
    <div className='experience' id=''>
      <div className='title'>
        <h2>Experience</h2>
      </div>
      <div className='container'>
        <ul className='exp-slider'>
          <div className='underline'></div>
          {experiences.map((experience, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={experience.name}
              >
                <span>{experience.name}</span>
              </li>
            )
          })}
        </ul>
        <div className='exp-details'>
          <div className='exp-details-position'>
            <h3>
              {" "}
              <span>{experiences[selected].role}</span>
              <span className='exp-details-position-company'>
                &nbsp;@&nbsp;
                <Link href={experiences[selected].url} className='link'>
                  {experiences[selected].name}
                </Link>
              </span>
            </h3>
            <p className='exp-details-range'>
              {experiences[selected].start} - {experiences[selected].end}
            </p>
            <ul className='exp-details-list'>
              {experiences[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className='exp-details-list-item'>
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProject
