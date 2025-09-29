"use client";

import { useUser } from "@/context/UserContext";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion"
import Links from "./components/Links";
import { Power } from "lucide-react";
import { usePrompt } from "@/context/PromptContext";


const ProfileDropDown = ({ onClose }) => {
    const { isLoadingUser, user, LOGOUT_USER } = useUser();
    const { isLoading } = usePrompt()
    const PageRef = useRef();
    const handleClickOutside = (e) => {
        if (!PageRef.current?.contains(e.target)) {
            onClose()
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <motion.div
            initial={{
                opacity: 0,
                scale: 0,
            }}
            exit={{
                opacity: 0,
                scale: 0,
            }}
            animate={{
                opacity: 1,
                scale: 1,
                transformOrigin: "top right",
                transition: {
                    ease: "easeInOut"
                }

            }}
            style={{
                filter: `drop-shadow(0 0 8px var(--filter-color))`
            }}
            ref={PageRef}
            className="bg-background absolute md:w-[220] top-[110%] ltr:right-0 rtl:left-0 p-2 rounded-lg flex flex-col justify-start items-start gap-2"
        >
            <div className="flex w-full gap-2">
                {
                    isLoadingUser
                        ? <div className="loader2 w-[51] min-w-[51] h-[51]"></div>
                        : <div className="border-2 border-chart-5  p-[1.5px] rounded-full">
                            <img src={user?.photoURL} className="w-[50] min-w-[50] h-[50]  object-cover rounded-full" alt="" />
                        </div>
                }
                <div className="w-full">
                    <h1 className="font-bold max-w-[70%]  truncate tracking-tighter  text-nowrap">{user?.displayName}</h1>
                    <h1 className="font-medium  opacity-70 max-w-[70%] truncate tracking-tighter text-sm text-nowrap">{user?.email}</h1>
                </div>
            </div>
            <Links notToShow={["/", "Feedback"]} className={"!flex-col !justify-start  mt-2 px-3 !gap-2 !items-start"} />
            <button
                disabled={isLoading}
                onClick={() => {
                    LOGOUT_USER();
                    onClose()
                }}
                className="w-full p-2 hover:bg-sidebar cursor-pointer opacity-70 hover:opacity-100 px-4 flex justify-between items-center mt-3 font-medium tracking-tight border-t border-chart-5">
                log out
                <Power className="w-5 h-5" />
            </button>
        </motion.div>
    )
}



const UserStatus = () => {
    const { isLoadingUser, user, handleUserOthing } = useUser();
    const [ProfileDropDownOpen, setProfileDropDownOpen] = useState(false)
    return (
        <div className="flex flex-col items-center justify-center relative">
            {
                user
                    ? <div onClick={() => setProfileDropDownOpen(true)} className="w-[35] h-[35]"><img className="w-full h-full rounded-full object-cover" src={user?.photoURL} alt="" /></div>
                    : <div className="w-[35] h-[35]">
                        {
                            isLoadingUser
                                ? <div className="loader2 w-full h-full"></div>
                                : <div onClick={() => handleUserOthing(false)} className="w-full h-full rounded-full bg-gradient-to-r from-chart-1 to-blue-500 "></div>
                        }
                    </div>

            }

            <AnimatePresence>
                {
                    ProfileDropDownOpen &&
                    <ProfileDropDown onClose={() => setProfileDropDownOpen(false)} />
                }
            </AnimatePresence>

        </div>
    )
}

export default UserStatus
