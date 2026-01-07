"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, MoreVertical, Plus, Filter, Star, CheckCircle, Clock } from "lucide-react";

const professionals = [
  {
    id: 1,
    name: "Usta Mehmet İnşaat",
    owner: "Mehmet Yıldız",
    email: "mehmet@ustamehmet.com",
    phone: "0532 111 2233",
    category: "Tadilat",
    rating: 4.9,
    jobs: 156,
    status: "Onaylı",
    date: "10.01.2024",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=40&h=40&fit=crop",
  },
  {
    id: 2,
    name: "Elektrik Pro",
    owner: "Ali Elektrikçi",
    email: "ali@elektrikpro.com",
    phone: "0533 222 3344",
    category: "Elektrik",
    rating: 4.8,
    jobs: 234,
    status: "Onaylı",
    date: "15.01.2024",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop",
  },
  {
    id: 3,
    name: "Güvenlik Plus",
    owner: "Ahmet Güven",
    email: "ahmet@guvenlikplus.com",
    phone: "0534 333 4455",
    category: "Güvenlik Sistemleri",
    rating: 4.7,
    jobs: 89,
    status: "Beklemede",
    date: "20.02.2024",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop",
  },
  {
    id: 4,
    name: "Kentsel Dönüşüm A.Ş.",
    owner: "Fatma Yapıcı",
    email: "fatma@kentseldonusum.com",
    phone: "0535 444 5566",
    category: "Kentsel Dönüşüm",
    rating: 4.9,
    jobs: 45,
    status: "Onaylı",
    date: "01.02.2024",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=40&h=40&fit=crop",
  },
  {
    id: 5,
    name: "Site Yönetim Pro",
    owner: "Hasan Yönetici",
    email: "hasan@siteyonetim.com",
    phone: "0536 555 6677",
    category: "Site Yönetimi",
    rating: 4.6,
    jobs: 67,
    status: "Onaylı",
    date: "05.02.2024",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop",
  },
  {
    id: 6,
    name: "Güçlendirme Mühendislik",
    owner: "Murat Mühendis",
    email: "murat@guclendirme.com",
    phone: "0537 666 7788",
    category: "Güçlendirme",
    rating: 4.8,
    jobs: 32,
    status: "Beklemede",
    date: "25.02.2024",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=40&h=40&fit=crop",
  },
];

export default function ProfessionalsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#402e47]">Profesyoneller</h1>
          <p className="text-gray-600">Kayıtlı tüm profesyonelleri yönetin</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Profesyonel Ekle
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid sm:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-[#402e47]">3,245</p>
              <p className="text-sm text-gray-600">Onaylı Profesyonel</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-[#402e47]">127</p>
              <p className="text-sm text-gray-600">Onay Bekleyen</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Star className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-[#402e47]">4.7</p>
              <p className="text-sm text-gray-600">Ortalama Puan</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Profesyonel ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filtrele
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Professionals Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Profesyonel Listesi</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Profesyonel</TableHead>
                <TableHead>Kategori</TableHead>
                <TableHead>Puan</TableHead>
                <TableHead>İş Sayısı</TableHead>
                <TableHead>Durum</TableHead>
                <TableHead>Kayıt Tarihi</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {professionals.map((pro) => (
                <TableRow key={pro.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={pro.avatar} />
                        <AvatarFallback>{pro.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{pro.name}</p>
                        <p className="text-sm text-gray-500">{pro.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="inline-block px-2 py-1 bg-gray-100 rounded text-sm">
                      {pro.category}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-medium">{pro.rating}</span>
                    </div>
                  </TableCell>
                  <TableCell>{pro.jobs}</TableCell>
                  <TableCell>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      pro.status === "Onaylı"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}>
                      {pro.status}
                    </span>
                  </TableCell>
                  <TableCell>{pro.date}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Görüntüle</DropdownMenuItem>
                        <DropdownMenuItem>Düzenle</DropdownMenuItem>
                        {pro.status === "Beklemede" && (
                          <DropdownMenuItem className="text-green-600">Onayla</DropdownMenuItem>
                        )}
                        <DropdownMenuItem className="text-red-600">Sil</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
