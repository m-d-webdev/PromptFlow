"use client";

import { Check, X } from "lucide-react";
import { useState } from "react";
const reductionPerYear = 59
const PlansPart = () => {
    const [isMonthly, setisMonthly] = useState(true)
    const [selected, setselected] = useState(2)

    return (
        <>
            <div
                style={{
                    filter: `drop-shadow(0 0 6px var(--filter-color))`
                }}
                className="flex mt-15 tracking-tight font-medium items-center gap-6 relative bg-background p-3 px-4 rounded-full">
                <button onClick={() => setisMonthly(true)} className={`z-[2] ${isMonthly ? "text-white" : "text-sidebar-foreground opacity-70"} duration-200 cursor-pointer `} >Monthly</button>
                <button onClick={() => setisMonthly(false)} className={`z-[2] ${isMonthly ? "text-sidebar-foreground opacity-70" : "text-white"} duration-200 cursor-pointer `}>Annual ( Save {reductionPerYear}% )</button>
                <div className={`absolute bg-chart-1 h-[90%]  rounded-full  ${isMonthly ? "left-1 w-[83]" : "left-[88] w-[165]"} duration-200 `}></div>
            </div>
            <div className="flex md:min-h-[500] gap-10 items-center w-full flex-col flex-wrap justify-center md:flex-row max-w-[500] md:max-w-[1000] mt-20">

                <div
                    style={{
                        filter: `drop-shadow(0 0 4px var(--filter-color))`
                    }}
                    onClick={() => setselected(1)}
                    className={`duration-200 overflow-hidden border bg-background ${selected == 1 ? "border-chart-1/50  opacity-100 h-[390]" : " h-[320] opacity-70"}  duration-200 w-full md:w-[300] p-4 rounded-md`}>
                    <h1 className="font-semibold mb-4 tracking-tighter text-xl ">Basic</h1>
                    {
                        isMonthly ? <h1 className="font-semibold tracking-tighter text-xl ">$11.99 /month</h1>
                            : <h1 className="font-semibold tracking-tighter text-xl ">${((11.99 * 12) * (reductionPerYear / 100)).toFixed(2)} /year <span className="line-through text-base text-destructive ml-2">${((11.99 * 12)).toFixed(2)}</span></h1>
                    }
                    <ul className="pl-1 mt-7">
                        <li className="font-medium mt-2 text-sm tracking-tight flex items-center gap-3"><Check className="w-4 h-4 text-green-500 min-w-4" />Unlimited prompt generation</li>
                        <li className="font-medium mt-2 text-sm tracking-tight flex items-center gap-3"><Check className="w-4 h-4 text-green-500 min-w-4" />Small quota (like 50–100 images, short audio/video).</li>

                        <li className="font-medium mt-2 text-sm tracking-tight flex items-center gap-3"><Check className="w-4 h-4 text-green-500 min-w-4" />Standard speed (no priority).</li>

                        <li className="font-medium mt-2 text-sm tracking-tight flex items-center gap-3"><Check className="w-4 h-4 text-green-500 min-w-4" />Basic models only.</li>

                        <li className="font-medium mt-2 text-sm tracking-tight flex items-center gap-3 text-accent-foreground opacity-80"><X className="w-4 h-4 " />No commercial rights.</li>

                        <li className="font-medium mt-2 text-sm tracking-tight flex items-center gap-3"><Check className="w-4 h-4 text-green-500 min-w-4" />Small storage.</li>
                    </ul>
                    <button className={`${selected == 1 ? "bg-chart-1 text-white" : "text-chart-1"} font-semibold cursor-pointer  duration-200 tracking-[-1] mt-8 p-2 w-full rounded-full  border-2 border-chart-1/60`}>
                        Start free trial
                    </button>
                </div>
                <div
                    onClick={() => setselected(2)}
                    style={{
                        filter: `drop-shadow(0 0 4px var(--filter-color))`
                    }}
                    className={`duration-200 border relative overflow-hidden bg-background ${selected == 2 ? "border-chart-1/50  opacity-100 h-[410]" : " h-[340]  opacity-70"}  duration-200 w-full md:w-[300] p-4 rounded-md`}>
                    <div className="absolute bg-chart-1 p-2 right-[-2] text-sm font-medium tracking-tighter rounded-bl-2xl top-[-2] text-white">Most popular</div>
                    <h1 className="font-semibold mb-4 tracking-tighter text-xl ">Pro</h1>
                    {
                        isMonthly ? <h1 className="font-semibold tracking-tighter text-xl ">$34.99 /month</h1>
                            : <h1 className="font-semibold tracking-tighter text-xl ">${((34.99 * 12) * (reductionPerYear / 100)).toFixed(2)} /year <span className="line-through text-base text-destructive ml-2">${((34.99 * 12)).toFixed(2)}</span></h1>
                    }
                    <ul className="pl-1 mt-7">
                        <li className="font-medium mt-2 text-sm tracking-tight flex items-center gap-3">
                            <Check className="w-4 h-4 text-green-500 min-w-4" />
                            Unlimited prompt generation
                        </li>
                        <li className="font-medium mt-2 text-sm tracking-tight flex items-center gap-3">
                            <Check className="w-4 h-4 text-green-500 min-w-4" />
                            Bigger quota (200–500 images, longer audio/video).
                        </li>
                        <li className="font-medium mt-2 text-sm tracking-tight flex items-center gap-3">
                            <Check className="w-4 h-4 text-green-500 min-w-4" />
                            Faster generation (priority).
                        </li>
                        <li className="font-medium mt-2 text-sm tracking-tight flex items-center gap-3">
                            <Check className="w-4 h-4 text-green-500 min-w-4" />
                            More models & styles.
                        </li>
                        <li className="font-medium mt-2 text-sm tracking-tight flex items-center gap-3">
                            <Check className="w-4 h-4 text-green-500 min-w-4" />
                            Commercial usage rights.
                        </li>
                        <li className="font-medium mt-2 text-sm tracking-tight flex items-center gap-3">
                            <Check className="w-4 h-4 text-green-500 min-w-4" />
                            Larger storage & some private generation.
                        </li>
                    </ul>
                    <button className={`${selected == 2 ? "bg-chart-1 text-white" : "text-chart-1"} font-semibold cursor-pointer  duration-200 tracking-[-1] mt-8 p-2 w-full rounded-full  border-2 border-chart-1/60`}>
                        Start free trial
                    </button>
                </div>
                <div
                    onClick={() => setselected(3)}
                    style={{
                        filter: `drop-shadow(0 0 4px var(--filter-color))`
                    }}
                    className={`duration-200 border bg-background overflow-hidden ${selected == 3 ? "border-chart-1/50 -translate-y-5 opacity-100 h-[400]" : " h-[330]  opacity-70"}  duration-200 w-full md:w-[300] p-4 rounded-md`}>
                    <h1 className="font-semibold mb-4 tracking-tighter text-xl ">Premium</h1>
                    {
                        isMonthly ? <h1 className="font-semibold tracking-tighter text-xl ">$79.99 /month</h1>
                            : <h1 className="font-semibold tracking-tighter text-xl ">${((79.99 * 12) * (reductionPerYear / 100)).toFixed(2)} /year <span className="line-through text-base text-destructive ml-2">${((79.99 * 12)).toFixed(2)}</span></h1>
                    }
                    <ul className="pl-1 mt-7">
                        <li className="font-medium mt-2 text-sm tracking-tight flex items-center gap-3">
                            <Check className="w-4 h-4 text-green-500 min-w-4" />
                            Very high / near unlimited quota.
                        </li>
                        <li className="font-medium mt-2 text-sm tracking-tight flex items-center gap-3">
                            <Check className="w-4 h-4 text-green-500 min-w-4" />
                            Top speed (dedicated resources).
                        </li>
                        <li className="font-medium mt-2 text-sm tracking-tight flex items-center gap-3">
                            <Check className="w-4 h-4 text-green-500 min-w-4" />
                            All models (including new/experimental).
                        </li>
                        <li className="font-medium mt-2 text-sm tracking-tight flex items-center gap-3">
                            <Check className="w-4 h-4 text-green-500 min-w-4" />
                            Full commercial + team/collaboration features.
                        </li>
                        <li className="font-medium mt-2 text-sm tracking-tight flex items-center gap-3">
                            <Check className="w-4 h-4 text-green-500 min-w-4" />
                            Big storage, custom training, API access, premium support.
                        </li>
                    </ul>
                    <button className={`${selected == 3 ? "bg-chart-1 text-white" : "text-chart-1"} font-semibold cursor-pointer  duration-200 tracking-[-1] mt-8 p-2 w-full rounded-full  border-2 border-chart-1/60`}>
                        Start free trial
                    </button>
                </div>
            </div>
        </>
    )
}

export default PlansPart
