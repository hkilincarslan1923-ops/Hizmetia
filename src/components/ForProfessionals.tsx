import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ForProfessionals() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=500&fit=crop"
              alt="Profesyonel usta"
              className="rounded-2xl shadow-xl w-full"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#402e47] mb-4">
              İş mi Arıyorsunuz?
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-[#402e47] mb-4">
              Hizmetia ile İşletmenizi Büyütün
            </h3>
            <p className="text-gray-600 mb-6">
              Hizmetia, daha fazla iş bulmanın güvenilir yoludur. Ücretsiz kaydolun ve
              niteliklerinize uygun potansiyel müşterilerden günlük bildirimler alın.
              Büyük veya küçük işleri kabul edin - tamamen size bağlı.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-gray-600">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Ücretsiz profil oluşturun
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Günlük iş fırsatları alın
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Müşteri değerlendirmeleri ile itibarınızı artırın
              </li>
            </ul>

            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/profesyonel/kayit">Ücretsiz Kaydolun</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
