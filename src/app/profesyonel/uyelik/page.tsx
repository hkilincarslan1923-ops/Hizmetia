"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Crown,
  Zap,
  Star,
  Check,
  X,
  Coins,
  TrendingUp,
  Shield,
  Clock,
  Users,
  Award,
  Sparkles,
  CreditCard,
  ArrowRight,
  CheckCircle,
  Loader2,
} from "lucide-react";

const subscriptionPlans = [
  {
    id: "free",
    name: "Ücretsiz",
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: "Başlangıç için ideal",
    icon: Zap,
    color: "bg-gray-100 text-gray-600",
    popular: false,
    features: [
      { text: "Profil oluşturma", included: true },
      { text: "Aylık 5 teklif hakkı", included: true },
      { text: "Temel arama görünürlüğü", included: true },
      { text: "E-posta desteği", included: true },
      { text: "Öncelikli listeleme", included: false },
      { text: "Rozetler ve öne çıkma", included: false },
      { text: "Detaylı analitik", included: false },
      { text: "Reklamsız deneyim", included: false },
    ],
    monthlyCredits: 50,
    maxOffers: 5,
  },
  {
    id: "starter",
    name: "Başlangıç",
    monthlyPrice: 299,
    yearlyPrice: 2990,
    description: "Küçük işletmeler için",
    icon: Star,
    color: "bg-blue-100 text-blue-600",
    popular: false,
    features: [
      { text: "Profil oluşturma", included: true },
      { text: "Aylık 30 teklif hakkı", included: true },
      { text: "Gelişmiş arama görünürlüğü", included: true },
      { text: "Öncelikli e-posta desteği", included: true },
      { text: "Temel öncelikli listeleme", included: true },
      { text: "Rozetler ve öne çıkma", included: false },
      { text: "Detaylı analitik", included: false },
      { text: "Reklamsız deneyim", included: false },
    ],
    monthlyCredits: 200,
    maxOffers: 30,
    savings: 0,
  },
  {
    id: "professional",
    name: "Profesyonel",
    monthlyPrice: 599,
    yearlyPrice: 5990,
    description: "Büyüyen işletmeler için",
    icon: Crown,
    color: "bg-primary/20 text-primary",
    popular: true,
    features: [
      { text: "Profil oluşturma", included: true },
      { text: "Aylık 100 teklif hakkı", included: true },
      { text: "En üst arama görünürlüğü", included: true },
      { text: "7/24 öncelikli destek", included: true },
      { text: "Gelişmiş öncelikli listeleme", included: true },
      { text: "\"Pro\" rozeti", included: true },
      { text: "Detaylı analitik", included: true },
      { text: "Reklamsız deneyim", included: false },
    ],
    monthlyCredits: 500,
    maxOffers: 100,
    savings: 17,
  },
  {
    id: "enterprise",
    name: "Kurumsal",
    monthlyPrice: 1299,
    yearlyPrice: 12990,
    description: "Büyük firmalar için",
    icon: Award,
    color: "bg-yellow-100 text-yellow-600",
    popular: false,
    features: [
      { text: "Profil oluşturma", included: true },
      { text: "Sınırsız teklif hakkı", included: true },
      { text: "Premium arama görünürlüğü", included: true },
      { text: "Özel hesap yöneticisi", included: true },
      { text: "En üst öncelikli listeleme", included: true },
      { text: "\"Kurumsal\" rozeti", included: true },
      { text: "Gelişmiş analitik + API", included: true },
      { text: "Reklamsız deneyim", included: true },
    ],
    monthlyCredits: 1500,
    maxOffers: -1, // Unlimited
    savings: 17,
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Daha Fazla İş Fırsatı",
    description: "Üyelik paketleri ile daha fazla teklif verin, daha çok iş kazanın.",
  },
  {
    icon: Crown,
    title: "Öncelikli Listeleme",
    description: "Aramalarda üst sıralarda görünün, müşteriler sizi daha kolay bulsun.",
  },
  {
    icon: Shield,
    title: "Güvenilirlik Rozeti",
    description: "Pro ve Kurumsal rozetleri ile güvenilirliğinizi artırın.",
  },
  {
    icon: Clock,
    title: "7/24 Destek",
    description: "Premium paketlerde öncelikli müşteri desteği.",
  },
];

export default function SubscriptionPage() {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const currentPlan = "free";

  const handleSubscribe = (planId: string) => {
    setSelectedPlan(planId);
    setIsPaymentOpen(true);
  };

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsPaymentOpen(false);
      alert("Üyeliğiniz başarıyla aktifleştirildi!");
    }, 2000);
  };

  const getSelectedPlanDetails = () => {
    return subscriptionPlans.find(p => p.id === selectedPlan);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#402e47] to-[#5a4160] text-white py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l6.9 3.45L12 11.09 5.1 7.63 12 4.18zM4 8.82l7 3.5v7.36l-7-3.5V8.82zm9 10.86v-7.36l7-3.5v7.36l-7 3.5z"/>
            </svg>
            <span className="text-xl font-bold">Hizmetia</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/profesyonel/panel" className="text-white/80 hover:text-white">
              Panelim
            </Link>
            <Link href="/profesyonel/kredi" className="text-white/80 hover:text-white">
              Kredi Yükle
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            <Sparkles className="w-3 h-3 mr-1" />
            Üyelik Paketleri
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-[#402e47] mb-4">
            İşletmenizi Büyütün
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Size uygun üyelik paketini seçin ve daha fazla müşteriye ulaşın.
            Tüm paketlerde aylık kredi ve özel avantajlar dahil.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm ${!isYearly ? "text-[#402e47] font-medium" : "text-gray-500"}`}>
              Aylık
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
            />
            <span className={`text-sm ${isYearly ? "text-[#402e47] font-medium" : "text-gray-500"}`}>
              Yıllık
              <Badge className="ml-2 bg-green-100 text-green-700">%17 Tasarruf</Badge>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {subscriptionPlans.map((plan) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            const period = isYearly ? "/yıl" : "/ay";
            const isCurrentPlan = currentPlan === plan.id;

            return (
              <Card
                key={plan.id}
                className={`relative overflow-hidden transition-all hover:shadow-lg ${
                  plan.popular ? "ring-2 ring-primary" : ""
                } ${isCurrentPlan ? "bg-gray-50" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    EN POPÜLER
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg ${plan.color} flex items-center justify-center mb-3`}>
                    <plan.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl text-[#402e47]">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-[#402e47]">
                        {price === 0 ? "Ücretsiz" : `${price.toLocaleString()} TL`}
                      </span>
                      {price > 0 && <span className="text-gray-500">{period}</span>}
                    </div>
                    {isYearly && plan.monthlyPrice > 0 && (
                      <p className="text-sm text-gray-500 mt-1">
                        Aylık {Math.round(plan.yearlyPrice / 12).toLocaleString()} TL
                      </p>
                    )}
                  </div>

                  {/* Credits Info */}
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Coins className="w-4 h-4 text-yellow-500" />
                      <span className="font-medium">{plan.monthlyCredits} Kredi/ay</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm mt-1">
                      <Users className="w-4 h-4 text-blue-500" />
                      <span>
                        {plan.maxOffers === -1 ? "Sınırsız" : plan.maxOffers} teklif/ay
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        {feature.included ? (
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        ) : (
                          <X className="w-4 h-4 text-gray-300 flex-shrink-0" />
                        )}
                        <span className={feature.included ? "text-gray-700" : "text-gray-400"}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  {isCurrentPlan ? (
                    <Button disabled className="w-full" variant="outline">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Mevcut Paketiniz
                    </Button>
                  ) : plan.id === "free" ? (
                    <Button disabled className="w-full" variant="outline">
                      Ücretsiz Başlayın
                    </Button>
                  ) : (
                    <Button
                      className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                      variant={plan.popular ? "default" : "outline"}
                      onClick={() => handleSubscribe(plan.id)}
                    >
                      Hemen Başla
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-[#402e47] text-center mb-8">
            Üyelik Avantajları
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-[#402e47] mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#402e47] text-center mb-8">
            Sıkça Sorulan Sorular
          </h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-[#402e47] mb-2">
                  Üyeliğimi istediğim zaman iptal edebilir miyim?
                </h3>
                <p className="text-gray-600 text-sm">
                  Evet, üyeliğinizi istediğiniz zaman iptal edebilirsiniz. İptal ettiğinizde, mevcut dönemin sonuna kadar tüm avantajlardan yararlanmaya devam edersiniz.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-[#402e47] mb-2">
                  Paketimi yükseltebilir miyim?
                </h3>
                <p className="text-gray-600 text-sm">
                  Evet, istediğiniz zaman daha üst bir pakete geçebilirsiniz. Fark ücreti hesaplanarak faturalandırılır.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-[#402e47] mb-2">
                  Kullanmadığım krediler sonraki aya devreder mi?
                </h3>
                <p className="text-gray-600 text-sm">
                  Hayır, aylık krediler o ay içinde kullanılmalıdır ve sonraki aya devretmez. Ancak ayrıca satın aldığınız ek krediler 90 gün geçerlidir.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Payment Dialog */}
        <Dialog open={isPaymentOpen} onOpenChange={setIsPaymentOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Üyelik Satın Al</DialogTitle>
              <DialogDescription>
                {getSelectedPlanDetails()?.name} paketi için ödeme yapın
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              {/* Plan Summary */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between mb-2">
                  <span>Paket</span>
                  <span className="font-medium">{getSelectedPlanDetails()?.name}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Süre</span>
                  <span className="font-medium">{isYearly ? "1 Yıl" : "1 Ay"}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Aylık Kredi</span>
                  <span className="font-medium">{getSelectedPlanDetails()?.monthlyCredits}</span>
                </div>
                <div className="border-t pt-2 mt-2 flex justify-between font-bold">
                  <span>Toplam</span>
                  <span className="text-primary">
                    {isYearly
                      ? getSelectedPlanDetails()?.yearlyPrice.toLocaleString()
                      : getSelectedPlanDetails()?.monthlyPrice.toLocaleString()
                    } TL
                  </span>
                </div>
              </div>

              {/* Payment Form */}
              <div className="space-y-3">
                <div className="space-y-2">
                  <Label>Kart Numarası</Label>
                  <Input placeholder="1234 5678 9012 3456" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Son Kullanma</Label>
                    <Input placeholder="MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <Label>CVV</Label>
                    <Input placeholder="123" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Shield className="w-4 h-4 text-green-600" />
                <span>256-bit SSL ile güvenli ödeme</span>
              </div>

              <Button
                className="w-full bg-primary hover:bg-primary/90"
                onClick={handlePayment}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    İşleniyor...
                  </>
                ) : (
                  <>
                    <CreditCard className="w-4 h-4 mr-2" />
                    {isYearly
                      ? getSelectedPlanDetails()?.yearlyPrice.toLocaleString()
                      : getSelectedPlanDetails()?.monthlyPrice.toLocaleString()
                    } TL Öde
                  </>
                )}
              </Button>

              <p className="text-xs text-center text-gray-500">
                Ödeme yaparak{" "}
                <Link href="/uyelik-sozlesmesi" className="text-primary hover:underline">
                  Üyelik Sözleşmesi
                </Link>
                'ni kabul etmiş olursunuz.
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
