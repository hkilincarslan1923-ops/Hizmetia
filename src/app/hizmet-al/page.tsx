"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, ArrowRight, ArrowLeft, Upload, MapPin, Calendar } from "lucide-react";

const categories = [
  { id: "tesisat", name: "Tesisat" },
  { id: "tadilat", name: "Tadilat ve Renovasyon" },
  { id: "boya", name: "Boya ve Dekorasyon" },
  { id: "elektrik", name: "Elektrik" },
  { id: "bahce", name: "Bahçe ve Peyzaj" },
  { id: "kentsel-donusum", name: "Kentsel Dönüşüm" },
  { id: "guclendirme", name: "Güçlendirme" },
  { id: "site-yonetimi", name: "Site Yönetimi" },
  { id: "apartman-yonetimi", name: "Apartman Yönetimi" },
  { id: "yapi-kontrol", name: "Yapı Kontrol" },
  { id: "guvenlik-hizmetleri", name: "Güvenlik Hizmetleri" },
  { id: "guvenlik-sistemleri", name: "Güvenlik Sistemleri" },
];

const steps = [
  { id: 1, title: "Hizmet Seçimi" },
  { id: 2, title: "Detaylar" },
  { id: 3, title: "Konum & Zaman" },
  { id: 4, title: "İletişim" },
];

export default function ServiceRequestPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    description: "",
    budget: "",
    city: "",
    district: "",
    address: "",
    preferredDate: "",
    flexibility: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/hizmet-al/basarili");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold ${
                    currentStep > step.id
                      ? "bg-primary text-white"
                      : currentStep === step.id
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}>
                    {currentStep > step.id ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      step.id
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`hidden sm:block w-20 lg:w-32 h-1 mx-2 ${
                      currentStep > step.id ? "bg-primary" : "bg-gray-200"
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between">
              {steps.map((step) => (
                <span
                  key={step.id}
                  className={`text-xs sm:text-sm ${
                    currentStep >= step.id ? "text-[#402e47] font-medium" : "text-gray-400"
                  }`}
                >
                  {step.title}
                </span>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Category Selection */}
            {currentStep === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#402e47]">Hangi hizmete ihtiyacınız var?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Hizmet Kategorisi</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData({ ...formData, category: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Kategori seçin" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((cat) => (
                          <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="title">Hizmet Başlığı</Label>
                    <Input
                      id="title"
                      placeholder="Örn: Mutfak tadilatı, Elektrik arızası..."
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Details */}
            {currentStep === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#402e47]">İhtiyacınızı detaylandırın</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="description">Açıklama</Label>
                    <Textarea
                      id="description"
                      placeholder="İhtiyacınız hakkında detaylı bilgi verin. Ne yapılması gerekiyor? Mevcut durum nedir?"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      rows={5}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Tahmini Bütçe</Label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) => setFormData({ ...formData, budget: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Bütçe aralığı seçin" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-5000">0 - 5.000 TL</SelectItem>
                        <SelectItem value="5000-15000">5.000 - 15.000 TL</SelectItem>
                        <SelectItem value="15000-30000">15.000 - 30.000 TL</SelectItem>
                        <SelectItem value="30000-50000">30.000 - 50.000 TL</SelectItem>
                        <SelectItem value="50000+">50.000 TL ve üzeri</SelectItem>
                        <SelectItem value="unknown">Bilmiyorum</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Fotoğraf Ekle (Opsiyonel)</Label>
                    <div className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors">
                      <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                      <p className="text-sm text-gray-600">Fotoğraf yüklemek için tıklayın</p>
                      <p className="text-xs text-gray-400 mt-1">JPG, PNG (max 5MB)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Location & Time */}
            {currentStep === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#402e47]">Konum ve Zaman</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">İl</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="city"
                          placeholder="İl"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="district">İlçe</Label>
                      <Input
                        id="district"
                        placeholder="İlçe"
                        value={formData.district}
                        onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Adres (Opsiyonel)</Label>
                    <Textarea
                      id="address"
                      placeholder="Detaylı adres bilgisi"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      rows={2}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferredDate">Tercih Edilen Tarih</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Esneklik</Label>
                    <Select
                      value={formData.flexibility}
                      onValueChange={(value) => setFormData({ ...formData, flexibility: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Ne kadar esnek?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="flexible">Esneyebilirim</SelectItem>
                        <SelectItem value="somewhat">Biraz esneyebilirim</SelectItem>
                        <SelectItem value="strict">Kesin tarih</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 4: Contact */}
            {currentStep === 4 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#402e47]">İletişim Bilgileriniz</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ad Soyad</Label>
                    <Input
                      id="name"
                      placeholder="Adınız Soyadınız"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-posta</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ornek@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="0532 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="bg-primary/10 rounded-lg p-4 mt-6">
                    <h4 className="font-medium text-[#402e47] mb-2">Özet</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p><strong>Hizmet:</strong> {formData.title || "-"}</p>
                      <p><strong>Konum:</strong> {formData.city}, {formData.district}</p>
                      <p><strong>Bütçe:</strong> {formData.budget || "-"}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Geri
              </Button>

              {currentStep < 4 ? (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="bg-primary hover:bg-primary/90 flex items-center gap-2"
                >
                  Devam
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Gönderiliyor..." : "Talebi Gönder"}
                </Button>
              )}
            </div>
          </form>

          {/* Info Box */}
          <div className="mt-8 bg-white rounded-lg p-6 border">
            <h3 className="font-semibold text-[#402e47] mb-3">Nasıl Çalışır?</h3>
            <div className="grid sm:grid-cols-3 gap-4 text-sm">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-semibold">1</span>
                </div>
                <p className="text-gray-600">İhtiyacınızı tanımlayın</p>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-semibold">2</span>
                </div>
                <p className="text-gray-600">Profesyonellerden teklif alın</p>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-semibold">3</span>
                </div>
                <p className="text-gray-600">En uygununu seçin</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
