"use client";

import { Copy, Download, Ellipsis, Heart, MessageCircleWarning } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from 'framer-motion'
import { downloadImage } from "@/lib/utils";
const MoreOptionsMenu = ({ onClose, data }) => {
    const PageRef = useRef();
    const handleClickOutside = (e) => {
        if (!PageRef.current?.contains(e.target)) {
            onClose()
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <motion.div
            initial={{
                opacity: 0,
                scale: .6,
            }}
            exit={{
                opacity: 0,
                scale: 0,
            }}
            animate={{
                opacity: 1,
                scale: 1,
                transformOrigin: "bottom right",
                transition: {
                    duration: .2,
                    ease: "easeInOut"
                }

            }}
            ref={PageRef}
            className="bg-white text-black p-1 absolute bottom-4 w-[140] right-4 rounded-lg"
        >
            <button
                onClick={() => downloadImage(data.image, "this is a name for test.jpg")}
                className="text-sm w-full hover:border-foreground/20 rounded-sm duration-200 border border-transparent flex items-center font-medium tracking-tight p-1 py-2 hover:bg-accent opacity-80 hover:opacity-100 cursor-pointer gap-2 text-nowrap">
                <Download className="w-4 h-4" />
                Download
            </button>
            <button className="text-sm w-full hover:border-foreground/20 rounded-sm duration-200 border border-transparent flex items-center font-medium tracking-tight p-1 py-2 hover:bg-accent opacity-80 hover:opacity-100 cursor-pointer gap-2 text-nowrap">
                <Copy className="w-4 h-4" />
                Copy prompt
            </button>
            <button className="text-sm w-full hover:border-foreground/20 rounded-sm duration-200 border border-transparent flex items-center font-medium tracking-tight p-1 py-2 hover:bg-accent opacity-80 hover:opacity-100 cursor-pointer gap-2 text-nowrap">
                <MessageCircleWarning className="w-4 h-4" />
                Report
            </button>
        </motion.div>
    )
}
const ImageContainer = ({ data }) => {
    const [MoreOptionsMenuOpen, setMoreOptionsMenuOpen] = useState(false)
    return (
        <div className="w-full overflow-hidden relative h-[400] group">
            <img className="w-full object-cover rounded-xl h-full" src={data.image} alt="" />

            <div
                style={{
                    backdropFilter: "blur(5px)",
                    filter: `drop-shadow(0 0 4px var(--filter-color))`
                }}
                className="absolute left-1 rounded-full border border-white/40 w-[96%] flex justify-between duration-200 translate-y-10 group-hover:translate-y-0 items-center gap-3 bottom-1 p-1 opacity-0 group-hover:opacity-100"
            >
                <div className="flex items-center gap-2">
                    <img className="w-[35]  min-w-[35] rounded-full object-cover h-[35]" src={"https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg"} alt="" />
                    <h1 className="font-semibold max-w-[100] truncate tracking-tighter text-white">{data.user?.name} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit odio voluptatem a commodi repellendus minus provident, qui sit laboriosam itaque fugit, ratione tempora eos. Suscipit nisi eaque minima magni! Debitis.</h1>
                </div>
                <div className="relative">

                    <button onClick={() => setMoreOptionsMenuOpen(true)}><Ellipsis className="text-white w-5 h-5 mr-2 cursor-pointer" /></button>
                </div>
            </div>
            <AnimatePresence>
                {
                    MoreOptionsMenuOpen &&
                    <MoreOptionsMenu data={data} onClose={() => setMoreOptionsMenuOpen(false)} />
                }
            </AnimatePresence>
            <button
                onClick={() => downloadImage(data.image, "this is a name for test.jpg")}
                style={{
                    backdropFilter: "blur(10px)"
                }}
                className="absolute px-4 right-1  duration-200 translate-x-10 group-hover:translate-x-0 top-2 cursor-pointer   opacity-0 group-hover:opacity-100 flex items-center p-2 border border-white/40 rounded-full  justify-center gap-2 text-sm font-medium tracking-tight text-white">
                <Download className="w-5 h-5" />
                Download
            </button>

            <button
                style={{
                    backdropFilter: "blur(10px)"
                }}
                className="absolute  left-4  duration-200 -translate-x-10 group-hover:translate-x-0 top-4 cursor-pointer   opacity-0 group-hover:opacity-100 text-white">
                <Heart className="w-5 h-5" />
            </button>
        </div>
    )
}

export default ImageContainer
