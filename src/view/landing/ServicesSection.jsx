import { PageLayout } from "@/components/common/PageLayout";
import { Icon } from "@/custom/Icon";
import { MotionWrapper } from "@/components/common/MotionWrapper";
import { Headline } from "@/components/common/Headline";

const services = [
  {
    id: 1,
    title: "Calculated Weather",
    description: "Built Wicket longer admire do barton vanity itself do in it.",
    icon: <Icon name="CloudSun" size={28} className="text-amber-500" />,
  },
  {
    id: 2,
    title: "Best Flights",
    description: "Engrossed listening. Park gate sell they west hard for the.",
    icon: <Icon name="Plane" size={28} className="text-sky-500" />,
    highlight: true, // highlighted center card
  },
  {
    id: 3,
    title: "Local Events",
    description:
      "Barton vanity itself do in it. Preferred to men it engrossed listening.",
    icon: <Icon name="Mic2" size={28} className="text-rose-500" />,
  },
  {
    id: 4,
    title: "Customization",
    description:
      "We deliver outsourced aviation services for military customers.",
    icon: <Icon name="Settings" size={28} className="text-indigo-500" />,
  },
];

export default function ServicesSection() {
  return (
    <section className="md:py-20 py-12 relative overflow-hidden">
      <PageLayout className="text-center">
        {/* Section Header */}
        <Headline
          subtitle="Category"
          title="We Offer Best Services"
          align="center"
          type="slideUp"
          delay={0.1}
        />

        {/* Service Cards */}
        <MotionWrapper type="stagger" delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {services.map((service, index) => (
              <MotionWrapper
                key={service.id}
                type="slideUp"
                delay={0.1 * index}
                duration={0.6}
              >
                <div
                  className={`flex flex-col items-center text-center p-8 rounded-2xl transition-all duration-300 ${
                    service.highlight
                      ? "bg-white shadow-xl scale-105 relative"
                      : "hover:shadow-md"
                  }`}
                >
                  {/* Optional decorative corner shape */}
                  {service.highlight && (
                    <span className="absolute -bottom-4 -left-4 bg-rose-200 w-12 h-12 rounded-tr-3xl"></span>
                  )}

                  {/* Icon */}
                  <MotionWrapper type="scale" delay={0.2 * index}>
                    <div className="bg-amber-50 p-4 rounded-full mb-4">
                      {service.icon}
                    </div>
                  </MotionWrapper>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </MotionWrapper>
      </PageLayout>
    </section>
  );
}
