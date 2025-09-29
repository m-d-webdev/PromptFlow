"use client"
import { Monitor, Moon, Sun } from "lucide-react";
import { useState } from "react";

const Theme = () => {
    const [theme, setTheme] = useState(localStorage?.getItem("theme"))
    const handleChangeTheme = t => {
        setTheme(t);
        localStorage?.setItem("theme", t);
        if (t == "auto") {
            const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light';

            document.body.classList.remove(defaultTheme == "light" ? "dark" : "light")
            document.body.classList.add(defaultTheme);
            return
        }

        document.body.classList.remove(t == "light" ? "dark" : "light")
        document.body.classList.add(t);
        return
    }
    return (
        <div className="flex justify-end mt-3 items-center gap-2 w-full">
            <div className="gap-3  justify-between flex items-center bg-sidebar border border-foreground/15 rounded-4xl p-[1px] ">
                <button onClick={() => handleChangeTheme("light")} className={`${theme == "light" ? "bg-background border border-foreground/20" : "opacity-60"} rounded-full p-[4px]  flex items-center justify-center`}><Sun className="w-5 h-5" /></button>
                <button onClick={() => handleChangeTheme("dark")} className={`${theme == "dark" ? "bg-background border border-foreground/20" : "opacity-60"} rounded-full p-[4px]  flex items-center justify-center`}><Moon className="w-5 h-5" /></button>
                <button onClick={() => handleChangeTheme("auto")} className={`${theme == "auto" ? "bg-background border border-foreground/20" : "opacity-60"} rounded-full p-[4px]  flex items-center justify-center`}><Monitor className="w-5 h-5" /></button>
            </div>
        </div>
    )
}

export default Theme
