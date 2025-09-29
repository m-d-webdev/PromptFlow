"use client"

import { Button } from "@/components/ui/button"
import LangBtn from "./components/LangBtn"
import Links from "./components/Links"
import Logo from "./components/Logo"
import UpgradeButton from "./components/UpgradeButton"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import UserStatus from "./userStatus"

const MenuHeader = ({ onClose }) => {
    const PageRef = useRef();
    const handleClickOutside = (e) => {
        if (!PageRef.current?.contains(e.target)) {
            onClose();
        }
    };
    const pathName = usePathname();
    let [cout, setCount] = useState(0);
    useEffect(() => {
        cout == 0
            ? setCount(1)
            : onClose()
    }, [pathName])
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <motion.div
            initial={{
                scale: .4,
                opacity: .2
            }}
            exit={{
                scale: 0,
                opacity: 0
            }}
            animate={{
                scale: 1,
                opacity: 1,
                transformOrigin: "top right",
                transition: {
                    ease: "easeInOut",
                    duration: .2
                }
            }}


            ref={PageRef}


            style={{
                filter: `drop-shadow(0 0 4px var(--filter-color))`
            }}
            className=" w-[100vw] flex flex-col items-start justify-start  p-3 absolute top-0 ltr:left-0 rtl:right-0 bg-background rounded-md">
            <div className="w-full flex px-5 mb-6 items-end justify-end">
                <button onClick={onClose}>
                    <X />
                </button>
            </div>
            <Links />
            <LangBtn />
        </motion.div>
    )
}
const Header = () => {
    const [menuOpen, setmenuOpen] = useState(false)
    return (

        <div className="w-full z-50  fixed top-0 left-0 flex items-center justify-center">
            <div
                style={{
                    backdropFilter: "blur(100px)"
                }}
                className="p-1 hidden  gap-2 bg-background/40 w-full mt-3 md:flex relative itmes-center justify-between  px-4  rounded-sm border border-foreground/20  max-w-[900]">
                <Logo />
                <Links />
                <div className="flex gap-2 justify-center  items-center">

                    <UpgradeButton />
                    <UserStatus />
                    {/* <LangBtn /> */}
                </div>
            </div>

            <div
                style={{
                    backdropFilter: "blur(100px)"
                }}
                className="md:hidden bg-background/40 w-full p-2 flex justify-between items-center">
                <Logo />
                <div className=" flex items-center justify-center gap-2">
                    <UpgradeButton />
                    <UserStatus />
                    <Button onClick={() => setmenuOpen(true)} variant={"outline border-none"}>
                        <Menu />
                    </Button>

                    <AnimatePresence>

                        {menuOpen &&
                            <MenuHeader onClose={() => setmenuOpen(false)} />
                        }
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

export default Header
