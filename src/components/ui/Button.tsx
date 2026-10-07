import React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
};

export default function Button({
    variant = "primary",
    size = "md",
    className,
    children,
    ...rest
}: ButtonProps) {
    const base = "inline-flex items-center justify-center rounded-full font-semibold transition";
    const variants: Record<string, string> = {
        primary:
            "bg-gradient-to-r from-slate-900 via-slate-800 to-stone-700 text-white shadow-glow hover:-translate-y-0.5",
        secondary:
            "bg-white/80 border border-slate-200 text-slate-800 hover:bg-white",
        ghost: "bg-transparent text-slate-700 hover:text-slate-900"
    };
    const sizes: Record<string, string> = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-5 py-2.5 text-sm",
        lg: "px-6 py-3 text-base"
    };

    return (
        <button
            className={clsx(base, variants[variant], sizes[size], className)}
            {...rest}
        >
            {children}
        </button>
    );
}