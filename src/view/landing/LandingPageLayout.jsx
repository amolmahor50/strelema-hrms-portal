import Herosection from "@/view/landing/Herosection";
import ServicesSection from "@/view/landing/ServicesSection";
import BookTripSteps from "@/view/landing/BookTripSteps";
import SubscribeSection from "@/view/landing/SubscribeSection";
import TopDestinations from "@/view/landing/TopDestinations";
import Testimonials from "@/view/landing/Testimonials";

export default function LandingPageLayout() {
  return (
    <div>
      <Herosection />
      <ServicesSection />
      <TopDestinations />
      <BookTripSteps />
      <Testimonials />
      <SubscribeSection />
    </div>
  );
}
