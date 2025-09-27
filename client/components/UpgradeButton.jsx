"use client"

import { Button } from "@/components/ui/button"
import Crown from "../Lotties/Crown"


const UpgradeButton = () => {
    return (
        <Button className={"border-gold bg-transparent  !text-sm font-semibold px-2 rounded-full gap-1 text-yellow-500 tracking-tighter"} variant={"outline"} >
            <Crown />
            Unlock pro
        </Button>
    )
}

export default UpgradeButton
