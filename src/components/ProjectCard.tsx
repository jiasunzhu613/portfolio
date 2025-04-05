import Link from 'next/link'
// import dog from './dog.jpg'
export default function ProjectCard({ title, tools, description, link }) {
  return (
    <Link
      href={link}
      target="_blank"
      className="transition duration-300 group-hover:opacity-50 hover:!opacity-100 hover:scale-110"
    >
      <div className="bg-background-projects p-8 mb-2 ">
        <h3 className="text-xs font-bold tracking-widest uppercase mb-3 hyphens-auto text-pretty">
          {tools}
        </h3>
        <h1
          className="text-3xl font-extrabold hyphens-auto text-pretty"
          lang="de"
        >
          {title}
        </h1>
        <h3 className="text-sm font-light hyphens-auto text-pretty">
          {description}
        </h3>
      </div>
    </Link>
  )
}
