export default function Stats() {
  const stats = [
    { value: "12.500+", label: "Profesyonel" },
    { value: "50+", label: "Hizmet Kategorisi" },
    { value: "250.000+", label: "Değerlendirme" },
  ];

  return (
    <section className="bg-white py-12 border-b">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center ${index !== 0 ? "border-l border-gray-200" : ""}`}
            >
              <div className="text-2xl md:text-4xl font-bold text-[#402e47]">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-600 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
