import Button1 from "../Buttons/button1";

const InfoSection = () => {
  return (
    <section className="flex mt-20 flex-col lg:flex-row items-center justify-between p-8 lg:p-16 rounded-lg">
      {/* Left Text Section */}
      <div className="lg:w-1/2 space-y-6">
        <h2
          style={{ fontFamily: "MADE Gentle, sans-serif" }}
          className="text-3xl lg:text-5xl leading-snug"
        >
          We are no. 1 internet service provider company in{" "}
          <span className="text-[#040B9B]">Porbandar</span>
        </h2>
        <p className="text-lg leading-relaxed">
          <strong>AKASH BROADBAND Pvt. Ltd.</strong> is one of Gujarat’s leading
          high-speed internet providers. Our internet services can reach all
          households in all the areas of Porbandar. AKASH BROADBAND Pvt. Ltd.
          provides the best internet plans all over Porbandar with high speeds
          and at reasonable prices. Our customer services are also available for
          all our customers 7 days a week, and we provide the best and most
          satisfying solutions for all your internet problems in a short span of
          time. Customer satisfaction is our main goal.
        </p>
        {/* Icons Section */}
        <div className="flex space-x-8 text-blue-700 mt-4">
          <div className="flex items-center space-x-3">
            <img
              className="w-12 h-12"
              src="/InfoSection/customer_service.png"
              alt="Customer Service Icon"
            />
            <div className="text-center">
              <span className="text-2xl font-bold">24 X 7 HR</span>
              <p className="text-md text-black font-medium">Customer Support</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <img
              className="w-12 h-12"
              src="/InfoSection/wifi.png"
              alt="Wifi Icon"
            />
            <div className="text-center">
              <span className="text-2xl font-bold">200+</span>
              <p className="text-md text-black font-medium">
                Mbps Speed Internet
              </p>
            </div>
          </div>
        </div>
        <Button1>TRY US FREE</Button1>
      </div>

      {/* Right Image Section */}
      <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end">
        <img
          src="/About-Last.jpg"
          alt="Girl using internet"
          className="rounded-lg w-3/4 h-auto shadow-lg lg:min-h-[400px] object-cover"
        />
      </div>
    </section>
  );
};

export default InfoSection;
