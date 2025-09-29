"use client";

import Link from "next/link";

const Links = ({ className, notToShow = [] }) => {

    return (
        <div className={`${className} flex flex-col justify-start items-start md:flex-row md:items-center gap-4   `}>
            {
                !notToShow.includes("/") &&
                <Link className=" text-accent-foreground text-sm hover:text-chart-1 tracking-tight opacity-70 hover:opacity-100 duration-100 hover:font-medium hover_underline" href={"/"}>Home</Link>
            }
            {
                !notToShow.includes("Pricing") &&
                <Link className=" text-accent-foreground text-sm hover:text-chart-1 tracking-tight opacity-70 hover:opacity-100 duration-100 hover:font-medium hover_underline" href={"/Pricing"}>Pricing</Link>
            }
            <Link className=" text-accent-foreground text-sm hover:text-chart-1 tracking-tight opacity-70 hover:opacity-100 duration-100 hover:font-medium hover_underline" href={"/Pricing"}>Inspiration</Link>
            <Link className=" text-accent-foreground text-sm hover:text-chart-1 tracking-tight opacity-70 hover:opacity-100 duration-100 hover:font-medium hover_underline" href={"/Saved"}>Saved</Link>
            {
                !notToShow.includes("Feedback") &&
                <Link className=" text-accent-foreground text-sm hover:text-chart-1 tracking-tight opacity-70 hover:opacity-100 duration-100 hover:font-medium hover_underline" href={"/Feedback"}>Feedback</Link>
            }
        </div>
    )
}

export default Links
