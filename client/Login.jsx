"use client";

import { useEffect } from "react";




export function GoogleOneTap({ onSuccess, onError }) {

    useEffect(() => {
        const initializeGoogleOneTap = () => {
            if (window.google) {
                window.google.accounts.id.initialize({
                    client_id: "851318449169-6eq54usoebhoq3rmpsrti699goctqevt.apps.googleusercontent.com",
                    callback: handleCredentialResponse,
                    auto_select: false,
                    // cancel_on_tap_outside: true,
                })

                // Show the One Tap prompt
                window.google.accounts.id.prompt((notification) => {
                    if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
                        console.log('One Tap not displayed:', notification.getNotDisplayedReason())
                    }
                })
            }
        }

        const handleCredentialResponse = async (response) => {
            try {
                console.log({ response });
            } catch (error) {
                console.error('One Tap login error:', error)
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
    }, [onSuccess, onError])

    return null 
}

export default function Login() {
    return <GoogleOneTap />;
}
