import { serviceCategories, services } from "@/constants";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { BentoCard, BentoGrid } from "./magicui/bento-grid";


export function AllServiceSection() {
    const [activeFilter, setActiveFilter] = useState('software_sistema')
    return (
        <div className="grid gap-8">
            <div className="flex flex-wrap gap-2">
                {serviceCategories.map(({ label, value }) => (
                    <span
                        key={value}
                        className={cn(
                            "text-white bg-[rgba(255,255,255,0.01)] backdrop-blur-lg cursor-pointer",
                            "text-sm p-1 px-2.5 border border-ring/20 rounded-full",
                            "transition-all duration-[400ms] hover:scale-105 active:scale-[.99]", activeFilter === value && "bg-[#2645c1] border-0"
                        )}
                        onClick={() => setActiveFilter(value)}>
                        {label}
                    </span>
                ))}
            </div>

            <BentoGrid className="lg:grid-cols-3">
                {services.filter(({ category }) => category.value === activeFilter)
                    .map((feature) => (
                        <BentoCard
                            key={feature.title}
                            {...{
                                ...feature,
                                Icon: feature.icon,
                                name: feature.title,
                                cta: "Richiedere il servizio",
                                href: `https://wa.me/393338343528?text=${encodeURIComponent(`Vorrei saperne di più${feature.title}`)}`,
                            }}
                            className="bg-black/20 backdrop-blur-3xl border border-ring/20 rounded-4xl [&_h3]:text-white [&_p]:text-white/70"
                        />
                    ))}
            </BentoGrid>
        </div>
    );
}