import Link from 'next/link'
export default function NavBar() {
  return (
    <div className="flex justify-around">
      <Link href="/" className="group">
        about
        <span className="block max-w-0 h-[0.1em] bg-white transition-all duration-150 group-hover:max-w-full"></span>
      </Link>
      <Link href="/projects" className="group">
        projects
        <span className="block max-w-0 h-[0.1em] bg-white transition-all duration-150 group-hover:max-w-full"></span>
      </Link>
      <Link href="/writings" className="group">
        writings
        <span className="block max-w-0 h-[0.1em] bg-white transition-all duration-150 group-hover:max-w-full"></span>
      </Link>
    </div>
  )
}
