import Cta from "@/components/Landing/Common/Cta";
import DashboardShowcase from "@/components/Landing/Common/DashboardShowcase";
import ItsBuiltFor from "@/components/Landing/Common/ItsBuiltFor";
import LatestBlog from "@/components/Landing/Common/LatestBlog";
import Partners from "@/components/Landing/Common/Partners";
import PricingPlans from "@/components/Landing/Common/PricingPlans";
import Testimonials from "@/components/Landing/Common/Testimonials";
import TopFeatures from "@/components/Landing/Common/TopFeatures";
import HeroBanner from "@/components/Landing/Home/HeroBanner";
import WhyIbias from "@/components/Landing/Home/WhyIbias";
import Navbar from "@/components/Landing/Layout/Navbar";
import Footer from "@/components/Landing/Layout/Footer";

export default function Home() {
  return (
    <div className="front-page-body overflow-hidden">
      <Navbar />
      <HeroBanner />

      <Partners />

      <WhyIbias />

      <TopFeatures />

      <DashboardShowcase />

      <ItsBuiltFor />

      <Testimonials />

      <PricingPlans />

      <LatestBlog />

      <Cta />
      <Footer />
    </div>
  );
}
