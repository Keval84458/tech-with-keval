import HeroSection from "./_layouts/hero-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Footer left={0} bottom={0} position="fixed" w="100%" />
    </>
  );
}
