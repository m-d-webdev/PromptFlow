
const HowToUse = () => {

    return (
        <section id="how-to-use" className="w-full md:px-12 px-4 mb-20 tracking-tight max-w-[1000] mt-10">
            <h1 className="text-2xl font-semibold tracking-tighter ">- How to Use AI Prompt Generator</h1>
            <ul className="mt-4 flex flex-col gap-6 px-4 ">
                <li>
                    <h2 className="font-medium text-lg text-chart-3">1. Enter your idea or topic</h2>
                    <p className="">
                        Type a few words describing what you want to generate in the input box.
                    </p>
                </li>
                <li>
                    <h2 className="font-medium text-lg text-chart-3">
                        2. Click the “Generate” button
                    </h2>
                    <p className="">
                        Hit the button to create a new prompt or result.
                    </p>
                </li>
                <li>
                    <h2 className="font-medium text-lg text-chart-3">
                        3. View your generated prompts
                    </h2>
                    <p className="">
                        Scroll down to see the list of prompts you’ve generated so far.
                    </p>
                </li>
                <li>
                    <h2 className="font-medium text-lg text-chart-3">
                        4. Track your usage
                    </h2>
                    <p className="">
                        Keep an eye on the subtitle that shows your free generations, e.g., “2/10 generations used”.
                    </p>
                </li>
                <li>
                    <h2 className="font-medium text-lg text-chart-3">
                        5. Generate another

                    </h2>
                    <p className="">
                        Use the “Generate Another” button to create more prompts until you reach your free limit.
                    </p>
                </li>
            </ul>


        </section>
    )
}

export default HowToUse
