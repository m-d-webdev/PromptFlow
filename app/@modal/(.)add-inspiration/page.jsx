import AddInspiration from "@/client/Insprations/AddInspiration"
import { InspirationsContext } from "@/context/InspirationsContext"

const page = () => {
    return (
        <div>
            <InspirationsContext>
                <AddInspiration />
            </InspirationsContext>
        </div>
    )
}

export default page
