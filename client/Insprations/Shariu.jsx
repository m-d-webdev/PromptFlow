"use client"

import { Button } from "@/components/ui/button"
import { useInspirations } from "@/context/InspirationsContext"
import { BrushCleaning, Filter, MoveLeft, X } from "lucide-react"

const Shariu = () => {
    const { setmenuOpen, menuOpen, selectedFilters, setselectedFilters } = useInspirations()
    return (
        <div className="w-[95%] duration-200 max-w-[95%]  flex gap-3 items-center  justify-start overflow-auto  p-2">
            <button
                onClick={() => setmenuOpen(pv => !pv)}
                className={`${menuOpen ? "bg-foreground text-background" : "bg-background  opacity-70"} flex items-center  hover:opacity-100 duration-150  gap-2 border rounded-lg justify-center border-foreground/15 text-base font-medium tracking-tight py-[9px] min-w-[120]  overflow-hidden`}
                variant={"outline"}
            >
                <div className="relative w-6 flex items-center justify-center  h-6">

                    <MoveLeft className={`w-5 h-5 ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"} absolute duration-600`} />
                    <Filter className={`w-5 h-5 ${menuOpen ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"} duration-600 absolute`} />
                </div>
                Filters
                {
                    Object.values(selectedFilters).filter(v => v != "Any").length > 0 &&
                    <p className="text-xs font-semibold">

                        {
                            Object.values(selectedFilters).filter(v => v != "Any").length
                        }
                    </p>
                }

            </button>

            {
                Object.entries(selectedFilters).map(([k, v]) =>
                    v != "Any"
                        ? <button key={v} className="flex duration-200 text-sm text-nowrap  items-center p-2 hover:opacity-100 duration-150  gap-2 border rounded-lg justify-center border-chart-1/50  font-medium tracking-tight py-[9px]">
                            {v}
                            <X onClick={() => setselectedFilters(pv => ({ ...pv, [k]: "Any" }))} className="h-4 cursor-pointer w-4 opacity-60" />
                        </button>
                        : null
                )
            }
            {
                Object.values(selectedFilters).some(v => v != "Any") &&
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
    )
}

export default Shariu
