import React, { useState } from "react";
import { GradientBackground } from "@/components/common/GradientBackground";
import { PageLayout } from "@/components/common/PageLayout";
import { MotionWrapper } from "@/components/common/MotionWrapper";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { allDestinations } from "@/data/mockData";

export default function Destinations() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const filtered = allDestinations.filter((d) => {
    const matchesSearch = d.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesContinent = filter === "All" || d.continent === filter;
    return matchesSearch && matchesContinent;
  });

  return (
    <>
      {/*  Hero Section */}
      <GradientBackground variant="blue" className="min-h-[72vh]">
        <PageLayout className="flex text-center items-center flex-col gap-3">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 drop-shadow-sm">
            Explore the World’s Top Destinations
          </h1>
          <p className="mt-3 text-gray-700 text-base md:text-lg max-w-2xl mx-auto">
            Discover the most loved places around the globe — from hidden
            beaches to iconic cities.
          </p>
          <Button className="w-fit rounded-full">See More Bellow</Button>
        </PageLayout>
      </GradientBackground>

      {/*  Search + Filters */}
      <section className="py-10">
        <PageLayout className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Input
            type="text"
            placeholder="Search destinations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2"
          />
          <div className="flex flex-wrap gap-3">
            {[
              "All",
              "Europe",
              "Asia",
              "Africa",
              "North America",
              "Oceania",
            ].map((c) => (
              <Button
                key={c}
                variant="outline"
                onClick={() => setFilter(c)}
                className={`rounded-full ${
                  filter === c
                    ? "bg-primary text-white"
                    : "flex items-center gap-2 border-amber-400 text-amber-600 hover:bg-amber-100"
                }`}
              >
                {c}
              </Button>
            ))}
          </div>
        </PageLayout>
      </section>

      {/*  Destination Cards */}
      <section className="py-10">
        <PageLayout>
          {filtered.length === 0 ? (
            <p className="text-center text-gray-500 text-lg">
              No destinations found for “{searchTerm}”
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filtered.map((item, index) => (
                <MotionWrapper
                  key={item.id}
                  type="fadeIn"
                  delay={0.05 * index}
                  className="h-fit rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
                      {item.continent}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">
                        {item.name}
                      </h3>
                      <div className="flex items-center text-gray-500 text-sm mb-3">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{item.duration}</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-gray-900 font-semibold text-base">
                        {item.price}
                      </p>
                      <Button size="sm" variant="outline" className="rounded-full border-amber-400 text-amber-600 hover:bg-amber-100">
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
              Ready for Your Next Adventure?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Explore our best offers and let’s turn your dream journey into
              reality with seamless travel planning.
            </p>
            <Button className=" rounded-full">
              Start Planning Now
            </Button>
          </MotionWrapper>
        </PageLayout>
      </section>
    </>
  );
}
