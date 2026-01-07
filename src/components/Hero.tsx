"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/hizmet-al?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#402e47] leading-tight">
              Güvenilir profesyoneller ile tanışmanın en kolay yolu
            </h1>
            <p className="text-lg text-gray-600">
              İhtiyacınızı tanımlayın, size uygun profesyonellerden teklifler alın
            </p>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Örn: Boya, Tadilat, Temizlik..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-base border-gray-300 focus:border-primary"
                />
              </div>
              <Button type="submit" size="lg" className="h-12 px-6 bg-primary hover:bg-primary/90">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </form>

            {/* Popular Searches */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-500">Popüler:</span>
              {["Boya", "Elektrik", "Tesisat", "Tadilat", "Temizlik"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setSearchQuery(item)}
                  className="text-sm text-primary hover:underline"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden md:block">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=700&fit=crop&q=80"
                alt="Profesyonel usta"
                className="rounded-2xl shadow-2xl w-full max-w-md ml-auto"
              />
              {/* Rating Badge */}
              <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-2 shadow-lg flex items-center gap-2">
                <span className="font-semibold text-[#402e47]">Mehmet</span>
                <span className="text-primary font-bold">5/5</span>
                <div className="flex text-yellow-400">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="absolute right-0 top-0 h-full w-1/3 overflow-hidden hidden lg:block">
        <svg
          className="absolute right-0 top-0 h-full text-primary/20"
          viewBox="0 0 100 400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M50 0 Q 100 200 50 400" />
        </svg>
      </div>
    </section>
  );
}
