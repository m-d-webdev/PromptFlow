"use client";

import API from "@/lib/axios";
import { createContext, useContext, useEffect, useState } from "react"

const PContext = createContext()


export const GetResult = ({ description }) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                const Res = await API.post("/get-prompt", {
                    clientQuestion: description
                });
                console.log(Res);

                const data = Res.data?.reply
                resolve(data);
            } catch (error) {
                reject({ message: error.message });
            }
        }
    );

};

export const PromptContextProvider = ({ children }) => {
    const [value, setValue] = useState("");
    const [result, setresult] = useState("");
    const [howTouseCout, sethowTouseCout] = useState(0);
    const [isLoading, setisLoading] = useState(false);
    const [generatedPromts, setgeneratedPromts] = useState([]);
    const maxLength = 600;
    const minLength = 10;
    const restar = () => {
        setValue("")
        setresult("")
    }
    const SetAllowedValue = v => {
        setValue(pv => {
            if (pv.length <= maxLength) {
                return v.substring(0, maxLength)
            }
            else {
                return pv
            }
        })
    };

    const HandelGetResult = async () => {
        if (value.length < minLength || value.length > maxLength) return
        setisLoading(true);

        GetResult({ description: value })
            .then(res => {
                setresult(res);
                setisLoading(false);
                setgeneratedPromts(pv => [
                    ...pv,
                    {
                        id: pv.length + 1,
                        description: value,
                        prompt: res
                    }
                ])
            })
            .catch(err => {
                setisLoading(false);
            })
    }

    return (
        <PContext value={{ value, SetAllowedValue, maxLength, isLoading, result, HandelGetResult, minLength, result, generatedPromts, restar, howTouseCout, sethowTouseCout }}>
            {children}
        </PContext>
    )
}

export const usePrompt = () => {
    const { value, SetAllowedValue: setValue, maxLength, isLoading, result, HandelGetResult, minLength, generatedPromts, restar, howTouseCout, sethowTouseCout } = useContext(PContext)
    return {
        value,
        setValue,
        maxLength,
        isLoading,
        result,
        HandelGetResult,
        minLength,
        generatedPromts,
        restar,
        howTouseCout,
        sethowTouseCout
    }
}