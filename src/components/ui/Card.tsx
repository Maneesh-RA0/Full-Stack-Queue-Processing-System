import React from "react";
import clsx from "clsx";

type Props = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
};

export default function Card({ children, className, ...rest }: Props) {
    return (
        <div
            {...rest}
            className={clsx(
                "glass-panel rounded-[24px] border border-white/60 p-5 shadow-soft",
                className
            )}
        >
            {children}
        </div>
    );
}