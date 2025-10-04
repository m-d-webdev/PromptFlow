"use client";

import { Star, ThumbsDown, ThumbsUp } from "lucide-react";
import moment from "moment";
import { useState } from "react";

const ReviewCard = ({ data }) => {
    const [liked, setLiked] = useState(null);
    return (
        <div
            style={{
                filter: `drop-shadow(0 0 1px var(--filter-color))`
            }}
            className="w-full !h-fit bg-background p-4 rounded-md ">
            <div className="flex  gap-3">
                <div className="p-[2px] rounded-full border border-chart-1 border-b-transparent">
                    <img src={data.user?.avatar} className="w-[40] h-[40] rounded-full object-cover object-top" alt="" />
                </div>
                <div className="">
                    <h1 className="font-bold text-muted-foreground tracking-tighter ">{data.user.name}</h1>
                    <div className="flex mt-1 items-center">

                        {
                            Array(data.rating)
                                .fill()
                                .map((nn, i) => <Star key={i} className="w-4 h-4 stroke-none fill-chart-4 opacity-70" />)
                        }
                    </div>
                </div>
            </div>
            <p className="tracking-tight mt-4 p-1">
                {data.review}
            </p>
            <div className="w-full mt-6 p-[1px] bg-muted-foreground/10  rounded-full"></div>
            <div className="w-full  mt-2 flex justify-between">
                <div className="flex gap-3">
                    <button onClick={() => setLiked(pv => pv == true ? null : true)} className="opacity-70 border border-foreground/20 rounded-full p-1 px-2 hover:opacity-100 duration-200 flex items-center gap-2 cursor-pointer "><ThumbsUp className={`w-4 h-4 ${liked == true ? "fill-foreground stroke-none" : ""}`} /><span className="text-xs font-semibold">{liked ? data.likesCount + 1 : data.likesCount}</span></button>
                    <button onClick={() => setLiked(pv => pv == false ? null : false)} className="opacity-70 hover:opacity-100 duration-200 flex items-center gap-1 cursor-pointer "><ThumbsDown className={`w-4 h-4 ${liked == false ? "fill-foreground stroke-none" : ""}`} /></button>
                </div>
                <p className="font-medium text-sm tracking-tight opacity-60">

                    {moment().format("dddd DD/MM/YYYY")}
                </p>
            </div>
        </div>
    )
}

export default ReviewCard
