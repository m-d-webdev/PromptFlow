import FilterMenu from "@/client/Insprations/FilterMenu";
import ListImages from "@/client/Insprations/ListImages";
import Shariu from "@/client/Insprations/Shariu";
import { InspirationsContext } from "@/context/InspirationsContext";
import { Fan, Quote } from "lucide-react";

const page = () => {
  return (
    <div className=" flex flex-col items-center w-full">
      <div className="max-w-[2000] w-full">

        <div className="w-full  pt-40  pb-20 justify-center md:min-h-[100vh] flex flex-col items-center">
          <h1 className="text-4xl font-extrabold max-w-[700] text-center tracking-[-3] px-2 md:px-0" >Discover over 1.2M AI-generated creations shared by our community</h1>
          <div className="flex relative md:mt-30 mt-10 h-[300] md:h-[400] gap-3  px-2 items-center">

            <p className="absolute hidden md:block  -left-2 -top-5 font-medium text-sm tracking-tight  max-w-[120]">
              <Fan className="text-chart-1 absolute w-4 h-4 -top-6 -left-4" />
              Powered by AI, inspired by you.
            </p>
            <div
              className="absolute hidden md:block  bg-background border-l border-chart-4 rounded-md border-b right-[-60] opacity-70 -top-15">
              <p className="text-sm p-4 font-medium tracking-tight max-w-[200]">
                The best place to discover what AI can really do
                <Quote className="absolute top-[-10] text-chart-4 w-4 h-4 right-[-5]" />
              </p>
            </div>
            <img className="hidden md:block h-[60%] object-cover rounded-lg md:w-[200]" src="/inspirationsMain/img1.jpg" alt="" />
            <div className="h-[80%] flex  gap-2 flex-col">
              <img className="h-[40%] object-cover rounded-lg md:w-[200]" src="/inspirationsMain/img2.jpeg" alt="" />
              <img className="h-[60%] object-cover rounded-lg md:w-[200]" src="/inspirationsMain/img3.jpeg" alt="" />
            </div>
            <img className="h-[100%] md:w-[200] object-cover rounded-lg " src="/inspirationsMain/img4.jpeg" alt="" />
            <div className="h-[80%] flex gap-2 flex-col">
              <img className="h-[60%] object-cover object-top rounded-lg md:w-[200]" src="/inspirationsMain/img6.jpeg" alt="" />
              <img className="h-[40%] object-cover rounded-lg md:w-[200]" src="/inspirationsMain/img5.jpeg" alt="" />
            </div>

            <img className="hidden md:block h-[60%] object-cover  rounded-lg md:w-[200]" src="/inspirationsMain/img7.jpeg" alt="" />

          </div>
        </div>
        <InspirationsContext>
          <div className="w-full  mt-10 flex   justify-start items-start">
            <FilterMenu />
            <div className={`!z-[2] min-h-screen  w-full duration-200  flex md:gap-4 gap-2 flex-col items-start justify-start `}>
              <Shariu />
              <ListImages />
            </div>
          </div>
        </InspirationsContext>

      </div>
    </div>
  )
}

export default page
