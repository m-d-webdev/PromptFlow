"use client"
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, AudioLines, LayoutGrid, Lock, Mic, Paperclip, Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { BrandZoom, Photo, WorldSearch } from "../components/icons";
import { UseAiChat } from "@/context/AiChatContext";
import Loader from "../components/Loader";
import { useUser } from "@/context/UserContext";
import StartSuggestions from "./StartSuggestions";

const ButtomUpload = ({ }) => {
    const [menuOpen, setmenuOpen] = useState(false);
    const PageRef = useRef();
    const handleClickOutside = (e) => {
        if (!PageRef.current?.contains(e.target)) {
            setmenuOpen(false)
        }
    };

    useEffect(() => {
        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuOpen]);
    return (
        <>
            <button onClick={() => setmenuOpen(true)} className="p-[2px] bg-accent/50 border-foreground/10 border rounded-sm hover:border-foreground/20 opacity-80 hover:opacity-100 duration-100 flex items-center justify-center cursor-pointer">
                <Plus className="w-4  h-4 text-foreground/70" />
            </button>
            <AnimatePresence>
                {
                    menuOpen &&
                    <motion.div
                        initial={{
                            opacity: .5,
                            scale: .8,
                        }}
                        exit={{
                            opacity: 0,
                            scale: .9, transition: {
                                ease: "easeOut",
                                duration: .2
                            }
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            transformOrigin: "bottom left",
                            transition: {
                                ease: "easeOut",
                                duration: .2
                            }
                        }}

                        style={{
                            filter: `drop-shadow(0 0 4px var(--filter-color))`
                        }}
                        className="bg-background z-[2] text-sm absolute bottom-0 p-1 rounded-md flex flex-col gap-1 "
                        ref={PageRef}
                    >
                        <div className="flex duration-400 bg-background ease-out opacity-80 hover:opacity-100 pr-2 gap-2 items-center p-1 py-2 w-full border border-foreground/5 hover:border-foreground/20 hover:bg-sidebar  cursor-pointer rounded-sm ">
                            <Paperclip className="w-4  stroke-[1.4] h-4" />
                            <p className="tracking-tight font-medium">Upload from your device</p>
                            <Lock className="ml-1 w-3 h-3 opacity-40 " />
                        </div>
                        <div className="flex duration-400 bg-background ease-out opacity-80 hover:opacity-100 gap-2 items-center p-1 py-2 w-full border border-foreground/5 hover:border-foreground/20 hover:bg-sidebar  cursor-pointer rounded-sm ">
                            <Photo className="w-4 h-4" />
                            <p className="tracking-tight font-medium">Create Image</p>
                            <Lock className="ml-1 w-3 h-3 opacity-40 " />
                        </div>
                        <div className="flex duration-400 bg-background ease-out opacity-80 hover:opacity-100 gap-2 items-center p-1 py-2 w-full border border-foreground/5 hover:border-foreground/20 hover:bg-sidebar  cursor-pointer rounded-sm ">
                            <BrandZoom className="w-4 h-4" />
                            <p className="tracking-tight font-medium">Create Video</p>
                            <Lock className="ml-1 w-3 h-3 opacity-40 " />
                        </div>
                        <div className="flex duration-400 bg-background ease-out opacity-80 hover:opacity-100 gap-2 items-center p-1 py-2 w-full border border-foreground/5 hover:border-foreground/20 hover:bg-sidebar  cursor-pointer rounded-sm ">
                            <AudioLines className="w-4 stroke-1 h-4" />
                            <p className="tracking-tight font-medium">Create Audio</p>
                            <Lock className="ml-1 w-3 h-3 opacity-40 " />
                        </div>

                        <div className="w-full flex justify-center  items-center">
                            <a

                                href="https://buymeacoffee.com/iderkaoui"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 mt-2 w-full text-black rounded-md text-xs font-semibold gap-1   text-center  px-4 tracking-tighter "
                                style={{
                                    filter: `drop-shadow(0 0 1px var(--filter-color))`,
                                    backgroundColor: "#FFDD00",
                                }}
                            >
                                Help Unlock these features
                            </a>
                        </div>

                    </motion.div>
                }
            </AnimatePresence>
        </>
    )
}


const MainAiInput = () => {
    const [searchOn, setsearchOn] = useState(false)
    const [height, setheight] = useState("auto")
    const [input, setInput] = useState("")
    const { sendMessage, isLoading, messages } = UseAiChat()
    const { NeedsLogin } = useUser();
    const HandleChange = (e) => {
        setInput(e.target?.value)
        setheight(e.target.scrollHeight)
    };
    useEffect(() => {
        if (messages.length > 0) {
            if (input == "") {
                setheight("36px")
            }
        }
    }, [input])

    const HandleInputDown = (e) => {
        if (e.key == "Enter" && !e.shiftKey) {
            NeedsLogin({ fun: () => sendMessage(input) })
            e.preventDefault();
        }

    };


    useEffect(() => {
        if (isLoading) {
            setInput("")
        }
    }, [isLoading])

    const [listOptionsOpen, setlistOptionsOpen] = useState(false)
    const SideMenuRef = useRef();
    const handleClickOutside = (e) => {
        if (!SideMenuRef.current?.contains(e.target)) {
            setlistOptionsOpen(false)
        }
    };
    const inRef = useRef()
    useEffect(() => {
        if (listOptionsOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [listOptionsOpen]);
    const [isFocused, setFOcused] = useState(false)
    useEffect(() => {
        const handelWriting = e => {
            if (isFocused) return
            // Ignore shortcut or system key combinations
            if (e.ctrlKey || e.altKey || e.metaKey) return;

            // Ignore special keys (Shift, Tab, Arrow keys, etc.)
            if (e.key.length !== 1) return;
            setInput(pv => pv + e.key);
            inRef.current?.focus();
            e.preventDefault();

        }
        if (window) {
            window.addEventListener("keydown", handelWriting)
        }
        return () => {
            window.removeEventListener("keydown", handelWriting)
        }
    }, [isFocused])

    return (
        <>
            {
                messages.length == 0 &&
                <StartSuggestions onSetMessage={m => {
                    setInput(m);
                    inRef.current?.focus()

                }} />
            }

            <div
                style={{
                    filter: `drop-shadow(0 0 1px var(--filter-color))`
                }}
                className={`bg-background md:mb-0 mb-2  mt-4  relative duration-200 rounded-md p-1 ${messages.length == 0 ? "md:w-[700] w-full" : "w-full max-w-[1000] flex items-start "} `}>
                {
                    messages.length > 0 &&
                    <button onClick={() => setlistOptionsOpen(pv => !pv)} className="p-1 mb-[5] self-end opacity-60">
                        <LayoutGrid className="w-4 h-4" />
                    </button>
                }
                <textarea
                    onFocus={() => setFOcused(true)}
                    onBlur={() => setFOcused(false)}
                    ref={inRef}
                    style={{ height }}
                    onKeyDown={HandleInputDown}
                    value={input}
                    onChange={HandleChange}
                    type="text"
                    className={`border-none scrl_none ${messages.length == 0 ? "" : " "}  p-2 font-medium text-sm tracking-tight max-h-[300] outline-none w-full resize-none`}
                    placeholder="Ask anything..." >

                </textarea>



                <div ref={SideMenuRef} className={`${messages.length == 0 ? "w-full"
                    : `absolute  ml-9 left-0 border border-foreground/10 w-[40%] bottom-1.5 py-1 rounded-md ${listOptionsOpen ? "translate-y-1" : "-translate-y-10 opacity-0 "}  bg-background `
                    }
                 duration-200   mt-1 px-2 flex justify-between items-center`}>
                    <div className="flex gap-2 items-center">
                        <ButtomUpload />
                        <button onClick={() => setsearchOn(pv => !pv)} className="flex ml-1 opacity-70 p-1 relative border  border-foreground/5 rounded-full hover:border-foreground/20 cursor-pointer duration-200 items-center gap-1 ">
                            <WorldSearch className={`w-5 ${searchOn ? "stroke-chart-1" : ""}  duration-150 h-5`} />
                        </button>
                    </div>
                    <div className="flex gap-4 items-center">
                        <button className="flex opacity-50 p-1 relative border pr border-foreground/5 rounded-full hover:border-foreground/20 cursor-pointer duration-200 items-end gap-1 justify-end">
                            <Mic className="w-4 h-4 stroke-[1.5]" />
                            <Lock className="w-3 h-3 opacity-70 absolute -right-1 bottom-0 stroke-[1.5]" />
                        </button>
                        <button onClick={() => NeedsLogin({ fun: () => sendMessage(input) })} className="flex p-1 bg-accent  relative border pr border-foreground/5 rounded-full hover:border-foreground/20 cursor-pointer duration-300 items-end gap-1 justify-end">
                            {
                                isLoading
                                    ? <Loader className={"border-t-foreground !w-5 !h-5"} />
                                    : <ArrowUp className="w-5 h-5 stroke-[1.5]" />
                            }
                        </button>
                    </div>
                </div>
                {
                    messages.length > 0 &&
                    <button onClick={() => NeedsLogin({ fun: () => sendMessage(input) })} className="flex p-1 bg-accent  self-end mr-1 mb-[3] relative border pr border-foreground/5 rounded-full hover:border-foreground/20 cursor-pointer duration-300 items-end gap-1 justify-end">
                        {
                            isLoading
                                ? <Loader className={"border-t-foreground !w-5 !h-5"} />
                                : <ArrowUp className="w-5 h-5 stroke-[1.5]" />
                        }
                    </button>
                }
            </div >
        </>

    )
}

export default MainAiInput
