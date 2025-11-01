import { MapPin } from "lucide-react";
import { Headline } from "@/components/common/Headline";
import { MotionWrapper } from "@/components/common/MotionWrapper";
import { PageLayout } from "@/components/common/PageLayout";

const destinations = [
  {
    id: 1,
    name: "Rome, Italy",
    price: "$5.42k",
    duration: "10 Days Trip",
    image:
      "https://images.unsplash.com/photo-1710915322745-cd5912851417?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
  },
  {
    id: 2,
    name: "London, UK",
    price: "$4.2k",
    duration: "12 Days Trip",
    image:
      "https://images.unsplash.com/photo-1534695215921-52f8a19e7909?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RGVzdGluYXRpb25zfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  },
  {
    id: 3,
    name: "Paris, France",
    price: "$6.1k",
    duration: "14 Days Trip",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Santorini, Greece",
    price: "$7.8k",
    duration: "8 Days Trip",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
  },
];

export default function TopDestinations() {
  return (
    <section className="py-8 md:py-20">
      <PageLayout className=" md:px-12">
        {/* Reusable Headline */}
        <Headline
          subtitle="Top Selling"
          title="Top Destinations"
          align="center"
          type="slideUp"
        />

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
          {destinations.map((item, index) => (
            <MotionWrapper
              key={item.id}
              type="slideUp"
              delay={0.1 * index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-56 w-full object-cover"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
              </div>

              {/* Card content */}
              <div className="flex justify-between items-start px-5 py-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <div className="flex items-center text-gray-500 mt-1 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{item.duration}</span>
                  </div>
                </div>
                <p className="text-gray-900 font-semibold text-base">
                  {item.price}
                </p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </PageLayout>
    </section>
  );
}
