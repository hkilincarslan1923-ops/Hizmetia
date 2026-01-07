import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Home, Bell, MessageSquare } from "lucide-react";

export default function ServiceRequestSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <Card className="max-w-md w-full shadow-xl border-0">
        <CardContent className="p-8 text-center">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>

          <h1 className="text-2xl font-bold text-[#402e47] mb-2">
            Talebiniz Alındı!
          </h1>
          <p className="text-gray-600 mb-6">
            Hizmet talebiniz başarıyla oluşturuldu. Profesyoneller en kısa sürede sizinle iletişime geçecek.
          </p>

          <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
            <h3 className="font-medium text-[#402e47] mb-3">Bundan Sonra Ne Olacak?</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <Bell className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-600">
                  E-posta ve SMS ile teklif bildirimleri alacaksınız
                </p>
              </div>
              <div className="flex gap-3">
                <MessageSquare className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-600">
                  Profesyonellerle mesajlaşarak detayları konuşabilirsiniz
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Button asChild className="w-full bg-primary hover:bg-primary/90">
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                Ana Sayfaya Dön
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link href="/taleplerim">Taleplerime Git</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
