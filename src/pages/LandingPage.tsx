import { Link } from "react-router-dom";

const stats = [
    { label: "Account growth", value: "3x faster" },
    { label: "Audience reach", value: "24/7" },
    { label: "Campaign speed", value: "Active automation" }
];

const steps = [
    {
        title: "Secure setup",
        description:
            "Connect your Instagram account in a protected flow designed for safe, controlled onboarding."
    },
    {
        title: "Target the right audience",
        description:
            "Define the account or audience profile you want your engagement engine to amplify."
    },
    {
        title: "Launch and optimize",
        description:
            "Start the growth campaign, monitor performance, and adapt your targeting with precision."
    }
];

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-transparent px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <header className="mb-10 flex items-center justify-between rounded-full border border-white/60 bg-white/30 px-5 py-3 shadow-soft backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-slate-900 via-slate-700 to-stone-500 text-lg font-bold text-white">
                            IG
                        </div>
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                                Social Growth
                            </p>
                        </div>
                    </div>

                    <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
                        <a href="#how-it-works" className="transition hover:text-slate-900">How it works</a>
                        <a href="#benefits" className="transition hover:text-slate-900">Benefits</a>
                        <a href="#pricing" className="transition hover:text-slate-900">Pricing</a>
                    </nav>

                    <Link
                        to="/config"
                        className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
                    >
                        Increase Followers Now
                    </Link>
                </header>

                <main className="space-y-10">
                    <section className="glass-panel overflow-hidden rounded-[32px] border border-white/60 p-6 sm:p-10 lg:p-14">
                        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                            <div>
                                <span className="inline-flex items-center rounded-full border border-stone-200 bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-stone-600">
                                    Instagram Growth Engine
                                </span>

                                <h1 className="mt-6 max-w-xl text-4xl font-black tracking-[-0.06em] text-slate-900 sm:text-5xl lg:text-6xl">
                                    Boost Your <span className="text-gradient">Instagram Presence</span>
                                </h1>

                                <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                                    Supercharge your reach with a modern growth workflow designed to help creators,
                                    brands, and businesses expand engagement, attract better followers, and amplify
                                    content visibility, all from one premium dashboard.
                                </p>

                                <div className="mt-8 flex flex-wrap items-center gap-4">
                                    <Link
                                        to="/config"
                                        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-slate-900 via-slate-800 to-stone-700 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
                                    >
                                        Get Started
                                    </Link>

                                    <button
                                        type="button"
                                        className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/60 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-white"
                                    >
                                        View Demo
                                    </button>
                                </div>

                                <div className="mt-8 grid max-w-lg grid-cols-3 gap-4">
                                    {stats.map((item) => (
                                        <div
                                            key={item.label}
                                            className="rounded-2xl border border-white/70 bg-white/50 p-3 text-center shadow-soft"
                                        >
                                            <div className="text-lg font-bold text-slate-900">{item.value}</div>
                                            <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-500">
                                                {item.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute -right-8 top-6 h-36 w-36 rounded-full bg-amber-200/50 blur-3xl" />
                                <div className="absolute -left-6 bottom-10 h-32 w-32 rounded-full bg-violet-200/40 blur-3xl" />

                                <div className="relative overflow-hidden rounded-[28px] border border-white/60 bg-white/40 p-5 shadow-glass backdrop-blur-md">
                                    <div className="rounded-[22px] bg-gradient-to-br from-slate-900 via-slate-800 to-stone-700 p-5 text-white">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-bold">
                                                    IG
                                                </div>
                                                <div>
                                                    <div className="text-sm text-slate-300">Growth Campaign</div>
                                                    <div className="text-lg font-semibold">Instagram Reach</div>
                                                </div>
                                            </div>
                                            <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                                                Live
                                            </span>
                                        </div>

                                        <div className="mt-8 space-y-4">
                                            <div className="rounded-2xl bg-white/5 p-4">
                                                <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-300">
                                                    <span>Target</span>
                                                    <span>96%</span>
                                                </div>
                                                <div className="h-2 rounded-full bg-white/10">
                                                    <div className="h-full w-[96%] rounded-full bg-gradient-to-r from-emerald-400 to-cyan-300" />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-3">
                                                <div className="rounded-2xl bg-white/5 p-3">
                                                    <div className="text-xs uppercase tracking-[0.18em] text-slate-300">
                                                        Followers
                                                    </div>
                                                    <div className="mt-2 text-2xl font-bold">12.8K</div>
                                                </div>

                                                <div className="rounded-2xl bg-white/5 p-3">
                                                    <div className="text-xs uppercase tracking-[0.18em] text-slate-300">
                                                        Reach
                                                    </div>
                                                    <div className="mt-2 text-2xl font-bold">4.3M</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="how-it-works" className="grid gap-6 lg:grid-cols-3">
                        {steps.map((step, idx) => (
                            <div
                                key={step.title}
                                className="glass-panel rounded-[28px] border border-white/70 p-6 shadow-soft"
                            >
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 to-stone-700 text-sm font-bold text-white">
                                    0{idx + 1}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                                <p className="mt-4 text-base leading-7 text-slate-600">{step.description}</p>
                            </div>
                        ))}
                    </section>

                    <section id="benefits" className="glass-panel rounded-[28px] border border-white/70 p-8">
                        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                            <div>
                                <span className="inline-flex rounded-full border border-stone-200 bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-stone-600">
                                    Why it works
                                </span>
                                <h2 className="mt-5 text-3xl font-black tracking-[-0.05em] text-slate-900">
                                    Designed for strategic audience growth
                                </h2>
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <div className="rounded-2xl border border-white/70 bg-white/50 p-5">
                                    <div className="text-lg font-bold text-slate-900">Audience Precision</div>
                                    <p className="mt-3 text-sm leading-7 text-slate-600">
                                        Focus campaigns on high-intent audience segments and better-fit growth targets.
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-white/70 bg-white/50 p-5">
                                    <div className="text-lg font-bold text-slate-900">Brand Visibility</div>
                                    <p className="mt-3 text-sm leading-7 text-slate-600">
                                        Increase discoverability and accelerate your presence across the Instagram ecosystem.
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-white/70 bg-white/50 p-5">
                                    <div className="text-lg font-bold text-slate-900">Workflow Control</div>
                                    <p className="mt-3 text-sm leading-7 text-slate-600">
                                        Manage campaigns from one place with a clean, premium, scalable configuration flow.
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-white/70 bg-white/50 p-5">
                                    <div className="text-lg font-bold text-slate-900">Scalable Future</div>
                                    <p className="mt-3 text-sm leading-7 text-slate-600">
                                        Built with a strong frontend architecture ready for secure API integration and heavy automation logic later.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}