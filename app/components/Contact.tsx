import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { LuMail } from "react-icons/lu";

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-black px-6 py-28 text-white scroll-mt-24"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-white/5 blur-3xl" />
            </div>

            <div className="mx-auto max-w-4xl text-center">
                {/* Heading */}
                <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
                    Contact
                </p>

                <h2 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
                    Let’s build something
                    <span className="block text-neutral-500">
                        meaningful together.
                    </span>
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400">
                    I’m currently open to senior frontend opportunities, collaborations,
                    and product-driven engineering work.
                </p>

                {/* CTA BUTTONS */}
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

                    {/* Email */}
                    <a
                        href="mailto:ichan.rivera@gmail.com"
                        className="flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
                    >
                        <LuMail className="h-4 w-4 text-black" />
                        Email Me
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/christian-rivera-63545ab5/"
                        target="_blank"
                        className="flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 text-sm text-white transition hover:bg-white/10"
                    >
                        <FaLinkedin
                            size={16}
                            color="#0A66C2"
                            className="shrink-0"
                        />
                        LinkedIn
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/ichanrivera"
                        target="_blank"
                        className="flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 text-sm text-white transition hover:bg-white/10"
                    >
                        <SiGithub
                            size={16}
                            color="#ffffff"
                            className="shrink-0"
                        />
                        GitHub
                    </a>
                </div>

                {/* Divider */}
                <div className="my-16 h-px w-full bg-white/10" />

                {/* INFO GRID */}
                <div className="grid gap-6 text-sm text-neutral-400 md:grid-cols-3">
                    <div>
                        <p className="text-neutral-500">Email</p>
                        <p className="mt-1">ichan.rivera@gmail.com</p>
                    </div>

                    <div>
                        <p className="text-neutral-500">Location</p>
                        <p className="mt-1">Navotas City, Philippines</p>
                    </div>

                    <div>
                        <p className="text-neutral-500">Mobile</p>
                        <p className="mt-1">+63 915 098 4670</p>
                    </div>
                </div>

                {/* Footer */}
                <p className="mt-16 text-xs text-neutral-600">
                    Built with Next.js, TypeScript, and modern UI engineering practices.
                </p>
            </div>
        </section>
    );
}