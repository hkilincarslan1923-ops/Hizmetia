"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, Upload, Trash2, ImageIcon, Info } from "lucide-react";
import { getSettings, saveSettings } from "@/lib/store";
import type { SiteSettings } from "@/lib/types";

export default function LogoPage() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [logoUrl, setLogoUrl] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const loadedSettings = getSettings();
    setSettings(loadedSettings);
    setLogoUrl(loadedSettings.logo || "");
  }, []);

  const handleSave = () => {
    if (settings) {
      const updatedSettings = { ...settings, logo: logoUrl };
      saveSettings(updatedSettings);
      setSettings(updatedSettings);
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 2000);
    }
  };

  const handleRemove = () => {
    setLogoUrl("");
    if (settings) {
      const updatedSettings = { ...settings, logo: "" };
      saveSettings(updatedSettings);
      setSettings(updatedSettings);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Logo Ayarları</h1>
        <p className="text-gray-600 mt-1">
          Sitenizde görünecek logoyu yönetin
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Current Logo Preview */}
        <Card>
          <CardHeader>
            <CardTitle>Mevcut Logo</CardTitle>
            <CardDescription>Sitenizde şu anda görünen logo</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Light Background Preview */}
              <div>
                <p className="text-sm text-gray-500 mb-2">Açık Arka Plan</p>
                <div className="flex justify-center p-8 bg-white rounded-lg border">
                  {settings?.logo ? (
                    <img
                      src={settings.logo}
                      alt="Site Logo"
                      className="max-h-16 object-contain"
                    />
                  ) : (
                    <div className="flex items-center gap-2 text-[#402e47]">
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l6.9 3.45L12 11.09 5.1 7.63 12 4.18zM4 8.82l7 3.5v7.36l-7-3.5V8.82zm9 10.86v-7.36l7-3.5v7.36l-7 3.5z"/>
                      </svg>
                      <span className="text-xl font-bold">Hizmetia</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Dark Background Preview */}
              <div>
                <p className="text-sm text-gray-500 mb-2">Koyu Arka Plan</p>
                <div className="flex justify-center p-8 bg-[#402e47] rounded-lg">
                  {settings?.logo ? (
                    <img
                      src={settings.logo}
                      alt="Site Logo"
                      className="max-h-16 object-contain brightness-0 invert"
                    />
                  ) : (
                    <div className="flex items-center gap-2 text-white">
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l6.9 3.45L12 11.09 5.1 7.63 12 4.18zM4 8.82l7 3.5v7.36l-7-3.5V8.82zm9 10.86v-7.36l7-3.5v7.36l-7 3.5z"/>
                      </svg>
                      <span className="text-xl font-bold">Hizmetia</span>
                    </div>
                  )}
                </div>
              </div>

              {!settings?.logo && (
                <p className="text-sm text-gray-500 text-center">
                  Logo yüklenmemiş - Varsayılan logo kullanılıyor
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Logo Upload */}
        <Card>
          <CardHeader>
            <CardTitle>Logo Güncelle</CardTitle>
            <CardDescription>
              Logo URL'si girerek logonuzu güncelleyin
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="logoUrl">Logo URL</Label>
              <Input
                id="logoUrl"
                placeholder="https://example.com/logo.png"
                value={logoUrl}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLogoUrl(e.target.value)}
              />
              <p className="text-xs text-gray-500">
                PNG veya SVG formatında, şeffaf arka planlı logo önerilir
              </p>
            </div>

            {logoUrl && (
              <div className="space-y-2">
                <Label>Önizleme</Label>
                <div className="p-6 bg-gray-100 rounded-lg flex justify-center">
                  <img
                    src={logoUrl}
                    alt="Logo Önizleme"
                    className="max-h-20 object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              </div>
            )}

            <div className="flex gap-4">
              <Button
                onClick={handleSave}
                disabled={isSaved}
                className="flex-1 bg-[#402e47] hover:bg-[#5a4460]"
              >
                {isSaved ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Kaydedildi
                  </>
                ) : (
                  <>
                    <Upload className="w-4 h-4 mr-2" />
                    Kaydet
                  </>
                )}
              </Button>
              {settings?.logo && (
                <Button
                  variant="outline"
                  onClick={handleRemove}
                  className="text-red-600 border-red-200 hover:bg-red-50"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Kaldır
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Tips */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="w-5 h-5" />
              Logo Yükleme İpuçları
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <ImageIcon className="w-5 h-5 text-[#402e47]" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Format</h4>
                  <p className="text-sm text-gray-500">
                    PNG veya SVG formatı kullanın. SVG vektörel olduğu için her boyutta net görünür.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Boyut</h4>
                  <p className="text-sm text-gray-500">
                    Minimum 200x60 piksel önerilir. Çok büyük dosyalar yavaş yüklenir.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Şeffaf Arka Plan</h4>
                  <p className="text-sm text-gray-500">
                    Şeffaf arka planlı logo hem açık hem koyu temalarda iyi görünür.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sample Logos */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Örnek Logo URL'leri</CardTitle>
            <CardDescription>
              Test etmek için bu URL'lerden birini kullanabilirsiniz
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  name: "Yeşil Ev Logosu",
                  url: "https://www.vhv.rs/dpng/d/517-5178520_house-cleaning-png-green-cleaning-services-logo-transparent.png",
                },
                {
                  name: "Temizlik Araçları",
                  url: "https://www.vhv.rs/dpng/d/606-6067300_janitorial-cleaning-services-cleaning-tools-vector-png-transparent.png",
                },
              ].map((sample) => (
                <div
                  key={sample.name}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={sample.url}
                      alt={sample.name}
                      className="h-10 w-16 object-contain"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      {sample.name}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setLogoUrl(sample.url)}
                  >
                    Kullan
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
