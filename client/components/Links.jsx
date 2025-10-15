"use client";

import { BookImage, Crown, FolderOpen } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from 'react'
import { Sparkles } from "./icons";


const Links = ({ className, notToShow = ["Saved"], withIcon = false }) => {
    const pathN = usePathname()
    return (
        <div className={` ${className} flex flex-col justify-start items-start md:flex-row md:items-center gap-4   `}>
            {
                !notToShow.includes("/") &&
                <Link className={` ${pathN == "/" ? "text-chart-1" : ""} text-accent-foreground text-sm hover:text-chart-1 tracking-tight opacity-70 hover:opacity-100 duration-100 hover:font-medium hover_underline`} href={"/"}>

                    Home
                </Link>
            }
            {
                !notToShow.includes("Pricing") &&
                <Link className={` ${pathN == "/Pricing" ? "text-chart-1" : ""} flex gap-2 items-center text-accent-foreground text-sm hover:text-chart-1 tracking-tight opacity-70 hover:opacity-100 duration-100 hover:font-medium hover_underline`} href={"/Pricing"}>
                    {
                        withIcon &&
                        <Crown className="w-5 h-5 " />
                    }
                    Pricing
                </Link>
            }
            {
                !notToShow.includes("Chat") &&
                <Link className={` ${pathN == "/Chat" ? "text-chart-1" : ""} group md:ml-1 md:mr-1 flex gap-1 items-center text-accent-foreground text-sm hover:text-chart-1 tracking-tight opacity-70 hover:opacity-100 duration-100 hover:font-medium hover_underline`} href={"/Chat"}>
                    <span>

                        Chat
                    </span>
                <Sparkles className={`w-5 h-5 duration-200 group-hover:stroke-chart-1 ${pathN == "/Chat" ? "stroke-chart-1" : ""}`} />
                </Link>
            }
            <Link
                className={` ${pathN == "/Inspiration" ? "text-chart-1" : ""} flex gap-2 items-center text-accent-foreground text-sm hover:text-chart-1 tracking-tight opacity-70 hover:opacity-100 duration-100 hover:font-medium hover_underline`}
                href={"/Inspiration"}>
                {
                    withIcon &&
                    <BookImage className="w-5 h-5 " />
                }
                Inspiration
            </Link>
            {
                !notToShow.includes("Saved") && <Link className={` ${pathN == "/Saved" ? "text-chart-1" : ""} flex gap-2 items-center text-accent-foreground text-sm hover:text-chart-1 tracking-tight opacity-70 hover:opacity-100 duration-100 hover:font-medium hover_underline`}
                    href={"/Saved"}>
                    {
                        withIcon &&
                        <FolderOpen className="w-5 h-5 " />
                    }

                    Saved

                </Link>
            }
            {
                !notToShow.includes("Feedback") &&
                <Link className={` ${pathN == "/Feedback" ? "text-chart-1" : ""}  text-accent-foreground text-sm hover:text-chart-1 tracking-tight opacity-70 hover:opacity-100 duration-100 hover:font-medium hover_underline`} href={"/Feedback"}>Feedback</Link>
            }
            {
                !notToShow.includes("About") &&
                <Link className={` ${pathN == "/About" ? "text-chart-1" : ""}  text-accent-foreground text-sm hover:text-chart-1 tracking-tight opacity-70 hover:opacity-100 duration-100 hover:font-medium hover_underline`} href={"/About"}>About</Link>
            }
        </div>
    )
}

export default Links
