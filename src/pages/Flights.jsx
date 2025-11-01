import React, { useState } from "react";
import { GradientBackground } from "@/components/common/GradientBackground";
import { PageLayout } from "@/components/common/PageLayout";
import { MotionWrapper } from "@/components/common/MotionWrapper";
import { Plane, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import { allFlights } from "@/data/mockData";

export default function Flights() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStop, setFilterStop] = useState("All");

  const filteredFlights = allFlights.filter((flight) => {
    const matchesSearch =
      flight.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
      flight.to.toLowerCase().includes(searchTerm.toLowerCase()) ||
      flight.airline.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStops = filterStop === "All" || flight.stops === filterStop;
    return matchesSearch && matchesStops;
  });

  return (
    <>
      {/*  Hero Section */}
      <GradientBackground variant="blue" className="min-h-[72vh]">
        <PageLayout className="flex flex-col gap-4 text-center items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 drop-shadow-sm">
            Explore & Book Flights
          </h1>
          <p className="mt-3 text-gray-700 text-base md:text-lg max-w-2xl mx-auto">
            Discover the world’s top destinations with affordable flight
            options. Search, compare, and book your next journey with ease.
          </p>
          <Button className="rounded-full">Search Flights</Button>
        </PageLayout>
      </GradientBackground>

      {/*  Search & Filter */}
      <section className="py-6">
        <PageLayout className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Input
            type="text"
            placeholder="Search by airline, city, or airport..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2"
          />
          <div className="flex flex-wrap gap-3">
            {["All", "Non-stop", "1 Stop"].map((stop) => (
              <Button
                key={stop}
                variant="outline"
                onClick={() => setFilterStop(stop)}
                className={`rounded-full ${
                  filterStop === stop
                    ? "bg-primary text-white"
                    : "border-amber-400 text-amber-600 hover:bg-amber-100s"
                }`}
              >
                {stop}
              </Button>
            ))}
          </div>
        </PageLayout>
      </section>

      {/*  Flight Cards */}
      <section className="py-10">
        <PageLayout>
          {filteredFlights.length === 0 ? (
            <p className="text-center text-gray-500 text-lg">
              No flights found for “{searchTerm}”
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredFlights.map((flight, index) => (
                <MotionWrapper
                  key={flight.id}
                  type="fadeIn"
                  delay={0.05 * index}
                  className="h-fit rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="relative">
                    <img
                      src={flight.image}
                      alt={flight.airline}
                      className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                      {flight.airline}
                    </div>
                  </div>

                  <div className="p-5 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1 flex items-center gap-2">
                        <Plane className="w-4 h-4 text-blue-500" />
                        {flight.from} → {flight.to}
                      </h3>

                      <div className="flex items-center text-gray-500 text-sm mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        {flight.stops}
                      </div>

                      <div className="flex items-center text-gray-500 text-sm mb-3">
                        <Clock className="w-4 h-4 mr-1" />
                        Duration: {flight.duration}
                      </div>

                      <p className="text-gray-700 font-semibold text-base mb-4">
                        {flight.price}
                      </p>
                    </div>

                    {/* ✈️ Buttons */}
                    <div className="grid grid-cols-2 gap-3">
                      <Button size="sm">View Details</Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-amber-400 text-amber-600 hover:bg-amber-100"
                      >
                        Book Flight
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
              Ready for Takeoff?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Explore global flight options and fly with comfort and confidence.
              Let’s take your next adventure to new heights.
            </p>
            <Button className="rounded-full">Explore More Flights</Button>
          </MotionWrapper>
        </PageLayout>
      </section>
    </>
  );
}
