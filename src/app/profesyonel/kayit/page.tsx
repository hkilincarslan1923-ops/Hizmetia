"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Eye, EyeOff, Mail, Lock, User, Phone, Building2, MapPin, CheckCircle } from "lucide-react";

const categories = [
  "Tesisat",
  "Tadilat ve Renovasyon",
  "Boya ve Dekorasyon",
  "Elektrik",
  "Bahçe ve Peyzaj",
  "Kentsel Dönüşüm",
  "Güçlendirme",
  "Site Yönetimi",
  "Apartman Yönetimi",
  "Yapı Kontrol",
  "Güvenlik Hizmetleri",
  "Güvenlik Sistemleri",
];

const benefits = [
  "Ücretsiz profil oluşturun",
  "Günlük yeni iş fırsatları alın",
  "Müşterilerle doğrudan iletişim kurun",
  "Değerlendirmelerle itibarınızı artırın",
];

export default function ProfessionalRegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: "",
    ownerName: "",
    email: "",
    phone: "",
    password: "",
    category: "",
    city: "",
    district: "",
    address: "",
    description: "",
    acceptTerms: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/profesyonel/basarili");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#402e47] to-[#5a4160]">
      <div className="container mx-auto px-4 py-8">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l6.9 3.45L12 11.09 5.1 7.63 12 4.18zM4 8.82l7 3.5v7.36l-7-3.5V8.82zm9 10.86v-7.36l7-3.5v7.36l-7 3.5z"/>
          </svg>
          <span className="text-3xl font-bold text-white">Hizmetia</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left - Benefits */}
          <div className="text-white space-y-8 py-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Profesyonel Olarak Katılın
              </h1>
              <p className="text-white/80 text-lg">
                Hizmetia ile işletmenizi büyütün. Binlerce potansiyel müşteriyle buluşun.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=60&h=60&fit=crop"
                  alt="Profesyonel"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">Mehmet Yıldız</p>
                  <p className="text-white/70 text-sm">Usta Mehmet İnşaat</p>
                </div>
              </div>
              <p className="text-white/90 italic">
                "Hizmetia sayesinde aylık iş sayımı 3 katına çıkardım. Platform gerçekten işe yarıyor!"
              </p>
            </div>
          </div>

          {/* Right - Form */}
          <Card className="shadow-2xl border-0">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl text-[#402e47]">
                {step === 1 ? "Hesap Bilgileri" : "İşletme Bilgileri"}
              </CardTitle>
              <CardDescription>
                Adım {step} / 2
              </CardDescription>
              {/* Progress Bar */}
              <div className="flex gap-2 mt-4">
                <div className={`h-1 flex-1 rounded ${step >= 1 ? "bg-primary" : "bg-gray-200"}`} />
                <div className={`h-1 flex-1 rounded ${step >= 2 ? "bg-primary" : "bg-gray-200"}`} />
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {step === 1 ? (
                  <>
                    {/* Owner Name */}
                    <div className="space-y-2">
                      <Label htmlFor="ownerName">Ad Soyad</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="ownerName"
                          placeholder="Adınız Soyadınız"
                          value={formData.ownerName}
                          onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email">E-posta</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="ornek@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="0532 123 4567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                      <Label htmlFor="password">Şifre</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="En az 8 karakter"
                          value={formData.password}
                          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                          className="pl-10 pr-10"
                          minLength={8}
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Company Name */}
                    <div className="space-y-2">
                      <Label htmlFor="companyName">İşletme Adı</Label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="companyName"
                          placeholder="İşletme veya firma adınız"
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    {/* Category */}
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
                            <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* City & District */}
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
                            required
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
                          required
                        />
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                      <Label htmlFor="description">İşletme Açıklaması</Label>
                      <Textarea
                        id="description"
                        placeholder="Sunduğunuz hizmetler ve deneyiminiz hakkında kısa bir açıklama..."
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        rows={3}
                      />
                    </div>

                    {/* Terms */}
                    <div className="flex items-start gap-2">
                      <Checkbox
                        id="acceptTerms"
                        checked={formData.acceptTerms}
                        onCheckedChange={(checked) => setFormData({ ...formData, acceptTerms: checked as boolean })}
                        className="mt-1"
                        required
                      />
                      <Label htmlFor="acceptTerms" className="text-sm font-normal cursor-pointer leading-relaxed">
                        <Link href="/profesyonel/sozlesme" className="text-primary hover:underline">Profesyonel Sözleşmesi</Link>
                        'ni okudum ve kabul ediyorum.
                      </Label>
                    </div>
                  </>
                )}

                {/* Buttons */}
                <div className="flex gap-3 pt-4">
                  {step === 2 && (
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1"
                      onClick={() => setStep(1)}
                    >
                      Geri
                    </Button>
                  )}
                  <Button
                    type="submit"
                    className="flex-1 bg-primary hover:bg-primary/90 h-11"
                    disabled={isLoading || (step === 2 && !formData.acceptTerms)}
                  >
                    {isLoading ? "Kaydediliyor..." : step === 1 ? "Devam Et" : "Kaydı Tamamla"}
                  </Button>
                </div>
              </form>

              {/* Login Link */}
              <p className="text-center text-sm text-gray-600 mt-6">
                Zaten hesabınız var mı?{" "}
                <Link href="/giris" className="text-primary font-medium hover:underline">
                  Giriş Yapın
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
