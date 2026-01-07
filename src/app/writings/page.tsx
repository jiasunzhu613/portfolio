import NavBar from '@/components/NavBar'

export default function Writings() {
  return (
    <div className="overflow-x-hidden">
      {/* <NavBar></NavBar> */}
      <div className="flex justify-center">
        {/* about me:  */}
        <div className="flex flex-col mt-15 w-[30em]">
          <NavBar />
          <div className="flex justify-center mt-15 ">
            <h1 className="font-bold tracking-widest">no writings just yet.</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
