"use client";

import { useUser } from "@/context/UserContext";
import { GoogleOneTap } from "@/lib/auth";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion"
import { CircleAlert } from "lucide-react";
export let OpenPremisionClosed;
const UserStatus = () => {
    const { isLoadingUser, user } = useUser();
    const [isPremisionDenieds, setisPremisionDenied] = useState(false);
    const [isPremisionDenieds2, setisPremisionDenied2] = useState(false);
    OpenPremisionClosed = () => {
        console.log("Ok");
        setisPremisionDenied2(true)
        setisPremisionDenied(true);
    };


    console.log(isPremisionDenieds);


    useEffect(() => {
        let timeOut1;
        if (isPremisionDenieds) {
            timeOut1 = setTimeout(() => {
                setisPremisionDenied(false)
            }, 9000);
        }
        return () => { clearTimeout(timeOut1) }
    }, [isPremisionDenieds])


    return (
        <div className="flex flex-col items-center justify-center relative">
            {
                user
                    ? <div className="w-[35] h-[35]"><img className="w-full h-full rounded-full object-cover" src={user.photoURL} alt="" /></div>
                    : <div className="w-[35] h-[35]">
                        {
                            isLoadingUser
                                ? <div className="loader2 w-full h-full"></div>
                                : <div onClick={GoogleOneTap} className="w-full h-full rounded-full bg-gradient-to-r from-chart-1 to-blue-500 "></div>
                        }
                    </div>

            }
            <AnimatePresence>

                {
                    isPremisionDenieds2 == true && (

                        <motion.div

                            initial={{ top: 0, width: 30 }}
                            animate={{
                                top: "105%",   // step 1: drop down
                                width: "290px",
                                transition: {
                                    duration: .5,
                                    times: [0, 0.2, .5],
                                    ease: "easeInOut",
                                    delay: 0,
                                    top: { duration: .3, delay: 0 },
                                    width: { duration: .5, delay: .7 },
                                }   // step 2: expand sideways
                            }}
                            exit={{
                                top: "0",
                                width: "30px",
                                transition: {
                                    duration: .5,
                                    times: [0, 0.2, .5],
                                    ease: "easeInOut",
                                    delay: 0,
                                    width: { duration: .3, delay: 0 },
                                    top: { duration: .5, delay: .7 },
                                }
                            }}

                            style={{
                                filter: `drop-shadow(0 0 4px var(--filter-color))`
                            }}
                            className="bg-background  z-[51] top-[105%] overflow-hidden flex gap-2  items-center absolute rtl:left-0 ltr:right-0 p-2 rounded-md" >
                            <CircleAlert className="w-4 min-w-4 h-4 text-destructive" />
                            <p className="text-xs select-none text-nowrap text-destructive font-medium">Google sign-in is blocked in your browser</p>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    )
}

export default UserStatus
