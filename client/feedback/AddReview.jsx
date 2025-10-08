"use client";
import { useEffect, useRef, useState } from "react";
import Model from "../components/Model";
import { Minus, Send, UserStar } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import React from 'react'
import { useUser } from "@/context/UserContext";
import API from "@/lib/axios";
import Loader from "../components/Loader";

export const Star = ({ ...props }) => {
    return (
        <svg
            {...props}
            ariaHidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M17.286 21.09q -1.69 .001 -5.288 -2.615q -3.596 2.617 -5.288 2.616q -2.726 0 -.495 -6.8q -9.389 -6.775 2.135 -6.775h.076q 1.785 -5.516 3.574 -5.516q 1.785 0 3.574 5.516h.076q 11.525 0 2.133 6.774q 2.23 6.802 -.497 6.8" />
        </svg>

    )
}
const AddReview = () => {
    const [menuOpen, setmenuOpen] = useState(false)
    const [givenStars, setgivenStars] = useState(1);
    const [comment, setcomment] = useState("");
    const { NeedsLogin } = useUser();

    const [isLoading, setisLoading] = useState(false)
    const handelSubmit = async () => {
        setisLoading(true);
        await API.post("/reviews", { comment, rating: givenStars })
            .then(res => {
                setmenuOpen(false)
                setisLoading(false)
            })
            .catch(er => {
                setisLoading(false)
            });
        setisLoading(false);

    }
    return (
        <>
            <button
                onClick={() => setmenuOpen(true)}
                style={{
                    filter: `drop-shadow(0px 5px 5px var(--filter-color))`
                }}
                className="mt-15 z-[3] duration-300 border-2 border-chart-1  hover:bg-chart-1 p-3 px-4 hover:text-white rounded-full font-semibold tracking-tighter flex items-center justify-center gap-2">
                Tell Us What You Think
                <UserStar className="w-5 h-5" />
            </button>
            <AnimatePresence>

                {
                    menuOpen &&
                    <Model
                        motionParams={{
                            initial: {
                                opacity: 0,
                                scale: .95,
                                y: 20
                            },
                            exit: {
                                opacity: 0,
                                scale: .98,
                                y: 10,
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


                        onClose={() => setmenuOpen(false)}
                        className="w-[500] flex flex-col relative  justify-between  bg-sidebar p-4 pt-6 rounded-md "
                    >
                        <div className="w-full top-1 right-1 absolute items-center justify-end flex">
                            <Button onClick={() => setmenuOpen(false)} size={'sm'} className=" p-2 tracking-tight rounded-sm" variant={"outline"}>
                                close
                                <Minus />
                            </Button>
                        </div>
                        <h1 className="text-xl font-semibold tracking-tighter">Tell us what you think </h1>
                        <p className=" text-sm font-medium mt-2 opacity-70 ">We really appreciate your feedback — it helps us improve and guide others too.</p>
                        <h1 className="mt-5 font-medium  opacity-80 tracking-tighter">Score </h1>


                        <div className="flex  mt-1 gap-1 w-full">
                            {
                                Array(givenStars).fill().map((s, i) => <motion.div key={`${(i + 1) * givenStars}`}
                                    animate={{
                                        scale: [0, 2.5, 1],
                                        x: [-20, 10, 0],
                                        transition: {
                                            duration: .5,
                                            delay: i * .07,
                                            ease: "easeInOut"
                                        }
                                    }}
                                >
                                    <Star onClick={() => setgivenStars(i + 1)} className="stroke-none w-10 h-10 fill-chart-4" /></motion.div>)
                            }
                            {
                                Array(5 - givenStars).fill().map((s, i) => <Star onClick={() => setgivenStars(pv => pv + (i + 1))} key={i} className="stroke-foreground/10 w-10 h-10 fill-accent/40" />)
                            }
                        </div>

                        <h1 className="mt-8 font-medium  opacity-80 tracking-tighter">Review </h1>
                        <textarea onChange={e => setcomment(e.target.value)} className="outline-chart-1/20 w-full mt-1 min-h-[150] p-2  border border-foreground/10 rounded-md resize-none tracking-tight bg-background" placeholder="Write your review here…" ></textarea>
                        <Button disabled={comment == ""} onClick={() => NeedsLogin({ fun: handelSubmit })} className={"tracking-tight font-medium mt-4"}>Submit review
                            {
                                isLoading
                                    ? <Loader />
                                    : <Send />}
                        </Button>
                    </Model>
                }
            </AnimatePresence>

        </>

    )
}

export default AddReview
