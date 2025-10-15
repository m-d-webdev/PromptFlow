import MainPartChat from "@/client/Chat/MainPartChat"
import { AiChatContext } from "@/context/AiChatContext"


const page = () => {
  return (
    <div className="bg-sidebar">
      <AiChatContext>
        <MainPartChat />
      </AiChatContext>
    </div>
  )
}

export default page
