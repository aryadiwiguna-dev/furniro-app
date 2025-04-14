import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 lg:w-1/4 mb-8">
            <h3 className="text-xl font-semibold mb-6 text-black">Furniro.</h3>
           <p className="text-gray-600 mb-4">Jl. Sudirman No. 123, Jakarta Selatan<br />DKI Jakarta 12190, Indonesia</p>
           <p className="text-gray-600">(+62) 812-3456-7890</p>
          </div>
          
          <div className="w-full md:w-1/3 lg:w-1/4 mb-8">
            <h3 className="text-lg font-medium mb-6 text-black">Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-600 hover:text-[#b88e2f]">Home</Link></li>
              <li><Link href="/shop" className="text-gray-600 hover:text-[#b88e2f]">Shop</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-[#b88e2f]">About</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-[#b88e2f]">Contact</Link></li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/3 lg:w-1/4 mb-8">
            <h3 className="text-lg font-medium mb-6 text-black">Help</h3>
            <ul className="space-y-3">
              <li><Link href="/payment-options" className="text-gray-600 hover:text-[#b88e2f]">Payment Options</Link></li>
              <li><Link href="/returns" className="text-gray-600 hover:text-[#b88e2f]">Returns</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-600 hover:text-[#b88e2f]">Privacy Policies</Link></li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/3 lg:w-1/4 mb-8">
            <h3 className="text-lg font-medium mb-6 text-black">Newsletter</h3>
            <div className="flex mb-4">
              <input 
                type="email" 
                placeholder="Enter Your Email Address" 
                className="flex-grow px-4 py-2 border border-gray-300 focus:outline-none focus:border-[#b88e2f] text-black"
              />
              <button className="bg-[#b88e2f] text-white px-4 py-2">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>&copy; 2025 Furniro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;