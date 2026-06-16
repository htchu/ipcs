import HeroSlider from "@/components/HeroSlider";
import NewsTabs from "@/components/NewsTabs";
import Features from "@/components/Features";
import QuickLinks from "@/components/QuickLinks";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Features />
      <NewsTabs />
      <QuickLinks />
    </>
  );
}
