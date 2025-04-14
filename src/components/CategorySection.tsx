import Image from 'next/image';
import Link from 'next/link';

interface Category {
  name: string;
  image: string;
}

interface CategorySectionProps {
  title?: string;
  description?: string;
  categories: Category[];
}

export default function CategorySection({
  title = "Explore Our Furniture Collections",
  description = "Discover a wide range of high-quality furniture categories to complete your dream home. From cozy sofas to elegant tables and versatile storage units.",
  categories
}: CategorySectionProps) {
  return (
    <section className="py-16 container mx-auto px-4 sm:px-6" id='products'>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-3 text-black">{title}</h2>
        <p className="text-black">{description}</p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-6">
        {categories.map((category, index) => (
          <Link 
            href={`/category/${category.name.toLowerCase()}`} 
            key={index} 
            className="group relative block w-[300px] h-[300px] rounded-lg overflow-hidden hover:shadow-lg transition-all"
          >
           
            <Image 
              src={category.image} 
              alt={category.name}
              width={300}
              height={300}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
            
            
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
              <h3 className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}