"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    title: "Mutfak Tadilatı",
    rating: 5,
    comment: "Çok profesyonel bir ekip. İşi zamanında ve bütçe dahilinde tamamladılar. Kesinlikle tavsiye ederim.",
    company: "Usta Mehmet İnşaat",
    author: "Ayşe K.",
  },
  {
    id: 2,
    title: "Elektrik Tesisatı Yenileme",
    rating: 5,
    comment: "Güvenilir ve kaliteli iş. Tüm elektrik tesisatını yenilediler, hiçbir sorun yaşamadık.",
    company: "Elektrik Pro",
    author: "Ali B.",
  },
  {
    id: 3,
    title: "Site Güvenlik Sistemi",
    rating: 5,
    comment: "Kamera ve alarm sistemi kurulumu için harika bir hizmet aldık. 7/24 destek veriyorlar.",
    company: "Güvenlik Plus",
    author: "Fatma Y.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cover bg-center relative" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=800&fit=crop')"
    }}>
      <div className="absolute inset-0 bg-[#402e47]/90" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Title */}
          <div className="text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Yüz Binlerce Gerçek Değerlendirme
            </h2>
            <p className="text-white/80 mb-6">
              Hizmetia'daki değerlendirmeler, iş sahipleri tarafından yazılmaktadır.
            </p>
            <Button asChild className="bg-white text-[#402e47] hover:bg-white/90">
              <Link href="/hizmet-al">Hizmet Al</Link>
            </Button>
          </div>

          {/* Testimonial Cards */}
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white">
              <CardContent className="p-6">
                <h3 className="font-semibold text-[#402e47] mb-2">{testimonial.title}</h3>
                <div className="flex text-yellow-400 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-4">"{testimonial.comment}"</p>
                <div className="border-t pt-3">
                  <p className="font-medium text-[#402e47] text-sm">{testimonial.company}</p>
                  <p className="text-gray-500 text-xs">- {testimonial.author}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
