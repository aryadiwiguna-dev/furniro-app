import Image from 'next/image';

const HeroBanner = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] bg-gray-100">
      
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/hero_section.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="container mx-auto h-full flex items-center relative z-10 px-4 sm:px-6">
        <div className="w-full md:w-1/2 lg:w-1/2 bg-[#f9f3e3] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
          <span className="text-xs sm:text-sm uppercase font-medium text-gray-600">Just Launched</span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#b88e2f] mt-2 sm:mt-3 md:mt-4 mb-4 sm:mb-5 md:mb-6">
            Explore Our<br />Latest Designs
          </h1>
          <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 md:mb-8">
            Be the first to experience our newest furniture collection - where modern elegance meets exceptional comfort.
          </p>
          <button className="bg-[#b88e2f] text-white px-6 sm:px-8 py-2 sm:py-3 font-medium self-start hover:bg-[#a17a25] transition text-sm sm:text-base">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;