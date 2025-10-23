import HeroSub from "@/components/shared/HeroSub";
import ResidentialList from "@/components/Properties/Residential";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Системы управления | SINERTEK",
};

const page = () => {
    return (
        <>
            <HeroSub
                title="Системы управления"
                description="Комплексные решения для удалённого управления и контроля промышленного оборудования через GSM и интернет."
                badge="Портфолио"
            />
            <ResidentialList />
        </>
    );
};

export default page;