export default function ExperienceSection() {
    const experiences = [
        {
            role: 'Senior Front-End Developer',
            company: 'Hogarth / Subvrsive',
            period: '2024 — 2025',
            location: 'Taguig City, Philippines',
            description:
                'Delivered immersive frontend platforms for global Coca-Cola marketing campaigns reaching millions of users worldwide.',
            highlights: [
                'Built mobile-first React + TypeScript interfaces supporting multilingual global audiences.',
                'Developed interactive animations and immersive UI experiences using Three.js.',
                'Implemented internationalization across four languages for global campaign rollout.',
                'Designed scalable design systems including typography, color tokens, and responsive breakpoints.',
                'Collaborated with engineers, designers, QA, and stakeholders under aggressive launch timelines.',
            ],
            stack: [
                'React',
                'TypeScript',
                'Three.js',
                'Next.js',
                'Tailwind',
            ],
        },
        {
            role: 'Software Engineer',
            company: 'Smudge',
            period: '2022 — 2024',
            location: 'Remote • New Zealand',
            description:
                'Built and modernized enterprise SaaS platforms for logistics and operational management.',
            highlights: [
                'Led migration of a large production React platform to Next.js using SSR/SSG architecture.',
                'Conducted dependency modernization and large-scale codebase refactoring.',
                'Built modular component systems using Redux and Zustand.',
                'Established pull-request standards and frontend engineering guidelines.',
                'Coordinated Dev, UAT, and Production releases through Azure DevOps pipelines.',
            ],
            stack: [
                'React',
                'Next.js',
                'Redux',
                'Zustand',
                'Azure DevOps',
            ],
        },
        {
            role: 'Front-End Developer',
            company: 'Stratpoint Inc.',
            period: '2021 — 2022',
            location: 'Remote',
            description:
                'Developed fintech and enterprise-grade platforms used by large Philippine digital services.',
            highlights: [
                'Led frontend development for React fintech platforms including GCash mini-program features.',
                'Managed a team of 4 engineers overseeing architecture decisions and delivery.',
                'Refactored legacy systems into scalable modular React architecture.',
                'Delivered production releases across multiple environments with CI/CD workflows.',
            ],
            stack: ['React', 'TypeScript', 'Node.js', 'CI/CD'],
        },
        {
            role: 'Front-End Developer',
            company: 'Yardstick Analytics',
            period: '2019 — 2020',
            location: 'Remote',
            description:
                'Modernized analytics platforms and integrated enterprise frontend systems.',
            highlights: [
                'Built scalable analytics interfaces using React and Redux.',
                'Integrated systems with Power BI, MongoDB, Auth0, and SurveyGizmo.',
                'Managed cloud assets across AWS S3 and Heroku environments.',
            ],
            stack: ['React', 'Redux', 'AWS S3', 'Heroku'],
        },
        {
            role: 'Junior Frontend Developer',
            company: 'GoDigital Corp',
            period: '2018 — 2019',
            location: 'Quezon City, Philippines',
            description:
                'Developed production-ready websites and reusable frontend systems.',
            highlights: [
                'Built production websites using React and Vue.',
                'Developed reusable UI components and API integrations.',
                'Collaborated closely with backend developers and designers.',
            ],
            stack: ['React', 'Vue', 'JavaScript'],
        },
    ]

    return (
        <section
            id="experience"
            className="relative overflow-hidden bg-black px-6 py-28 text-white"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-white/5 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-white/5 blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl">
                {/* HEADER */}
                <div className="mb-16 max-w-3xl">
                    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-400">
                        Experience
                    </p>

                    <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                        Building products,
                        <span className="block text-neutral-500">
                            scaling platforms, solving problems.
                        </span>
                    </h2>

                    <p className="mt-6 text-lg leading-relaxed text-neutral-400">
                        7+ years building scalable frontend systems across fintech,
                        logistics, analytics, SaaS, and global marketing platforms.
                    </p>
                </div>

                {/* EXPERIENCE LIST */}
                <div className="space-y-6">
                    {experiences.map((experience, index) => (
                        <div
                            key={experience.company}
                            className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08] ${index === 0 ? 'xl:p-10' : ''
                                }`}
                        >
                            {/* Hover Glow */}
                            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
                            </div>

                            <div className="relative z-10">
                                {/* TOP */}
                                <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                                    <div>
                                        <h3 className="text-2xl font-semibold text-white">
                                            {experience.role}
                                        </h3>

                                        <p className="mt-2 text-neutral-400">
                                            {experience.company}
                                        </p>

                                        <p className="mt-1 text-sm text-neutral-500">
                                            {experience.location}
                                        </p>
                                    </div>

                                    <div className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-neutral-400">
                                        {experience.period}
                                    </div>
                                </div>

                                {/* DESCRIPTION */}
                                <p className="max-w-3xl text-base leading-relaxed text-neutral-400">
                                    {experience.description}
                                </p>

                                {/* HIGHLIGHTS */}
                                <div className="mt-8 grid gap-3">
                                    {experience.highlights.map((highlight) => (
                                        <div
                                            key={highlight}
                                            className="flex items-start gap-3 text-sm text-neutral-300"
                                        >
                                            <div className="mt-2 h-1.5 w-1.5 rounded-full bg-white/40" />

                                            <p>{highlight}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* STACK */}
                                <div className="mt-8 flex flex-wrap gap-3">
                                    {experience.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-neutral-300"
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
                <div className="mt-20 flex items-center gap-4 text-sm text-neutral-500">
                    <div className="h-px w-16 bg-white/10" />

                    <p>
                        Focused on frontend architecture, immersive UI engineering,
                        scalable systems, and production-grade web applications.
                    </p>
                </div>
            </div>
        </section>
    )
}