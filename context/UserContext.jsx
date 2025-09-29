"use client";
import { GET_USERDATA, GoogleOneTap } from "@/lib/auth";
import { createContext, useContext, useEffect, useState } from "react"
const UserContextPr = createContext();


export const UserContext = ({ children }) => {
    const [user, setuser] = useState(null)
    const [isLoadingUser, setisLoadingUser] = useState(false)
    const handleUserOthing = async () => {
        setisLoadingUser(true)
        GET_USERDATA()
            .then(res => {
                setisLoadingUser(false)
                setuser(res)
            })
            .catch(async er => {
                GoogleOneTap()
                    .then(res1 => {
                        setisLoadingUser(false)
                        setuser(res1)
                    })
                    .catch(err => {
                        console.log(err);
                        setisLoadingUser(false)
                    })
            })
    }
    useEffect(() => {
        handleUserOthing()
    }, [])
    return (
        <UserContextPr.Provider value={{ user, isLoadingUser }}>
            {children}
        </UserContextPr.Provider>
    )
};


export const useUser = () => {
    const { user, isLoadingUser } = useContext(UserContextPr);

    return { user, isLoadingUser };
}