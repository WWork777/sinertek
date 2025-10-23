import HeroSub from "@/components/shared/HeroSub";
import LuxuryVillas from "@/components/Properties/LuxuryVilla";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Измерительное оборудование | SINERTEK",
};

const page = () => {
    return (
        <>
            <HeroSub
                title="Измерительное оборудование"
                description="Высокоточные приборы для измерения и контроля физических величин в промышленных условиях."
                badge="Портфолио"
            />
            <LuxuryVillas />
        </>
    );
};

export default page;