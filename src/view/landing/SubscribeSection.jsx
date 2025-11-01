import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MotionWrapper } from "@/components/common/MotionWrapper";
import { PageLayout } from "@/components/common/PageLayout";

// ✅ Local Partner Logos
import Axon from "@/assets/partner/axon-airlines-logo-png-transparent.png";
import Jetstar_logo from "@/assets/partner/Jetstar_logo.svg.png";
import Expedia from "@/assets/partner/Expedia_Logo_2023.svg";
import Qantas from "@/assets/partner/qantas-logo-png-transparent.png";

export default function SubscribeSection() {
  // ✅ Use imported local assets here
  const partners = [
    { id: 1, name: "Axon Airlines", logo: Axon },
    { id: 2, name: "Jetstar", logo: Jetstar_logo },
    { id: 3, name: "Expedia", logo: Expedia },
    { id: 4, name: "Qantas", logo: Qantas },
  ];

  return (
    <section className="md:py-24 py-8 overflow-hidden">
      <PageLayout>
        {/* Partner Logos */}
        <MotionWrapper
          type="stagger"
          className="flex flex-wrap justify-center items-center gap-10 md:gap-20 mb-10 md:mb-0"
        >
          {partners.map((partner, i) => (
            <MotionWrapper
              key={partner.id}
              type="scale"
              delay={i * 0.1}
              duration={0.5}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className={`${
                  i === 0 ? "h-24 md:h-34" : "h-10 md:h-12"
                } cursor-pointer grayscale hover:grayscale-0 transition-all duration-300 object-contain`}
              />
            </MotionWrapper>
          ))}
        </MotionWrapper>

        {/* Subscribe Box */}
        <MotionWrapper
          type="scale"
          delay={0.2}
          className="relative bg-indigo-50 rounded-3xl py-12 px-2 md:px-12 flex flex-col items-center justify-center text-center shadow-md"
        >
          {/* Background effects */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-indigo-200 to-transparent rounded-full opacity-30 blur-3xl -z-10" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-indigo-100 to-transparent rounded-full opacity-40 blur-2xl -z-10" />

          {/* Title */}
          <MotionWrapper type="slideUp" delay={0.3}>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 max-w-2xl">
              Subscribe to get information, latest news and other interesting
              offers about <span className="text-indigo-600">Jadoo</span>
            </h2>
          </MotionWrapper>

          {/* Input Form */}
          <MotionWrapper type="slideUp" delay={0.4}>
            <form className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-lg">
              <div className="relative flex-1 w-full">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="w-full border-2 border-orange-400 focus-visible:ring-orange-400"
                  required
                />
              </div>
              <Button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-md transition-all"
              >
                Subscribe
                <Send  />
              </Button>
            </form>
          </MotionWrapper>

          {/* Floating icon animation */}
          <MotionWrapper
            className="absolute -right-4 -top-4 bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
            type="fade"
            delay={0.6}
          >
            <Send className="w-5 h-5 animate-bounce" />
          </MotionWrapper>
        </MotionWrapper>
      </PageLayout>
    </section>
  );
}
