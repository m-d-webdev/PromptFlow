"use client";

import API from "@/lib/axios";
import { useEffect, useState } from "react";
import PreLoadingelem from "../components/PreLoadingelem";
import { AlignEndHorizontal } from "lucide-react";
import { UseAiChat } from "@/context/AiChatContext";

const StartSuggestions = ({ onSetMessage }) => {
    const [isLoading, setisLoading] = useState(true)
    const [result, setresult] = useState([]);
    const GetSegg = async () => {
        setisLoading(true);
        const res = await API.get("/GetStartSuggestions");
        setresult(JSON.parse(res.data));
        setisLoading(false)
    };
    useEffect(() => {
        GetSegg();
        return () => {

            setisLoading(false)
            setresult([]);

        }
    }, [])
    return (
        <div>
            {
                isLoading
                    ?
                    <div className="flex justify-center items-center flex-wrap gap-5">
                        {
                            Array(3).fill().map((e, i) =>

                                <div
                                    key={i}
                                    style={{
                                        filter: `drop-shadow(0 0 1px var(--filter-color))`
                                    }}
                                    className="w-[220] p-2 h-[100] bg-background rounded-md">

                                    <PreLoadingelem
                                        className={"!w-[20] mb-6 !h-[20]"}
                                    />

                                    <PreLoadingelem
                                        className={"!w-[90%] !h-[12]"}
                                    />
                                    <PreLoadingelem
                                        className={"!w-[60%] mt-1 !h-[12]"}
                                    />
                                </div>
                            )
                        }
                    </div>
                    :
                    <>
                        <div className="flex justify-center items-start flex-wrap gap-5">
                            {
                                result.map((e, i) =>

                                    <div
                                        key={i}
                                        style={{
                                            filter: `drop-shadow(0 0 1px var(--filter-color))`
                                        }}
                                        onClick={() => onSetMessage(e)}
                                        className="w-[220] p-3 min-h-[100] bg-background rounded-md">
                                        <div className={`p-1 w-fit flex  justify-center items-center rounded-sm
                                            ${i == 0 ? "bg-[#ff09de]"
                                                : i == 1 ? "bg-[#ff2600]"
                                                    : "bg-[#5d00ff]"
                                            }
                                            `}>

                                            <AlignEndHorizontal className={`w-4 h-4  text-white `} />
                                        </div>
                                        <p className="text-sm mt-3 font-medium tracking-tight">
                                            {e}
                                        </p>
                                    </div>
                                )
                            }
                        </div>
                    </>
            }

        </div>
    )
}

export default StartSuggestions
