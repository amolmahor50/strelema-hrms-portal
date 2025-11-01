import { MapPin } from "lucide-react";
import { Headline } from "@/components/common/Headline";
import { MotionWrapper } from "@/components/common/MotionWrapper";
import { PageLayout } from "@/components/common/PageLayout";
import { Button } from "@/components/ui/button"; // ✅ import your shared Button

const destinations = [
  {
    id: 1,
    name: "Rome, Italy",
    price: "$5.42k",
    duration: "10 Days Trip",
    description:
      "Explore the ancient ruins, stunning architecture, and rich culture of Rome. Visit the Colosseum, Vatican City, and more.",
    image:
      "https://images.unsplash.com/photo-1710915322745-cd5912851417?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1074",
  },
  {
    id: 2,
    name: "London, UK",
    price: "$4.2k",
    duration: "12 Days Trip",
    description:
      "Discover the charm of London with its iconic landmarks, royal palaces, and world-class museums.",
    image:
      "https://images.unsplash.com/photo-1534695215921-52f8a19e7909?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
  {
    id: 3,
    name: "Paris, France",
    price: "$6.1k",
    duration: "14 Days Trip",
    description:
      "Fall in love with the City of Lights, filled with art, fashion, romance, and the Eiffel Tower views.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Santorini, Greece",
    price: "$7.8k",
    duration: "8 Days Trip",
    description:
      "Relax in the white-washed beauty of Santorini with breathtaking sunsets and blue-domed churches.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
  },
];

export default function TopDestinations() {
  return (
    <section className="py-8 md:py-20">
      <PageLayout className="md:px-12">
        <Headline
          subtitle="Top Selling"
          title="Top Destinations"
          align="center"
          type="slideUp"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
          {destinations.map((item, index) => (
            <MotionWrapper
              key={item.id}
              type="slideUp"
              delay={0.1 * index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
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
              <div className="flex flex-col justify-between px-5 py-4 flex-1">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <div className="flex items-center text-gray-500 mt-1 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{item.duration}</span>
                  </div>
                  {/* 2-line description */}
                  <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Price + Button */}
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-gray-900 font-semibold text-base">
                    {item.price}
                  </p>
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 border-amber-400 text-amber-600 hover:bg-amber-100"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </PageLayout>
    </section>
  );
}
