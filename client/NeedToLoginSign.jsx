"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useUser } from "@/context/UserContext"
import Model from "./components/Model"
import { OctagonAlert, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Loader from "./components/Loader"

const NeedToLoginSign = () => {
    const { SignalNeedTOLogin, setSignalNeedTOLogin, isLoadingUser, setuserAcceptLoggin } = useUser()
    return (
        <>
            <AnimatePresence>

                {
                    SignalNeedTOLogin &&
                    <Model  >
                        <motion.div
                            initial={{ scale: .95, opacity: .4 }}
                            exit={{ scale: .95, opacity: 0 }}
                            animate={{
                                scale: 1, opacity: 1, transition: {
                                    ease: "easeOut",
                                    duration: .2
                                }
                            }}
                            className="bg-sidebar  overflow-hidden rounded-md w-[400] "
                        >
                            <div className="flex p-2 items-start justify-between ">

                                <div className="flex   gap-3 items-start">
                                    <div className="p-2  mt-1 bg-destructive/10 rounded-full border border-destructive/60">
                                        <OctagonAlert className="text-destructive " />
                                    </div>
                                    <h1 className="font-semibold   tracking-tight ">Login Required</h1>
                                </div>

                                <button onClick={() => {
                                    setuserAcceptLoggin(false)
                                    setSignalNeedTOLogin(false)
                                }
                                }
                                    className="opacity-70 cursor-pointer"><X className="w-4 h-4" /></button>
                            </div>
                            <p className=" mt-3  px-4  font-medium tracking-tight">You need to be logged in to perform this action. Please log in to continue.</p>
                            <Button onClick={() => setuserAcceptLoggin(true)} className={"w-full tracking-tight rounded-none !bg-background mt-6 !py-6 gap-7 font-semibold text-base"} variant={"outline"} >
                                {
                                    isLoadingUser
                                        ? <Loader className={"border-t-chart-1"} />
                                        : <img src={"/logos/Google.png"} className="w-5 h-5 object-cover" />
                                }
                                Continue with Google
                            </Button>
                        </motion.div>
                    </Model>
                }
            </AnimatePresence >
        </>
    )
}

export default NeedToLoginSign
