import React, { useState } from "react";
import { GradientBackground } from "@/components/common/GradientBackground";
import { PageLayout } from "@/components/common/PageLayout";
import { MotionWrapper } from "@/components/common/MotionWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  MapPin,
  CalendarDays,
  Clock,
  CheckCircle2,
  XCircle,
  Search,
} from "lucide-react";
import { allBookings } from "@/data/mockData";

export default function Bookings() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const filteredBookings = allBookings.filter((b) => {
    const matchesSearch =
      b.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.hotel.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "All" || b.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <>
      {/* Hero Section */}
      <GradientBackground variant="blue" className="min-h-[60vh]">
        <PageLayout className="flex flex-col items-center text-center justify-center gap-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 drop-shadow-sm">
            Booking History & Trips
          </h1>
          <p className="text-gray-700 text-base md:text-lg max-w-2xl">
            Manage all your bookings in one place. Track upcoming trips, review
            past stays, and plan your next adventure.
          </p>
        </PageLayout>
      </GradientBackground>

      {/* Search + Filter */}
      <section className="py-8">
        <PageLayout className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-1/2">
            <Search className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search destination or hotel..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            {["All", "Confirmed", "Completed", "Upcoming", "Cancelled"].map(
              (status) => (
                <Button
                  key={status}
                  variant="outline"
                  onClick={() => setFilterStatus(status)}
                  className={`rounded-full ${
                    filterStatus === status
                      ? "bg-primary text-white"
                      : "border-amber-400 text-amber-600 hover:bg-amber-100"
                  }`}
                >
                  {status}
                </Button>
              )
            )}
          </div>
        </PageLayout>
      </section>

      {/* 🏨 Booking Cards */}
      <section className="py-10">
        <PageLayout>
          {filteredBookings.length === 0 ? (
            <p className="text-center text-gray-500 text-lg">
              No bookings found.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredBookings.map((booking, index) => (
                <MotionWrapper
                  key={booking.id}
                  type="fadeIn"
                  delay={0.04 * index}
                  className="bg-white h-fit rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
                >
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={booking.image}
                      alt={booking.destination}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
                      {booking.destination}
                    </div>
                  </div>

                  {/*  Card Details */}
                  <div className="p-5 flex flex-col h-full justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {booking.hotel}
                      </h3>
                      <div className="flex items-center text-gray-500 text-sm mt-1">
                        <MapPin className="w-4 h-4 mr-1 text-amber-500" />
                        {booking.destination}
                      </div>

                      <div className="flex items-center gap-3 mt-3 text-sm text-gray-600">
                        <CalendarDays className="w-4 h-4 text-amber-500" />
                        <span>{booking.date}</span>
                        <Clock className="w-4 h-4 text-amber-500 ml-3" />
                        <span>{booking.nights} nights</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <p className="mt-3 font-semibold text-gray-800">
                          Price:{" "}
                          <span className="text-amber-600">
                            {booking.price}
                          </span>
                        </p>
                        <span
                          className={`text-xs font-medium px-2 py-1 rounded ${
                            booking.status === "Confirmed"
                              ? "bg-green-100 text-green-600"
                              : booking.status === "Completed"
                              ? "bg-blue-100 text-blue-600"
                              : booking.status === "Upcoming"
                              ? "bg-amber-100 text-amber-600"
                              : "bg-red-100 text-red-600"
                          }`}
                        >
                          {booking.status}
                        </span>
                      </div>
                    </div>

                    {/* Buttons and Status */}
                    <div className="grid grid-cols-2 gap-4 mt-3">
                      <Button
                        size="sm"
                        variant="outline"
                        className=" border-amber-400 text-amber-600 hover:bg-amber-100"
                      >
                        <CheckCircle2 /> View
                      </Button>
                      {booking.status === "Confirmed" && (
                        <Button size="sm" variant="destructive">
                          <XCircle /> Cancel
                        </Button>
                      )}
                    </div>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          )}
        </PageLayout>
      </section>
    </>
  );
}
