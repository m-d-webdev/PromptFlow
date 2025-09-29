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
                                    duration:.2
                                }
                            }}
                            className="bg-background   rounded-md w-[400] "
                        >
                            <div className="w-full p-2 px-4 justify-end  flex">
                                <button onClick={() => {
                                    setuserAcceptLoggin(false)
                                    setSignalNeedTOLogin(false)
                                }
                                }
                                    className="opacity-70 cursor-pointer"><X className="w-4 h-4" /></button>
                            </div>
                            <div className="flex  px-4 gap-3 items-start">
                                <div className="p-2  mt-1 bg-destructive/20 rounded-full border border-destructive/60">
                                    <OctagonAlert className="text-destructive " />
                                </div>
                                <h1 className="font-semibold  text-destructive tracking-tight text-lg">Login Required</h1>
                            </div>
                            <p className=" mt-3  px-4 px-1 font-medium tracking-tight">You need to be logged in to perform this action. Please log in to continue.</p>
                            <Button onClick={() => setuserAcceptLoggin(true)} className={"w-full tracking-tight mt-6 !py-6 gap-7 font-semibold text-base"} variant={"outline"} >
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
