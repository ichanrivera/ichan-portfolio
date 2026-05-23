import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiVuedotjs,
    SiRedux,
    SiTailwindcss,
    SiSass,
    SiMui,
    SiBootstrap,
    SiNodedotjs,
    SiGraphql,
    SiApollographql,
    SiHeroku,
    SiVercel,
    SiGit,
    SiGitlab,
    SiPostman,
    SiFigma,
    SiJira,
    SiNotion,
    SiGithubcopilot,
} from 'react-icons/si'

import { TbBrandEmber } from 'react-icons/tb'
import { FaConfluence } from 'react-icons/fa'
import { FiDatabase } from 'react-icons/fi'

import { FaAmazon } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

export default function TechStackSection() {
    const categoryIcons: Record<string, React.ReactNode> = {
        Frontend: <span className="text-cyan-300">●</span>,
        'State Management': <span className="text-purple-300">●</span>,
        'UI & Styling': <span className="text-pink-300">●</span>,
        'Backend & APIs': <span className="text-emerald-300">●</span>,
        'Cloud & DevOps': <span className="text-sky-300">●</span>,
        Tools: <span className="text-orange-300">●</span>,
    }

    const theme: Record<
        string,
        { glow: string }
    > = {
        Frontend: { glow: 'bg-cyan-400/20' },
        'State Management': { glow: 'bg-purple-400/20' },
        'UI & Styling': { glow: 'bg-pink-400/20' },
        'Backend & APIs': { glow: 'bg-emerald-400/20' },
        'Cloud & DevOps': { glow: 'bg-sky-400/20' },
        Tools: { glow: 'bg-orange-400/20' },
    }

    const stack = {
        Frontend: [
            'React',
            'Next.js',
            'TypeScript',
            'JavaScript',
            'Vue',
            'EmberJS',
        ],
        'State Management': ['Redux', 'Zustand'],
        'UI & Styling': ['Tailwind', 'SCSS', 'Material UI', 'Bootstrap'],
        'Backend & APIs': ['Node.js', 'GraphQL', 'Apollo'],
        'Cloud & DevOps': ['AWS S3', 'Heroku', 'Vercel', 'Azure DevOps'],
        Tools: [
            'Git',
            'GitLab',
            'Postman',
            'Figma',
            'JIRA',
            'Notion',
            'Confluence',
            'GitHub Copilot',
        ],
    }

    const techIcons: Record<string, React.ReactNode> = {
        React: <SiReact color="#61DAFB" />,
        'Next.js': <SiNextdotjs color="#ffffff" />,
        TypeScript: <SiTypescript color="#3178C6" />,
        JavaScript: <SiJavascript color="#F7DF1E" />,
        Vue: <SiVuedotjs color="#42B883" />,
        EmberJS: <TbBrandEmber color="#E04E39" />,

        Redux: <SiRedux color="#764ABC" />,
        Zustand: <FiDatabase color="#ffffff" />,

        Tailwind: <SiTailwindcss color="#38BDF8" />,
        SCSS: <SiSass color="#CC6699" />,
        'Material UI': <SiMui color="#007FFF" />,
        Bootstrap: <SiBootstrap color="#7952B3" />,

        'Node.js': <SiNodedotjs color="#339933" />,
        GraphQL: <SiGraphql color="#E10098" />,
        Apollo: <SiApollographql color="#311C87" />,

        'AWS S3': <FaAmazon color="#FF9900" />,
        Heroku: <SiHeroku color="#6762A6" />,
        Vercel: <SiVercel color="#ffffff" />,
        'Azure DevOps': <VscAzure color="#0078D7" />,

        Git: <SiGit color="#F05032" />,
        GitLab: <SiGitlab color="#FC6D26" />,
        Postman: <SiPostman color="#FF6C37" />,

        Figma: <SiFigma color="#F24E1E" />,
        JIRA: <SiJira color="#0052CC" />,
        Notion: <SiNotion color="#ffffff" />,
        Confluence: <FaConfluence color="#172B4D" />,

        'GitHub Copilot': <SiGithubcopilot color="#ffffff" />,
    }

    return (
        <section id="stack" className="relative overflow-hidden bg-black px-6 py-28 text-white">
            <div className="mx-auto max-w-7xl">
                {/* HEADER */}
                <div className="mb-16 max-w-3xl">
                    <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
                        Tech Stack
                    </p>

                    <h2 className="text-4xl font-bold md:text-6xl">
                        Building scalable,
                        <span className="block text-neutral-500">
                            production-ready applications.
                        </span>
                    </h2>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {Object.entries(stack).map(([category, items]) => {
                        const t = theme[category]

                        return (
                            <div
                                key={category}
                                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.08]"
                            >
                                {/* glow */}
                                <div
                                    className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${t.glow}`}
                                />

                                <div className="relative z-10">
                                    {/* CATEGORY HEADER */}
                                    <div className="mb-8 flex items-center gap-3">
                                        <div className="text-xl">
                                            {categoryIcons[category]}
                                        </div>

                                        <h3 className="text-xl font-semibold">
                                            {category}
                                        </h3>
                                    </div>

                                    {/* ITEMS */}
                                    <div className="flex flex-wrap gap-3">
                                        {items.map((item) => (
                                            <div
                                                key={item}
                                                className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-neutral-300 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
                                            >
                                                <span className="text-lg">
                                                    {techIcons[item]}
                                                </span>
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* FOOTER */}
                <div className="mt-20 text-sm text-neutral-500">
                    7+ years building scalable frontend systems across fintech,
                    logistics, analytics, and global platforms.
                </div>
            </div>
        </section>
    )
}