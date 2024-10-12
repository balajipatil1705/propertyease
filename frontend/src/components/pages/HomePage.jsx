import React from 'react';
import bgImg from '../../assets/bg.png';
import SearchBar from '../features/SearchBar';

function HomePage() {
  return (
    <div className="flex flex-col h-full">
      {/* Hero Section */}
      <div className="flex h-screen">
        {/* Text Section */}
        <div className="flex-1 flex flex-col justify-center gap-12 p-8 lg:p-4">
          <div className="flex flex-col justify-center lg:justify-start gap-12 md:px-0">
            <h1 className="text-6xl lg:text-4xl">Find Real Estate & Get Your Dream Place</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos explicabo suscipit cum eius, iure est nulla animi consequatur
              facilis id pariatur fugit quos laudantium temporibus dolor ea repellat provident impedit!
            </p>
            <SearchBar />
            <div className="hidden sm:flex justify-between mt-8">
              <div className="text-center">
                <h1 className="text-3xl lg:text-2xl">16+</h1>
                <h2 className="text-lg font-light">Years of Experience</h2>
              </div>
              <div className="text-center">
                <h1 className="text-3xl lg:text-2xl">200</h1>
                <h2 className="text-lg font-light">Award Gained</h2>
              </div>
              <div className="text-center">
                <h1 className="text-3xl lg:text-2xl">2000+</h1>
                <h2 className="text-lg font-light">Property Ready</h2>
              </div>
            </div>
          </div>
        </div>
        {/* Image Section */}
        <div className="flex-1 bg-[#fcf5f3] relative hidden md:flex items-center">
          <img src={bgImg} alt="Background" className="absolute right-0 w-full h-full object-contain lg:w-[90%]" />
        </div>
      </div>

      {/* Additional Content */}
      <div className="p-8 bg-white">
        <h2 className="text-4xl font-bold mb-4">Our Property Management Services</h2>
        <p className="text-lg mb-6">
          We provide a wide range of property management services to help you maintain and grow your real estate investments. Our services include:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Tenant screening and placement</li>
          <li>Property maintenance and repairs</li>
          <li>Rent collection and financial management</li>
          <li>Regular property inspections</li>
          <li>Handling legal and regulatory compliance</li>
        </ul>
      </div>

      {/* Testimonials Section */}
      <div className="p-8 bg-gray-100">
        <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
        <div className="space-y-4">
          <blockquote className="text-lg italic">
            "PropertyEase helped me find my dream home. Their team was incredibly professional and made the process smooth and hassle-free."
          </blockquote>
          <blockquote className="text-lg italic">
            "I've worked with several property management companies, but PropertyEase is by far the best. They are responsive, reliable, and truly care about their clients."
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
