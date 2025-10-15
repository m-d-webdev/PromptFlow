"use client"
import { UseAiChat } from "@/context/AiChatContext";
import MainAiInput from "./MainAiInput";
import ListChat from "./ListChat";
import { useUser } from "@/context/UserContext";
import { getGreeting } from "@/lib/utils";

const MainPartChat = () => {
    const { messages } = UseAiChat()
    const { user } = useUser()
    return (
        <div className="w-full m pb-2 h-lvh  flex flex-col items-center justify-center">
            {
                messages.length == 0
                    ?
                    <h1 className="text-3xl mb-5 font-medium tracking-[-1.1] max-w-[320] text-center">
                        {
                            user
                                ? `${getGreeting()}, ${user.displayName?.substring(0, user.displayName?.indexOf(" "))}`
                                :
                                <>
                                    Explore Ideas With Your Smart <span className="text-chart-1">AI Companion</span>
                                </>
                        }
                    </h1>
                    : <ListChat />
            }
            <MainAiInput />
        </div>
    )
}

export default MainPartChat
