const SuggesstionAi = () => {
    return (

        <div className="flex gap-3 p-2 min-h-[90vh]  justify-center mt-14 w-full flex-col">
            <h1 className="text-2xl font-medium tracking-tighter">Try  prompt in :</h1>
            <div className=" ml-5 md:ml-1 mt-2">
                <h2 className="text-base opacity-60 font-medium tracking-tight mb-1">AI for Images</h2>
                <div className="flex gap-1 flex-wrap items-center">
                    <a target="_blank" className="flex gap-3 items-center p2 bg-background rounded-md border border-foreground/10 opacity-70 hover:opacity-100  duration-200 font-semibold  tracking-tighter text-base  p-3 px-4 md:min-w-[150] " href="https://midjourney.com">
                        <img className="w-[30] h-[30] object-cover" src="/logos/Midjourney Logo Vector.jpeg" alt="" />
                        MidJourney
                    </a>
                    <a target="_blank" className="flex gap-3 items-center p2 bg-background rounded-md border border-foreground/10 opacity-70 hover:opacity-100  duration-200 font-semibold  tracking-tighter text-base  p-3 px-4 md:min-w-[150] " href="https://openai.com/dall-e">
                        <img className="w-[30] h-[30] object-cover" src="/logos/CHATGPT PNG.jpeg" alt="" />
                        DALL·E
                    </a>
                    <a target="_blank" className="flex gap-3 items-center p2 bg-background rounded-md border border-foreground/10 opacity-70 hover:opacity-100  duration-200 font-semibold  tracking-tighter text-base  p-3 px-4 md:min-w-[150] " href="https://stability.ai">
                        <img className="w-[30] h-[30] object-cover" src="/logos/stability_ai_logo.jpeg" alt="" />
                        Stable Diffusion
                    </a>
                </div>

            </div>
            <div className=" ml-5 md:ml-1 mt-3">
                <h2 className="text-base opacity-60 font-medium tracking-tight mb-1">AI for Video</h2>
                <div className="flex gap-3 flex-wrap items-center">
                    <a target="_blank" className="flex gap-3 items-center p2 bg-background rounded-md border border-foreground/10 opacity-70 hover:opacity-100  duration-200 font-semibold  tracking-tighter text-base  p-3 px-4 md:min-w-[150] " href="https://runwayml.com">
                        <img className="w-[30] h-[30] object-cover" src="/logos/Runway Ai Black Symbol Logo PNG.jpeg" alt="" />
                        Runway ML
                    </a>
                    <a target="_blank" className="flex gap-3 items-center p2 bg-background rounded-md border border-foreground/10 opacity-70 hover:opacity-100  duration-200 font-semibold  tracking-tighter text-base  p-3 px-4 md:min-w-[150] " href="https://pika.art">
                        <img className="w-[30] h-[30] object-cover" src="/logos/Pikaa.jpg" alt="" />
                        Pika Labs
                    </a>
                </div>
            </div>
            <div className=" ml-5 md:ml-1 mt-3">

                <h2 className="text-base opacity-60 font-medium tracking-tight mb-1">AI for Music</h2>
                <div className="flex gap-3 flex-wrap items-center">
                    <a target="_blank" className="flex gap-3 items-center p2 bg-background rounded-md border border-foreground/10 opacity-70 hover:opacity-100  duration-200 font-semibold  tracking-tighter text-base  p-3 px-4 md:min-w-[150] " href="https://suno.ai">
                        <img className="w-[30] h-[30] object-cover" src="/logos/SUNO.jpg" alt="" />
                        Suno AI
                    </a>
                    <a target="_blank" className="flex gap-3 items-center p2 bg-background rounded-md border border-foreground/10 opacity-70 hover:opacity-100  duration-200 font-semibold  tracking-tighter text-base  p-3 px-4 md:min-w-[150] " href="https://udio.com">
                        <img className="w-[30] h-[30] object-cover" src="/logos/UDIO.jpg" alt="" />
                        Udio
                    </a>

                </div>
            </div>
            <div className=" ml-5 md:ml-1 mt-3">
                <h2 className="text-base opacity-60 font-medium tracking-tight mb-1">Large Language Models (LLMs)</h2>
                <div className="flex gap-3 flex-wrap items-center">
                    <a target="_blank" className="flex gap-3 items-center p2 bg-background rounded-md border border-foreground/10 opacity-70 hover:opacity-100  duration-200 font-semibold  tracking-tighter text-base  p-3 px-4 md:min-w-[150] " href="https://claude.ai">
                        <img className="w-[30] h-[30] object-cover" src="/logos/Claude Logo PNG Vector (SVG) Free Download.jpeg" alt="" />
                        Claude
                    </a>
                    <a target="_blank" className="flex gap-3 items-center p2 bg-background rounded-md border border-foreground/10 opacity-70 hover:opacity-100  duration-200 font-semibold  tracking-tighter text-base  p-3 px-4 md:min-w-[150] " href="https://chat.openai.com/">
                        <img className="w-[30] h-[30] object-cover" src="/logos/CHATGPT PNG.jpeg" alt="" />
                        ChatGPT
                    </a>
                    <a target="_blank" className="flex gap-3 items-center p2 bg-background rounded-md border border-foreground/10 opacity-70 hover:opacity-100  duration-200 font-semibold  tracking-tighter text-base  p-3 px-4 md:min-w-[150] " href="https://gemini.google.com">
                        <img className="w-[30] h-[30] object-cover" src="/logos/Free Gemini icon logo PNG and vector files (svg, eps) - Brandlogos_net.jpeg" alt="" />
                        Gemini
                    </a>
                    <a target="_blank" className="flex gap-3 items-center p2 bg-background rounded-md border border-foreground/10 opacity-70 hover:opacity-100  duration-200 font-semibold  tracking-tighter text-base  p-3 px-4 md:min-w-[150] " href="https://perplexity.ai">
                        <img className="w-[30] h-[30] object-cover" src="/logos/download.jpeg" alt="" />
                        Perplexity
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SuggesstionAi
