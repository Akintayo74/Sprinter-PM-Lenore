// import logo from 
import Image from "next/image";

function Home() {

  return (
    <>
      <div className="grid grid-cols-2 bg-primary min-h-full place-items-center">
        <div className="flex flex-col justify-center max-w-2xl ms-[31px] gap-[calc(31/16*1rem)]">
          <span className="flex">
            <Image src='/Logo.png' alt="Logo" width={50} height={50}/>
            <h1 className="text-6xl text-primary-500 font-bold italic">Sprinter</h1>
          </span>

          <span className="text-interface text-4xl font-bold">Run Your Projects Like Clockwork</span>

          <p className="text-primary-900 max-w-xs font-bold leading-[1.4]">Organize tasks, track progress, and keep your team in sync all from one sleek collaborative workspace</p>


        </div>
        <Image src='/Collab.png' alt='image of coworkers' width={400} height={400}/>
      </div>
    </>
  )
}

export default Home;