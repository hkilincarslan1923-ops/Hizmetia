import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Wrench,
  Paintbrush,
  Home,
  Zap,
  Droplets,
  TreePine,
  Building2,
  Shield,
  Camera,
  ClipboardCheck,
  Building,
  HardHat,
  Users,
  Lock,
  Truck,
  Sparkles,
} from "lucide-react";

const categories = [
  {
    id: "apartman-temizligi",
    title: "Apartman Temizliği",
    description: "Apartman giriş, merdiven ve ortak alan temizliği hizmetleri",
    icon: Building,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    count: "3.456",
    featured: true,
  },
  {
    id: "ev-temizligi",
    title: "Ev Temizliği",
    description: "Evinizin her köşesi için detaylı temizlik hizmeti",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
    count: "8.912",
    featured: true,
  },
  {
    id: "evden-eve-nakliyat",
    title: "Evden Eve Nakliyat",
    description: "Güvenli ve hızlı evden eve nakliyat hizmeti",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=400&h=300&fit=crop",
    count: "4.567",
    featured: true,
  },
  {
    id: "tesisat",
    title: "Tesisat",
    description: "Su tesisatı, kalorifer, doğalgaz işleri için profesyonel ustalar",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=300&fit=crop",
    count: "5.234",
  },
  {
    id: "tadilat",
    title: "Tadilat ve Renovasyon",
    description: "Ev ve iş yeri tadilatı, yenileme projeleri",
    icon: Home,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop",
    count: "8.123",
  },
  {
    id: "boya",
    title: "Boya ve Dekorasyon",
    description: "İç ve dış cephe boya, dekoratif boya işleri",
    icon: Paintbrush,
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=300&fit=crop",
    count: "4.567",
  },
  {
    id: "elektrik",
    title: "Elektrik",
    description: "Elektrik tesisatı, arıza onarım, aydınlatma",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop",
    count: "3.891",
  },
  {
    id: "bahce",
    title: "Bahçe ve Peyzaj",
    description: "Bahçe düzenleme, peyzaj, çim bakımı",
    icon: TreePine,
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=400&h=300&fit=crop",
    count: "2.456",
  },
  {
    id: "kentsel-donusum",
    title: "Kentsel Dönüşüm",
    description: "Kentsel dönüşüm projeleri, yıkım ve yeniden yapım",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop",
    count: "1.234",
  },
  {
    id: "guclendirme",
    title: "Güçlendirme",
    description: "Yapı güçlendirme, deprem güvenliği, kolon güçlendirme",
    icon: HardHat,
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?w=400&h=300&fit=crop",
    count: "987",
  },
  {
    id: "site-yonetimi",
    title: "Site Yönetimi",
    description: "Profesyonel site yönetimi, aidat takibi, ortak alan bakımı",
    icon: Building,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
    count: "1.567",
  },
  {
    id: "apartman-yonetimi",
    title: "Apartman Yönetimi",
    description: "Apartman yönetimi, bina bakımı, ortak gider yönetimi",
    icon: Users,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
    count: "2.345",
  },
  {
    id: "yapi-kontrol",
    title: "Yapı Kontrol",
    description: "Yapı denetimi, kalite kontrol, teknik müşavirlik",
    icon: ClipboardCheck,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
    count: "876",
  },
  {
    id: "guvenlik-hizmetleri",
    title: "Güvenlik Hizmetleri",
    description: "Özel güvenlik, site güvenliği, etkinlik güvenliği",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=400&h=300&fit=crop",
    count: "1.789",
  },
  {
    id: "guvenlik-sistemleri",
    title: "Güvenlik Sistemleri",
    description: "Alarm sistemleri, kamera sistemleri, akıllı kilit sistemleri",
    icon: Camera,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=300&fit=crop",
    count: "2.123",
  },
];

export default function Categories() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-[#402e47] mb-4">
          Popüler Hizmet Kategorileri
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          İhtiyacınız olan her türlü hizmet için uzman profesyoneller burada
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg">{category.title}</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-gray-600 text-sm line-clamp-2">
                  {category.description}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  <span className="font-semibold text-[#402e47]">{category.count}</span> profesyonel
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/kategori/${category.id}`}>Tümünü Gör</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
