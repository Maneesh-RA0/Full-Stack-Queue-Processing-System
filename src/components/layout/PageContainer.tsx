import React from "react";

type Props = {
    children: React.ReactNode;
};

export default function PageContainer({ children }: Props) {
    return <div className="min-h-screen px-4 py-10 sm:px-6">{children}</div>;
}