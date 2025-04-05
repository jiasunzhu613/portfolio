'use client'

import NavBar from '@/components/NavBar'
import ProjectCard from '@/components/ProjectCard'
import ProjectData from './projectData.json'
export default function Projects() {
  return (
    <div className="overflow-x-hidden">
      {/* <NavBar></NavBar> */}
      <div className="flex justify-center">
        {/* about me:  */}
        <div className="flex flex-col mt-15 w-[20em] md:w-[40em]">
          <NavBar />
          <div className="flex flex-col mt-15 group">
            {ProjectData.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  tools={project.tools}
                  description={project.description}
                  link={project.link}
                ></ProjectCard>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
