
import { Documentation } from "@/components/Documentation/Documentation";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Документация | SINERTEK",
};

export default function Page() {
    return (
        <>
        <Documentation/>
        </>
    );
};
