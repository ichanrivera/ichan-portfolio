import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">

            {/* Background Glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-500/20 blur-3xl" />
            </div>

            <div className="mx-auto max-w-4xl text-center">

                {/* Small Intro */}
                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-purple-400">
                    Full Stack Developer
                </p>

                {/* Main Heading */}
                <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-7xl">
                    Building modern
                    <span className="block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                        web experiences
                    </span>
                </h1>

                {/* Description */}
                <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-400">
                    I create fast, responsive, and user-focused applications
                    using modern technologies like React, Next.js, and Node.js.
                </p>

                {/* Buttons */}
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">

                    <a
                        href="#projects"
                        className="rounded-full bg-white px-8 py-4 font-medium text-black transition hover:scale-105"
                    >
                        View Projects
                    </a>
                    <a
                        href="/ChristianRivera-Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/20 px-8 py-4 font-medium text-white transition hover:border-white hover:bg-white/10"
                    >
                        Download Resume
                    </a>
                    {/* <Link
                        href="/resume.pdf"
                        className="rounded-full border border-white/20 px-8 py-4 font-medium text-white transition hover:border-white hover:bg-white/10"
                    >
                        Download Resume
                    </Link> */}
                </div>
            </div>
        </section>
    );
}