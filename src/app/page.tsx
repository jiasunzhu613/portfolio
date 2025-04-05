import Image from 'next/image'
import Link from 'next/link'
import NavBar from '@/components/NavBar'
import ProjectCard from '@/components/ProjectCard'
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
            <div className="mt-10 flex items-center">
              <Image
                src="/profileImage_new.jpg"
                width={100}
                height={100}
                alt="Picture of the author"
                objectFit="cover"
                objectPosition="center"
                className="rounded-full mr-3"
              />
              <div className="flex flex-col gap-3 mr-3">
                <Link
                  href="https://github.com/jiasunzhu613"
                  target="_blank"
                  className="flex items-center mr-5 group"
                >
                  <GitHubLogoIcon
                    width={20}
                    height={20}
                    className="mr-1"
                  ></GitHubLogoIcon>
                  <span className="text-[1em] opacity-0 transition-all ease-in-out duration-300 group-hover:ml-1 group-hover:opacity-100">
                    Github
                  </span>
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
                  <span className="text-[1em] opacity-0 transition-all ease-in-out duration-300 group-hover:ml-1 group-hover:opacity-100">
                    Linkedin
                  </span>
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
                  <span className="text-[1em] opacity-0 transition-all ease-in-out duration-300 group-hover:ml-1 group-hover:opacity-100">
                    Resume
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
