"use client";

import API from "@/lib/axios";
import { createContext, useContext, useEffect, useState } from "react"

const PContext = createContext()


export const GetResult = ({ description, enhancingOptions }) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                const Res = await API.post("/get-prompt", {
                    clientQuestion: description
                    , enhancingOptions
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

    const [selected, setSelected] = useState({
        output: "",
        style: "",
        audience: "",
        platform: "",
        length: "",
        language: ""
    }); const [howTouseCout, sethowTouseCout] = useState(0);
    const [isLoading, setisLoading] = useState(false);
    const [generatedPromts, setgeneratedPromts] = useState([]);
    const maxLength = 600;
    const minLength = 10;
    const choosePrompt = (val, resul) => {
        setValue(val);
        setresult(resul)
    }
    const restar = () => {
        setValue("")
        setresult("")
        setSelected({
            output: "",
            style: "",
            audience: "",
            platform: "",
            length: "",
            language: ""
        })
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
        let finalSelects = {};
        Object.entries(selected).map(([key, val]) => {
            if (val != "") { finalSelects[key] = val }
        })
        console.log({ finalSelects });

        GetResult({ description: value, enhancingOptions: finalSelects })
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
        <PContext.Provider value={{ value, SetAllowedValue, maxLength, isLoading, result, HandelGetResult, minLength, result, generatedPromts, restar, howTouseCout, sethowTouseCout, selected, setSelected, choosePrompt }}>
            {children}
        </PContext.Provider>
    )
}

export const usePrompt = () => {
    const { value, SetAllowedValue: setValue, maxLength, isLoading, result, HandelGetResult, minLength, generatedPromts, restar, howTouseCout, sethowTouseCout, selected, setSelected, choosePrompt } = useContext(PContext)
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
        sethowTouseCout,
        selected,
        setSelected,
        choosePrompt
    }
}