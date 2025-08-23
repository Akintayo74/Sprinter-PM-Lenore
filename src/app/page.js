"use client"
import LandingButton from "@/components/LandingButton";
import Image from "next/image";

function Home() {

  return (
    <>
      <div className="flex justify-around items-center bg-dark-interface-1 min-h-full place-items-center">
        <div className="flex flex-col justify-center max-w-2xl ms-[31px] gap-[calc(31/16*1rem)]">
          <span className="flex">
            <Image src='/Logo.png' alt="Logo" width={50} height={50}/>
            <h1 className="text-6xl text-primary-500 font-bold italic">Sprinter</h1>
          </span>

          <span className="text-interface text-4xl font-bold">Run Your Projects Like Clockwork</span>


          <h6 className="text-secondary-300 max-w-[399px] font-bold text-28 ">Organize tasks, track progress, and keep <br/> your team in sync all from one sleek collaborative workspace</h6>

          <div className="flex gap-[14px] max-w-[380px]">
            <LandingButton variant="secondary" href='/sign-in'>
              Log in
            </LandingButton>
            <LandingButton variant="primary" href='/sign-up'>
              Sign up
            </LandingButton>
          </div>


        </div>
        <Image src='/Collab.png' alt='image of coworkers' width={400} height={400}/>
      </div>
    </>
  )
}

export default Home;