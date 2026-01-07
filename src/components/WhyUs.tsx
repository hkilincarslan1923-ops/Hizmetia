import { Shield, Clock, Star, ThumbsUp } from "lucide-react";

export default function WhyUs() {
  const features = [
    {
      icon: Shield,
      title: "Güvenilir Profesyoneller",
      description: "Tüm profesyonellerimiz kimlik doğrulamasından geçer ve değerlendirmeleri şeffaftır.",
    },
    {
      icon: Clock,
      title: "Hızlı Yanıt",
      description: "İhtiyacınızı girdikten sonra dakikalar içinde teklifler almaya başlarsınız.",
    },
    {
      icon: Star,
      title: "Kalite Garantisi",
      description: "Müşteri memnuniyeti odaklı hizmet anlayışı ile çalışıyoruz.",
    },
    {
      icon: ThumbsUp,
      title: "Ücretsiz Kullanım",
      description: "Hizmet talebi oluşturmak ve teklif almak tamamen ücretsizdir.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#402e47] mb-4">
              Neden Hizmetia Güvenilir Bir Tercih?
            </h2>
            <p className="text-gray-600 mb-8">
              Büyük veya küçük her türlü iş için talebinizi Hizmetia'da oluşturun ve
              işi yapabilecek onaylı profesyonellerden teklifler alın.
            </p>

            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#402e47] mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=700&fit=crop"
              alt="Profesyonel ekip"
              className="rounded-2xl shadow-xl w-full"
            />
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 max-w-xs">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop"
                  alt="Müşteri"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="flex text-yellow-400 text-sm mb-1">
                    {"★★★★★"}
                  </div>
                  <p className="text-sm text-gray-600">"Harika bir deneyimdi!"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
