"use client";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { LOGINUSER } from "./auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBALVW7iflNsIFxJdL58BtdATs3oAgFUWY",
    authDomain: "promt-flow.firebaseapp.com",
    projectId: "promt-flow",
    storageBucket: "promt-flow.firebasestorage.app",
    messagingSenderId: "1032378498245",
    appId: "1:1032378498245:web:1d1788b0bc5ca3b906c4ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);

        // بيانات المستخدم
        const user = result.user;
        console.log("User info:", {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            uid: user.uid
        });

        return user;
    } catch (error) {
        console.error("Error during Google sign-in:", error);
    }
};

