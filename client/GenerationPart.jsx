"use client";

import { Button } from "@/components/ui/button";
import { AIpen } from "./components/icons";
import { Clipboard, Copy, Plus } from "lucide-react";
import { usePrompt } from "@/context/PromptContext";
import Loader from "./components/Loader";

import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import PreLoadingelem from "./components/PreLoadingelem";
import { useEffect, useRef } from "react";
import Link from "next/link";
import SuggesstionAi from "./SuggesstionAi";
import ExtraMetadata from "./ExtraMetadata";
import { useUser } from "@/context/UserContext";
import AskForHelp from "./AskForHelp";
export let RestarValues = () => { }
const GenerationPart = () => {
    const { NeedsLogin, isLoadingUser } = useUser()
    const { value, setValue, maxLength, minLength, isLoading, result, HandelGetResult } = usePrompt();

    const LaodingRef = useRef();
    const TextareaRef = useRef();
    RestarValues = () => {
        TextareaRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "center"
        })
    }
    const handelDownToLaodingRef = () => {
        HandelGetResult();
    }
    useEffect(() => {
        if (isLoading) {
            LaodingRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "center"
            })
        }
    }, [isLoading])
    return (
        <div id="generate" className="mt-20 flex flex-col items-center  md:p-4 p-2 min-h-[70vh] w-full md:w-[80%] max-w-[1000] ">
            <h1 className="text-2xl font-semibold tracking-tighter max-w-[500] text-center">
                Start with a thought and see what our Prompt Generator creates.            </h1>
            <div className="flex w-full  bg-sidebar border   mt-8 rounded-xl  md:p-4 flex-col justify-center items-center">

                <div ref={TextareaRef} className="p-1 mb-10  flex flex-col items-center justify-center relative max-w-[800]  w-full  h-[350]">

                    <div className="absolute animated-bg  top-0 left-0 bg-black w-full h-full scale-y-[1.01] scale-x-[1.005] rounded-2xl z-[1] "></div>


                    <div className="flex z-[3] top-0 rtl:left-0 ltr:right-0 absolute w-full gap-2 justify-end px-2 pt-1 items-center ">
                        <Button
                            onClick={async () => {
                                let text = await navigator.clipboard.readText();
                                setValue(text)
                            }}
                            variant={"secondary"} className={"text-xs border hover:opacity-100 p-2 bg-transparent opacity-60 border-foreground/10 rounded-sm"}><Clipboard />Past</Button>
                        <Button
                            onClick={() => {
                                navigator.clipboard.writeText(value);
                            }}
                            variant={"secondary"} className={"text-xs border hover:opacity-100 p-2 bg-transparent opacity-60 border-foreground/10 rounded-sm"}><Copy />Copy</Button>
                    </div>
                    <textarea
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder="Describe what you want AI to do…"
                        className="!z-[2] absolute w-full pt-12  min-h-full  resize-none  p-4 font-medium tracking-tight  border-none outline-none rounded-xl bg-background" >
                    </textarea>

                    <p className="w-full absolute bottom-[-40] text-xs font-medium opacity-60">
                        {
                            value.length <= minLength
                                ? <>min Characters {minLength}</>
                                : <>Characters used: {value.length}/{maxLength} </>
                        }


                    </p>
                </div>
                <ExtraMetadata />
                <div className="flex mt-5 gap-8 items-center">
                    <Button disabled={value.length < 10 || isLoading || isLoadingUser} onClick={() => NeedsLogin({ fun: handelDownToLaodingRef })} className={"!p-6 tracking-tighter md:w-[340]"}>
                        {
                            isLoading
                                ? <Loader />
                                : <AIpen className="fill-white !w-6 !h-6" />
                        }
                        Generate Prompt
                    </Button>
                    <Link href={"#how-to-use"}>
                        <h2 className="hover_underline cursor-pointer hover:text-chart-1 hover:opacity-100 duration-200 tracking-tighter font-semibold opacity-70">how to use ?</h2>
                    </Link>
                </div>
            </div>



            <div ref={LaodingRef} className="mt-5 w-full max-w-[1000]">
                {
                    isLoading &&
                    <>
                        <div className="bg-background w-full tracking-tight  ai_response pt-14  relative md:p-8 p-4 border border-foreground/10 rounded-sm">

                            <div className="flex z-[3] top-1 rtl:left-0 ltr:right-0 absolute w-full gap-2 justify-end px-2 pt-1 items-center ">
                                <PreLoadingelem className={"!w-[80] h-[28]"} />
                            </div>
                            <PreLoadingelem className={"!w-[120] h-[10]"} />
                            <PreLoadingelem className={"!w-[95%] mt-10 h-[10]"} />
                            <PreLoadingelem className={"!w-[95%] mt-2 h-[10]"} />
                            <PreLoadingelem className={"!w-[50%] mt-2 h-[10]"} />
                            <PreLoadingelem className={"!w-[80%] mt-2 h-[10]"} />
                            <PreLoadingelem className={"!w-[80%] mt-2 h-[10]"} />
                            <PreLoadingelem className={"!w-[30%] mt-2 h-[10]"} />
                            <PreLoadingelem className={"!w-[90%] mt-2 h-[10]"} />
                            <PreLoadingelem className={"!w-[90%] mt-2 h-[10]"} />
                        </div>
                        <div className="flex w-full gap-4 items-center mt-15" >
                            <PreLoadingelem className={"!w-[50%]  h-[10]"} />
                            <PreLoadingelem className={"!w-[90] h-[30]"} />

                        </div>
                    </>
                }
            </div>

            {
                result && !isLoading &&
                <div className="mt-5 flex flex-col justify-center min-h-[100vh] w-full max-w-[1000]">
                    <div className="bg-background tracking-tight  ai_response pt-14  relative md:p-8 p-4 border border-foreground/10 rounded-sm">

                        <div className="flex z-[3] top-1 rtl:left-0 ltr:right-0 absolute w-full gap-2 justify-end px-2 pt-1 items-center ">
                            <Button
                                onClick={() => {
                                    navigator.clipboard.writeText(result);
                                }}
                                variant={"outiline"} className={"text-xs border hover:opacity-100 p-2  opacity-60 border-foreground/10 rounded-sm"}>
                                <Copy />Copy
                            </Button>
                        </div>
                        <h1 className="font-semibold opacity-60 text-xl tracking-tighter mb-4">Result</h1>
                        <Markdown remarkPlugins={[remarkGfm]}>{result}</Markdown>
                    </div>
                    <div className="flex w-full gap-4 items-center mt-15" >
                        <p className="opacity-70">

                            Do you find this prompt useful? Share it with us
                        </p>
                        <Link href={"/add-inspiration"}>
                            <Button variant={"outline"}>
                                Add to Inspirations
                                <Plus />
                            </Button>
                        </Link>
                    </div>
                </div>
            }
            <AskForHelp />
            <SuggesstionAi />

        </div >
    )
}

export default GenerationPart
