import React from "react";
import clsx from "clsx";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    error?: string | null;
};

export default function Input({ label, error, className, ...rest }: Props) {
    return (
        <div className={clsx("w-full", className)}>
            {label && (
                <label className="mb-2 block text-sm font-medium text-slate-700">
                    {label}
                </label>
            )}
            <input
                {...rest}
                className={clsx(
                    "w-full rounded-2xl border bg-white/80 px-4 py-3 text-slate-900 outline-none transition",
                    error ? "border-red-300 focus:border-red-500" : "border-slate-200 focus:border-slate-500"
                )}
            />
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
    );
}