"use client"

import Link from "next/link"


const Logo = () => {
    return (
        <>

            <Link href={"/"} className="flex  items-center justify-center ">
                <img src="/logo-light.png" className="w-7 min-w-7 dark:hidden" alt="" />
                <img src="/logo-light.png" className="w-7 min-w-7 hidden dark:visible" alt="" />
                <h1 className="font-semibold  text-lg tracking-tighter">PromptFlow</h1>
            </Link>
        </>
    )
}

export default Logo
