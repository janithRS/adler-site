import { Header } from "@/components/header";
import { Performances } from "@/components/performances";
import { UpcomingEvents } from "@/components/upcoming-events";
import { Blogs } from "@/components/blogs";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { PhotoGrid } from "@/components/photo-grid";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <Performances />
        <PhotoGrid />
        <UpcomingEvents />
        <Footer />
      </main>
    </div>
  );
}
