export default function AppDownload() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#402e47] mb-4">
              Uygulamayı İndirin
            </h2>
            <p className="text-gray-600 mb-6">
              Hizmet talep etmek ve yönetmek Hizmetia uygulaması ile çok daha kolay.
              Fotoğraf ekleyin, bildirimler alın ve profesyonellerle mesajlaşın - her şey telefonunuzdan.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <img
                  src="https://ext.same-assets.com/3769849481/108811137.svg"
                  alt="App Store'dan İndir"
                  className="h-12"
                />
              </a>
              <a
                href="#"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <img
                  src="https://ext.same-assets.com/3769849481/1652000069.svg"
                  alt="Google Play'den İndir"
                  className="h-12"
                />
              </a>
            </div>

            <p className="text-sm text-gray-500">
              Profesyonel misiniz?{" "}
              <a href="/profesyonel/uygulama" className="text-primary hover:underline">
                Profesyonel uygulamasını indirin
              </a>
            </p>
          </div>

          <div className="relative flex justify-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=600&fit=crop"
                alt="Hizmetia Uygulaması"
                className="rounded-3xl shadow-2xl"
              />
              {/* Phone Frame Overlay */}
              <div className="absolute inset-0 rounded-3xl ring-8 ring-gray-900" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
