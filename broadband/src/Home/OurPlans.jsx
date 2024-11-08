import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const OurPlans = () => {
  return (
    <section className="py-10 mt-20">
      <h3
        className="flex justify-center text-[50px] mt-10 md:mt-10 "
        style={{ fontFamily: "MADE Gentle, sans-serif" }}
      >
        Our Plans
      </h3>
      <p className="text-center text-2xl text-gray-500 mb-2">
        Let&apos;s Discover Our Best Packages
      </p>
      <p className="text-center text-xl text-blue-500 mb-8">
        Starting From ₹383 /months* with unlimited data
      </p>

      <div className="relative w-full px-12">
        <Swiper
          modules={[Navigation]}
          navigation={true}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          <SwiperSlide>
            <div className="bg-white min-h-[650px] rounded-xl relative flex flex-col border-2 border-[#ced4da] hover:shadow-xl transition duration-500 ease-in-out transform 
                       hover:-translate-y-1 hover:scale-105 hover:border-0">
              {/* Image */}
              <img
                src="/30 Mbps.png"
                alt="Plan Image"
                className="max-w-md h-48 object-cover rounded-t-xl"
              />

              {/* Plan Details */}
              <div className="p-8 mb-3 text-left flex-grow">
                <div className="mb-4 border-b-2 border-gray-300 pb-2">
                  <h3 className="text-base font-semibold">6 MONTHS</h3>
                  <p className="text-gray-500 text-sm">Get @ ₹2300 *</p>
                </div>
                <div className="mb-4 border-b-2 border-gray-300 pb-2">
                  <h3 className="text-base font-semibold">12 MONTHS</h3>
                  <p className="text-gray-500 text-sm">Get @ ₹4200 *</p>
                </div>
                <div className="mb-4 border-b-2 border-gray-300 pb-2">
                  <h3 className="text-base font-semibold">15 MONTHS</h3>
                  <p className="text-gray-500 text-sm">Get @ ₹5100 *</p>
                </div>
              </div>

              {/* Select Plan Button */}
              <div className="px-4 pb-4">
                <button className="text-blue-600 font-semibold flex items-center">
                  Select Plan <span className="ml-1">→</span>
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white min-h-[650px] rounded-xl relative flex flex-col border-2 border-[#ced4da] hover:shadow-xl transition duration-500 ease-in-out transform 
                       hover:-translate-y-1 hover:scale-105 hover:border-0 ">
              {/* Image */}
              <img
                src="/40 Mbps.png"
                alt="Plan Image"
                className="max-w-md h-48 object-cover rounded-t-xl"
              />

              {/* Plan Details */}
              <div className="p-8 mb-3 text-left flex-grow">
                <div className="mb-4 border-b-2 border-gray-300 pb-2">
                  <h3 className="text-base font-semibold">6 MONTHS</h3>
                  <p className="text-gray-500 text-sm">Get @ ₹3300 *</p>
                </div>
                <div className="mb-4 border-b-2 border-gray-300 pb-2">
                  <h3 className="text-base font-semibold">12 MONTHS</h3>
                  <p className="text-gray-500 text-sm">Get @ ₹5200 *</p>
                </div>
                <div className="mb-4 border-b-2 border-gray-300 pb-2">
                  <h3 className="text-base font-semibold">15 MONTHS</h3>
                  <p className="text-gray-500 text-sm">Get @ ₹6000 *</p>
                </div>
              </div>

              {/* Select Plan Button */}
              <div className="px-4 pb-4">
                <button className="text-blue-600 font-semibold flex items-center">
                  Select Plan <span className="ml-1">→</span>
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white min-h-[650px] rounded-xl relative flex flex-col border-2 border-[#ced4da] hover:shadow-xl hover:border-0 ">
              {/* Image */}
              <img
                src="/50 Mbps.png"
                alt="Plan Image"
                className="max-w-md h-48 object-cover rounded-t-xl"
              />

              {/* Plan Details */}
              <div className="p-8 mb-3 text-left flex-grow">
                <div className="mb-4 border-b-2 border-gray-300 pb-2">
                  <h3 className="text-base font-semibold">6 MONTHS</h3>
                  <p className="text-gray-500 text-sm">Get @ ₹3500 *</p>
                </div>
                <div className="mb-4 border-b-2 border-gray-300 pb-2">
                  <h3 className="text-base font-semibold">12 MONTHS</h3>
                  <p className="text-gray-500 text-sm">Get @ ₹5550 *</p>
                </div>
                <div className="mb-4 border-b-2 border-gray-300 pb-2">
                  <h3 className="text-base font-semibold">15 MONTHS</h3>
                  <p className="text-gray-500 text-sm">Get @ ₹7000 *</p>
                </div>
                <div className="mb-4 border-b-2 border-gray-300 pb-1">
                  <h3 className="text-base font-semibold">18 MONTHS</h3>
                  <p className="text-gray-500 text-sm">Get @ ₹8150 *</p>
                </div>
              </div>

              {/* Select Plan Button */}
              <div className="px-4 pb-4">
                <button className="text-blue-600 font-semibold flex items-center">
                  Select Plan <span className="ml-1">→</span>
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white min-h-[650px] rounded-xl relative flex flex-col border-2 border-[#ced4da] hover:shadow-xl hover:border-0 ">
              {/* Image */}
              <img
                src="/60 Mbps.png"
                alt="Plan Image"
                className="max-w-md h-48 object-cover rounded-t-xl"
              />

              {/* Plan Details */}
              <div className="p-8 mb-3 text-left flex-grow">
                <div className="mb-4 border-b-2 border-gray-300 pb-2">
                  <h3 className="text-base font-semibold">6 MONTHS</h3>
                  <p className="text-gray-500 text-sm">Get @ ₹3800 *</p>
                </div>
                <div className="mb-4 border-b-2 border-gray-300 pb-2">
                  <h3 className="text-base font-semibold">12 MONTHS</h3>
                  <p className="text-gray-500 text-sm">Get @ ₹5750 *</p>
                </div>
                <div className="mb-4 border-b-2 border-gray-300 pb-2">
                  <h3 className="text-base font-semibold">15 MONTHS</h3>
                  <p className="text-gray-500 text-sm">Get @ ₹7250 *</p>
                </div>
                <div className="mb-4 border-b-2 border-gray-300 pb-2">
                  <h3 className="text-base font-semibold">18 MONTHS</h3>
                  <p className="text-gray-500 text-sm">Get @ ₹8250 *</p>
                </div>
              </div>

              {/* Select Plan Button */}
              <div className="px-4 pb-4">
                <button className="text-blue-600 font-semibold flex items-center">
                  Select Plan <span className="ml-1">→</span>
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white min-h-[650px] rounded-xl relative flex flex-col border-2 border-[#ced4da] hover:shadow-xl hover:border-0 ">
              {/* Image */}
              <img
                src="/80 Mbps.png"
                alt="Plan Image"
                className="max-w-md h-48 object-cover rounded-t-xl"
              />

              {/* Plan Details */}
              <div className="p-8 mb-3 text-left flex-grow">
                <div className="mb-4 border-b-2 border-gray-300 pb-2">
                  <h3 className="text-base font-semibold">6 MONTHS</h3>
                  <p className="text-gray-500 text-sm">Get @ ₹4050 *</p>
                </div>
                <div className="mb-4 border-b-2 border-gray-300 pb-2">
                  <h3 className="text-base font-semibold">12 MONTHS</h3>
                  <p className="text-gray-500 text-sm">Get @ ₹6550 *</p>
                </div>
              </div>

              {/* Select Plan Button */}
              <div className="px-4 pb-4">
                <button className="text-blue-600 font-semibold flex items-center">
                  Select Plan <span className="ml-1">→</span>
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white min-h-[650px] rounded-xl relative flex flex-col border-2 border-[#ced4da] hover:shadow-xl hover:border-0 ">
              {/* Image */}
              <img
                src="/100 Mbps.png"
                alt="Plan Image"
                className="max-w-md h-48 object-cover rounded-t-xl"
              />

              {/* Plan Details */}
              <div className="p-8 mb-3 text-left flex-grow">
                <div className="mb-4 border-b-2 border-gray-300 pb-2">
                  <h3 className="text-base font-semibold">6 MONTHS</h3>
                  <p className="text-gray-500 text-sm">Get @ ₹4200 *</p>
                </div>
                <div className="mb-4 border-b-2 border-gray-300 pb-2">
                  <h3 className="text-base font-semibold">12 MONTHS</h3>
                  <p className="text-gray-500 text-sm">Get @ ₹7000 *</p>
                </div>
              </div>

              {/* Select Plan Button */}
              <div className="px-4 pb-4">
                <button className="text-blue-600 font-semibold flex items-center">
                  Select Plan <span className="ml-1">→</span>
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white min-h-[650px] rounded-xl relative flex flex-col border-2 border-[#ced4da] hover:shadow-xl hover:border-0 ">
              {/* Image */}
              <img
                src="/200 Mbps.png"
                alt="Plan Image"
                className="max-w-md h-48 object-cover rounded-t-xl"
              />

              {/* Plan Details */}
              <div className="p-8 mb-3 text-left flex-grow">
                <div className="mb-4 border-b-2 border-gray-300 pb-2">
                  <h3 className="text-base font-semibold">6 MONTHS</h3>
                  <p className="text-gray-500 text-sm">Get @ ₹5750 *</p>
                </div>
                <div className="mb-4 border-b-2 border-gray-300 pb-2">
                  <h3 className="text-base font-semibold">12 MONTHS</h3>
                  <p className="text-gray-500 text-sm">Get @ ₹9999 *</p>
                </div>
              </div>

              {/* Select Plan Button */}
              <div className="px-4 pb-4">
                <button className="text-blue-600 font-semibold flex items-center">
                  Select Plan <span className="ml-1">→</span>
                </button>
              </div>
            </div>
          </SwiperSlide>

          {/* Additional SwiperSlides for more cards */}
        </Swiper>
      </div>
    </section>
  );
};

export default OurPlans;
