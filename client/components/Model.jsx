"use client";
import React, { useEffect, useRef } from 'react'
const Model = ({ children, closeOutside = true, onClose = () => { }, className, parentClassName }) => {
    const PageRef = useRef();
    const handleClickOutside = (e) => {
        if (!PageRef.current?.contains(e.target)) {
            if (closeOutside) onClose()
        }
    };

    useEffect(() => {
        document.body.classList.add("scrl_none")
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.body.classList.remove("scrl_none")
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div className={` ${parentClassName} fixed top-0 left-0 w-full h-full bg-foreground/30 flex justify-center p-2 items-center z-[9999]`}>
            <div className={`${className} max-h-full overflow-auto scrl_none`} ref={PageRef}>
                {children}
            </div>
        </div>

    )
}

export default Model
