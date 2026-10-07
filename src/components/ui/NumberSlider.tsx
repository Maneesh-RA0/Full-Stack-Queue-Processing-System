import React from "react";
import clsx from "clsx";

type Props = {
    min?: number;
    max?: number;
    step?: number;
    value: number;
    onChange: (val: number) => void;
    label?: string;
};

export default function NumberSlider({
    min = 100,
    max = 50000,
    step = 100,
    value,
    onChange,
    label
}: Props) {
    return (
        <div>
            {label && (
                <div className="mb-2 flex items-center justify-between">
                    <div className="text-sm font-medium text-slate-700">{label}</div>
                    <div className="rounded-full bg-slate-900 px-2.5 py-1 text-xs font-semibold text-white">
                        {value.toLocaleString()}
                    </div>
                </div>
            )}

            <input
                aria-label={label || "number slider"}
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                className={clsx(
                    "h-2 w-full cursor-pointer appearance-none rounded-full bg-gradient-to-r from-slate-200 via-slate-300 to-slate-500",
                    "accent-slate-900"
                )}
            />
            <div className="mt-2 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-400">
                <span>{min.toLocaleString()}</span>
                <span>{max.toLocaleString()}</span>
            </div>
        </div>
    );
}