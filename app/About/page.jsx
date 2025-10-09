import SecondSection from "@/client/About/SecondSection"
import { Github, MoveRight, Quote } from "lucide-react"
import Link from "next/link"

const page = () => {
  return (
    <div className=" flex flex-col bg-sidebar items-center w-full">
      <div className="max-w-[1200] w-full">

        <div className="w-full relative pt-30  pb-20 justify-between md:min-h-[100vh] flex px-10 items-center">
          <div className="tracking-tight  ">
            <p className="max-w-[600] text-foreground font-medium">
              hello i'm
            </p>
            <span className="text-[38px] text-chart-1 font-black  tracking-[-3] " >Mustapha Iderkaoui</span><br />
            <p className="max-w-[400] text-sm opacity-80 ">
              I’m a full stack developer with solid experience in creating modern and visually appealing websites. I enjoy bringing ideas to life through clean design, smooth functionality, and great user experience. My goal is to build web solutions that are both beautiful and meaningful.
            </p>
            <div className="flex items-center gap-3">

              <Link href={"https://iderkaoui.vercel.app/en/contact-me"} target={"_blank"} >
                <button className="p-2 flex items-center justify-center bg-background border border-foreground/10 mt-8 rounded-md gap-2 w-[160] font-semibold tracking-tighter">
                  Contact me
                  <MoveRight />
                </button>
              </Link>
              <Link href={"https://github.com/m-d-webdev"} target={"_blank"} >
                <button className="p-2 flex items-center justify-center bg-foreground text-background opacity-90 hover:opacity-100 duration-150 border border-foreground/10 mt-8 rounded-md gap-2 w-[200] font-semibold tracking-tighter">
                  My GitHub Account
                  <Github />
                </button>

              </Link>

            </div>
          </div>

          <SecondSection />

        </div>
      </div>
    </div >
  )
}

export default page
