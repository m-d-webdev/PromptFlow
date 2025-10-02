"use client";

const AskForHelp = () => {
    return (
        <section className="mt-10">
            <h1 className="text-lg font-medium tracking-tight opacity-80">Help Unlock Advanced AI Features</h1>
            <p className="tracking-tight mt-1 max-w-[800]"> We are working on adding powerful AI features like generating images, videos, and more.
                Right now, these features are not available. Your support helps us make them possible!</p>
            <div className="w-full flex justify-center items-center">

                <a

                    href="https://buymeacoffee.com/iderkaoui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 mt-5 text-black rounded-2xl font-semibold gap-4 flex items-center w-fit px-8 tracking-tighter "
                    style={{
                        filter: `drop-shadow(0 0 4px var(--filter-color))`,
                        backgroundColor: "#FFDD00",
                    }}
                >
                    <span>☕</span> Buy Me a Coffee
                </a>
            </div>
        </section>

    )
}

export default AskForHelp
