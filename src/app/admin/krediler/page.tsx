"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Coins,
  TrendingUp,
  CreditCard,
  Search,
  Plus,
  Edit,
  Trash2,
  Gift,
  DollarSign,
  Package,
  Users,
} from "lucide-react";

const creditPackages = [
  { id: 1, name: "Başlangıç", credits: 50, bonus: 0, price: 249, status: "Aktif" },
  { id: 2, name: "Standart", credits: 100, bonus: 20, price: 499, status: "Aktif" },
  { id: 3, name: "Profesyonel", credits: 250, bonus: 50, price: 999, status: "Aktif" },
  { id: 4, name: "Kurumsal", credits: 500, bonus: 100, price: 1799, status: "Aktif" },
];

const recentPurchases = [
  {
    id: 1,
    professional: "Usta Mehmet İnşaat",
    package: "Standart",
    credits: 120,
    amount: 499,
    date: "06.01.2026 14:32",
    status: "Tamamlandı",
  },
  {
    id: 2,
    professional: "Elektrik Pro",
    package: "Profesyonel",
    credits: 300,
    amount: 999,
    date: "06.01.2026 12:15",
    status: "Tamamlandı",
  },
  {
    id: 3,
    professional: "Güvenlik Plus",
    package: "Başlangıç",
    credits: 50,
    amount: 249,
    date: "05.01.2026 18:45",
    status: "Tamamlandı",
  },
  {
    id: 4,
    professional: "Kentsel Dönüşüm A.Ş.",
    package: "Kurumsal",
    credits: 600,
    amount: 1799,
    date: "05.01.2026 10:22",
    status: "Tamamlandı",
  },
  {
    id: 5,
    professional: "Site Yönetim Pro",
    package: "Standart",
    credits: 120,
    amount: 499,
    date: "04.01.2026 16:08",
    status: "İade Edildi",
  },
];

const creditUsage = [
  { professional: "Usta Mehmet İnşaat", used: 43, remaining: 77, offers: 12 },
  { professional: "Elektrik Pro", used: 156, remaining: 144, offers: 45 },
  { professional: "Güvenlik Plus", used: 28, remaining: 22, offers: 8 },
  { professional: "Kentsel Dönüşüm A.Ş.", used: 234, remaining: 366, offers: 34 },
];

export default function AdminCreditsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#402e47]">Kredi Yönetimi</h1>
          <p className="text-gray-600">Kredi paketleri ve satışları yönetin</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Yeni Paket Ekle
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Yeni Kredi Paketi</DialogTitle>
              <DialogDescription>Yeni bir kredi paketi oluşturun</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label>Paket Adı</Label>
                <Input placeholder="Örn: Premium" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Kredi Miktarı</Label>
                  <Input type="number" placeholder="100" />
                </div>
                <div className="space-y-2">
                  <Label>Bonus Kredi</Label>
                  <Input type="number" placeholder="20" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Fiyat (TL)</Label>
                <Input type="number" placeholder="499" />
              </div>
              <div className="space-y-2">
                <Label>Geçerlilik Süresi</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Süre seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 Gün</SelectItem>
                    <SelectItem value="60">60 Gün</SelectItem>
                    <SelectItem value="90">90 Gün</SelectItem>
                    <SelectItem value="120">120 Gün</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90">
                Paketi Oluştur
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Bu Ay Gelir</p>
              <p className="text-2xl font-bold text-[#402e47]">45.670 TL</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
              <Coins className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Satılan Kredi</p>
              <p className="text-2xl font-bold text-[#402e47]">12.450</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <Package className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Satış Adedi</p>
              <p className="text-2xl font-bold text-[#402e47]">89</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Aktif Kullanıcı</p>
              <p className="text-2xl font-bold text-[#402e47]">234</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="packages" className="space-y-6">
        <TabsList>
          <TabsTrigger value="packages">Kredi Paketleri</TabsTrigger>
          <TabsTrigger value="purchases">Satın Alımlar</TabsTrigger>
          <TabsTrigger value="usage">Kullanım</TabsTrigger>
        </TabsList>

        {/* Packages Tab */}
        <TabsContent value="packages">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Kredi Paketleri</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Paket Adı</TableHead>
                    <TableHead>Kredi</TableHead>
                    <TableHead>Bonus</TableHead>
                    <TableHead>Fiyat</TableHead>
                    <TableHead>Kredi Başına</TableHead>
                    <TableHead>Durum</TableHead>
                    <TableHead className="w-24">İşlem</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {creditPackages.map((pkg) => (
                    <TableRow key={pkg.id}>
                      <TableCell className="font-medium">{pkg.name}</TableCell>
                      <TableCell>{pkg.credits}</TableCell>
                      <TableCell>
                        {pkg.bonus > 0 ? (
                          <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                            <Gift className="w-3 h-3 mr-1" />
                            +{pkg.bonus}
                          </Badge>
                        ) : "-"}
                      </TableCell>
                      <TableCell>{pkg.price} TL</TableCell>
                      <TableCell>
                        {(pkg.price / (pkg.credits + pkg.bonus)).toFixed(2)} TL
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="bg-green-100 text-green-700">
                          {pkg.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="text-red-600">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Purchases Tab */}
        <TabsContent value="purchases">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Son Satın Alımlar</CardTitle>
                <div className="relative w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Ara..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Profesyonel</TableHead>
                    <TableHead>Paket</TableHead>
                    <TableHead>Kredi</TableHead>
                    <TableHead>Tutar</TableHead>
                    <TableHead>Tarih</TableHead>
                    <TableHead>Durum</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentPurchases.map((purchase) => (
                    <TableRow key={purchase.id}>
                      <TableCell className="font-medium">{purchase.professional}</TableCell>
                      <TableCell>{purchase.package}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Coins className="w-4 h-4 text-yellow-500" />
                          {purchase.credits}
                        </div>
                      </TableCell>
                      <TableCell>{purchase.amount} TL</TableCell>
                      <TableCell className="text-sm">{purchase.date}</TableCell>
                      <TableCell>
                        <Badge
                          variant="secondary"
                          className={
                            purchase.status === "Tamamlandı"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }
                        >
                          {purchase.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Usage Tab */}
        <TabsContent value="usage">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Kredi Kullanım Durumu</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Profesyonel</TableHead>
                    <TableHead>Kullanılan</TableHead>
                    <TableHead>Kalan</TableHead>
                    <TableHead>Teklif Sayısı</TableHead>
                    <TableHead>Kullanım Oranı</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {creditUsage.map((user, index) => {
                    const total = user.used + user.remaining;
                    const percentage = Math.round((user.used / total) * 100);
                    return (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{user.professional}</TableCell>
                        <TableCell>{user.used}</TableCell>
                        <TableCell>{user.remaining}</TableCell>
                        <TableCell>{user.offers}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-primary rounded-full"
                                style={{ width: `${percentage}%` }}
                              />
                            </div>
                            <span className="text-sm text-gray-600">{percentage}%</span>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
