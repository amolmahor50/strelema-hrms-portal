import { MotionWrapper } from "@/components/common/MotionWrapper";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { PageLayout } from "@/components/common/PageLayout";

export default function Footer() {
  return (
    <footer className="bg-white md:pt-20 pt-12 pb-10 border-t border-gray-100 relative overflow-hidden">
      <PageLayout>
        {/* Top Section */}
        <MotionWrapper type="stagger" className="grid md:grid-cols-4 gap-10">
          {/* Brand Info */}
          <MotionWrapper type="slideUp">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Travello
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Book your trip in minutes, get full control for much longer.
            </p>
          </MotionWrapper>

          {/* Company */}
          <MotionWrapper type="slideUp" delay={0.1}>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a href="#" className="hover:text-indigo-600 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition">
                  Mobile
                </a>
              </li>
            </ul>
          </MotionWrapper>

          {/* Contact */}
          <MotionWrapper type="slideUp" delay={0.2}>
            <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a href="#" className="hover:text-indigo-600 transition">
                  Help / FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition">
                  Affiliates
                </a>
              </li>
            </ul>
          </MotionWrapper>

          {/* More */}
          <MotionWrapper type="slideUp" delay={0.3}>
            <h4 className="font-semibold text-gray-900 mb-4">More</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a href="#" className="hover:text-indigo-600 transition">
                  Airline fees
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition">
                  Airline
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition">
                  Low fare tips
                </a>
              </li>
            </ul>
          </MotionWrapper>
        </MotionWrapper>

        {/* Social & App Links */}
        <MotionWrapper
          type="fade"
          delay={0.4}
          className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          {/* App Store Links */}
          <div className="flex flex-col items-center md:items-end">
            <p className="font-medium text-gray-700 mb-3">Discover our app</p>
            <div className="flex gap-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-10"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-10"
              />
            </div>
          </div>
        </MotionWrapper>

        {/* Divider */}
        <div className="border-t border-gray-200 my-10"></div>

        {/* Copyright */}
        <MotionWrapper
          type="fade"
          delay={0.5}
          className="text-center text-gray-500 text-sm"
        >
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-gray-700">Travello</span>. All
          rights reserved.
        </MotionWrapper>
      </PageLayout>

      {/* Background Gradient Accent */}
      <div className="absolute right-0 bottom-0 w-72 h-72 bg-gradient-to-tl from-indigo-100 to-transparent rounded-full blur-3xl opacity-40 -z-10"></div>
    </footer>
  );
}
