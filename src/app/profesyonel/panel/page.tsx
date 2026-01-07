"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Coins,
  Briefcase,
  Star,
  TrendingUp,
  MapPin,
  Clock,
  Eye,
  Send,
  Plus,
  Bell,
  User,
  Settings,
  LogOut,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const availableJobs = [
  {
    id: 1,
    title: "Mutfak Tadilatı",
    description: "20 m2 mutfak tadilatı, dolap ve tezgah yenileme dahil",
    budget: "25.000 - 35.000 TL",
    location: "İstanbul, Kadıköy",
    category: "Tadilat",
    postedTime: "2 saat önce",
    creditCost: 100,
    offers: 3,
  },
  {
    id: 2,
    title: "Elektrik Tesisatı Yenileme",
    description: "3+1 daire elektrik tesisatı komple yenileme",
    budget: "8.000 - 12.000 TL",
    location: "İstanbul, Beşiktaş",
    category: "Elektrik",
    postedTime: "4 saat önce",
    creditCost: 100,
    offers: 5,
  },
  {
    id: 3,
    title: "Site Kamera Sistemi Kurulumu",
    description: "32 kameralı site güvenlik sistemi kurulumu",
    budget: "75.000 - 100.000 TL",
    location: "Ankara, Çankaya",
    category: "Güvenlik Sistemleri",
    postedTime: "6 saat önce",
    creditCost: 200,
    offers: 2,
  },
  {
    id: 4,
    title: "Bina Güçlendirme Projesi",
    description: "5 katlı bina deprem güçlendirme çalışması",
    budget: "200.000+ TL",
    location: "İstanbul, Bağcılar",
    category: "Güçlendirme",
    postedTime: "1 gün önce",
    creditCost: 500,
    offers: 4,
  },
];

const myOffers = [
  {
    id: 1,
    job: "Mutfak Tadilatı",
    amount: "28.000 TL",
    status: "Bekliyor",
    date: "05.01.2026",
  },
  {
    id: 2,
    job: "Elektrik Arızası",
    amount: "2.500 TL",
    status: "Kabul Edildi",
    date: "03.01.2026",
  },
  {
    id: 3,
    job: "Boya İşleri",
    amount: "15.000 TL",
    status: "Reddedildi",
    date: "01.01.2026",
  },
];

export default function ProfessionalDashboard() {
  const [selectedJob, setSelectedJob] = useState<typeof availableJobs[0] | null>(null);
  const [offerAmount, setOfferAmount] = useState("");
  const [offerMessage, setOfferMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const currentBalance = 87;

  const handleSubmitOffer = () => {
    if (!selectedJob) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSelectedJob(null);
      setOfferAmount("");
      setOfferMessage("");
      alert("Teklifiniz gönderildi!");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#402e47] text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l6.9 3.45L12 11.09 5.1 7.63 12 4.18zM4 8.82l7 3.5v7.36l-7-3.5V8.82zm9 10.86v-7.36l7-3.5v7.36l-7 3.5z"/>
              </svg>
              <span className="text-xl font-bold">Hizmetia</span>
              <Badge variant="secondary" className="ml-2 bg-white/20 text-white">PRO</Badge>
            </Link>

            <div className="flex items-center gap-4">
              {/* Credit Balance */}
              <Link href="/profesyonel/kredi" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 rounded-lg px-4 py-2 transition-colors">
                <Coins className="w-5 h-5 text-yellow-400" />
                <span className="font-bold">{currentBalance}</span>
                <span className="text-white/70">Kredi</span>
                <Plus className="w-4 h-4 ml-1" />
              </Link>

              <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10">
                <User className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                <Coins className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Kredi Bakiyesi</p>
                <p className="text-2xl font-bold text-[#402e47]">{currentBalance}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Aktif Teklifler</p>
                <p className="text-2xl font-bold text-[#402e47]">8</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Kazanılan İşler</p>
                <p className="text-2xl font-bold text-[#402e47]">34</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                <Star className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Değerlendirme</p>
                <p className="text-2xl font-bold text-[#402e47]">4.9</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Low Balance Warning */}
        {currentBalance < 20 && (
          <Card className="mb-6 border-orange-200 bg-orange-50">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-orange-600" />
                <div>
                  <p className="font-medium text-orange-800">Kredi bakiyeniz azalıyor</p>
                  <p className="text-sm text-orange-600">Fırsatları kaçırmamak için hemen kredi yükleyin</p>
                </div>
              </div>
              <Button asChild className="bg-orange-600 hover:bg-orange-700">
                <Link href="/profesyonel/kredi">Kredi Yükle</Link>
              </Button>
            </CardContent>
          </Card>
        )}

        <Tabs defaultValue="jobs" className="space-y-6">
          <TabsList>
            <TabsTrigger value="jobs">Mevcut İşler</TabsTrigger>
            <TabsTrigger value="offers">Tekliflerim</TabsTrigger>
            <TabsTrigger value="completed">Tamamlanan</TabsTrigger>
          </TabsList>

          {/* Available Jobs Tab */}
          <TabsContent value="jobs">
            <div className="space-y-4">
              {availableJobs.map((job) => (
                <Card key={job.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-lg font-semibold text-[#402e47]">{job.title}</h3>
                            <Badge variant="secondary" className="mt-1">{job.category}</Badge>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-3">{job.description}</p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.postedTime}
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {job.offers} teklif
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-3">
                        <div className="text-right">
                          <p className="text-sm text-gray-500">Bütçe</p>
                          <p className="font-bold text-[#402e47]">{job.budget}</p>
                        </div>

                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              className="bg-primary hover:bg-primary/90"
                              onClick={() => setSelectedJob(job)}
                            >
                              <Send className="w-4 h-4 mr-2" />
                              Teklif Ver
                              <Badge variant="secondary" className="ml-2 bg-white/20">
                                {job.creditCost} Kredi
                              </Badge>
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-lg">
                            <DialogHeader>
                              <DialogTitle>Teklif Ver</DialogTitle>
                              <DialogDescription>
                                {job.title} için teklifinizi gönderin
                              </DialogDescription>
                            </DialogHeader>

                            <div className="space-y-4 py-4">
                              {/* Credit Cost Warning */}
                              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-center gap-3">
                                <Coins className="w-6 h-6 text-yellow-600" />
                                <div>
                                  <p className="font-medium text-yellow-800">
                                    Bu teklif için {job.creditCost} kredi harcanacak
                                  </p>
                                  <p className="text-sm text-yellow-600">
                                    Mevcut bakiye: {currentBalance} kredi
                                  </p>
                                </div>
                              </div>

                              <div className="space-y-2">
                                <Label>Teklif Tutarı (TL)</Label>
                                <Input
                                  type="number"
                                  placeholder="Örn: 25000"
                                  value={offerAmount}
                                  onChange={(e) => setOfferAmount(e.target.value)}
                                />
                              </div>

                              <div className="space-y-2">
                                <Label>Mesajınız</Label>
                                <Textarea
                                  placeholder="İş sahibine mesajınızı yazın. Deneyiminizi, ne kadar sürede tamamlayabileceğinizi vb. belirtin."
                                  value={offerMessage}
                                  onChange={(e) => setOfferMessage(e.target.value)}
                                  rows={4}
                                />
                              </div>

                              <Button
                                className="w-full bg-primary hover:bg-primary/90"
                                onClick={handleSubmitOffer}
                                disabled={isSubmitting || !offerAmount || currentBalance < job.creditCost}
                              >
                                {isSubmitting ? (
                                  "Gönderiliyor..."
                                ) : currentBalance < job.creditCost ? (
                                  "Yetersiz Kredi"
                                ) : (
                                  <>
                                    <Send className="w-4 h-4 mr-2" />
                                    Teklifi Gönder ({job.creditCost} Kredi)
                                  </>
                                )}
                              </Button>

                              {currentBalance < job.creditCost && (
                                <Button variant="outline" className="w-full" asChild>
                                  <Link href="/profesyonel/kredi">
                                    <Coins className="w-4 h-4 mr-2" />
                                    Kredi Yükle
                                  </Link>
                                </Button>
                              )}
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* My Offers Tab */}
          <TabsContent value="offers">
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  {myOffers.map((offer) => (
                    <div key={offer.id} className="flex items-center justify-between p-4 hover:bg-gray-50">
                      <div>
                        <p className="font-medium text-[#402e47]">{offer.job}</p>
                        <p className="text-sm text-gray-500">{offer.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-[#402e47]">{offer.amount}</p>
                        <Badge
                          variant="secondary"
                          className={
                            offer.status === "Kabul Edildi"
                              ? "bg-green-100 text-green-700"
                              : offer.status === "Reddedildi"
                              ? "bg-red-100 text-red-700"
                              : "bg-yellow-100 text-yellow-700"
                          }
                        >
                          {offer.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Completed Tab */}
          <TabsContent value="completed">
            <Card>
              <CardContent className="p-8 text-center text-gray-500">
                <CheckCircle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>Tamamlanan işleriniz burada görünecek</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
