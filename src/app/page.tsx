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
        <div className="flex flex-col mt-15 w-[30em]">
          <NavBar />
          <div className="my-10">
            <h1 className="text-6xl font-black mb-2">Jonathan Zhu</h1>
            <h2 className="text-2xl font-medium mb-4">
              CS/Stats @ UofT, prev @ PointClickCare
            </h2>
            <h3 className="text-foreground">
              I am a student who is curious about all things tech.
              <br></br>
              <br></br>
              In my spare time, I like to draw, play sports (tennis mainly) and
              eat some good food.
            </h3>
            <div className="flex justify-between mt-4">
              <div className="flex">
                <Link
                  href="https://github.com/jiasunzhu613"
                  target="_blank"
                  className="flex items-center mr-5 group"
                >
                  {/* group-hover:size-6 duration-200 transition-all */}
                  <GitHubLogoIcon
                    width={20}
                    height={20}
                    className="mr-1"
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
                    className="mr-1"
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
                    className="mr-1"
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
