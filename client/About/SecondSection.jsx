"use client"
import { Quote } from "lucide-react"
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion"
const Light = ({
    repeatDelay = 1,
    delay = 0,
    color = "",
    animate = {},
    width,
    height,
    className,
    filter,
    duration = 1
}) => {
    return (

        <>

            {/* // Array(1).fill().map((r, i) => */}
            <motion.div
                style={{
                    filter
                }}
                key={repeatDelay}
                animate={animate}
                transition={{
                    delay: delay,
                    duration,
                    ease: "linear"
                }}
                className={`${className}  w-[${width}] rounded-full   absolute h-[${height}] bg-gradient-to-b   to-transparent`}
            >
            </motion.div>
            {/* // )
            // } */}
        </>
    )
}
const LinesCon = ({ style, Light, parentClassName, className }) => {

    return (
        <div
            style={style}
            className={`absolute overflow-hidden ${parentClassName}`}>
            <div

                className={` ${className}   relative  p-[1px] bg-secondary-foreground/10`}>
                {React.isValidElement(Light) && Light}

            </div>
        </div>
    )
}

const SecondSection = () => {
    const leftOrWidth1 = 60;
    const BottomOrHeight1 = 200;

    const leftOrWidth2 = 300;
    const BottomOrHeight2 = 80;

    const leftOrWidth3 = 250;
    const BottomOrHeight3 = 150;
    const secondDelay = .4;
    const thirdDelay = 1.5;
    const [repeatDelay, setrepeatDelay] = useState(0);
    const [repeatDelay2, setrepeatDelay2] = useState(0.2);
    const [repeatDelay3, setrepeatDelay3] = useState(0.3);
    useEffect(() => {
        const iner = setInterval(() => {
            setrepeatDelay(pv => pv + 1)
        }, 5000)
        const iner2 = setInterval(() => {
            setrepeatDelay2(pv => pv + 2)
        }, 6400)
        const iner3 = setInterval(() => {
            setrepeatDelay3(pv => pv + 3)
        }, 7500)
        return () => {
            clearInterval(iner)
            clearInterval(iner2)
            clearInterval(iner3)
        }
    }, [])
    return (
        <div className="relative   flex  items-center h-[500]  w-[55%]">

            <img src="/man2.png" className="h-full z-[3] hidden md:block object-cover" alt="" />
            <div className=" hidden z-[3] md:block  ">
                <div
                    style={{
                    }}
                    className="bg-background  flex flex-col items-center justify-center gap-2 right-40 -top-10   text-foreground/70 text-center font-semibold text-sm absolute pt-8  tracking-tight   border border-foreground/10 p-4 rounded-md ">
                    <Quote className="w-4 h-4 opacity-60 text-chart-1   top-2 absolute right-2" />
                    Quality is always the goal
                </div>
                <div
                    style={{
                    }}
                    className="-right-10 top-30  bg-background flex flex-col items-center justify-center gap-2   text-foreground/70 text-center font-semibold text-sm absolute pt-8  tracking-tight   border border-foreground/10 p-4 rounded-md ">
                    <Quote className="w-4 h-4 opacity-60 text-chart-1   top-2 absolute right-2" />
                    builds with passion.
                </div>
                <div
                    style={{
                    }}
                    className="bg-background  text-nowrap flex flex-col items-center justify-center gap-2 bottom-20 right-20   text-foreground/70 text-center font-semibold text-sm absolute pt-8  tracking-tight   border border-foreground/10 p-4 rounded-md ">

                    <Quote className="w-4 h-4 opacity-60 text-chart-1   top-2 absolute right-2" />
                    think before code
                </div>

            </div>

            <div className="absolute flex items-center left-60 mb-18 ">
                {/* ------------- */}

                <>
                    <LinesCon
                        parentClassName={" overflow-hidden py-2"}
                        style={{
                            width: leftOrWidth1,
                        }}
                        Light={<Light
                            animate={{
                                left: ["-100%", "110%"],
                                opacity: [1, 1]
                            }}
                            duration={.9}
                            repeatDelay={repeatDelay}
                            className="bg-gradient-to-l opacity-0 from-[#ff0303] w-[60] h-[2]"
                            filter={`drop-shadow(0 0 8px #ff0303)`}
                        />}
                        className={"w-full items-center flex justify-start"}
                    />

                    <LinesCon
                        parentClassName={" overflow-hidden px-2"}
                        style={{
                            left: leftOrWidth1 - 8,
                            height: BottomOrHeight1 - 1,
                            bottom: -1
                        }}
                        Light={
                            <Light
                                animate={{
                                    bottom: ["-50%", "110%"],
                                    opacity: [1, 1]
                                }}
                                duration={1.6}
                                className="from-[#ff0303] opacity-0 h-[60]  w-[2]"
                                repeatDelay={repeatDelay}
                                delay={.3}
                                filter={`drop-shadow(0 0 8px #ff0303)`}
                            />
                        }
                        className={"justify-center flex items-end h-full "}
                    />
                </>
                <>
                    <LinesCon
                        parentClassName={" overflow-hidden  py-4"}
                        style={{
                            bottom: -30,
                            width: leftOrWidth2,
                        }}
                        Light={
                            <Light
                                animate={{
                                    left: ["-50%", "120%"],
                                    opacity: [1, 1]
                                }}
                                duration={1.8}
                                className="bg-gradient-to-l from-[#0974ff] opacity-0 h-[2]  w-[80]"
                                repeatDelay={repeatDelay2}
                                delay={secondDelay}
                                filter={`drop-shadow(0 0 8px #0974ff)`}
                            />
                        }
                        className={"justify-center flex items-end  p-[.7px] h-full "}
                    />
                    <LinesCon
                        parentClassName={" overflow-hidden  px-3"}
                        style={{
                            left: leftOrWidth2 - 13,
                            height: BottomOrHeight2 - 1,
                            bottom: -10,
                        }}
                        Light={
                            <Light
                                animate={{
                                    bottom: ["-200%", "100%"],
                                    opacity: [1, 1]
                                }}
                                duration={1}
                                className="bg-gradient-to-b from-[#0974ff] opacity-0 h-[60]  w-[2]"
                                repeatDelay={repeatDelay2}
                                delay={secondDelay + .9}
                                filter={`drop-shadow(0 0 8px #0974ff)`}
                            />
                        }
                        className={"justify-center flex items-end   p-[.7px] h-full "}
                    />
                </>
                <>
                    <LinesCon
                        parentClassName={" overflow-hidden  py-4"}
                        style={{
                            bottom: -45,
                            width: leftOrWidth3,
                        }}
                        Light={
                            <Light
                                animate={{
                                    left: ["-50%", "120%"],
                                    opacity: [1, 1]
                                }}
                                duration={1.8}
                                className="bg-gradient-to-l from-[#ff0edb] opacity-0 h-[2]  w-[80]"
                                repeatDelay={repeatDelay3}
                                delay={thirdDelay}
                                filter={`drop-shadow(0 0 6px #ff0edb)`}
                            />
                        }
                        className={"justify-center flex items-end  p-[.7px] h-full "}
                    />
                    <LinesCon
                        parentClassName={" overflow-hidden  px-3"}
                        style={{
                            left: leftOrWidth3 - 13,
                            height: BottomOrHeight3 - 1,
                            top: 28,
                        }}
                        Light={
                            <Light
                                animate={{
                                    top: ["-70%", "100%"],
                                    opacity: [1, 1]
                                }}
                                duration={1.2}
                                className="bg-gradient-to-t from-[#ff0edb] opacity-0 h-[60]  w-[2]"
                                repeatDelay={repeatDelay3}
                                delay={thirdDelay + 1}
                                filter={`drop-shadow(0 0 6px #ff0edb)`}
                            />
                        }
                        className={"justify-center flex items-end   p-[.7px] h-full "}
                    />
                </>

            </div>
        </div>

    )
}

export default SecondSection
