"use client";

import API from "@/lib/axios";
import { getLimitedText } from "@/lib/utils";
import { Star, ThumbsDown, ThumbsUp } from "lucide-react";
import moment from "moment";
import { useState } from "react";

const ReviewCard = ({ data, onClick = () => { } }) => {
    const [liked, setLiked] = useState(JSON.parse(localStorage.getItem("likedComments"))?.includes(data._id) == true ? true : null);

    const handleLike = async () => {
        setLiked(pv => pv == true ? null : true);
        let oldLikedCOmment = localStorage.getItem("likedComments") || [];
        if (oldLikedCOmment.length > 0) { oldLikedCOmment = JSON.parse(oldLikedCOmment) }
        if (!oldLikedCOmment.includes(data._id)) {
            await API.put(`/reviews/${data._id}`);
            localStorage.setItem("likedComments", JSON.stringify([...oldLikedCOmment, data._id]))
        }
    };



    return (
        <div
            style={{
                filter: `drop-shadow(0 0 1px var(--filter-color))`
            }}
            className="w-full flex flex-col justify-between  bg-background p-4 rounded-md ">
            <div onClick={onClick} className="">
                <div className="flex  gap-2">
                    <div className="p-[2px] rounded-full border border-chart-1 ">
                        <img src={data.user?.photoURL} className="w-[40] h-[40] rounded-full object-cover object-top" alt="" />
                    </div>
                    <div className="">
                        <h1 className="font-bold text-muted-foreground tracking-tighter ">{data.user?.displayName}</h1>
                        <div className="flex pl-1 items-center">

                            {
                                Array(data.rating)
                                    .fill()
                                    .map((nn, i) => <Star key={i} className="w-4 h-4 stroke-none fill-chart-4 opacity-70" />)
                            }
                        </div>
                    </div>
                </div>

                <p className="tracking-tight mt-4 p-1">
                    {
                        getLimitedText(
                            data.comment
                            , 60
                        )
                    }
                </p>
            </div>
            <div className="">

                <div className="w-full mt-6 p-[1px] bg-muted-foreground/10  rounded-full"></div>
                <div className="w-full  mt-2 flex justify-between">
                    <div className="flex gap-3">
                        <button onClick={handleLike} className="opacity-70 border border-foreground/20 rounded-full p-1 px-2 hover:opacity-100 duration-200 flex items-center gap-2 cursor-pointer "><ThumbsUp className={`w-4 h-4 ${liked == true ? "fill-foreground stroke-none" : ""}`} /><span className="text-xs font-semibold">{liked ? data.likes + 1 : data.likes}</span></button>
                        <button onClick={() => setLiked(pv => pv == false ? null : false)} className="opacity-70 hover:opacity-100 duration-200 flex items-center gap-1 cursor-pointer "><ThumbsDown className={`w-4 h-4 ${liked == false ? "fill-foreground stroke-none" : ""}`} /></button>
                    </div>
                    <p className="font-medium text-sm tracking-tight opacity-60">

                        {moment(data.createdAt).format("dddd DD/MM/YYYY")}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard
