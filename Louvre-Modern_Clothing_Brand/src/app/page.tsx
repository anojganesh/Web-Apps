"use client";
import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const topSellingTShirts = [
    {
      id: 1,
      name: 'Classic Oversized Tee',
      price: 49.99,
      category: 'unisex',
      image: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/476954/item/goods_09_476954_3x4.jpg?width=369',
      colors: ['black', 'white', 'gray'],
    },
    {
      id: 2,
      name: 'Premium Cotton Polo',
      price: 59.99,
      category: 'men',
      image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQge-U8zRAsFpoENP4BiR7JFa5w71LtfHmhfMXlDg7rk5t_4FnHVeHmd9vz6g5Q-bdnLZFh458R9SKePaqwEmTbv34Tar2NJqnc5hKsc40',
      colors: ['navy', 'black', 'olive'],
    },
    {
      id: 3,
      name: 'Cropped Relaxed Tee',
      price: 54.99,
      category: 'women',
      image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTGcMJBl4wWn3-Fdf7H33JfbR4RPMDXDmxpYIc68T3IRuqFUM3ISx2ZO1SviV2f910YBcvEpGp_W_V0tqoWHiI_1vQaQqdH7L2CcckolKmO',
      colors: ['white', 'pink', 'mint'],
    },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? topSellingTShirts 
    : topSellingTShirts.filter(product => product.category === activeCategory || product.category === 'unisex');

  return (
    <>
      <Head>
        <title>Louvre - Modern Clothing</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                fontFamily: {
                  sans: ['Montserrat', 'system-ui', 'sans-serif'],
                  serif: ['Playfair Display', 'Georgia', 'serif'],
                }
              }
            }
          `
        }} />
      </Head>

      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 border-4 border-transparent border-t-black border-r-black rounded-full animate-spin"></div>
            <div className="absolute inset-4 border-4 border-transparent border-b-black border-l-black rounded-full animate-spin-reverse"></div>
            <div className="absolute inset-8 flex items-center justify-center">
              <span className="text-2xl font-bold tracking-widest font-serif text-black">LOUVRE</span>
            </div>
          </div>
        </div>
      )}

      <div className={`min-h-screen bg-white ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}>
        <nav className="sticky top-0 z-40 bg-white bg-opacity-90 backdrop-blur-md border-b border-gray-100">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold tracking-tight font-serif text-black">LOUVRE</div>
              
              <div className="hidden md:flex space-x-8 font-serif">
                <button 
                  className={`transition-all duration-300 ${activeCategory === 'all' ? 'text-black font-medium' : 'text-gray-700 hover:text-black'}`}
                  onClick={() => setActiveCategory('all')}
                >
                  <a href="#">ALL</a>
                </button>
                <button 
                  className={`transition-all duration-300 ${activeCategory === 'men' ? 'text-black font-medium' : 'text-gray-700 hover:text-black'}`}
                  onClick={() => setActiveCategory('men')}
                >
                  <a href="#">MEN</a>
                </button>
                <button 
                  className={`transition-all duration-300 ${activeCategory === 'women' ? 'text-black font-medium' : 'text-gray-700 hover:text-black'}`}
                  onClick={() => setActiveCategory('women')}
                >
                  <a href="#">WOMEN</a>
                </button>
                
                <a href="#" className="text-gray-700 hover:text-black transition-colors duration-300">COLLECTIONS</a>
                <a href="#" className="text-gray-700 hover:text-black transition-colors duration-300">ABOUT</a>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="black">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <button className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="black">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </button>
                <button className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="black">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </button>
              </div>
              
              <button className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        <section className="relative h-screen max-h-[800px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent z-10"></div>
          
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Louvre Clothing Collection"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative z-20 h-full flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-lg">
                <h1 className="text-5xl md:text-6xl text-black font-bold mb-6 tracking-tight font-serif">Where Art Meets Fashion</h1>
                <p className="text-lg text-gray-800 mb-8 font-serif">Discover our curated collection of high-end apparel, where every piece has a story.</p>
                <button className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105 font-serif">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
            <button className="p-2 animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-black">Our Bestsellers</h2>
              <p className="max-w-2xl mx-auto text-gray-800 font-serif">The pieces our community loves most. Meticulously woven from 100% organic cotton.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id}
                  className="group relative overflow-hidden rounded-xl bg-gray-50 transition-all duration-500 hover:shadow-xl"
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-lg mb-1 font-serif text-black">{product.name}</h3>
                        <p className="text-gray-700 font-serif">Unisex Fit</p>
                      </div>
                      <span className="font-bold font-serif text-black">${product.price.toFixed(2)}</span>
                    </div>
                    
                    <div className="mt-4 flex space-x-2">
                      {product.colors.map(color => (
                        <button 
                          key={color}
                          className={`w-5 h-5 rounded-full border border-gray-300`}
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                    
                    <button className="mt-6 w-full py-2 bg-black text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-serif">
                      Add to Cart
                    </button>
                  </div>
                  
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button className="px-8 py-3 border border-black text-black rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300 font-serif">
                View All Products
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-black">Sustainably Sourced</h2>
                <p className="text-gray-800 mb-6 font-serif">
                  The cornerstone of art and design. Louvre clothing blends timeless aesthetics with modern fashion. 
                  Our pieces are crafted to inspire, empower, and elevate your everyday style.
                </p>
                <p className="text-gray-800 mb-8 font-serif">
                  We prioritize sustainable materials and ethical manufacturing, and source our cotton from organic farms making it 100% sustainable.
                </p>
                <button className="px-6 py-2 border-b-2 text-black border-black font-medium hover:bg-black hover:text-white transition-colors duration-300 font-serif">
                  Our Story
                </button>
              </div>
              
              <div className="lg:w-1/2 relative">
                <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden">
                  <img 
                    src="https://sekem.com/wp-content/uploads/2018/10/CottonHarvest_FT.jpg" 
                    alt="Louvre Brand Story"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white rounded-xl shadow-lg flex items-center justify-center border border-gray-200">
                  <span className="text-s font-bold text-center px-3 text-gray-800 font-serif">100% Sustainably Sourced</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Join the Louvre Community</h2>
            <p className="max-w-2xl mx-auto text-gray-300 mb-8 font-serif">
              Subscribe to receive updates on new collections, exclusive offers, and style inspiration.
            </p>
            
            <div className="max-w-md mx-auto flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-l-lg focus:outline-none text-gray-900 font-serif bg-white border border-gray-300 placeholder-gray-500"
              />
              <button className="px-6 py-3 bg-white text-black font-medium rounded-r-lg hover:bg-gray-200 bg-white border border-gray-300 border-l-0 placeholder-gray-500 transition-colors duration-300 font-serif">
                Subscribe
              </button>
            </div>
            
            <p className="mt-4 text-sm text-gray-400 font-serif">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </section>

        <footer className="bg-white py-12 border-t border-gray-200">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4 font-serif text-black">LOUVRE</h3>
                <p className="text-gray-700 text-sm font-serif">
                  Where art meets fashion. Premium clothing for the modern individual.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-4 font-serif text-black">Shop</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-700 hover:text-black transition-colors duration-300 text-sm font-serif">All Products</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-black transition-colors duration-300 text-sm font-serif">Men</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-black transition-colors duration-300 text-sm font-serif">Women</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-black transition-colors duration-300 text-sm font-serif">Accessories</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-4 font-serif text-black">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-700 hover:text-black transition-colors duration-300 text-sm font-serif">About Us</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-black transition-colors duration-300 text-sm font-serif">Sustainability</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-black transition-colors duration-300 text-sm font-serif">Careers</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-black transition-colors duration-300 text-sm font-serif">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-4 font-serif text-black">Connect</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-700 hover:text-gray-400 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-700 hover:text-gray-400 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-700 hover:text-gray-400 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-700 text-sm mb-4 md:mb-0 font-serif">© {new Date().getFullYear()} Louvre Clothing. All rights reserved.</p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-700 hover:text-black transition-colors duration-300 text-sm font-serif">Privacy Policy</a>
                <a href="#" className="text-gray-700 hover:text-black transition-colors duration-300 text-sm font-serif">Terms of Service</a>
                <a href="#" className="text-gray-700 hover:text-black transition-colors duration-300 text-sm font-serif">Shipping Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}