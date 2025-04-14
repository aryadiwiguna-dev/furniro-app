import ProductCard from './ProductCard';

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: 'Syltherine',
      description: 'Stylish cafe chair',
      price: 3000000,
      oldPrice: 3500000,
      image: '/sofa-white.jpg',
      tag: 'sale'
    },
    {
      id: 2,
      name: 'Leviosa',
      description: 'Stylish cafe chair',
      price: 2500000,
      image: '/chair-black.jpg',
      tag: 'sale'
    },
    {
      id: 3,
      name: 'Lolito',
      description: 'Luxury big sofa',
      price: 7000000,
      oldPrice: 14000000,
      image: '/chair.jpg',
      tag: 'sale'
    },
    {
      id: 4,
      name: 'Respira',
      description: 'Outdoor bar table and stool',
      price: 500000,
      image: '/sofa-white.jpg',
      tag: 'new'
    },
    {
      id: 5,
      name: 'Grifo',
      description: 'Night lamp',
      price: 1500000,
      image: '/chair-black.jpg'
    },
    {
      id: 6,
      name: 'Muggo',
      description: 'Small mug',
      price: 150000,
      image: '/chair.jpg',
      tag: 'new'
    },
    {
      id: 7,
      name: 'Pingky',
      description: 'Cute bed set',
      price: 7000000,
      oldPrice: 14000000,
      image: '/sofa-white.jpg',
      tag: 'sale'
    },
    {
      id: 8,
      name: 'Potty',
      description: 'Minimalist flower pot',
      price: 500000,
      image: '/chair.jpg',
      tag: 'new'
    }
  ];
  

  return (
    <section className="py-8 sm:py-12 md:py-16 container mx-auto px-4 sm:px-6" id='products'>
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-2 sm:mb-3">
          Our Products
        </h2>
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
          Explore our wide range of beautifully designed furniture
        </p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <div className="mt-10 sm:mt-12 md:mt-16 text-center">
        <button className="border border-[#b88e2f] text-[#b88e2f] px-6 py-2 sm:px-8 sm:py-3 font-medium hover:bg-[#b88e2f] hover:text-white transition">
          Show More
        </button>
      </div>
    </section>
  );
};

export default ProductsSection;