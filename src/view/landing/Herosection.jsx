import { Icon } from "@/custom/Icon";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-section-1.png";
import { TypographyH1, TypographyLead } from "@/custom/Typography";
import { PageLayout } from "@/components/common/PageLayout";
import { MotionWrapper } from "@/components/common/MotionWrapper";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-white via-amber-50 to-pink-50 overflow-hidden">
      <PageLayout className="flex flex-col md:flex-row items-center justify-between py-28 gap-10 min-h-[90vh]">
        {/* LEFT CONTENT */}
        <MotionWrapper
          type="slideRight"
          duration={0.7}
          className="flex-1 text-center md:text-left"
        >
          <div className="space-y-6">
            <MotionWrapper type="fade" delay={0.1}>
              <p className="text-sm font-semibold text-amber-600 tracking-wide uppercase">
                Best destinations around the world
              </p>
            </MotionWrapper>

            <MotionWrapper type="slideUp" delay={0.2}>
              <TypographyH1>
                Travel, enjoy and live a new
                <span className="relative">
                  and full life
                  <span className="absolute -bottom-1 left-0 w-full h-2 bg-amber-400/70 -z-10"></span>
                </span>
              </TypographyH1>
            </MotionWrapper>

            <MotionWrapper type="fade" delay={0.3}>
              <TypographyLead className="text-gray-600 text-lg max-w-md mx-auto md:mx-0">
                Built Wicket longer admire do barton vanity itself do in it.
                Preferred to sportsmen it engrossed listening. Park gate sell
                they west hard for the.
              </TypographyLead>
            </MotionWrapper>

            <MotionWrapper type="stagger" delay={0.4}>
              <div className="flex items-center justify-center md:justify-start gap-5 pt-4">
                <MotionWrapper type="scale" delay={0.5}>
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-md font-semibold transition">
                    Find out more
                  </Button>
                </MotionWrapper>

                <MotionWrapper type="slideLeft" delay={0.6}>
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 border-amber-400 text-amber-600 hover:bg-amber-100"
                  >
                    <Icon name="Play" />
                    Play Demo
                  </Button>
                </MotionWrapper>
              </div>
            </MotionWrapper>
          </div>
        </MotionWrapper>

        {/* RIGHT IMAGE */}
        <MotionWrapper
          type="slideLeft"
          duration={0.8}
          delay={0.2}
          className="flex-1 relative"
        >
          <div className="relative flex justify-center md:justify-end">
            <img
              src={heroImage}
              alt="Traveler"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg relative z-10"
            />
            {/* Background Shape */}
            <div className="absolute -z-10 right-0 top-0 bg-amber-100/60 w-[450px] h-[450px] md:w-[500px] md:h-[500px] rounded-l-[50%]" />
          </div>
        </MotionWrapper>
      </PageLayout>
    </section>
  );
}
