import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import CategorySection from '../components/CategorySection';
import ProductsSection from '../components/ProductSection';
import InspirationSection from '../components/InspirationSection';
import GallerySection from '../components/GallerySection';
import Footer from '../components/Footer';

export default function Home() {
   const categories = [
    { name: 'Dining', image: '/dining2.jpg' },
    { name: 'Living', image: '/living.jpg' },
    { name: 'Bedroom', image: '/bedroom.jpg' },
  ];

  return (
    <div>
      <Head>
        <title>Furniro - Modern Furniture Store</title>
        <meta name="description" content="Discover beautiful furniture for your home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className='bg-white'>
        <HeroBanner />
        <CategorySection categories={categories} />
        <ProductsSection />
        <InspirationSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
}