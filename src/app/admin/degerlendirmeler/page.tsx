"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, MoreVertical, Star, ThumbsUp, Flag, CheckCircle, XCircle } from "lucide-react";

const reviews = [
  {
    id: 1,
    user: "Ayşe Yılmaz",
    userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop",
    professional: "Usta Mehmet İnşaat",
    professionalAvatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=40&h=40&fit=crop",
    rating: 5,
    title: "Mükemmel İş",
    comment: "Mutfak tadilatımız için Mehmet ustayı tercih ettik. İşini zamanında ve çok temiz bir şekilde tamamladı. Kesinlikle tavsiye ederim!",
    date: "05.01.2026",
    status: "Onaylı",
    helpful: 12,
  },
  {
    id: 2,
    user: "Mehmet Demir",
    userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop",
    professional: "Elektrik Pro",
    professionalAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop",
    rating: 4,
    title: "İyi Hizmet",
    comment: "Elektrik tesisatımızı yenilediler. Genel olarak memnun kaldık, sadece biraz geç kaldılar.",
    date: "04.01.2026",
    status: "Onaylı",
    helpful: 8,
  },
  {
    id: 3,
    user: "Fatma Kaya",
    userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop",
    professional: "Güvenlik Plus",
    professionalAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop",
    rating: 5,
    title: "Profesyonel Ekip",
    comment: "Site güvenlik sistemimizi kurdular. 7/24 destek veriyorlar, çok memnunuz.",
    date: "03.01.2026",
    status: "Beklemede",
    helpful: 5,
  },
  {
    id: 4,
    user: "Ali Öztürk",
    userAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop",
    professional: "Site Yönetim Pro",
    professionalAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop",
    rating: 3,
    title: "Ortalama",
    comment: "Hizmet kalitesi ortalama düzeyde. Daha iyi olabilir.",
    date: "02.01.2026",
    status: "Şikayet",
    helpful: 2,
  },
  {
    id: 5,
    user: "Zeynep Arslan",
    userAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop",
    professional: "Güçlendirme Mühendislik",
    professionalAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=40&h=40&fit=crop",
    rating: 5,
    title: "Harika Proje",
    comment: "Binamızın güçlendirme projesini başarıyla tamamladılar. Çok profesyonel ve güvenilir bir firma.",
    date: "01.01.2026",
    status: "Onaylı",
    helpful: 18,
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Onaylı":
      return "bg-green-100 text-green-700";
    case "Beklemede":
      return "bg-yellow-100 text-yellow-700";
    case "Şikayet":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

export default function ReviewsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold text-[#402e47]">Değerlendirmeler</h1>
        <p className="text-gray-600">Kullanıcı değerlendirmelerini yönetin</p>
      </div>

      {/* Stats Cards */}
      <div className="grid sm:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">Toplam Değerlendirme</p>
            <p className="text-2xl font-bold text-[#402e47]">45,678</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <div>
              <p className="text-sm text-gray-600">Ortalama Puan</p>
              <p className="text-2xl font-bold text-[#402e47]">4.7</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">Bekleyen Onay</p>
            <p className="text-2xl font-bold text-yellow-600">23</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">Şikayet</p>
            <p className="text-2xl font-bold text-red-600">5</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Değerlendirmelerde ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={review.userAvatar} />
                    <AvatarFallback>{review.user.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{review.user}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>değerlendirdi</span>
                      <Avatar className="w-5 h-5">
                        <AvatarImage src={review.professionalAvatar} />
                        <AvatarFallback>{review.professional.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium text-[#402e47]">{review.professional}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(review.status)}`}>
                    {review.status}
                  </span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Onayla
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <XCircle className="w-4 h-4 mr-2" />
                        Reddet
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <Flag className="w-4 h-4 mr-2" />
                        Şikayet Olarak İşaretle
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <div className="mb-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-yellow-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? "fill-yellow-500" : "fill-gray-200 text-gray-200"}`}
                      />
                    ))}
                  </div>
                  <span className="font-medium">{review.title}</span>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-4">
                  <span>{review.date}</span>
                  <button className="flex items-center gap-1 hover:text-primary">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{review.helpful} kişi faydalı buldu</span>
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
