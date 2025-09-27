"use client";

import { Button } from "@/components/ui/button";
import { usePrompt } from "@/context/PromptContext";
import { MoveUp, RotateCcw } from "lucide-react";
import { RestarValues } from "./GenerationPart";

const GeneratedPrompts = () => {
    const { generatedPromts, restar } = usePrompt()
    return (
        <div className="w-full p-2 max-w-[1000] mt-20 ">
            <div className="w-full justify-between flex items-center">
                <div className="">
                    <h1 className="text-xl font-semibold tracking-tighter ">Prompt History</h1>
                    <p className="mb-5 text-sm tracking-tight text-sidebar-primary mt-2 font-medium">You’ve tried {generatedPromts.length} of your 10 free generations</p>
                </div>
                <Button onClick={() => {
                    RestarValues()
                    restar()
                }}>
                    Generate Next Prompt
                    <RotateCcw />
                </Button>
            </div>
            <div className="w-full grid gap-3 grid-cols-2 md:grid-cols-3">
                {
                    generatedPromts?.map(p =>
                        <div
                            style={{
                                filter: `drop-shadow(0 0 4px var(--filter-color))`
                            }}
                            className="w-full  cursor-pointer bg-background opacity-70 hover:opacity-100 duration-200 p-3 rounded-md " key={p.id} >
                            <div className="w-full flex mb-6 justify-end ">
                                <img src="/image.png" className="w-5 h-5" alt="" />
                            </div>
                            <h2 className="truncate text-lg tracking-tight font-medium ">{p.description}</h2>
                            <p className="tracking-tight mt-1 text-sm">{p.prompt?.substring(0, 120)} ...</p>
                        </div>
                    )
                }
                {
                    Array(10 - generatedPromts.length).fill()?.map(p =>
                        <div
                            style={{
                                filter: `drop-shadow(0 0 4px var(--filter-color))`
                            }}
                            className="w-full  cursor-pointer bg-background opacity-70 hover:opacity-100 duration-200 p-3 rounded-md "  >
                            <div className="w-full flex mb-6 justify-end ">
                                <div className="bg-accent w-[30] h-[20] rounded-sm"></div>
                            </div>
                            <div className="bg-accent w-[70%] h-[15] rounded-sm"></div>
                            <div className="bg-accent w-[95%] mt-5 h-[15] rounded-sm"></div>
                            <div className="bg-accent w-[90%] mt-1 h-[15] rounded-sm"></div>
                            <div className="bg-accent w-[50%] mt-1 h-[15] rounded-sm"></div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default GeneratedPrompts
