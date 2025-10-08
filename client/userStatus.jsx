"use client";

import { useUser } from "@/context/UserContext";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion"
import Links from "./components/Links";
import { Power } from "lucide-react";
import { usePrompt } from "@/context/PromptContext";
import Theme from "./components/Theme";


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
                scale: .6,
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
                    duration: .2,
                    ease: "easeInOut"
                }

            }}
            style={{
                filter: `drop-shadow(0 0 8px var(--filter-color))`
            }}
            ref={PageRef}
            className="bg-background absolute w-[250] top-[110%] ltr:right-0 rtl:left-0 p-2 rounded-lg flex flex-col justify-start items-start gap-2"
        >
            <div className="flex w-full gap-2">
                {
                    isLoadingUser
                        ? <div className="loader2 w-[41] min-w-[41] h-[51]"></div>
                        : <div className="border-2 border-chart-5  p-[1.5px] rounded-full">
                            <img src={user?.photoURL} className="w-[40] min-w-[40] h-[40]  object-top object-cover rounded-full" alt="" />
                        </div>
                }
                <div className="w-full">
                    <h1 className="font-bold max-w-[90%]  truncate tracking-tighter  text-nowrap">{user?.displayName}</h1>
                    <h1 className="font-medium  opacity-70 max-w-[90%] truncate tracking-tighter text-sm text-nowrap">{user?.email}</h1>
                </div>
            </div>
            <Links withIcon={true} notToShow={["/", "Feedback","About"]} className={"!flex-col !justify-start  mt-4 px-2 !gap-4 !items-start"} />
            <Theme />
            <button
                disabled={isLoading}
                onClick={() => {
                    LOGOUT_USER();
                    onClose()
                }}
                className="w-full p-2 text-sm hover:bg-sidebar text-destructive cursor-pointer opacity-50 duration-200 hover:opacity-100 px-4 flex justify-between items-center  font-medium tracking-tight border border-destructive/25 rounded-md">
                log out
                <Power className="w-4 h-4" />
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
