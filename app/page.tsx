import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { Performances } from "@/components/performances";
import { UpcomingEvents } from "@/components/upcoming-events";
import { Blogs } from "@/components/blogs";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <Performances />
        <UpcomingEvents />
        <Blogs />
      </main>
    </div>
  );
}
