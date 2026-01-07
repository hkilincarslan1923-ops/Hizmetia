import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import Categories from "@/components/Categories";
import WhyUs from "@/components/WhyUs";
import ForProfessionals from "@/components/ForProfessionals";
import AppDownload from "@/components/AppDownload";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <HowItWorks />
        <Categories />
        <WhyUs />
        <ForProfessionals />
        <AppDownload />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
