import FeedMainReviewsSection from "@/client/feedback/FeedMainPart"
import ListReviews from "@/client/feedback/ListReviews"
import { UserStar } from "lucide-react"

const page = () => {
  return (
    <div className=" flex flex-col bg-sidebar items-center w-full">
      <div className="max-w-[2000] w-full">

        <div className="w-full relative pt-40  pb-20 justify-center md:min-h-[100vh] flex flex-col items-center">
          <h1 className="text-4xl font-extrabold max-w-[700] text-center tracking-[-3] px-2 md:px-0" >What Our Customers Say</h1>
          <p className="font-medium  max-w-[300] text-center tracking-tight opacity-70 mt-4">Real stories and honest feedback from people like you</p>
          <div className="flex mt-10 items-center justify-center">
            <div className="flex items-center justify-center">
              <div className=" w-[22] z-[4] flex items-center justify-start">
                <img
                  style={{
                    filter: `drop-shadow(0 0 10px var(--filter-color))`
                  }}
                  className="p-[1.7px] bg-white  w-[33] min-w-[33] h-[33] rounded-full object-cover "
                  src="https://i.pinimg.com/736x/c3/9b/d1/c39bd1c275fb53f10fb10f5cdb2f8b04.jpg" alt="" />
              </div>
              <div className=" w-[22] z-[3] flex items-center justify-start">
                <img
                  style={{
                    filter: `drop-shadow(0 0 10px var(--filter-color))`
                  }}
                  className="p-[1.7px] bg-white  w-[33] min-w-[33] h-[33] rounded-full object-cover "
                  src="https://i.pinimg.com/736x/14/c4/ef/14c4efc21e7b65be28391627c72226b4.jpg" alt="" />
              </div>
              <div className=" w-[22] flex z-[2] items-center justify-start">
                <img
                  style={{
                    filter: `drop-shadow(0 0 10px var(--filter-color))`
                  }}
                  className="p-[1.7px] bg-white  w-[33] min-w-[33] h-[33] rounded-full object-cover "
                  src="https://i.pinimg.com/1200x/3c/a9/e2/3ca9e229c821b6e31efce2f91b1fc856.jpg" alt="" />
              </div>
              <div className=" w-[22] flex items-center justify-start">
                <img
                  style={{
                    filter: `drop-shadow(0 0 10px var(--filter-color))`
                  }}
                  className="p-[1.7px] bg-white  w-[33] min-w-[33] h-[33] rounded-full object-cover "
                  src="https://i.pinimg.com/1200x/65/7c/e1/657ce19e18e65061190c7927400947cf.jpg" alt="" />
              </div>
            </div>
            <p className="ml-4 font-medium tracking-tight opacity-70">+12k Users Shared Their Reviews</p>
          </div>
          <button
            style={{
              filter: `drop-shadow(0px 5px 5px var(--filter-color))`
            }}
            className="mt-15 z-[3] duration-300 border-2 border-chart-1  hover:bg-chart-1 p-3 px-4 hover:text-white rounded-full font-semibold tracking-tighter flex items-center justify-center gap-2">
            Tell Us What You Think
            <UserStar className="w-5 h-5" />
          </button>
          <FeedMainReviewsSection />

        </div>
          <ListReviews />
      </div>
    </div>
  )
}

export default page
