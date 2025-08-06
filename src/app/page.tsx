'use client'

import Image from 'next/image'
import Link from 'next/link'
import NavBar from '@/components/NavBar'
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  FileTextIcon,
} from '@radix-ui/react-icons'

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* <NavBar></NavBar> */}
      <div className="flex justify-center">
        {/* about me:  */}
        <div className="flex flex-col mt-15 w-[20em] md:w-[40em]">
          <NavBar />
          <div className="my-10">
            <h1 className="text-6xl font-black mb-2">Jonathan Zhu</h1>
            <h2 className="text-2xl font-medium mb-4">
              Student at the University of Toronto
            </h2>
            <h3 className="text-foreground-secondary">
              I am a student who is curious about all things tech.
              <br></br>
              <br></br>
              In my spare time, I like to draw, play sports (tennis mainly) and
              eat some good food.
            </h3>
            <div className="flex justify-between mt-4">
              <div className="flex">
                <Image
                  src="/profile.jpg"
                  width={64}
                  height={64}
                  alt="Picture of the author"
                  objectFit="cover"
                  objectPosition="center"
                  className="rounded-full mr-3 border-2 outline outline-foreground-secondary"
                />

                <Link
                  href="https://github.com/jiasunzhu613"
                  target="_blank"
                  className="flex items-center mr-5 group"
                >
                  <GitHubLogoIcon
                    width={20}
                    height={20}
                    className="mr-1 group-hover:size-6 duration-200 transition-all"
                  ></GitHubLogoIcon>
                  <span className="text-[1em] ">Github</span>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/zhu-jonathan/"
                  target="_blank"
                  className="flex items-center mr-5 group"
                >
                  <LinkedInLogoIcon
                    width={20}
                    height={20}
                    className="mr-1 group-hover:size-6 duration-200 transition-all"
                    // transition ease-in-out duration-300 group-hover:scale-110 group-hover:-translate-y-1
                  ></LinkedInLogoIcon>
                  <span className="text-[1em] ">Linkedin</span>
                </Link>

                <Link
                  href="/resume.pdf"
                  target="_blank"
                  className="flex items-center mr-5 group"
                >
                  <FileTextIcon
                    width={20}
                    height={20}
                    className="mr-1 group-hover:size-6 duration-200 transition-all"
                  ></FileTextIcon>
                  <span className="text-[1em]">Resume</span>
                </Link>
              </div>

              <div className="flex items-center gap-2">
                <a
                  className="text-xl font-mono text-foreground-ternary hover:text-foreground"
                  href="https://uoftwebring.com/redirect?nav=prev&id=1"
                >
                  ←
                </a>
                <a href="https://uoftwebring.com" target="_blank">
                  <Image
                    src="https://uoftwebring.com/ring_logo_black.svg"
                    alt="UofT Webring"
                    height={24}
                    width={24}
                    className="dark:invert"
                  />
                </a>
                <a
                  className="text-xl font-mono text-foreground-ternary hover:text-foreground"
                  href="https://uoftwebring.com/redirect?nav=next&id=1"
                >
                  →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
