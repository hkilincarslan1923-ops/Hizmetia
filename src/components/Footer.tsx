import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const footerLinks = {
  hizmetAlanlar: {
    title: "Hizmet Alanlar",
    links: [
      { label: "Hizmet Al", href: "/hizmet-al" },
      { label: "Nasıl Çalışır", href: "/nasil-calisir" },
      { label: "Profesyonel Bul", href: "/profesyonel-bul" },
      { label: "Destek Merkezi", href: "/destek" },
    ],
  },
  profesyoneller: {
    title: "Profesyoneller",
    links: [
      { label: "Profesyonel Kaydı", href: "/profesyonel/kayit" },
      { label: "Gereksinimler", href: "/profesyonel/gereksinimler" },
      { label: "Değerlendirme Kuralları", href: "/profesyonel/degerlendirme" },
      { label: "Profesyonel Destek", href: "/profesyonel/destek" },
    ],
  },
  kurumsal: {
    title: "Kurumsal",
    links: [
      { label: "Hakkımızda", href: "/hakkimizda" },
      { label: "Basın", href: "/basin" },
      { label: "Kariyer", href: "/kariyer" },
      { label: "İş Ortaklığı", href: "/is-ortakligi" },
    ],
  },
  kaynaklar: {
    title: "Kaynaklar",
    links: [
      { label: "Hizmetler", href: "/hizmetler" },
      { label: "Blog", href: "/blog" },
      { label: "Fiyat Rehberi", href: "/fiyat-rehberi" },
      { label: "SSS", href: "/sss" },
    ],
  },
};

const cities = [
  "İstanbul", "Ankara", "İzmir", "Bursa", "Antalya", "Adana",
  "Konya", "Gaziantep", "Mersin", "Kayseri", "Eskişehir", "Diyarbakır",
];

const services = [
  "Tesisat", "Elektrik", "Boya", "Tadilat", "Temizlik", "Bahçe",
  "Kentsel Dönüşüm", "Güçlendirme", "Site Yönetimi", "Apartman Yönetimi",
  "Yapı Kontrol", "Güvenlik Hizmetleri", "Güvenlik Sistemleri",
];

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-[#402e47] mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-primary text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 mb-8">
          <a href="#" className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100">
            <Facebook className="w-5 h-5 text-gray-600" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100">
            <Instagram className="w-5 h-5 text-gray-600" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100">
            <Twitter className="w-5 h-5 text-gray-600" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100">
            <Youtube className="w-5 h-5 text-gray-600" />
          </a>

          <div className="ml-auto flex gap-4">
            <a href="#" className="inline-block hover:opacity-80 transition-opacity">
              <img
                src="https://ext.same-assets.com/3769849481/108811137.svg"
                alt="App Store"
                className="h-10"
              />
            </a>
            <a href="#" className="inline-block hover:opacity-80 transition-opacity">
              <img
                src="https://ext.same-assets.com/3769849481/1652000069.svg"
                alt="Google Play"
                className="h-10"
              />
            </a>
          </div>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-8">
          <Link href="/gizlilik" className="hover:text-primary">Gizlilik Politikası</Link>
          <Link href="/cerezler" className="hover:text-primary">Çerez Politikası</Link>
          <Link href="/kullanim-kosullari" className="hover:text-primary">Kullanım Koşulları</Link>
          <Link href="/kvkk" className="hover:text-primary">KVKK</Link>
        </div>

        <div className="text-sm text-gray-500">
          Copyright © {new Date().getFullYear()} Hizmetia - Tüm hakları saklıdır.
        </div>
      </div>

      {/* Cities Section */}
      <div className="bg-[#402e47] text-white py-8">
        <div className="container mx-auto px-4">
          <h3 className="font-semibold mb-4">Bölgenizdeki Profesyonelleri Bulun</h3>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {cities.map((city) => (
              <Link
                key={city}
                href={`/sehir/${city.toLowerCase().replace("ı", "i").replace("ş", "s").replace("ğ", "g").replace("ü", "u").replace("ö", "o").replace("ç", "c")}`}
                className="text-white/80 hover:text-white text-sm"
              >
                {city}
              </Link>
            ))}
            <Link href="/sehirler" className="text-primary hover:underline text-sm">
              Daha fazla şehir +
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-[#352639] text-white py-8">
        <div className="container mx-auto px-4">
          <h3 className="font-semibold mb-4">Profesyonellerimizin Hizmetleri</h3>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {services.map((service) => (
              <Link
                key={service}
                href={`/hizmet/${service.toLowerCase().replace(/ /g, "-").replace("ı", "i").replace("ş", "s").replace("ğ", "g").replace("ü", "u").replace("ö", "o").replace("ç", "c")}`}
                className="text-white/80 hover:text-white text-sm"
              >
                {service}
              </Link>
            ))}
            <Link href="/hizmetler" className="text-primary hover:underline text-sm">
              Daha fazla hizmet +
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
