"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Save, Upload } from "lucide-react";

export default function SettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(true);
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold text-[#402e47]">Ayarlar</h1>
        <p className="text-gray-600">Sistem ayarlarını yönetin</p>
      </div>

      <Tabs defaultValue="genel" className="space-y-6">
        <TabsList>
          <TabsTrigger value="genel">Genel</TabsTrigger>
          <TabsTrigger value="bildirimler">Bildirimler</TabsTrigger>
          <TabsTrigger value="kategoriler">Kategoriler</TabsTrigger>
          <TabsTrigger value="guvenlik">Güvenlik</TabsTrigger>
        </TabsList>

        {/* Genel Tab */}
        <TabsContent value="genel" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Site Bilgileri</CardTitle>
              <CardDescription>Temel site ayarlarını düzenleyin</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="siteName">Site Adı</Label>
                  <Input id="siteName" defaultValue="Hizmetia" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="siteUrl">Site URL</Label>
                  <Input id="siteUrl" defaultValue="https://hizmetia.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="siteDescription">Site Açıklaması</Label>
                <Textarea
                  id="siteDescription"
                  defaultValue="Güvenilir profesyoneller ile tanışmanın en kolay yolu. İhtiyacınızı tanımlayın, size uygun profesyonellerden teklifler alın."
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactEmail">İletişim E-posta</Label>
                <Input id="contactEmail" type="email" defaultValue="info@hizmetia.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="supportPhone">Destek Telefon</Label>
                <Input id="supportPhone" defaultValue="0850 123 4567" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Logo ve Görsel</CardTitle>
              <CardDescription>Site logosu ve favicon yükleyin</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Site Logosu</Label>
                  <div className="border-2 border-dashed rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600">Logo yüklemek için tıklayın</p>
                    <p className="text-xs text-gray-400 mt-1">PNG, SVG (max 2MB)</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Favicon</Label>
                  <div className="border-2 border-dashed rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600">Favicon yüklemek için tıklayın</p>
                    <p className="text-xs text-gray-400 mt-1">ICO, PNG (32x32px)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button className="bg-primary hover:bg-primary/90">
              <Save className="w-4 h-4 mr-2" />
              Değişiklikleri Kaydet
            </Button>
          </div>
        </TabsContent>

        {/* Bildirimler Tab */}
        <TabsContent value="bildirimler" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Bildirim Ayarları</CardTitle>
              <CardDescription>E-posta ve SMS bildirimlerini yönetin</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">E-posta Bildirimleri</p>
                  <p className="text-sm text-gray-500">Yeni talep ve tekliflerde e-posta gönder</p>
                </div>
                <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">SMS Bildirimleri</p>
                  <p className="text-sm text-gray-500">Önemli güncellemelerde SMS gönder</p>
                </div>
                <Switch checked={smsNotifications} onCheckedChange={setSmsNotifications} />
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>SMTP Sunucu</Label>
                <Input defaultValue="smtp.hizmetia.com" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>SMTP Port</Label>
                  <Input defaultValue="587" />
                </div>
                <div className="space-y-2">
                  <Label>SMTP Kullanıcı</Label>
                  <Input defaultValue="noreply@hizmetia.com" />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button className="bg-primary hover:bg-primary/90">
              <Save className="w-4 h-4 mr-2" />
              Değişiklikleri Kaydet
            </Button>
          </div>
        </TabsContent>

        {/* Kategoriler Tab */}
        <TabsContent value="kategoriler" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Hizmet Kategorileri</CardTitle>
              <CardDescription>Mevcut kategorileri yönetin</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
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
                ].map((category) => (
                  <div key={category} className="flex items-center justify-between py-2 border-b last:border-0">
                    <span>{category}</span>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Düzenle</Button>
                      <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">Sil</Button>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="mt-4 w-full">
                + Yeni Kategori Ekle
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Güvenlik Tab */}
        <TabsContent value="guvenlik" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Güvenlik Ayarları</CardTitle>
              <CardDescription>Sistem güvenlik ayarlarını yönetin</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Bakım Modu</p>
                  <p className="text-sm text-gray-500">Siteyi bakım moduna al</p>
                </div>
                <Switch checked={maintenanceMode} onCheckedChange={setMaintenanceMode} />
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>Oturum Süresi (dakika)</Label>
                <Input type="number" defaultValue="60" />
              </div>
              <div className="space-y-2">
                <Label>Maksimum Giriş Denemesi</Label>
                <Input type="number" defaultValue="5" />
              </div>
              <Separator />
              <div>
                <Button variant="outline" className="text-red-600 hover:text-red-700">
                  Tüm Oturumları Sonlandır
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button className="bg-primary hover:bg-primary/90">
              <Save className="w-4 h-4 mr-2" />
              Değişiklikleri Kaydet
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
