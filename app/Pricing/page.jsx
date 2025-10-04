import PlansPart from "@/client/princing/PlansPart"

const page = () => {
  return (
    <div className="bg-sidebar/50">
      <div className="w-full flex justify-center items-center  flex-col  min-h-screen">

        <div className="flex pt-30 items-center gap-4 mb-20 justify-center flex-col">
          <h1 className="text-5xl font-black  text-center tracking-[-3.5]">
            Choose the Plan That Fits You
          </h1>
          <p className="tracking-tight mt-2 p-2 md:p-0 text-sm opacity-80 max-w-[600] text-center">
            Flexible pricing for creators, teams, and businesses — pick what works best for you.
          </p>
          <PlansPart />

        </div>

      </div>
    </div>
  )
}

export default page
