import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer";
import { serviceCategories, services } from "@/constants";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ArrowUpRight01Icon, Package01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "./ui/dialog";

export function AllServiceSection() {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const currentCategory = serviceCategories.find(
    ({ value }) => value === activeCategory,
  );
  const filteredServices = services.filter(
    ({ category }) => category.value === activeCategory,
  );

  const isOpen = activeCategory !== null;
  const handleOpenChange = (open: boolean) => {
    if (!open) setActiveCategory(null);
  };

  const serviceList = (
    <div className="flex flex-col divide-y divide-white/8">
      {filteredServices.map(({ title, description, icon: ServiceIcon }) => (
        <a
          key={title}
          href={`https://wa.me/393338343528?text=${encodeURIComponent(`Ciao! Sono interessato a saperne di più sul servizio ${title}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 py-4 first:pt-0 last:pb-0 -mx-2 px-2 rounded-xl hover:bg-sky-950/25 transition-colors duration-200">
          <div className="flex items-center justify-center size-10 rounded-xl bg-sky-950/70 border border-sky-500/20 shrink-0">
            <HugeiconsIcon icon={ServiceIcon} className="size-4.5 text-sky-400" />
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="text-sm font-semibold text-white/90">{title}</h4>
            <p className="text-xs text-white/40 leading-relaxed mt-0.5">
              {description}
            </p>
          </div>
          <HugeiconsIcon icon={ArrowUpRight01Icon} className="size-4 text-white/20 group-hover:text-sky-400 shrink-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col gap-6">
      {/* Category grid — each tile opens the full service list */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {serviceCategories.map(({ label, value }) => {
          const count = services.filter(
            (s) => s.category.value === value,
          ).length;
          return (
            <button
              key={value}
              onClick={() => setActiveCategory(value)}
              className="group flex flex-col items-start gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-sky-500/30 hover:bg-sky-950/25 transition-all duration-200 text-left cursor-pointer">
              <div className="flex items-center justify-center size-10 rounded-xl bg-sky-950/70 border border-sky-500/20 text-sky-400 shrink-0">
                <HugeiconsIcon icon={Package01Icon} className="size-4.5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white/85 leading-tight">
                  {label}
                </h3>
                <p className="text-xs text-white/35 mt-1">{count} servizi</p>
              </div>
            </button>
          );
        })}
      </div>

      {isMobile ? (
        <Drawer open={isOpen} onOpenChange={handleOpenChange}>
          <DrawerContent className="bg-gray-950 border-white/10 text-white max-h-[85vh]">
            <DrawerHeader className="text-left">
              <DrawerTitle className="text-white text-xl font-semibold">
                {currentCategory?.label}
              </DrawerTitle>
              <DrawerDescription className="text-white/40">
                Seleziona un servizio per richiederlo su WhatsApp.
              </DrawerDescription>
            </DrawerHeader>
            <div className="overflow-y-auto px-4 pb-6">{serviceList}</div>
          </DrawerContent>
        </Drawer>
      ) : (
        <Dialog open={isOpen} onOpenChange={handleOpenChange}>
          <DialogContent className="bg-gray-950 border-white/10 text-white max-w-xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-white text-xl font-semibold">
                {currentCategory?.label}
              </DialogTitle>
              <DialogDescription className="text-white/40">
                Seleziona un servizio per richiederlo su WhatsApp.
              </DialogDescription>
            </DialogHeader>
            {serviceList}
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
