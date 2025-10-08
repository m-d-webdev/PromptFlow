"use client";

import { useEffect, useRef, useState } from "react";
import Model from "../components/Model";
import { getLimitedText } from "@/lib/utils";
import { Minus, Star, ThumbsDown, ThumbsUp } from "lucide-react";
import moment, { duration } from "moment";
import { Button } from "@/components/ui/button";
import API from "@/lib/axios";

const ExtendingPopup = ({ onClose, data }) => {
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

        <Model

            motionParams={{
                initial: {
                    opacity: 0,
                    scale: .95,
                    y: 20
                },
                exit: {
                    opacity: 0,
                    scale: .95,
                    y: 20,
                    transition: {
                        ease: "easeInOut",
                        duration: .2
                    },
                },
                animate: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: {
                        ease: "easeInOut",
                        duration: .2
                    },
                }
            }}
            onClose={onClose}
            className="w-[400] flex flex-col relative  justify-between  bg-sidebar p-4 pt-10 rounded-md "
        >

            <div className="w-full top-1 right-1 absolute items-center justify-end flex">
                <Button onClick={onClose} size={'sm'} className=" p-2 tracking-tight rounded-sm" variant={"outline"}>
                    close
                    <Minus />
                </Button>
            </div>
            <div className="flex  gap-2">
                <div className="p-[2px] rounded-full border border-chart-1 ">
                    <img src={data.user?.photoURL} className="w-[40] h-[40] rounded-full object-cover object-top" alt="" />
                </div>
                <div className="">
                    <h1 className="font-bold text-muted-foreground tracking-tighter ">{data.user.displayName}</h1>
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
                {data.comment}
            </p>

            <div className="w-full mt-6 p-[1px] bg-muted-foreground/10  rounded-full"></div>
            <div className="w-full  mt-2 flex justify-between">
                <div className="flex gap-3">
                    <Button variant={"outline"} onClick={handleLike} size={"sm"} className="opacity-70  !h-fit !py-[4px] border border-foreground/20 rounded-full hover:opacity-100 cursor-pointer bg-background "><ThumbsUp className={`w-4 h-4 ${liked == true ? "fill-foreground stroke-none" : ""}`} /><span className="text-xs font-semibold">{liked ? data.likes + 1 : data.likes}</span></Button>
                    <button onClick={() => setLiked(pv => pv == false ? null : false)} className="opacity-70 hover:opacity-100 duration-200 flex items-center gap-1 cursor-pointer "><ThumbsDown className={`w-4 h-4 ${liked == false ? "fill-foreground stroke-none" : ""}`} /></button>
                </div>
                <p className="font-medium text-sm tracking-tight opacity-60">

                    {moment().format("dddd DD/MM/YYYY")}
                </p>
            </div>
        </Model>
    )
}

export default ExtendingPopup
