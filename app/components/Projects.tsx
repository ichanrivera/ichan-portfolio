export default function ProjectsSection() {
    const projects = [
        {
            title: 'Coca-Cola Global Marketing Platform',
            company: 'Hogarth / Subvrsive',
            description:
                'Frontend platform powering global Coca-Cola marketing campaigns reaching millions of users worldwide.',
            highlights: [
                'Built mobile-first React + TypeScript interfaces for global audiences',
                'Implemented multilingual support across 4 languages',
                'Developed immersive UI interactions and animations',
                'Designed scalable design system (tokens, typography, layout)',
            ],
            stack: ['React', 'TypeScript', 'Next.js', 'Three.js'],
            type: 'Enterprise Campaign',
        },
        {
            title: 'Enterprise SaaS Logistics Platform Migration',
            company: 'Smudge (NZ)',
            description:
                'Modernized and scaled a large enterprise SaaS platform for logistics and operations management.',
            highlights: [
                'Migrated legacy React app to Next.js (SSR + SSG)',
                'Refactored large-scale codebase for scalability',
                'Implemented Redux + Zustand state architecture',
                'Established CI/CD workflows using Azure DevOps',
            ],
            stack: ['Next.js', 'React', 'Redux', 'Zustand', 'Azure DevOps'],
            type: 'SaaS Platform',
        },
        {
            title: 'Fintech Platform (GCash Ecosystem)',
            company: 'Stratpoint Inc.',
            description:
                'Frontend development for fintech systems used across Philippine digital financial services.',
            highlights: [
                'Built React-based fintech UI systems',
                'Developed GCash mini-program features',
                'Led frontend team of 4 engineers',
                'Refactored legacy UI into modular architecture',
            ],
            stack: ['React', 'TypeScript', 'Node.js'],
            type: 'Fintech System',
        },
        {
            title: 'Analytics Dashboard Platform',
            company: 'Yardstick Analytics',
            description:
                'Modernized enterprise analytics dashboards with integrated data visualization systems.',
            highlights: [
                'Built React + Redux analytics UI',
                'Integrated Power BI dashboards and reporting tools',
                'Connected MongoDB and Auth0 authentication systems',
                'Managed cloud assets via AWS S3 and Heroku',
            ],
            stack: ['React', 'Redux', 'MongoDB', 'AWS S3'],
            type: 'Analytics Platform',
        },
        {
            title: 'UI Engineering & Experimental Interfaces',
            company: 'Personal / R&D',
            description:
                'Experimental frontend systems focused on interaction design, animations, and immersive UX.',
            highlights: [
                'Built animated UI systems and component libraries',
                'Developed card carousel interaction system',
                'Created gyroscope-based mobile experiences',
                'Focused on performance and motion design',
            ],
            stack: ['React', 'Zustand', 'CSS Animations'],
            type: 'UI Systems',
        },
    ]

    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-black px-6 py-28 text-white"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-white/5 blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl">
                {/* HEADER */}
                <div className="mb-16 max-w-3xl">
                    <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
                        Projects
                    </p>

                    <h2 className="text-4xl font-bold md:text-6xl">
                        Work I’ve shipped,
                        <span className="block text-neutral-500">
                            scaled, and engineered.
                        </span>
                    </h2>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.08] ${index === 0 ? 'xl:col-span-2' : ''
                                }`}
                        >
                            {/* Glow */}
                            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-white/5" />

                            <div className="relative z-10">
                                {/* HEADER */}
                                <div className="mb-4 flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">
                                            {project.title}
                                        </h3>

                                        <p className="mt-1 text-sm text-neutral-400">
                                            {project.company}
                                        </p>
                                    </div>

                                    <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-neutral-400">
                                        {project.type}
                                    </span>
                                </div>

                                {/* DESCRIPTION */}
                                <p className="mb-6 text-sm leading-relaxed text-neutral-400">
                                    {project.description}
                                </p>

                                {/* HIGHLIGHTS */}
                                <div className="space-y-3">
                                    {project.highlights.map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-start gap-3 text-sm text-neutral-300"
                                        >
                                            <div className="mt-2 h-1.5 w-1.5 rounded-full bg-white/40" />
                                            <p>{item}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* STACK */}
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {project.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-neutral-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* FOOTER */}
                <div className="mt-20 text-sm text-neutral-500">
                    Projects selected from enterprise platforms, global campaigns,
                    fintech systems, and UI engineering experiments.
                </div>
            </div>
        </section>
    )
}