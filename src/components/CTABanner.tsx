import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="bg-primary py-6">
      <div className="container mx-auto px-4">
        <Link
          href="/hizmet-al"
          className="flex items-center justify-between group"
        >
          <h2 className="text-xl md:text-2xl font-bold text-white">
            Hemen Hizmet Talebi Oluşturun
          </h2>
          <ArrowRight className="w-8 h-8 text-white group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
