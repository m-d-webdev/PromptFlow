"use client"
import { useInspirations } from "@/context/InspirationsContext"
import { BrushCleaning, Filter, MoveLeft, Search, X } from "lucide-react"
import { useState } from "react"

const Shariu = () => {
    const { setmenuOpen, menuOpen, selectedFilters, setselectedFilters } = useInspirations()
    const [searchVal, setsearchVal] = useState("")
    const handelSearch = (isfalse = false) => {
        if (searchVal == "" || searchVal == null ||
            searchVal == " " || isfalse == true) {
            if (isfalse) {
                setsearchVal("")
            } if (selectedFilters["description"] &&
                selectedFilters["description"] != null &&
                selectedFilters["description"] != "") {
                setselectedFilters(pv => ({ ...pv, description: null }))
            }

        } else {

            setselectedFilters(pv => ({ ...pv, description: searchVal }))
        }
    };
    const KeyDown = e => {
        if (e.key == "Enter") handelSearch()
    }
    return (
        <>
            <h1 className="px-3 mb-4 font-semibold text-2xl tracking-tighter ">Explore AI images — customize your view with filters and search</h1>
            <div className="w-[95%] duration-200 max-w-[95%]  flex flex-col md:flex-row gap-3 md:items-center  justify-start overflow-auto  p-2">
                <div className="flex justify-between items-center w-full md:w-[500] rounded-sm border border-foreground/10 p-1 gap-2 pr-3 bg-sidebar">
                    <button
                        onClick={() => setmenuOpen(pv => !pv)}
                        className={`${menuOpen ? "bg-foreground text-background" : "bg-background  opacity-70"} flex items-center  hover:opacity-100 duration-150  gap-1  border rounded-md justify-center border-foreground/20 text-base font-semibold tracking-tight py-[9px] min-w-[100]  overflow-hidden`}
                        variant={"outline"}
                    >
                        <div className="relative w-6 flex items-center justify-center  h-6">

                            <MoveLeft className={`w-5 h-5 ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"} absolute duration-600`} />
                            <Filter className={`w-5 h-5 ${menuOpen ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"} duration-600 absolute`} />
                        </div>
                        Filters
                        {
                            Object.entries(selectedFilters).filter(([k, v]) => v != "Any" && k != "description").length > 0 &&
                            <p className="text-xs font-semibold">

                                {
                                    Object.entries(selectedFilters).filter(([k, v]) => v != "Any" && k != "description").length
                                }
                            </p>
                        }

                    </button>
                    <input
                        value={searchVal}
                        onKeyDown={KeyDown}
                        onChange={(e) => setsearchVal(e.target.value)}
                        placeholder="Search .. "
                        className="w-full ml-3 border-none outline-none  tracking-tight font-medium" />
                    <Search onClick={handelSearch} className="3 opacity-60 hover:opacity-100 duration-200 cursor-pointer" />

                    {
                        searchVal != "" &&
                        <button onClick={() => handelSearch(true)} className={"opacity-70 hover:opacity-100 cursor-pointer ml-2 border border-foreground/15 rounded-sm bg-background p-[4px] "} size={"icon"} variant={"outline"}>
                            <X className="w-4 h-4" />
                        </button>
                    }
                </div>
                <div className="flex items-center gap-1">
                    {
                        Object.entries(selectedFilters).map(([k, v]) =>
                            (v != "Any" && k != "description")
                                ? <button key={v} className="flex  text-sm text-nowrap  items-center p-2 hover:opacity-100 duration-150  gap-2 border rounded-lg justify-center border-chart-1/50  font-medium tracking-tight py-[9px]">
                                    {v}
                                    <X onClick={() => setselectedFilters(pv => ({ ...pv, [k]: "Any" }))} className="h-4 cursor-pointer w-4 opacity-60" />
                                </button>
                                : null
                        )
                    }
                    {
                        Object.entries(selectedFilters).some(([k, v]) => v != "Any" && k != "description") &&
                        <button
                            onClick={() => {
                                Object.keys(selectedFilters).map(k => {
                                    setselectedFilters(pv => ({ ...pv, [k]: "Any" }))
                                })


                            }}
                            className="text-chart-1 opacity-70 hover:opacity-100 border border-destructive/20 p-2 rounded-md font-medium flex items-center gap-2 text-nowrap text-sm tracking-tight ">
                            <BrushCleaning className="w-5 h-5" />
                            Clear all filters
                        </button>
                    }
                </div>

            </div>
        </>
    )
}

export default Shariu
