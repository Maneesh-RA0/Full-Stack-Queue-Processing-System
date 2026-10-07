import { Link } from "react-router-dom";
import BotForm from "../features/botConfig/BotForm";
import PageContainer from "../components/layout/PageContainer";

export default function BotConfigPage() {
    return (
        <PageContainer>
            <div className="mx-auto max-w-5xl">
                <div className="mb-6 flex items-center justify-between">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/50 px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-white"
                    >
                        ← Back to Home
                    </Link>

                    <div className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">
                        Bot Configuration
                    </div>
                </div>

                <BotForm />
            </div>
        </PageContainer>
    );
}