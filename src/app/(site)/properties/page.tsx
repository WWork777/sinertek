import HeroSub from "@/components/shared/HeroSub";
import PropertiesListing from "@/components/Properties/PropertyList";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Наши проекты | SINERTEK",
};

const page = () => {
    return (
        <>
            <HeroSub
                title="Портфолио выполненных работ"
                description="Примеры разработанного и изготовленного нами оборудования для промышленности и научных исследований"
                badge="Проекты"
            />
            <PropertiesListing />
        </>
    );
};

export default page;
