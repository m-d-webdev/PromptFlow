"use client";
import { GET_USERDATA, GoogleOneTap, loginWithGoogle, LOGOUT } from "@/lib/auth";
import { createContext, useContext, useEffect, useRef, useState } from "react"
const UserContextPr = createContext();



export const UserContext = ({ children }) => {
    const [user, setuser] = useState(null)
    const [isLoadingUser, setisLoadingUser] = useState(false)
    const [SignalNeedTOLogin, setSignalNeedTOLogin] = useState(true)

    const resolverRef = useRef(null);
    const rejecterRef = useRef(null);

    const handleUserOthing = async (oneT = true) => {
        setisLoadingUser(true);
        let ok = "none";
        if (oneT) {
            await GET_USERDATA()
                .then(res => {
                    setisLoadingUser(false)
                    setuser(res);
                    ok = true;
                })
                .catch(async er => {
                    await GoogleOneTap()
                        .then(res1 => {
                            setisLoadingUser(false)
                            setuser(res1)
                            ok = true;
                        })
                        .catch(err => {
                            setisLoadingUser(false)
                            ok = false;
                        })
                })
        } else {
            await GoogleOneTap()
                .then(res1 => {
                    setisLoadingUser(false)
                    setuser(res1)
                    ok = true;
                })
                .catch(async err => {
                    await loginWithGoogle()
                        .then(res => {
                            setisLoadingUser(false)
                            setuser(res)
                            ok = true;
                        })
                        .catch(async er => {
                            setisLoadingUser(false)
                            ok = false;

                        })
                })

        };

        return ok
    };
    const LOGOUT_USER = () => {
        setisLoadingUser(true)
        LOGOUT()
            .then(res => {
                setisLoadingUser(false)
                setuser(null)
            })
            .catch(async er => {
                setisLoadingUser(false)
            })
    }

    const NeedsLogin = async ({ fun = () => { } }) => {

        if (user != null && user.email) {
            fun();
        }

        else {
            let isOk = await handleUserOthing(false);

            if (isOk) {
                fun();
            } else {
                let isAccept = await WaitingForUserAccept();
                if (isAccept) {
                    fun()
                }
            }

        }
    }

    // -------------

    const cleanup = () => {
        resolverRef.current = null;
        rejecterRef.current = null;
    };

    const setuserAcceptLoggin = async (isOk) => {
        if (isOk) {
            let isOk3 = await handleUserOthing(false);
            if (isOk3) {
                setSignalNeedTOLogin(false);
                if (resolverRef.current) {
                    resolverRef.current(true);
                    cleanup();
                }
            } else {
                setSignalNeedTOLogin(false);
                if (rejecterRef.current) {
                    rejecterRef.current(false);
                    cleanup();
                }
            }

        } else {
            if (rejecterRef.current) {
                rejecterRef.current(false);
                cleanup();
            }
        }
    }
    const WaitingForUserAccept = () => {
        return new Promise(
            async (resolve, reject) => {
                resolverRef.current = resolve;
                rejecterRef.current = reject;
                setSignalNeedTOLogin(true)
            }
        );
    };


    useEffect(() => {
        handleUserOthing()
    }, []);
    return (
        <UserContextPr.Provider value={{ user, isLoadingUser, handleUserOthing, LOGOUT_USER, NeedsLogin, SignalNeedTOLogin, setSignalNeedTOLogin, setuserAcceptLoggin }}>
            {children}
        </UserContextPr.Provider>
    )
};


export const useUser = () => {
    const { user, isLoadingUser, handleUserOthing, LOGOUT_USER, NeedsLogin, SignalNeedTOLogin, setSignalNeedTOLogin, setuserAcceptLoggin } = useContext(UserContextPr);

    return { user, isLoadingUser, handleUserOthing, LOGOUT_USER, NeedsLogin, SignalNeedTOLogin, setSignalNeedTOLogin, setuserAcceptLoggin };
}