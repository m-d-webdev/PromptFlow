"use client";

import { UseAiChat } from "@/context/AiChatContext";
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import remarkGfm from "remark-gfm";

const ListChat = () => {
  const { isLoading, messages } = UseAiChat();
  const [auScrollOn, setauScrollOn] = useState(false);
  const [isTakesLongToRespond, setisTakesLongToRespond] = useState(false);

  useEffect(() => {
    let t;
    if (isLoading) {
      t = setTimeout(() => {
        setisTakesLongToRespond(true)

      }, 6000)
    }
    else {
      setisTakesLongToRespond(false)

    }
    return () => {
      clearTimeout(t)
    }
  }, [isLoading]);


  const messagesRef = useRef()
  useEffect(() => {
    let t;
    // messagesRef.current?.scrollTo({
    //   top: messagesRef.current?.scrollHeight,
    //   left: 0,
    //   behavior: "smooth"
    // });
    return () => {
      clearTimeout(t)
    }
  }, [messages]);

  return (
    <motion.div
      initial={{
        height: 0,
        opacity: 0
      }}
      animate={{
        height: "100%",
        opacity: 1,
        transition: {
          duration: .5
        }
      }}
      onClick={e => setauScrollOn(false)}
      ref={messagesRef}
      className="w-full px-2 pb-60 scrl_none   flex flex-col justify-start items-start gap-4 max-w-[1000] max-h-full  overflow-auto pt-20"
    >

      {messages.map((msg, idx) => (
        <div key={idx} className={`${msg.role} prose max-w-full md:max-w-[80%]`}>
          <ReactMarkdown
            components={{
              code({ className, children }) {
                const match = /language-(\w+)/.exec(className || "");
                return match ? (
                  <SyntaxHighlighter language={match[1]}>
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className="bg-accent p-1 rounded">{children}</code>
                );
              },
            }}
            remarkPlugins={[remarkGfm]}
          >
            {msg.content}
          </ReactMarkdown>
        </div>
      ))}

      {
        isLoading &&
        <div className="flex items-center gap-3">
          <div className="spinner ml-2 "></div>
          {
            isTakesLongToRespond &&
            <p className="opacity-60 text-sm ">This may take a moment </p>
          }
        </div>

      }
    </motion.div>
  )
}

export default ListChat
