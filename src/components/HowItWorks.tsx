import { Button } from "@/components/ui/button";
import { ClipboardList, MessageSquare, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function HowItWorks() {
  const steps = [
    {
      step: "ADIM 1",
      title: "İhtiyacınızı Tanımlayın",
      description: "Hizmet ihtiyacınızı ücretsiz olarak girin ve detayları belirtin.",
      icon: ClipboardList,
      color: "bg-primary/10 text-primary",
    },
    {
      step: "ADIM 2",
      title: "Teklifler Alın",
      description: "İlgili profesyonellerden teklifler ve mesajlar alın.",
      icon: MessageSquare,
      color: "bg-orange-100 text-orange-600",
    },
    {
      step: "ADIM 3",
      title: "Karşılaştırın ve Seçin",
      description: "Profilleri inceleyin, değerlendirmeleri okuyun ve en uygun profesyoneli seçin.",
      icon: CheckCircle,
      color: "bg-green-100 text-green-600",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-[#402e47] mb-12">
          Nasıl Çalışır?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={step.step} className="text-center">
              <div className={`w-20 h-20 mx-auto rounded-full ${step.color} flex items-center justify-center mb-4`}>
                <step.icon className="w-10 h-10" />
              </div>
              <div className="text-sm font-semibold text-primary mb-2">
                {step.step}
              </div>
              <h3 className="text-xl font-bold text-[#402e47] mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" className="border-[#402e47] text-[#402e47] hover:bg-[#402e47] hover:text-white">
            <Link href="/nasil-calisir">Nasıl Çalışır?</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
