import Image from 'next/image';

const GallerySection = () => {
  const galleryImages = [
    '/classic_chair.jpg',
    '/sofa-white.jpg',
    '/chair.jpg',
    '/sofa.jpg',
    '/chair-black.jpg',
    '/chair_wood.jpg',
    '/living_room.jpg',
  ];

  return (
    <section className="py-16 container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-medium mb-2 text-black">Share your setup with</h2>
        <p className="text-3xl font-bold text-[#b88e2f]">#FurniroFurniture</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {galleryImages.map((image, index) => (
          <div key={index} className={`relative ${index === 1 || index === 5 ? 'row-span-2' : ''}`}>
            <Image 
              src={image} 
              alt="Gallery Image" 
              width={400}
              height={index === 1 || index === 5 ? 800 : 400}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;