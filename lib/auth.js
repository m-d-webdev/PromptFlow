"use client";

import Cookies from "js-cookie";
import API from "./axios";
import { auth, provider } from "@/lib/firebase";
import { GoogleAuthProvider, signInWithCredential, signInWithPopup } from "firebase/auth";

export const LOGINUSER = (data) => {
    return new Promise(
        async (resolve, reject) => {
            try {

                const { photoURL, email, displayName } = data;

                const res = await API.post("/login", { photoURL, email, displayName })
                const { token, user } = res.data;
                Cookies.set("access_token", token);
                resolve(user);
            } catch (error) {
                reject({ message: error.message });
            }
        }
    );
};
export const GoogleOneTap = () => {
    return new Promise(
        async (resolve, reject) => {
            try {
                const initializeGoogleOneTap = () => {
                    if (window.google) {
                        window.google.accounts.id.initialize({
                            client_id: "1032378498245-rdlsnkb5skmuk018gp0mad9j5go64c59.apps.googleusercontent.com",
                            callback: handleCredentialResponse,
                            auto_select: false,

                        })

                        window.google.accounts.id.prompt((notification) => {
                            if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
                                console.log('One Tap not displayed:', notification.getNotDisplayedReason())
                                return reject("blocked");
                            }
                        })
                    }
                }

                const handleCredentialResponse = async (response) => {
                    try {
                        const credential = GoogleAuthProvider.credential(response.credential);
                        const userCredential = await signInWithCredential(auth, credential);
                        let user = await LOGINUSER(userCredential.user);
                        resolve(user);

                    } catch (error) {
                        console.error('One Tap login error:', error)
                        reject();
                    }
                }

                if (!window.google) {
                    const script = document.createElement('script')
                    script.src = 'https://accounts.google.com/gsi/client'
                    script.async = true
                    script.defer = true
                    script.onload = initializeGoogleOneTap
                    document.head.appendChild(script)
                } else {
                    initializeGoogleOneTap()
                }
            } catch (error) {
                reject({ message: error.message });
            }
        }
    );
};

export const loginWithGoogle = () => {
    return new Promise(
        async (resolve, reject) => {
            try {
                const result = await signInWithPopup(auth, provider);
                const user = await LOGINUSER(result.user);
                resolve(user);
            } catch (error) {
                reject({ message: error.message });
            }
        }
    );
};


export const GET_USERDATA = () => {
    return new Promise(
        async (resolve, reject) => {
            try {
                const res = await API.post("ValidateToken")
                const { user } = res.data
                resolve(user);
            } catch (error) {
                reject({ message: error.message });
            }
        }
    );
};

// ----------------
export const CHECK_REFRESHTOKEN = async () => {
    try {
        const res = await API.get("/refresh-token")
        const { token } = res.data;
        Cookies.set("access_token", token);
        return true
    } catch (error) {
        return false
    }
}
// -=

export const LOGOUT = async () => {
    try {

        await API.post("/logout")
        Cookies.remove("access_token");
        return true

    } catch (error) {
        return false
    }
}