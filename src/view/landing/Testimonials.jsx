import { useState, useEffect } from "react";
import { MotionWrapper } from "@/components/common/MotionWrapper";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PageLayout } from "@/components/common/PageLayout";

const testimonials = [
  {
    id: 1,
    name: "Mike Taylor",
    location: "Lahore, Pakistan",
    text: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: 2,
    name: "Chris Thomas",
    location: "CEO of Red Button",
    text: "The service was exceptional! My experience with the team has been nothing short of wonderful. I would definitely recommend them!",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
  },
  {
    id: 3,
    name: "Sophia Lee",
    location: "New York, USA",
    text: "Absolutely loved it! The process was seamless and the customer support was always ready to help. 10/10 experience!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 4,
    name: "Arjun Patel",
    location: "Mumbai, India",
    text: "This company truly values its customers. The service and professionalism are top-notch. Highly satisfied!",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto change every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[index];

  return (
    <section className="relative md:py-24 py-12 overflow-hidden">
      <PageLayout className="grid md:grid-cols-2 items-center gap-16">
        {/* Left Section */}
        <MotionWrapper direction="left">
          <p className="text-gray-400 font-semibold uppercase text-sm tracking-wide mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
            What People Say <br />
            <span className="text-blue-600">About Us.</span>
          </h2>

          {/* Indicator dots */}
          <div className="flex gap-2 mt-10">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === index ? "bg-blue-600 scale-110" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
        </MotionWrapper>

        {/* Right Section */}
        <MotionWrapper direction="right">
          <div className="relative w-full max-w-md mx-auto">
            {/* Animated transition */}
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="bg-white shadow-xl rounded-2xl p-8 relative z-10"
              >
                <div className="absolute -top-6 left-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full border-4 border-white shadow-lg"
                  />
                </div>
                <p className="text-gray-700 text-base mt-6 italic leading-relaxed">
                  “{testimonial.text}”
                </p>
                <h4 className="text-gray-900 font-semibold mt-4">
                  {testimonial.name}
                </h4>
                <p className="text-gray-500 text-sm">{testimonial.location}</p>
              </motion.div>
            </AnimatePresence>

            {/* Background card (previous testimonial preview) */}
            <motion.div
              key={`bg-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute top-6 right-0 w-full bg-gray-50 rounded-2xl shadow-inner p-6"
            >
              <h4 className="font-semibold text-gray-400">
                {testimonials[(index + 1) % testimonials.length].name}
              </h4>
              <p className="text-gray-400 text-sm">
                {testimonials[(index + 1) % testimonials.length].location}
              </p>
            </motion.div>

            {/* Navigation Arrows */}
            <div className="absolute right-4 bottom-4 flex flex-col gap-2 text-gray-400">
              <ChevronDown
                className="rotate-180 cursor-pointer hover:text-blue-600 transition"
                onClick={handlePrev}
              />
              <ChevronDown
                className="cursor-pointer hover:text-blue-600 transition"
                onClick={handleNext}
              />
            </div>
          </div>
        </MotionWrapper>
      </PageLayout>
    </section>
  );
}
