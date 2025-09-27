"use client"
import Lottie from "react-lottie"
import Animation from "./Animations/Premium.json"
const Crown = ({ width = 35 }) => {
    return (
        <>
            <Lottie
                options={{
                    animationData: Animation,
                    autoplay: true,
                    rendererSettings: {
                        preserveAspectRatio: 'xMidYMid slice',
                    },
                }}
                width={width}
                height={width}
                isClickToPauseDisabled={true}
            />
        </>
    )
}

export default Crown
