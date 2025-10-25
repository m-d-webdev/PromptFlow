"use client"

import { DecimalsArrowRight, ListChevronsUpDown, MoveRight, Search } from "lucide-react";
import ReviewCard from "./ReviewCard";
import { useEffect, useState } from "react";
import PreLoadingelem from "../components/PreLoadingelem";
import ExtendingPopup from "./ExtendingPopup";
import { AnimatePresence } from "framer-motion";
import API from "@/lib/axios";


const ListReviews = () => {
    const [isLoading, setloading] = useState(true);
    const [reviews, setreviews] = useState([]);
    const [skip, setskip] = useState(0);
    const [TotalItems, setTotalItems] = useState(0);
    const [search, setsearch] = useState("")
    const GetReviews = async () => {
        setloading(true);
        const params = { skip };
        if (search != "") params.search = search.trim();

        await API.get("/reviews", {
            params
        })
            .then(res => {
                setloading(false)
                setreviews(res.data.reviews)
                setreviews(res.data.reviews)
                setTotalItems(res.data.count)
            })
            .catch(er => {
                setloading(false);
            })
        setloading(false);
    };



    useEffect(() => {
        const t = setTimeout(() => {
            GetReviews()
        }, 500);

        return () => {
            clearTimeout(t)
        }
    }, [search, skip]);
    const [extendtingOne, setextendtingOne] = useState(null)
    const [extendtingOpen, setextendtingOpen] = useState(false);
    useEffect(() => {
        if (extendtingOne) setextendtingOpen(true);
    }, [extendtingOne]);

    return (
        <div className="min-h-screen  pb-20 flex flex-col items-center  w-full mt-10">
            <div className="w-full flex items-center justify-center flex-col max-w-[1200] p-2 mb-6">
                <h2 className="font-medium tracking-tighter">Find honest reviews about what you’re looking for</h2>
                <div
                    style={{
                        filter: `drop-shadow(0 0 1px var(--filter-color))`
                    }}
                    className="flex items-center gap-3 mt-2 w-full max-w-[400] bg-background p-2 rounded-sm">
                    <Search className="w-5 h-5" />
                    <input
                        onChange={(e) => setsearch(e.target.value)}
                        placeholder="Search ..."
                        className="border-none outline-none w-full font-medium tracking-tight" />
                </div>
            </div>
            <div className="w-full max-w-[1200] flex justify-start">

                <h1 className=" flex items-center justify-center mb-6 font-medium tracking-tight pl-5">

                    {
                        isLoading ?
                            <PreLoadingelem className={"!w-[60] mr-1 h-[20px]"} />
                            : <span className="text-lg mr-1 font-semibold">{TotalItems}</span>
                    } items found
                </h1>
            </div>


            <div className="grid p-2 md:p-0 w-full max-w-[1200] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-3">

                {
                    isLoading
                        ? Array(7).fill().map((r, i) => <PreLoadingelem key={i} className={"h-[250] !w-full"} />)
                        : reviews.map(r => <ReviewCard onClick={() => setextendtingOne(r)} key={r.user?.displayName} data={r} />)
                }
            </div>
            <div className="w-full flex items-center justify-center flex-col max-w-[1200] p-2 mt-8">
                <button disabled={TotalItems <= (skip + 18) || skip} onClick={() => setskip(pv => pv + 18)} className="opacity-80  justify-center disabled:opacity-40 border font-medium tracking-tighter bg-background border-foreground/20 rounded-md p-2 px-6 hover:opacity-100 duration-200 flex items-center gap-2 cursor-pointer ">Next  <MoveRight className="w-4 h-4" /></button>
            </div>
            <AnimatePresence>
                {
                    extendtingOpen &&
                    <ExtendingPopup onClose={() => { setextendtingOne(null); setextendtingOpen(false) }} data={extendtingOne} />
                }
            </AnimatePresence>
        </div>
    )
}

export default ListReviews
