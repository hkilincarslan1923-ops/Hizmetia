"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#402e47] text-white text-sm py-2 px-4 text-center">
        <span>Profesyonel misiniz? </span>
        <Link href="/profesyonel/kayit" className="underline font-semibold hover:text-primary">
          Ücretsiz kaydolun
        </Link>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l6.9 3.45L12 11.09 5.1 7.63 12 4.18zM4 8.82l7 3.5v7.36l-7-3.5V8.82zm9 10.86v-7.36l7-3.5v7.36l-7 3.5z"/>
              </svg>
              <span className="text-2xl font-bold text-[#402e47]">Hizmetia</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/hizmet-al"
                className="text-[#402e47] hover:text-primary font-medium transition-colors"
              >
                Hizmet Al
              </Link>
              <Link
                href="/giris"
                className="text-[#402e47] hover:text-primary font-medium transition-colors"
              >
                Giriş Yap
              </Link>
              <Button asChild variant="outline" className="border-[#402e47] text-[#402e47] hover:bg-[#402e47] hover:text-white">
                <Link href="/profesyonel/kayit">Profesyonel Kaydı</Link>
              </Button>
            </nav>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col gap-4 mt-8">
                  <Link
                    href="/hizmet-al"
                    className="text-lg font-medium py-2 border-b"
                    onClick={() => setIsOpen(false)}
                  >
                    Hizmet Al
                  </Link>
                  <Link
                    href="/giris"
                    className="text-lg font-medium py-2 border-b"
                    onClick={() => setIsOpen(false)}
                  >
                    Giriş Yap
                  </Link>
                  <Link
                    href="/profesyonel/kayit"
                    className="text-lg font-medium py-2 border-b"
                    onClick={() => setIsOpen(false)}
                  >
                    Profesyonel Kaydı
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
