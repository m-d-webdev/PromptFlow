"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button";
import { ChevronDown, CircleCheck, Funnel } from "lucide-react";
import { useInspirations } from "@/context/InspirationsContext";

const FilterMenu = () => {
    const { menuOpen, setmenuOpen, selectedFilters, setselectedFilters, filters } = useInspirations();
    const [opens, setopens] = useState(filters.map(i => i.category));

    const menuRef = useRef();
    const handleCLoseWinClickOut = e => {
        if (!menuRef.current?.contains(e.target)) {
            setmenuOpen(false)
        }
    }
    return (
        <div className={`min-w-none xl:h-auto h-screen xl:min-w-[15px] z-[51]  xl:z-1`}
            onClick={handleCLoseWinClickOut}
        >
            <AnimatePresence>
                {
                    menuOpen &&
                    <div className={`  bg-foreground/10 xl:bg-transparent fixed xl:relative top-0 left-0 w-full h-full xl:w-fit xl:h-fit`} >

                        <motion.div
                            initial={{
                                width: "0",
                                minWidth: "0px",
                            }}
                            exit={{
                                width: "0",
                                minWidth: "0px",
                                transition: {
                                    ease: "easeInOut",
                                    duration: .4
                                }
                            }}
                            animate={{
                                width: "300px",
                                minWidth: "300px",
                                transition: {
                                    ease: "easeInOut",
                                    duration: .5
                                }
                            }}
                            ref={menuRef}
                            className="  overflow-hidden    top-0">
                            <div className="w-[250px] overflow-y-auto xl:h-auto h-screen xl:max-h-[100vh] max-h-full overflow-x-hidden min-w-[250px] p-2  rounded-lg pt-10 xl:pt-6 pb-10   bg-background">

                                {
                                    filters.map(i => (
                                        <div key={i.category} className="flex min-h-[40]  mb-6 pl-2 flex-col w-full">
                                            <div
                                                onClick={() => setopens(pv => pv.includes(i.category) ? pv.filter(elem => elem != i.category) : [...pv, i.category])}
                                                className="w-full cursor-pointer pr-3 flex justify-between items-center">
                                                <h1 className="text-lg font-semibold tracking-tighter truncate">{i.category}</h1>
                                                <button><ChevronDown className={`w-5 h-5  opacity-70 ${opens.includes(i.category) ? "rotate-[180deg]" : "rotate-[0deg]"} duration-200`} /></button>
                                            </div>
                                            <AnimatePresence>
                                                {
                                                    opens.includes(i.category) &&
                                                    <motion.div
                                                        initial={{
                                                            height: "0",
                                                        }}
                                                        exit={{
                                                            height: "0",
                                                            transition: {
                                                                ease: "easeInOut",
                                                                duration: .4
                                                            }
                                                        }}
                                                        animate={{
                                                            height: "auto",
                                                            transition: {
                                                                ease: "easeInOut",
                                                                duration: .5
                                                            }
                                                        }}
                                                        className="flex overflow-hidden flex-wrap mt-4 pl-2 gap-2">
                                                        {
                                                            i.options.map(o => (
                                                                <button
                                                                    onClick={() => setselectedFilters(pv => pv[i.category]
                                                                        ? (pv[i.category] == o ? ({ ...pv, [i.category]: "Any" }) : ({ ...pv, [i.category]: o }))
                                                                        : ({ ...pv, [i.category]: o }))
                                                                    }
                                                                    className={`
                                                                                 ${((selectedFilters[i.category] && selectedFilters[i.category] == o) || (!selectedFilters[i.category] && o == "Any")
                                                                            ? "border-chart-1 text-chart-1"
                                                                            : "opacity-70"
                                                                        )}
                                                                                 p-2 flex items-center gap-2 hover:border-foreground/25 bg-background cursor-pointer rounded-lg border font-medium tracking-tight  hover:opacity-100 duration-300 border-foreground/10}`}
                                                                    key={o}
                                                                >
                                                                    {
                                                                        ((selectedFilters[i.category] && selectedFilters[i.category] == o) || (!selectedFilters[i.category] && o == "Any")) &&
                                                                        <CircleCheck className="w-5 h-5" />
                                                                    }
                                                                    {o}
                                                                </button>
                                                            ))
                                                        }
                                                    </motion.div>
                                                }
                                            </AnimatePresence>

                                        </div>
                                    ))
                                }
                            </div>
                        </motion.div>


                    </div>
                }
            </AnimatePresence >
        </div >
    )
}

export default FilterMenu
