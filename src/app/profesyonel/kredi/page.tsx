"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Coins,
  CreditCard,
  CheckCircle,
  Zap,
  Star,
  TrendingUp,
  Gift,
  ArrowRight,
  History,
  Wallet,
  ShieldCheck,
} from "lucide-react";

const creditPackages = [
  {
    id: "starter",
    name: "Başlangıç",
    credits: 50,
    price: 249,
    perCredit: 4.98,
    popular: false,
    bonus: 0,
    features: ["50 Kredi", "Temel talepler için ideal", "30 gün geçerlilik"],
  },
  {
    id: "standard",
    name: "Standart",
    credits: 120,
    price: 499,
    perCredit: 4.16,
    popular: true,
    bonus: 20,
    savings: 17,
    features: ["100 + 20 Bonus Kredi", "En popüler paket", "60 gün geçerlilik", "%17 tasarruf"],
  },
  {
    id: "professional",
    name: "Profesyonel",
    credits: 300,
    price: 999,
    perCredit: 3.33,
    popular: false,
    bonus: 50,
    savings: 33,
    features: ["250 + 50 Bonus Kredi", "Yoğun kullanım için", "90 gün geçerlilik", "%33 tasarruf"],
  },
  {
    id: "enterprise",
    name: "Kurumsal",
    credits: 600,
    price: 1799,
    perCredit: 3.00,
    popular: false,
    bonus: 100,
    savings: 40,
    features: ["500 + 100 Bonus Kredi", "Büyük işletmeler için", "120 gün geçerlilik", "%40 tasarruf"],
  },
];

const creditCosts = [
  { category: "Küçük İşler (0-5.000 TL)", cost: 100 },
  { category: "Orta İşler (5.000-20.000 TL)", cost: 150 },
  { category: "Büyük İşler (20.000-50.000 TL)", cost: 200 },
  { category: "Proje Bazlı İşler (50.000+ TL)", cost: 500 },
];

const recentTransactions = [
  { id: 1, type: "purchase", description: "Standart Paket Satın Alma", credits: 120, date: "06.01.2026", status: "completed" },
  { id: 2, type: "spend", description: "Teklif: Mutfak Tadilatı", credits: -5, date: "05.01.2026", status: "completed" },
  { id: 3, type: "spend", description: "Teklif: Elektrik Arızası", credits: -3, date: "04.01.2026", status: "completed" },
  { id: 4, type: "refund", description: "İptal Edilen Teklif İadesi", credits: 5, date: "03.01.2026", status: "completed" },
  { id: 5, type: "spend", description: "Teklif: Site Güvenlik Sistemi", credits: -8, date: "02.01.2026", status: "completed" },
];

export default function CreditPage() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const currentBalance = 87;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#402e47] text-white py-4">
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
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Coins className="w-5 h-5 text-yellow-400" />
              <span className="font-bold">{currentBalance}</span>
              <span className="text-white/70">Kredi</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Balance Card */}
        <Card className="mb-8 bg-gradient-to-r from-[#402e47] to-[#5a4160] text-white">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                  <Wallet className="w-8 h-8 text-yellow-400" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Mevcut Bakiye</p>
                  <p className="text-3xl font-bold">{currentBalance} <span className="text-lg font-normal">Kredi</span></p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-green-400" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Bu Ay Harcanan</p>
                  <p className="text-3xl font-bold">43 <span className="text-lg font-normal">Kredi</span></p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                  <Star className="w-8 h-8 text-orange-400" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Kazanılan İş</p>
                  <p className="text-3xl font-bold">12 <span className="text-lg font-normal">Bu Ay</span></p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="packages" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="packages">Kredi Paketleri</TabsTrigger>
            <TabsTrigger value="history">Geçmiş</TabsTrigger>
            <TabsTrigger value="pricing">Fiyatlandırma</TabsTrigger>
          </TabsList>

          {/* Credit Packages Tab */}
          <TabsContent value="packages">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#402e47] mb-2">Kredi Paketleri</h2>
              <p className="text-gray-600">İhtiyacınıza uygun paketi seçin ve hemen kredi yükleyin</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {creditPackages.map((pkg) => (
                <Card
                  key={pkg.id}
                  className={`relative overflow-hidden transition-all hover:shadow-lg ${
                    pkg.popular ? "ring-2 ring-primary" : ""
                  } ${selectedPackage === pkg.id ? "ring-2 ring-primary" : ""}`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                      EN POPÜLER
                    </div>
                  )}
                  {pkg.bonus > 0 && (
                    <div className="absolute top-0 left-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-br-lg flex items-center gap-1">
                      <Gift className="w-3 h-3" />
                      +{pkg.bonus} BONUS
                    </div>
                  )}
                  <CardHeader className="pt-8">
                    <CardTitle className="text-lg text-[#402e47]">{pkg.name}</CardTitle>
                    <div className="mt-2">
                      <span className="text-4xl font-bold text-[#402e47]">{pkg.credits}</span>
                      <span className="text-gray-500 ml-1">Kredi</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-primary">{pkg.price} TL</span>
                      <p className="text-sm text-gray-500">Kredi başına {pkg.perCredit.toFixed(2)} TL</p>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Dialog open={isPaymentOpen && selectedPackage === pkg.id} onOpenChange={(open) => {
                      setIsPaymentOpen(open);
                      if (!open) setSelectedPackage(null);
                    }}>
                      <DialogTrigger asChild>
                        <Button
                          className={`w-full ${pkg.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                          variant={pkg.popular ? "default" : "outline"}
                          onClick={() => {
                            setSelectedPackage(pkg.id);
                            setIsPaymentOpen(true);
                          }}
                        >
                          Satın Al
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>Kredi Satın Al</DialogTitle>
                          <DialogDescription>
                            {pkg.name} paketi - {pkg.credits} Kredi
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="bg-gray-50 rounded-lg p-4">
                            <div className="flex justify-between mb-2">
                              <span>Paket</span>
                              <span className="font-medium">{pkg.name}</span>
                            </div>
                            <div className="flex justify-between mb-2">
                              <span>Kredi</span>
                              <span className="font-medium">{pkg.credits}</span>
                            </div>
                            {pkg.bonus > 0 && (
                              <div className="flex justify-between mb-2 text-orange-600">
                                <span>Bonus</span>
                                <span className="font-medium">+{pkg.bonus}</span>
                              </div>
                            )}
                            <div className="border-t pt-2 mt-2 flex justify-between font-bold">
                              <span>Toplam</span>
                              <span className="text-primary">{pkg.price} TL</span>
                            </div>
                          </div>

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
                            <ShieldCheck className="w-4 h-4 text-green-600" />
                            <span>256-bit SSL ile güvenli ödeme</span>
                          </div>

                          <Button className="w-full bg-primary hover:bg-primary/90">
                            <CreditCard className="w-4 h-4 mr-2" />
                            {pkg.price} TL Öde
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Benefits */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-[#402e47] mb-2">Anında Yükleme</h3>
                  <p className="text-sm text-gray-600">Ödeme onaylandıktan hemen sonra krediler hesabınıza yüklenir</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Gift className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-[#402e47] mb-2">Bonus Krediler</h3>
                  <p className="text-sm text-gray-600">Büyük paketlerde ekstra bonus krediler kazanın</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <ShieldCheck className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-[#402e47] mb-2">Güvenli Ödeme</h3>
                  <p className="text-sm text-gray-600">256-bit SSL şifreleme ile güvenli ödeme</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#402e47] mb-2">Kredi Geçmişi</h2>
              <p className="text-gray-600">Son kredi hareketlerinizi görüntüleyin</p>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  {recentTransactions.map((tx) => (
                    <div key={tx.id} className="flex items-center justify-between p-4 hover:bg-gray-50">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          tx.type === "purchase" ? "bg-green-100" :
                          tx.type === "refund" ? "bg-blue-100" :
                          "bg-gray-100"
                        }`}>
                          {tx.type === "purchase" ? (
                            <CreditCard className="w-5 h-5 text-green-600" />
                          ) : tx.type === "refund" ? (
                            <ArrowRight className="w-5 h-5 text-blue-600 rotate-180" />
                          ) : (
                            <Coins className="w-5 h-5 text-gray-600" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-[#402e47]">{tx.description}</p>
                          <p className="text-sm text-gray-500">{tx.date}</p>
                        </div>
                      </div>
                      <div className={`font-bold ${tx.credits > 0 ? "text-green-600" : "text-gray-600"}`}>
                        {tx.credits > 0 ? "+" : ""}{tx.credits} Kredi
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Pricing Tab */}
          <TabsContent value="pricing">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#402e47] mb-2">Teklif Fiyatlandırması</h2>
              <p className="text-gray-600">Her teklif için harcanacak kredi miktarı</p>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {creditCosts.map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b last:border-0">
                      <div>
                        <p className="font-medium text-[#402e47]">{item.category}</p>
                      </div>
                      <Badge variant="secondary" className="bg-primary/10 text-primary text-base px-4 py-2">
                        {item.cost} Kredi
                      </Badge>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-800 mb-2">Bilgi</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>- Teklif kabul edilmezse kredi iadesi yapılmaz</li>
                    <li>- İş sahibi talebi iptal ederse %50 iade yapılır</li>
                    <li>- Başarıyla tamamlanan işlerde bonus kredi kazanabilirsiniz</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
