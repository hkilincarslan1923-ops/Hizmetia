import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  Briefcase,
  FolderOpen,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const stats = [
  {
    title: "Toplam Kullanıcı",
    value: "12,543",
    change: "+12%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Profesyoneller",
    value: "3,847",
    change: "+8%",
    trend: "up",
    icon: Briefcase,
  },
  {
    title: "Aktif Talepler",
    value: "1,234",
    change: "-3%",
    trend: "down",
    icon: FolderOpen,
  },
  {
    title: "Tamamlanan İşler",
    value: "8,923",
    change: "+23%",
    trend: "up",
    icon: TrendingUp,
  },
];

const recentRequests = [
  {
    id: 1,
    title: "Mutfak Tadilatı",
    user: "Ayşe Yılmaz",
    category: "Tadilat",
    status: "Bekliyor",
    date: "2 saat önce",
  },
  {
    id: 2,
    title: "Elektrik Arızası",
    user: "Mehmet Demir",
    category: "Elektrik",
    status: "Teklif Alındı",
    date: "4 saat önce",
  },
  {
    id: 3,
    title: "Site Güvenlik Sistemi",
    user: "Fatma Kaya",
    category: "Güvenlik Sistemleri",
    status: "Devam Ediyor",
    date: "6 saat önce",
  },
  {
    id: 4,
    title: "Apartman Yönetimi",
    user: "Ali Öztürk",
    category: "Apartman Yönetimi",
    status: "Bekliyor",
    date: "8 saat önce",
  },
  {
    id: 5,
    title: "Güçlendirme Projesi",
    user: "Zeynep Arslan",
    category: "Güçlendirme",
    status: "Tamamlandı",
    date: "1 gün önce",
  },
];

const recentProfessionals = [
  {
    id: 1,
    name: "Usta Mehmet İnşaat",
    category: "Tadilat",
    rating: 4.9,
    jobs: 156,
    status: "Onaylı",
  },
  {
    id: 2,
    name: "Elektrik Pro",
    category: "Elektrik",
    rating: 4.8,
    jobs: 234,
    status: "Onaylı",
  },
  {
    id: 3,
    name: "Güvenlik Plus",
    category: "Güvenlik Sistemleri",
    rating: 4.7,
    jobs: 89,
    status: "Beklemede",
  },
  {
    id: 4,
    name: "Kentsel Dönüşüm A.Ş.",
    category: "Kentsel Dönüşüm",
    rating: 4.9,
    jobs: 45,
    status: "Onaylı",
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold text-[#402e47]">Dashboard</h1>
        <p className="text-gray-600">Hoş geldiniz! İşte genel bakış.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-[#402e47] mt-1">
                    {stat.value}
                  </p>
                </div>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  stat.trend === "up" ? "bg-green-100" : "bg-red-100"
                }`}>
                  <stat.icon className={`w-6 h-6 ${
                    stat.trend === "up" ? "text-green-600" : "text-red-600"
                  }`} />
                </div>
              </div>
              <div className={`flex items-center gap-1 mt-4 text-sm ${
                stat.trend === "up" ? "text-green-600" : "text-red-600"
              }`}>
                {stat.trend === "up" ? (
                  <ArrowUpRight className="w-4 h-4" />
                ) : (
                  <ArrowDownRight className="w-4 h-4" />
                )}
                <span>{stat.change} geçen aya göre</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tables Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Requests */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Son Hizmet Talepleri</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentRequests.map((request) => (
                <div
                  key={request.id}
                  className="flex items-center justify-between py-3 border-b last:border-0"
                >
                  <div>
                    <p className="font-medium text-[#402e47]">{request.title}</p>
                    <p className="text-sm text-gray-500">{request.user} • {request.category}</p>
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      request.status === "Tamamlandı"
                        ? "bg-green-100 text-green-700"
                        : request.status === "Devam Ediyor"
                        ? "bg-blue-100 text-blue-700"
                        : request.status === "Teklif Alındı"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-100 text-gray-700"
                    }`}>
                      {request.status}
                    </span>
                    <p className="text-xs text-gray-400 mt-1">{request.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Professionals */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Son Kayıt Olan Profesyoneller</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentProfessionals.map((pro) => (
                <div
                  key={pro.id}
                  className="flex items-center justify-between py-3 border-b last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">
                        {pro.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-[#402e47]">{pro.name}</p>
                      <p className="text-sm text-gray-500">{pro.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-sm">
                      <span className="text-yellow-500">★</span>
                      <span className="font-medium">{pro.rating}</span>
                      <span className="text-gray-400">({pro.jobs} iş)</span>
                    </div>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 ${
                      pro.status === "Onaylı"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}>
                      {pro.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
