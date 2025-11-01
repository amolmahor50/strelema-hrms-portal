import { PageLayout } from "@/components/common/PageLayout";
import { Icon } from "@/custom/Icon";
import { MotionWrapper } from "@/components/common/MotionWrapper";
import { Headline } from "@/components/common/Headline";

const services = [
  {
    id: 1,
    title: "Calculated Weather",
    description: `Get real-time and accurate weather forecasts before every trip. 
Stay informed about temperature, wind speed, and possible conditions 
so you can plan your travel with confidence. 
We make sure the weather never surprises you.`,
    icon: <Icon name="CloudSun" size={28} className="text-amber-500" />,
  },
  {
    id: 2,
    title: "Best Flights",
    description: `Find the best flight options that fit your budget and schedule. 
We compare prices across airlines, ensuring you get the most value 
for your money with comfortable travel options. 
Book smart, travel better, and save more.`,
    icon: <Icon name="Plane" size={28} className="text-sky-500" />,
    highlight: true, // highlighted center card
  },
  {
    id: 3,
    title: "Local Events",
    description: `Discover exciting local events happening at your destination. 
From cultural festivals to music concerts and fairs, 
we help you connect with local vibes and traditions. 
Enjoy every moment beyond just sightseeing.`,
    icon: <Icon name="Mic2" size={28} className="text-rose-500" />,
  },
  {
    id: 4,
    title: "Customization",
    description: `Personalize your travel experiences based on your preferences. 
Choose hotels, routes, and activities that match your style. 
Our experts design each trip uniquely for you — 
making every journey truly one of a kind.`,
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

        {/* 4-line section description */}
        <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
          Experience the world with ease and comfort through our specialized
          travel services. From planning your perfect vacation to finding the
          best flights, we ensure every journey is smooth, efficient, and
          enjoyable. Stay informed with local events, weather forecasts, and
          exclusive customizations — all designed to make your travel truly
          unforgettable.
        </p>

        {/* Service Cards */}
        <MotionWrapper type="stagger" delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {services.map((service, index) => (
              <MotionWrapper
                key={service.id}
                type="slideUp"
                delay={0.1 * index}
                duration={0.6}
              >
                <div
                  className={`flex flex-col items-center text-start p-8 rounded-2xl transition-all duration-300 ${
                    service.highlight
                      ? "bg-white shadow-xl border scale-105 relative"
                      : "hover:shadow-md border"
                  }`}
                >
                  {/* Decorative corner */}
                  {service.highlight && (
                    <span className="absolute -z-50 -bottom-4 -left-4 bg-rose-200 w-12 h-12 rounded-tr-3xl"></span>
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

                  {/* Description (4 lines each) */}
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
