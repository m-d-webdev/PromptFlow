"use client";

import { BookImage, Crown, FolderOpen } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = ({ className, notToShow = [], withIcon = false }) => {
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
            <Link
                className={` ${pathN == "/Inspiration" ? "text-chart-1" : ""} flex gap-2 items-center text-accent-foreground text-sm hover:text-chart-1 tracking-tight opacity-70 hover:opacity-100 duration-100 hover:font-medium hover_underline`}
                href={"/Inspiration"}>
                {
                    withIcon &&
                    <BookImage className="w-5 h-5 " />
                }
                Inspiration
            </Link>
            <Link className={` ${pathN == "/Saved" ? "text-chart-1" : ""} flex gap-2 items-center text-accent-foreground text-sm hover:text-chart-1 tracking-tight opacity-70 hover:opacity-100 duration-100 hover:font-medium hover_underline`}
                href={"/Saved"}>
                {
                    withIcon &&
                    <FolderOpen className="w-5 h-5 " />
                }

                Saved

            </Link>
            {
                !notToShow.includes("Feedback") &&
                <Link className={` ${pathN == "/Feedback" ? "text-chart-1" : ""}  text-accent-foreground text-sm hover:text-chart-1 tracking-tight opacity-70 hover:opacity-100 duration-100 hover:font-medium hover_underline`} href={"/Feedback"}>Feedback</Link>
            }
        </div>
    )
}

export default Links
