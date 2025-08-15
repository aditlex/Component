import Header from "@/components/Header";
import TopMain from "@/components/TopMain"
import Trusted from "@/components/Trusted";
import ExploreSection from "@/components/Explore";
import FoundationsSection from "@/components/Foundations";
import DiscountBanner from "@/components/Diskon";
import SolutionsSection from "@/components/Solutions";
import PerformanceSection from "@/components/Performance";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import LastSections from "@/components/LastSections";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
    <TopMain></TopMain>
    <Trusted></Trusted>
    <ExploreSection/>
    <FoundationsSection/>
    <DiscountBanner/>
    <SolutionsSection/>
    <PerformanceSection/>
<TestimonialsCarousel/>
<LastSections/>
      </main>
      <Footer/>
    </>
  );
}
