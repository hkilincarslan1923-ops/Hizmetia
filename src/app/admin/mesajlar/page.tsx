"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Send, MoreVertical, Paperclip } from "lucide-react";

const conversations = [
  {
    id: 1,
    user: "Ayşe Yılmaz",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop",
    lastMessage: "Merhaba, tadilatımla ilgili bir sorum var...",
    time: "2 dk önce",
    unread: 2,
  },
  {
    id: 2,
    user: "Mehmet Demir",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop",
    lastMessage: "Teşekkürler, anlaşıldı.",
    time: "15 dk önce",
    unread: 0,
  },
  {
    id: 3,
    user: "Usta Elektrik Pro",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop",
    lastMessage: "Profesyonel kaydım onaylandı mı?",
    time: "1 saat önce",
    unread: 1,
  },
  {
    id: 4,
    user: "Fatma Kaya",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop",
    lastMessage: "Site güvenlik sistemi hakkında bilgi alabilir miyim?",
    time: "3 saat önce",
    unread: 0,
  },
];

const messages = [
  {
    id: 1,
    sender: "user",
    text: "Merhaba, tadilatımla ilgili bir sorum var. Profesyonellerden teklif aldım ama hangisini seçeceğime karar veremiyorum.",
    time: "14:30",
  },
  {
    id: 2,
    sender: "admin",
    text: "Merhaba Ayşe Hanım, size yardımcı olmaktan memnuniyet duyarız. Profesyonellerin profillerindeki değerlendirmeleri ve tamamladıkları iş sayılarını karşılaştırmanızı öneririz.",
    time: "14:32",
  },
  {
    id: 3,
    sender: "user",
    text: "Teşekkürler. Peki ödeme nasıl yapılıyor?",
    time: "14:35",
  },
  {
    id: 4,
    sender: "admin",
    text: "Ödeme doğrudan profesyonele yapılmaktadır. Hizmetia üzerinden herhangi bir ödeme almıyoruz. Profesyonelle iletişime geçtiğinizde ödeme koşullarını konuşabilirsiniz.",
    time: "14:37",
  },
  {
    id: 5,
    sender: "user",
    text: "Anladım, çok teşekkür ederim!",
    time: "14:40",
  },
];

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState("");

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold text-[#402e47]">Mesajlar</h1>
        <p className="text-gray-600">Kullanıcı ve profesyonellerle iletişim</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 h-[calc(100vh-220px)]">
        {/* Conversations List */}
        <Card className="lg:col-span-1">
          <CardHeader className="pb-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Mesajlarda ara..."
                className="pl-10"
              />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[calc(100vh-340px)]">
              {conversations.map((conv) => (
                <button
                  key={conv.id}
                  onClick={() => setSelectedConversation(conv)}
                  className={`w-full p-4 flex items-start gap-3 hover:bg-gray-50 transition-colors border-b ${
                    selectedConversation?.id === conv.id ? "bg-gray-50" : ""
                  }`}
                >
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={conv.avatar} />
                    <AvatarFallback>{conv.user.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 text-left min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-medium truncate">{conv.user}</p>
                      <span className="text-xs text-gray-400">{conv.time}</span>
                    </div>
                    <p className="text-sm text-gray-500 truncate">{conv.lastMessage}</p>
                  </div>
                  {conv.unread > 0 && (
                    <span className="w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center">
                      {conv.unread}
                    </span>
                  )}
                </button>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Chat Area */}
        <Card className="lg:col-span-2 flex flex-col">
          {/* Chat Header */}
          <CardHeader className="border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={selectedConversation?.avatar} />
                  <AvatarFallback>{selectedConversation?.user.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{selectedConversation?.user}</p>
                  <p className="text-sm text-green-500">Çevrimiçi</p>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <MoreVertical className="w-5 h-5" />
              </Button>
            </div>
          </CardHeader>

          {/* Messages */}
          <CardContent className="flex-1 p-4 overflow-hidden">
            <ScrollArea className="h-[calc(100vh-440px)]">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === "admin" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                        msg.sender === "admin"
                          ? "bg-primary text-white rounded-br-sm"
                          : "bg-gray-100 text-gray-800 rounded-bl-sm"
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <p className={`text-xs mt-1 ${msg.sender === "admin" ? "text-white/70" : "text-gray-400"}`}>
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>

          {/* Message Input */}
          <div className="p-4 border-t">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Paperclip className="w-5 h-5" />
              </Button>
              <Input
                placeholder="Mesaj yazın..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1"
              />
              <Button className="bg-primary hover:bg-primary/90">
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
