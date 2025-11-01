import React, { useState } from "react";
import { GradientBackground } from "@/components/common/GradientBackground";
import { PageLayout } from "@/components/common/PageLayout";
import { MotionWrapper } from "@/components/common/MotionWrapper";
import { Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import { allHotels } from "@/data/mockData";

export default function Hotels() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRating, setFilterRating] = useState("All");

  //  Filter hotels based on search & rating
  const filteredHotels = allHotels.filter((h) => {
    const matchesSearch = h.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesRating =
      filterRating === "All" || Math.floor(h.rating) === parseInt(filterRating);
    return matchesSearch && matchesRating;
  });

  return (
    <>
      {/*  Hero Section */}
      <GradientBackground variant="blue" className="min-h-[72vh]">
        <PageLayout className="flex flex-col gap-4 text-center items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 drop-shadow-sm">
            Luxury Hotels & Resorts
          </h1>
          <p className="mt-3 text-gray-700 text-base md:text-lg max-w-2xl mx-auto">
            Discover world-class hotels offering comfort, elegance, and
            unforgettable stays across the globe.
          </p>
          <Button className="rounded-full">Choose More</Button>
        </PageLayout>
      </GradientBackground>

      {/*  Search & Filters */}
      <section className="py-6">
        <PageLayout className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Input
            type="text"
            placeholder="Search hotels..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2"
          />
          <div className="flex flex-wrap gap-3">
            {["All", "5", "4"].map((r) => (
              <Button
                variant="outline"
                key={r}
                onClick={() => setFilterRating(r)}
                className={`rounded-full ${
                  filterRating === r
                    ? "bg-primary text-white"
                    : "flex items-center gap-2 border-amber-400 text-amber-600 hover:bg-amber-100"
                }`}
              >
                {r === "All" ? "All Ratings" : `${r}-Star`}
              </Button>
            ))}
          </div>
        </PageLayout>
      </section>

      {/*  Hotel Cards */}
      <section className="py-8">
        <PageLayout>
          {filteredHotels.length === 0 ? (
            <p className="text-center text-gray-500 text-lg">
              No hotels found for “{searchTerm}”
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredHotels.map((hotel, index) => (
                <MotionWrapper
                  key={hotel.id}
                  type="fadeIn"
                  delay={0.05 * index}
                  className="bg-white h-fit rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
                >
                  {/* 🏙️ Image */}
                  <div className="relative">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-2 left-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
                      {hotel.location}
                    </div>
                  </div>

                  {/* 📝 Card Content */}
                  <div className="p-5 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">
                        {hotel.name}
                      </h3>
                      <div className="flex items-center text-gray-500 text-sm mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{hotel.location}</span>
                      </div>
                      <div className="flex items-center mb-3">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(hotel.rating)
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                        {hotel.description}
                      </p>
                    </div>

                    {/* 💳 Price + Book Button */}
                    <div className="flex items-center justify-between mt-auto">
                      <p className="text-gray-900 font-semibold text-base">
                        {hotel.price}
                      </p>
                      <Button
                        size="sm"
                        variant="outline"
                        className=" border-amber-400 text-amber-600 hover:bg-amber-100"
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          )}
        </PageLayout>
      </section>

      {/*  CTA Section */}
      <section className="py-16 bg-blue-50 text-center">
        <PageLayout>
          <MotionWrapper type="slideUp" delay={0.1}>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Ready to Check In?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Find exclusive hotel deals and enjoy world-class comfort on your
              next journey. Let’s make your stay unforgettable.
            </p>
            <Button className="rounded-full">
              Explore More Hotels
            </Button>
          </MotionWrapper>
        </PageLayout>
      </section>
    </>
  );
}
