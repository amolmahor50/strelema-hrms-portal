// src/components/BookTripSteps.jsx
import { MotionWrapper } from "@/components/common/MotionWrapper";
import { PageLayout } from "@/components/common/PageLayout";
import { Headline } from "@/components/common/Headline";
import { Icon } from "@/custom/Icon";

export default function BookTripSteps() {
  return (
    <section className="py-10 md:py-20 overflow-x-hidden relative">
      <PageLayout className="grid grid-cols-1 md:grid-cols-2 items-center gap-14">
        {/* LEFT CONTENT */}
        <div>
          <Headline
            subtitle="Easy and Fast"
            title={
              <>
                Book Your Next Trip <br />
                <span className="text-orange-500">In 3 Easy Steps</span>
              </>
            }
            align="left"
            type="slideUp"
          />

          {/* ✅ Added description below headline */}
          <p className="text-gray-500 text-sm md:text-base mt-4 leading-relaxed max-w-md">
            Planning your dream vacation has never been this simple. Follow
            these three easy steps to choose your destination, make your
            payment, and get ready for a hassle-free journey to your next
            adventure.
          </p>

          <div className="space-y-8 mt-10">
            {/* Step 1 */}
            <MotionWrapper
              type="slideRight"
              delay={0.1}
              className="flex items-start gap-5"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <Icon name="Plane" className="text-yellow-500" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-800">
                  Choose Destination
                </h4>
                <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                  Browse and select your favorite destination from our curated
                  list of top-rated travel spots around the world.
                </p>
              </div>
            </MotionWrapper>

            {/* Step 2 */}
            <MotionWrapper
              type="slideRight"
              delay={0.2}
              className="flex items-start gap-5"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <Icon name="CreditCard" className="text-orange-500" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-800">
                  Make Payment
                </h4>
                <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                  Secure your booking instantly using our fast, safe, and
                  multiple payment options.
                </p>
              </div>
            </MotionWrapper>

            {/* Step 3 */}
            <MotionWrapper
              type="slideRight"
              delay={0.3}
              className="flex items-start gap-5"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Icon name="Calendar" className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-800">
                  Reach Airport on Selected Date
                </h4>
                <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                  Pack your bags and arrive at the airport on your chosen date —
                  we’ll handle everything else.
                </p>
              </div>
            </MotionWrapper>
          </div>
        </div>

        {/* RIGHT SIDE CARD */}
        <MotionWrapper type="slideLeft" delay={0.4}>
          <div className="relative bg-white shadow-lg rounded-3xl p-4 md:p-6 max-w-sm mx-auto overflow-hidden">
            {/* Main Trip Image */}
            <img
              src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=60"
              alt="Trip to Greece"
              className="rounded-2xl object-cover h-56 w-full"
            />

            {/* Trip Details */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Trip To Greece
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                14–29 June | by Robbin Joe
              </p>
              <div className="flex items-center justify-between text-gray-400 text-sm mt-4">
                <div className="flex gap-3">
                  <Icon name="User" size={18} className="text-primary" />
                  <Icon name="Calendar" size={18} className="text-primary" />
                  <Icon
                    name="MessageSquare"
                    size={18}
                    className="text-primary"
                  />
                </div>
                <span className="text-gray-500 text-sm">24 people going</span>
              </div>
            </div>

            {/* Floating Progress Card */}
            <div className="absolute bottom-22 right-3 bg-white rounded-2xl shadow-xl p-3 w-38 md:w-44">
              <p className="text-xs text-gray-400 mb-1">Ongoing</p>
              <p className="font-semibold text-gray-800">Trip to Rome</p>
              <div className="mt-2 bg-gray-100 rounded-full h-2 w-full overflow-hidden">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: "40%" }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">40% completed</p>
            </div>
          </div>
        </MotionWrapper>
      </PageLayout>
    </section>
  );
}
