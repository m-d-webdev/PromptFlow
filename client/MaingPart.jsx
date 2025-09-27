"use client"

import { Button } from "@/components/ui/button"
import { BrainCircuit } from "lucide-react"
import { motion } from "framer-motion"

const MaingPart = () => {
    return (
        <div className="w-full flex justify-center items-center  flex-col  min-h-screen  pt-40">
            <div className="flex items-center gap-4 mb-20 justify-center flex-col">
                <div className="flex gap-2 items-center  border p-2 opacity-60  border-chart-1 rounded-md  justify-center">
                    <BrainCircuit className="w-4 h-4 text-chart-1" />
                    <p className="text-xs font-medium  text-chart-1 tracking-tighter ">For AI-powered ideas</p>
                </div>
                <h1 className="text-5xl font-extrabold max-w-[460] text-center tracking-tighter">
                    Turn Your Ideas Into <span className="text-chart-1">Perfect Prompts</span>
                </h1>
                <p className="tracking-tight text-sm opacity-80 max-w-[400] text-center">
                    From content creation to design and business, craft high-quality prompts instantly
                </p>
                <div className="flex mt-8 gap-2 items-center">
                    <Button>
                        <svg
                            className="stroke-background !w-6 !h-6"
                            ariaHidden="true"
                            xmlns="http://www.w3.org/2000/svg"

                            viewBox="0 0 24 24"
                            fill="none"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z" />
                        </svg>
                        Generate prompt

                    </Button>
                    <Button variant={"default"}>

                        Explore Inspiration
                    </Button>

                </div>
            </div>
            <div className="flex  relative gap-60 mb-20 items-center justify-center   max-w-[800] w-full h-[400] overflow-hidden">

                <motion.div
                    animate={{
                        y: [-700, 700, -700],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 40,
                        ease: "linear"
                    }}


                    className="flex rotate-[60deg] flex-col gap-4"
                >
                    <img
                        style={{
                            filter: `drop-shadow(0 0 8px var(--filter-color))`
                        }}
                        className="w-[220] min-w-[220] h-[320] rounded-md   object-cover" src="/ai_pompt.png" alt="" />
                    <img
                        style={{
                            filter: `drop-shadow(0 0 8px var(--filter-color))`
                        }}
                        className="w-[220] min-w-[220] h-[320] rounded-md   object-cover" src="/Prompt in Description _ chatgpt.jpeg" alt="" />
                    <img
                        style={{
                            filter: `drop-shadow(0 0 8px var(--filter-color))`
                        }}
                        className="w-[220] min-w-[220] h-[320] rounded-md   object-cover" src="/Промт девушка модель чат GPT.jpeg" alt="" />
                    <img
                        style={{
                            filter: `drop-shadow(0 0 8px var(--filter-color))`
                        }}
                        className="w-[220] min-w-[220] h-[320] rounded-md   object-cover" src="/Toddler girl.jpeg" alt="" />
                    <img
                        style={{
                            filter: `drop-shadow(0 0 8px var(--filter-color))`
                        }}
                        className="w-[220] min-w-[220] h-[320] rounded-md   object-cover" src="/doramon.png" alt="" />
                    <img
                        style={{
                            filter: `drop-shadow(0 0 8px var(--filter-color))`
                        }}
                        className="w-[220] min-w-[220] h-[320] rounded-md   object-cover" src="/gptimage5r.jpeg" alt="" />
                </motion.div>

                <motion.div
                    animate={{
                        y: [700, -700, 700],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 40,
                        ease: "linear"
                    }}


                    className="flex rotate-[60deg] flex-col gap-4"
                >
                    <img
                        style={{
                            filter: `drop-shadow(0 0 8px var(--filter-color))`
                        }}
                        className="w-[220] min-w-[220] h-[320] rounded-md   object-cover" src="/ai_pompt.png" alt="" />
                    <img
                        style={{
                            filter: `drop-shadow(0 0 8px var(--filter-color))`
                        }}
                        className="w-[220] min-w-[220] h-[320] rounded-md   object-cover" src="/Prompt in Description _ chatgpt.jpeg" alt="" />
                    <img
                        style={{
                            filter: `drop-shadow(0 0 8px var(--filter-color))`
                        }}
                        className="w-[220] min-w-[220] h-[320] rounded-md   object-cover" src="/Промт девушка модель чат GPT.jpeg" alt="" />
                    <img
                        style={{
                            filter: `drop-shadow(0 0 8px var(--filter-color))`
                        }}
                        className="w-[220] min-w-[220] h-[320] rounded-md   object-cover" src="/Toddler girl.jpeg" alt="" />
                    <img
                        style={{
                            filter: `drop-shadow(0 0 8px var(--filter-color))`
                        }}
                        className="w-[220] min-w-[220] h-[320] rounded-md   object-cover" src="/doramon.png" alt="" />
                    <img
                        style={{
                            filter: `drop-shadow(0 0 8px var(--filter-color))`
                        }}
                        className="w-[220] min-w-[220] h-[320] rounded-md   object-cover" src="/gptimage5r.jpeg" alt="" />
                </motion.div>

                <motion.div
                    animate={{
                        y: [-700, 700, -700],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 40,
                        ease: "linear"
                    }}


                    className="flex rotate-[60deg] flex-col gap-4"
                >
                    <img
                        style={{
                            filter: `drop-shadow(0 0 8px var(--filter-color))`
                        }}
                        className="w-[220] min-w-[220] h-[320] rounded-md   object-cover" src="/ai_pompt.png" alt="" />
                    <img
                        style={{
                            filter: `drop-shadow(0 0 8px var(--filter-color))`
                        }}
                        className="w-[220] min-w-[220] h-[320] rounded-md   object-cover" src="/Prompt in Description _ chatgpt.jpeg" alt="" />
                    <img
                        style={{
                            filter: `drop-shadow(0 0 8px var(--filter-color))`
                        }}
                        className="w-[220] min-w-[220] h-[320] rounded-md   object-cover" src="/Промт девушка модель чат GPT.jpeg" alt="" />
                    <img
                        style={{
                            filter: `drop-shadow(0 0 8px var(--filter-color))`
                        }}
                        className="w-[220] min-w-[220] h-[320] rounded-md   object-cover" src="/Toddler girl.jpeg" alt="" />
                    <img
                        style={{
                            filter: `drop-shadow(0 0 8px var(--filter-color))`
                        }}
                        className="w-[220] min-w-[220] h-[320] rounded-md   object-cover" src="/doramon.png" alt="" />
                    <img
                        style={{
                            filter: `drop-shadow(0 0 8px var(--filter-color))`
                        }}
                        className="w-[220] min-w-[220] h-[320] rounded-md   object-cover" src="/gptimage5r.jpeg" alt="" />
                </motion.div>

                <div className="absolute h-[200] bg-gradient-to-b via-sidebar/50  from-sidebar to-transparent top-0 w-full right-0 "></div>
                <div className="absolute h-[200] bg-gradient-to-t via-sidebar/50  from-sidebar to-transparent bottom-0 w-full right-0 "></div>
                <div className="absolute h-full bg-gradient-to-r via-sidebar/70  from-sidebar to-transparent top-0 w-[100] left-0 "></div>
                <div className="absolute h-full bg-gradient-to-l via-sidebar/70  from-sidebar to-transparent top-0 w-[100] right-0 "></div>

            </div>
        </div>
    )
}

export default MaingPart
