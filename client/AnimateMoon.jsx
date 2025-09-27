"use client";
import { motion } from "framer-motion"
const AnimateMoon = () => {
    return (
        <>

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

        </>
    )
}

export default AnimateMoon
