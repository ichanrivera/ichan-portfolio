export default function AboutSection() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-black px-6 py-28 text-white"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-white/5 blur-3xl" />
            </div>

            <div className="mx-auto grid max-w-7xl gap-16 xl:grid-cols-2 xl:gap-24">
                {/* LEFT */}
                <div>
                    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-400">
                        About
                    </p>

                    <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                        Building experiences
                        <span className="block text-neutral-500">
                            where engineering meets interaction design.
                        </span>
                    </h2>
                </div>

                {/* RIGHT */}
                <div className="space-y-8">
                    <p className="text-lg leading-relaxed text-neutral-300">
                        I’m a Senior Front-End Developer with 7+ years of experience
                        building scalable web applications across fintech, logistics,
                        analytics, SaaS, and global marketing platforms.
                    </p>

                    <p className="text-lg leading-relaxed text-neutral-400">
                        My focus is creating frontend systems that are not only
                        performant and maintainable, but also intuitive and engaging
                        to use. I care deeply about architecture, developer
                        experience, accessibility, and polished interaction design.
                    </p>

                    <p className="text-lg leading-relaxed text-neutral-400">
                        Over the years, I’ve worked on enterprise SaaS platforms,
                        high-traffic marketing campaigns, analytics systems, and
                        immersive digital experiences used by global audiences.
                    </p>

                    <p className="text-lg leading-relaxed text-neutral-400">
                        I enjoy collaborating closely with designers, engineers, and
                        stakeholders to turn complex problems into thoughtful digital
                        products that feel fast, modern, and reliable.
                    </p>

                    {/* STATS */}
                    <div className="grid grid-cols-2 gap-4 pt-8 md:grid-cols-4">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                            <p className="text-3xl font-bold text-white">7+</p>
                            <p className="mt-2 text-sm text-neutral-400">
                                Years Experience
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                            <p className="text-3xl font-bold text-white">20+</p>
                            <p className="mt-2 text-sm text-neutral-400">
                                Projects Delivered
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                            <p className="text-3xl font-bold text-white">4</p>
                            <p className="mt-2 text-sm text-neutral-400">
                                Industries
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                            <p className="text-3xl font-bold text-white">Global</p>
                            <p className="mt-2 text-sm text-neutral-400">
                                Product Reach
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}