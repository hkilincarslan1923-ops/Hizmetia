"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, MoreVertical, Filter, Eye, Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react";

const requests = [
  {
    id: "HZM-001234",
    title: "Mutfak Tadilatı",
    user: "Ayşe Yılmaz",
    category: "Tadilat",
    location: "İstanbul, Kadıköy",
    offers: 5,
    status: "Bekliyor",
    date: "06.01.2026",
    budget: "25.000 - 35.000 TL",
  },
  {
    id: "HZM-001235",
    title: "Elektrik Tesisatı Yenileme",
    user: "Mehmet Demir",
    category: "Elektrik",
    location: "Ankara, Çankaya",
    offers: 3,
    status: "Teklif Alındı",
    date: "05.01.2026",
    budget: "5.000 - 10.000 TL",
  },
  {
    id: "HZM-001236",
    title: "Site Güvenlik Sistemi Kurulumu",
    user: "Fatma Kaya",
    category: "Güvenlik Sistemleri",
    location: "İzmir, Bornova",
    offers: 8,
    status: "Devam Ediyor",
    date: "04.01.2026",
    budget: "50.000 - 75.000 TL",
  },
  {
    id: "HZM-001237",
    title: "Apartman Yönetimi Hizmeti",
    user: "Ali Öztürk",
    category: "Apartman Yönetimi",
    location: "İstanbul, Beşiktaş",
    offers: 2,
    status: "Bekliyor",
    date: "03.01.2026",
    budget: "Aylık 3.000 - 5.000 TL",
  },
  {
    id: "HZM-001238",
    title: "Bina Güçlendirme Projesi",
    user: "Zeynep Arslan",
    category: "Güçlendirme",
    location: "Bursa, Nilüfer",
    offers: 4,
    status: "Tamamlandı",
    date: "02.01.2026",
    budget: "150.000 - 200.000 TL",
  },
  {
    id: "HZM-001239",
    title: "Kentsel Dönüşüm Danışmanlığı",
    user: "Hasan Yıldırım",
    category: "Kentsel Dönüşüm",
    location: "İstanbul, Bağcılar",
    offers: 6,
    status: "Devam Ediyor",
    date: "01.01.2026",
    budget: "Proje bazlı",
  },
  {
    id: "HZM-001240",
    title: "Yapı Denetim Hizmeti",
    user: "Murat Çelik",
    category: "Yapı Kontrol",
    location: "Antalya, Muratpaşa",
    offers: 3,
    status: "İptal",
    date: "31.12.2025",
    budget: "20.000 - 30.000 TL",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Tamamlandı":
      return "bg-green-100 text-green-700";
    case "Devam Ediyor":
      return "bg-blue-100 text-blue-700";
    case "Teklif Alındı":
      return "bg-yellow-100 text-yellow-700";
    case "İptal":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Tamamlandı":
      return <CheckCircle className="w-4 h-4" />;
    case "Devam Ediyor":
      return <Clock className="w-4 h-4" />;
    case "İptal":
      return <XCircle className="w-4 h-4" />;
    default:
      return <AlertCircle className="w-4 h-4" />;
  }
};

export default function RequestsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold text-[#402e47]">Hizmet Talepleri</h1>
        <p className="text-gray-600">Tüm hizmet taleplerini görüntüleyin ve yönetin</p>
      </div>

      {/* Stats Cards */}
      <div className="grid sm:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">Toplam Talep</p>
            <p className="text-2xl font-bold text-[#402e47]">12,543</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">Bekleyen</p>
            <p className="text-2xl font-bold text-yellow-600">234</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">Devam Eden</p>
            <p className="text-2xl font-bold text-blue-600">567</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">Tamamlanan</p>
            <p className="text-2xl font-bold text-green-600">11,234</p>
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
                placeholder="Talep ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Durum" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tümü</SelectItem>
                <SelectItem value="bekliyor">Bekliyor</SelectItem>
                <SelectItem value="teklif">Teklif Alındı</SelectItem>
                <SelectItem value="devam">Devam Ediyor</SelectItem>
                <SelectItem value="tamamlandi">Tamamlandı</SelectItem>
                <SelectItem value="iptal">İptal</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Daha Fazla Filtre
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Requests Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Talep Listesi</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Talep No</TableHead>
                <TableHead>Başlık</TableHead>
                <TableHead>Kullanıcı</TableHead>
                <TableHead>Kategori</TableHead>
                <TableHead>Konum</TableHead>
                <TableHead>Teklif</TableHead>
                <TableHead>Durum</TableHead>
                <TableHead>Tarih</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {requests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell className="font-mono text-sm">{request.id}</TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{request.title}</p>
                      <p className="text-xs text-gray-500">{request.budget}</p>
                    </div>
                  </TableCell>
                  <TableCell>{request.user}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{request.category}</Badge>
                  </TableCell>
                  <TableCell className="text-sm">{request.location}</TableCell>
                  <TableCell>
                    <span className="font-medium">{request.offers}</span>
                  </TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                      {getStatusIcon(request.status)}
                      {request.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-sm">{request.date}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="w-4 h-4 mr-2" />
                          Detay Görüntüle
                        </DropdownMenuItem>
                        <DropdownMenuItem>Teklifleri Gör</DropdownMenuItem>
                        <DropdownMenuItem>Düzenle</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">İptal Et</DropdownMenuItem>
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
