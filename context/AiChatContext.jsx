"use client";
import Cookies from "js-cookie";
import { createContext, useContext, useState } from "react"
import { useUser } from "./UserContext";
const AiChatContextP = createContext();
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const AiChatContext = ({ children }) => {
    const [isLoading, setLoading] = useState(false);
    const [messages, setMessages] = useState([])
    const { user } = useUser()


    const sendMessage = async (input) => {
        if (!input.trim() || isLoading) return;
        setLoading(true)
        const userMessage = { role: 'user', content: input };
        const updatedMessages = [...messages, userMessage];

        setMessages(updatedMessages);

        // Add empty assistant message that will be filled with streaming content
        const assistantMessageIndex = updatedMessages.length;
        setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

        try {
            const response = await fetch(`${BACKEND_URL}/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Cookies.get("access_token")}`
                },
                body: JSON.stringify({ displayName: user.displayName, messages: updatedMessages.map(m => m.role == "assistant" ? { role: "assistant", content: m.content.substring(0, 400) } : m).slice(updatedMessages.length - 5, updatedMessages.length) }),
            });

            const reader = response.body.getReader();
            const decoder = new TextDecoder();

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                // Decode the chunk
                const chunk = decoder.decode(value);
                const lines = chunk.split('\n');

                for (const line of lines) {
                    if (line.startsWith('data: ')) {
                        const data = line.slice(6);

                        if (data === '[DONE]') {
                            setLoading(false)
                            break;
                        }

                        try {
                            const parsed = JSON.parse(data);
                            if (parsed.content) {
                                // Append content to the assistant message
                                setMessages(prev => {
                                    const newMessages = [...prev];
                                    newMessages[assistantMessageIndex] = {
                                        role: 'assistant',
                                        content: newMessages[assistantMessageIndex].content + parsed.content
                                    };
                                    return newMessages;
                                });
                            }
                        } catch (e) {
                            // Skip invalid JSON
                            setLoading(false)
                        }
                    }
                }
            }
        } catch (error) {
            setLoading(false)
            console.error('Error:', error);
        }
    };

    return (
        <AiChatContextP.Provider
            value={{
                isLoading,
                messages,
                sendMessage,
            }}
        >
            {children}
        </AiChatContextP.Provider>
    )
}

export const UseAiChat = () => {
    const {
        isLoading,
        sendMessage,
        messages,

    }
        = useContext(AiChatContextP);

    // ------------------------------------
    return {
        isLoading,
        sendMessage,
        messages,
    }


} 