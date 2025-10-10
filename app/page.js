import GeneratedPrompts from "@/client/GeneratedPrompts";
import GenerationPart from "@/client/GenerationPart";
import HowToUse from "@/client/HowToUse";
import MaingPart from "@/client/MaingPart";

export const metadata = {
  title: "Prompt Flow — Generate Creative AI Prompts Easily",
  description:
    "Prompt Flow helps developers, writers, and creators build better AI prompts. Create, organize, and share prompts effortlessly with a simple and modern interface.",
  keywords: [
    "AI prompts",
    "prompt generator",
    "AI writing",
    "prompt builder",
    "creative prompts",
    "chatgpt prompts",
    "prompt flow",
  ],
  authors: [{ name: "Mustapha Iderkaoui", url: "https://promt-flow.space" }],
  openGraph: {
    title: "Prompt Flow — Generate Creative AI Prompts Easily",
    description:
      "Build better prompts for ChatGPT and other AI tools. Save your ideas, test them instantly, and share them with the world.",
    url: "https://promt-flow.space",
    siteName: "Prompt Flow",
    images: [
      {
        url: "https://promt-flow.space/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prompt Flow Website Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prompt Flow — Generate Creative AI Prompts Easily",
    description:
      "A simple tool to craft and share AI prompts that actually work. Built for creators and developers.",
    images: ["https://promt-flow.space/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function Home() {
  return (
    <div className="bg-sidebar flex flex-col items-center">
      <MaingPart />
      <GenerationPart />
      <GeneratedPrompts />
      <section class="py-12 tracking-tight mt-40 px-6 md:px-12 lg:px-20">
        <div class="max-w-4xl mx-auto text-accent-foreground">

          <h2 class="text-3xl font-semibold tracking-tighter mb-6">
            - What is an AI Prompt Generator?
          </h2>

          <p class="mb-6 leading-relaxed">
            An <span class="font-semibold">AI prompt generator</span> is a tool that helps users create clear, detailed, and effective instructions (known as prompts) for artificial intelligence systems.
            Since AI models respond based on how you phrase your request, a well-structured prompt can dramatically improve the quality of the results.
            Instead of spending hours testing different wordings, a prompt generator guides you with structured suggestions, styles, and keywords to get the best outcomes.
          </p>

          <h3 class="text-2xl font-semibold mb-4 tracking-tighter">- Why Use an AI Prompt Generator?</h3>
          <p class="mb-6 leading-relaxed">
            Whether you are writing content, generating images, designing marketing campaigns, or coding, prompt generators save you time and unlock new levels of creativity.
            They bridge the gap between your ideas and the AI’s capabilities, ensuring your instructions are both clear and powerful.
          </p>

          <h3 class="text-2xl font-semibold mb-4 tracking-tighter">- Benefits of Using an AI Prompt Generator</h3>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <li class="bg-background shadow-md rounded-2xl p-6 hover:shadow-lg transition">
              <h4 class="font-semibold text-lg mb-2">⏳ Save Time</h4>
              <p class="text-gray-600">Quickly generate high-quality prompts without wasting hours on trial and error.</p>
            </li>
            <li class="bg-background shadow-md rounded-2xl p-6 hover:shadow-lg transition">
              <h4 class="font-semibold text-lg mb-2">✨ Better Results</h4>
              <p class="text-gray-600">Well-crafted prompts lead to sharper, more relevant, and more creative AI outputs.</p>
            </li>
            <li class="bg-background shadow-md rounded-2xl p-6 hover:shadow-lg transition">
              <h4 class="font-semibold text-lg mb-2">🎨 Unlock Creativity</h4>
              <p class="text-gray-600">Experiment with different tones, styles, and formats you might not think of yourself.</p>
            </li>
            <li class="bg-background shadow-md rounded-2xl p-6 hover:shadow-lg transition">
              <h4 class="font-semibold text-lg mb-2">🌍 Accessible for Everyone</h4>
              <p class="text-gray-600">From beginners to professionals, anyone can benefit from structured AI guidance.</p>
            </li>
          </ul>

          <p class="text-lg leading-relaxed">
            AI is only as powerful as the instructions it receives.
            By using a prompt generator, you can make AI your most valuable assistant—boosting productivity, enhancing creativity, and helping you achieve better results in less time.
          </p>

        </div>
      </section>
      <HowToUse />

    </div >


  );
}
