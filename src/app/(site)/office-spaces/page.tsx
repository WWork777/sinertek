import HeroSub from "@/components/shared/HeroSub";
import OfficeSpace from "@/components/Properties/OfficeSpaces";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Датчики и сенсоры | SINERTEK",
};

const page = () => {
    return (
        <>
            <HeroSub
                title="Датчики и сенсоры"
                description="Автономные датчики для мониторинга вибрации, температуры, веса и других параметров с беспроводной передачей данных."
                badge="Портфолио"
            />
            <OfficeSpace />
        </>
    );
};

export default page;