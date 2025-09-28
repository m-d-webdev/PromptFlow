"use client";
import { GET_USERDATA } from "@/lib/auth";
import { createContext, useContext, useEffect } from "react"
const UserContextPr = createContext();


export const UserContext = ({ children }) => {
    useEffect(()=>{
        GET_USERDATA()
    },[])
    return (
        <UserContextPr>
            {children}
        </UserContextPr>
    )
};


export const useUser = () => {
    const { } = useContext(UserContextPr);

    return {};
}