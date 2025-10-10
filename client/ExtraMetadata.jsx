"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react";
import { usePrompt } from "@/context/PromptContext";
const ExtraMetadata = () => {

    const [listOpen, setlistOpen] = useState(false)
    const { selected, setSelected, isLoading } = usePrompt();

    const options = {
        Output: ["Article", "Image", "Video", "Post", "Audio", "Code", "Presentation"],
        Style: [
            "Formal",
            "Casual",
            "Friendly",
            "Professional",
            "Funny",
            "Inspirational",
            "Persuasive",
            "Storytelling"
        ],
        Audience: [
            "General",
            "Kids",
            "Students",
            "Professionals",
            "Gamers",
            "Marketers",
            "Researchers"
        ],
        Platform: [
            "Blog",
            "Instagram",
            "YouTube",
            "LinkedIn",
            "TikTok",
            "Reddit",
            "Academic",
            "Website"
        ],
        Length: [
            "Short (<150 words)",
            "Medium (~500 words)",
            "Long (>1000 words)",
            "One sentence",
            "Bullet points"
        ],
        Language: [
            "English",
            "Arabic",
            "French",
            "Spanish",
            "Deutsch",
            "Italian",
            "Japanese",
            "Chinese"
        ]
    };
    useEffect(() => {
        if (isLoading) {
            setlistOpen(false)
        }
    }, [isLoading])
    return (
        <div className="p-6  w-full space-y-8  mt-10 tracking-tight">
            <div onClick={() => setlistOpen(pv => !pv)}
                className="flex opacity-70 hover:opacity-100 cursor-pointer gap-2 items-center">
                <h1 className=" font-medium tracking-tighter">Enhance Your Prompt</h1>
                <ChevronDown className={`w-5 h-5 ${listOpen ? "rotate-[180deg]" : "rotate-[0]"} duration-200`} />
            </div>
            <AnimatePresence>

                {
                    listOpen &&
                    <motion.div
                        initial={{
                            height: 0,
                            opacity: 0
                        }}
                        exit={{
                            height: 0,
                            opacity: 0
                        }}
                        animate={{
                            height: "auto",
                            opacity: 1
                        }}
                        className="overflow-hidden">
                        {Object.entries(options).map(([title, items]) => (
                            <div key={title} className="mt-4">
                                <h1 className="text-base font-medium mb-1 tracking-tight">{title}</h1>
                                <div className="flex flex-wrap gap-[1px]">
                                    {items.map((item) => (
                                        <button
                                            style={{
                                                filter: `drop-shadow(0 0 3px var(--filter-color))`
                                            }}
                                            key={item}
                                            onClick={() =>
                                                setSelected((prev) => ({ ...prev, [title.toLowerCase()]: prev[title.toLowerCase()] == item ? "" : item }))
                                            }
                                            className={`px-4 py-2 rounded-sm cursor-pointer   transition 
                                        ${selected[title.toLowerCase()] === item
                                                    ? "bg-chart-1 text-background"
                                                    : "bg-background text-chart-3 hover:bg-chart-1/20"
                                                }`}
                                        >
                                            {item}
                                        </button>
                                    ))}

                                    <input
                                        style={{
                                            filter: `drop-shadow(0 0 2px var(--filter-color))`
                                        }}
                                        className="bg-chart-1 w-[120] text-white placeholder-shown:text-foreground placeholder-shown:bg-background  font-medium  rounded-sm border outline-chart-1 p-2"
                                        placeholder="Other ... "
                                        value={items.includes(selected[title.toLowerCase()]) ? "" : selected[title.toLowerCase()]}
                                        onChange={e => setSelected(pv => ({ ...pv, [title.toLowerCase()]: e.target.value }))}
                                    />

                                </div>
                            </div>
                        ))}
                    </motion.div>
                }
            </AnimatePresence>

        </div>
    );
}

export default ExtraMetadata
