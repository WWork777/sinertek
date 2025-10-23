import HeroSub from "@/components/shared/HeroSub";
import Appartment from "@/components/Properties/Appartment";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Портативное оборудование | SINERTEK",
};

const page = () => {
    return (
        <>
            <HeroSub
                title="Портативное оборудование"
                description="Компактные измерительные приборы и датчики для мобильного использования в полевых условиях."
                badge="Портфолио"
            />
            <Appartment />
        </>
    );
};

export default page;