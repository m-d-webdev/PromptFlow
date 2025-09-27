"use client";

import { Globe } from "lucide-react";
const Lang = "English"
const LangBtn = () => {
    return (
        <div className="flex items-center gap-1 md:px-4 mt-4 md:mt-0 opacity-70 hover:opacity-100">
            <Globe className="w-4 h-4 stroke-[1.5px]" />
            <h1 className="font-semibold text-sm tracking-tight">
                {Lang}
            </h1>
        </div>
    )
}

export default LangBtn
