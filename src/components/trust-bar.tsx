import { Marquee } from "@/components/magicui/marquee";

const brands = [
  "Windows",
  "macOS",
  "Synology",
  "QNAP",
  "Dell",
  "HP",
  "Lenovo",
  "Asus",
  "Cisco",
  "Fortinet",
];

export function TrustBar() {
  return (
    <section className="relative w-full py-10 border-y border-white/6 bg-white/[0.015]">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
        <span className="text-[11px] uppercase tracking-[0.18em] text-white/30 font-semibold shrink-0">
          Assistenza su ogni marca
        </span>
        <div className="relative w-full overflow-hidden marquee-fade">
          <Marquee pauseOnHover className="[--duration:32s] py-0">
            {brands.map((brand) => (
              <span
                key={brand}
                className="text-sm sm:text-base font-semibold text-white/25 tracking-tight whitespace-nowrap select-none">
                {brand}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
