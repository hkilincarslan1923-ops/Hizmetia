import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  Star,
  MapPin,
  CheckCircle,
  Shield,
  Clock,
  Search,
  Filter,
  ChevronRight,
} from "lucide-react";

const categoryIds = [
  "tesisat",
  "tadilat",
  "boya",
  "elektrik",
  "bahce",
  "kentsel-donusum",
  "guclendirme",
  "site-yonetimi",
  "apartman-yonetimi",
  "yapi-kontrol",
  "guvenlik-hizmetleri",
  "guvenlik-sistemleri",
];

export function generateStaticParams() {
  return categoryIds.map((id) => ({
    id,
  }));
}

const categoryData: Record<string, { title: string; description: string; image: string }> = {
  "tesisat": {
    title: "Tesisat",
    description: "Su tesisatı, kalorifer, doğalgaz işleri için profesyonel ustalar",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=1200&h=400&fit=crop",
  },
  "tadilat": {
    title: "Tadilat ve Renovasyon",
    description: "Ev ve iş yeri tadilatı, yenileme projeleri",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=400&fit=crop",
  },
  "boya": {
    title: "Boya ve Dekorasyon",
    description: "İç ve dış cephe boya, dekoratif boya işleri",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&h=400&fit=crop",
  },
  "elektrik": {
    title: "Elektrik",
    description: "Elektrik tesisatı, arıza onarım, aydınlatma",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&h=400&fit=crop",
  },
  "kentsel-donusum": {
    title: "Kentsel Dönüşüm",
    description: "Kentsel dönüşüm projeleri, yıkım ve yeniden yapım",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1200&h=400&fit=crop",
  },
  "guclendirme": {
    title: "Güçlendirme",
    description: "Yapı güçlendirme, deprem güvenliği, kolon güçlendirme",
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?w=1200&h=400&fit=crop",
  },
  "site-yonetimi": {
    title: "Site Yönetimi",
    description: "Profesyonel site yönetimi, aidat takibi, ortak alan bakımı",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=400&fit=crop",
  },
  "apartman-yonetimi": {
    title: "Apartman Yönetimi",
    description: "Apartman yönetimi, bina bakımı, ortak gider yönetimi",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=400&fit=crop",
  },
  "yapi-kontrol": {
    title: "Yapı Kontrol",
    description: "Yapı denetimi, kalite kontrol, teknik müşavirlik",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=400&fit=crop",
  },
  "guvenlik-hizmetleri": {
    title: "Güvenlik Hizmetleri",
    description: "Özel güvenlik, site güvenliği, etkinlik güvenliği",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&h=400&fit=crop",
  },
  "guvenlik-sistemleri": {
    title: "Güvenlik Sistemleri",
    description: "Alarm sistemleri, kamera sistemleri, akıllı kilit sistemleri",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&h=400&fit=crop",
  },
};

const professionals = [
  {
    id: 1,
    name: "Usta Mehmet İnşaat",
    owner: "Mehmet Yıldız",
    rating: 4.9,
    reviews: 156,
    jobs: 234,
    location: "İstanbul, Kadıköy",
    verified: true,
    description: "15 yıllık deneyimli ekibimizle ev ve iş yeri tadilatında hizmetinizdeyiz.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop",
    responseTime: "2 saat içinde",
    badges: ["Hızlı Yanıt", "En İyi Seçim"],
  },
  {
    id: 2,
    name: "Pro Tesisat",
    owner: "Ali Usta",
    rating: 4.8,
    reviews: 89,
    jobs: 178,
    location: "İstanbul, Beşiktaş",
    verified: true,
    description: "7/24 acil tesisat hizmeti. Su kaçağı, tıkanıklık, kombi bakım.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    responseTime: "1 saat içinde",
    badges: ["7/24 Hizmet"],
  },
  {
    id: 3,
    name: "Güvenli Yapı Mühendislik",
    owner: "Fatma Mühendis",
    rating: 4.9,
    reviews: 45,
    jobs: 67,
    location: "İstanbul, Şişli",
    verified: true,
    description: "Deprem güvenliği ve yapı güçlendirme konusunda uzman mühendislik firması.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop",
    responseTime: "3 saat içinde",
    badges: ["Lisanslı", "Sigortalı"],
  },
  {
    id: 4,
    name: "Akıllı Güvenlik A.Ş.",
    owner: "Hasan Güven",
    rating: 4.7,
    reviews: 112,
    jobs: 189,
    location: "Ankara, Çankaya",
    verified: true,
    description: "Kamera sistemleri, alarm ve akıllı ev çözümleri.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    responseTime: "4 saat içinde",
    badges: ["Garantili"],
  },
];

export default async function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const category = categoryData[id] || {
    title: "Hizmet Kategorisi",
    description: "Bu kategorideki profesyonelleri keşfedin",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=400&fit=crop",
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-64 md:h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${category.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#402e47]/90 to-[#402e47]/70" />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="text-white">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/70 text-sm mb-4">
              <Link href="/" className="hover:text-white">Ana Sayfa</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/kategoriler" className="hover:text-white">Kategoriler</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{category.title}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{category.title}</h1>
            <p className="text-white/80 text-lg max-w-xl">{category.description}</p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="bg-white border-b py-4 sticky top-16 md:top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="search"
                placeholder="Profesyonel ara..."
                className="pl-10"
              />
            </div>
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Konum (İl, İlçe)"
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filtrele
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              Ara
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <aside className="hidden lg:block">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-[#402e47] mb-4">Filtreler</h3>

                  {/* Rating Filter */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium mb-3">Değerlendirme</h4>
                    <div className="space-y-2">
                      {[4, 3, 2].map((rating) => (
                        <label key={rating} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded" />
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            <span className="text-sm">{rating}+ ve üzeri</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Verified Filter */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium mb-3">Durum</h4>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Sadece Onaylı</span>
                    </label>
                  </div>

                  {/* Response Time Filter */}
                  <div>
                    <h4 className="text-sm font-medium mb-3">Yanıt Süresi</h4>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">1 saat içinde</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Aynı gün</span>
                      </label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </aside>

            {/* Professional List */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-600">
                  <span className="font-semibold text-[#402e47]">{professionals.length}</span> profesyonel bulundu
                </p>
                <select className="border rounded-lg px-3 py-2 text-sm">
                  <option>En İyi Değerlendirme</option>
                  <option>En Çok İş</option>
                  <option>En Hızlı Yanıt</option>
                </select>
              </div>

              <div className="space-y-4">
                {professionals.map((pro) => (
                  <Card key={pro.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Avatar */}
                        <div className="flex-shrink-0">
                          <img
                            src={pro.avatar}
                            alt={pro.name}
                            className="w-20 h-20 rounded-full object-cover"
                          />
                        </div>

                        {/* Info */}
                        <div className="flex-1">
                          <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="text-lg font-semibold text-[#402e47]">{pro.name}</h3>
                                {pro.verified && (
                                  <CheckCircle className="w-5 h-5 text-primary" />
                                )}
                              </div>
                              <p className="text-gray-500 text-sm">{pro.owner}</p>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1">
                                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                <span className="font-semibold">{pro.rating}</span>
                                <span className="text-gray-500 text-sm">({pro.reviews})</span>
                              </div>
                            </div>
                          </div>

                          <p className="text-gray-600 mb-3">{pro.description}</p>

                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {pro.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {pro.responseTime}
                            </div>
                            <div className="flex items-center gap-1">
                              <Shield className="w-4 h-4" />
                              {pro.jobs} tamamlanmış iş
                            </div>
                          </div>

                          {/* Badges */}
                          <div className="flex flex-wrap gap-2">
                            {pro.badges.map((badge) => (
                              <Badge key={badge} variant="secondary" className="bg-primary/10 text-primary">
                                {badge}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col gap-2 md:w-40">
                          <Button className="bg-primary hover:bg-primary/90 w-full">
                            Teklif İste
                          </Button>
                          <Button variant="outline" className="w-full" asChild>
                            <Link href={`/profesyonel/${pro.id}`}>Profili Gör</Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  Daha Fazla Göster
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* CTA */}
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Aradığınızı bulamadınız mı?
          </h2>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            Hizmet talebi oluşturun, profesyoneller size ulaşsın!
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/hizmet-al">Ücretsiz Teklif Al</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
