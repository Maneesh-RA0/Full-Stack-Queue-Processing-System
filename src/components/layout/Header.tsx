import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="mb-8 flex items-center justify-between rounded-full border border-white/60 bg-white/30 px-5 py-3 shadow-soft backdrop-blur-sm">
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
                <Link to="/config" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5">
                    Increase Followers Now
                </Link>
            </nav>
        </header>
    );
}