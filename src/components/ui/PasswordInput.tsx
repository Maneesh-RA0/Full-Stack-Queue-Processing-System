import React, { useState, forwardRef } from "react";
import clsx from "clsx";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    error?: string | null;
};

const PasswordInput = forwardRef<HTMLInputElement, Props>(({ label, error, className, ...rest }, ref) => {
    const [visible, setVisible] = useState(false);

    return (
        <div className={clsx("w-full", className)}>
            {label && (
                <label className="mb-2 block text-sm font-medium text-slate-700">
                    {label}
                </label>
            )}
            <div className="relative">
                <input
                    {...rest}
                    ref={ref}
                    type={visible ? "text" : "password"}
                    className={clsx(
                        "w-full rounded-2xl border bg-white/80 px-4 py-3 pr-12 text-slate-900 outline-none transition",
                        error ? "border-red-300 focus:border-red-500" : "border-slate-200 focus:border-slate-500"
                    )}
                />
                <button
                    type="button"
                    onClick={() => setVisible((v) => !v)}
                    className="absolute inset-y-0 right-3 flex items-center text-sm font-medium text-slate-500 transition hover:text-slate-800"
                    aria-label={visible ? "Hide password" : "Show password"}
                >
                    {visible ? "Hide" : "Show"}
                </button>
            </div>
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
    );
});

PasswordInput.displayName = "PasswordInput";
export default PasswordInput;