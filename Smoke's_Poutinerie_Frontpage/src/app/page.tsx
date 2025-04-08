"use client"
import { FaFacebook, FaInstagram, FaTwitter, FaYelp, FaMapMarkerAlt, FaPhone, FaClock, FaUtensils } from 'react-icons/fa';
import { GiCheeseWedge, GiFrenchFries } from 'react-icons/gi';
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleLogoClick = () => {
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 1000);
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <div className="min-h-screen bg-gray-50 font-sans">
        <nav className="bg-red-800 text-white shadow-lg font-sans">
          <div className="container mx-auto px-6 py-3 flex justify-between items-center">
            <div 
              className="flex items-center space-x-4 cursor-pointer"
              onClick={handleLogoClick}
            >
              <div className={`w-10 h-10 rounded-full overflow-hidden border-2 border-white transition-transform duration-1000 ${isSpinning ? 'rotate-[360deg]' : ''}`}>
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREap6v1xNlKsRvgqLAZzcPsKXir3f9XNPw5g&s" 
                  alt="Smoke's Poutinerie Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-2xl font-bold font-heading">
                Smoke's Poutinerie
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#menu" className="hover:text-yellow-300 transition font-medium">Menu</a>
              <a href="#locations" className="hover:text-yellow-300 transition font-medium">Locations</a>
              <a href="#about" className="hover:text-yellow-300 transition font-medium">About</a>
              <a href="#contact" className="hover:text-yellow-300 transition font-medium">Contact</a>
            </div>
            <button className="md:hidden focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </nav>

        <section className="relative">
          <div className="w-full h-96 bg-cover bg-center">
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-5xl font-bold mb-4 font-heading">Canada's Original Poutinerie</h1>
                <p className="text-xl mb-8 font-medium">Gourmet poutine with a twist since 2008</p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-red-900 font-bold py-3 px-8 rounded-full text-lg transition font-heading">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-3xl font-bold text-red-800 mb-4 font-heading">Poutine Perfected</h2>
                <p className="text-gray-700 mb-6 font-medium">
                  At Smoke's Poutinerie, we've taken Canada's favorite dish and elevated it to an art form. 
                  Our signature gravy, fresh-cut fries, and premium cheese curds are just the beginning.
                </p>
                <div className="flex space-x-4">
                  <div className="flex items-center font-medium">
                    <GiFrenchFries className="text-red-700 text-2xl mr-2" />
                    <span className="text-gray-600 font-medium">Fresh-cut fries</span>
                  </div>
                  <div className="flex items-center font-medium">
                    <GiCheeseWedge className="text-red-700 text-2xl mr-2" />
                    <span className="text-gray-600 font-medium">Premium cheese curds</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <a href="https://www.youtube.com/watch?v=uffVeiHLpoI">
                  <img 
                    src="https://i.ytimg.com/vi/uffVeiHLpoI/maxresdefault.jpg" 
                    alt="Gourmet poutine" 
                    className="rounded-lg shadow-xl w-full h-84 object-cover"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>


        <section id="menu" className="py-16 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-red-800 mb-12 font-heading">Our Signature Poutines</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems.map((item, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-red-800 mb-2 font-heading">{item.name}</h3>
                    <p className="text-gray-600 mb-4 font-medium">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg text-gray-800">${item.price.toFixed(2)}</span>
                      <button className="bg-red-800 hover:bg-red-900 text-white py-2 px-4 rounded-full text-sm transition font-medium">
                        Add to Order
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>className="text-gray-600 font-medium"
        </section>

        <section id="locations" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-red-800 mb-12 font-heading">Find Us</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {locations.map((location, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                  <h3 className="text-xl font-bold text-red-800 mb-4 font-heading">{location.city}</h3>
                  <div className="space-y-3 font-medium">
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="text-red-700 mr-3" />
                      <span className="text-gray-600 font-medium">{location.address}</span>
                    </div>
                    <div className="flex items-center">
                      <FaPhone className="text-red-700 mr-3" />
                      <span className="text-gray-600 font-medium">{location.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-red-700 mr-3" />
                      <span className="text-gray-600 font-medium">{location.hours}</span>
                    </div>
                  </div>
                  <button className="mt-6 w-full bg-red-800 hover:bg-red-900 text-white py-2 px-4 rounded-full transition font-medium">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-16 bg-gray-100">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <img 
                  src="https://mma.prnewswire.com/media/724733/Smoke_s_Poutinerie_Upcoming_Feature_Film_Crazy_Rich_Asians_Partn.jpg?p=facebook" 
                  alt="Smoke's Poutinerie restaurant" 
                  className="rounded-lg shadow-xl w-full h-64 object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-red-800 mb-4 font-heading">Our Story</h2>
                <p className="text-gray-700 mb-4 font-medium">
                  Founded in 2008 in Toronto, Smoke's Poutinerie was born from a simple idea: 
                  to take Canada's beloved poutine and transform it into a gourmet experience.
                </p>
                <p className="text-gray-700 mb-6 font-medium">
                  What started as a single location has grown into Canada's largest poutine franchise, 
                  with locations across the country and a menu featuring over 30 unique poutine creations.
                </p>
                <div className="flex items-center space-x-4 font-medium">
                  <FaUtensils className="text-red-700 text-2xl" />
                  <span className="text-gray-600 font-medium">Serving poutine perfection since 2008</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-red-800 text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 font-heading">Get In Touch</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-4 font-heading">Contact Information</h3>
                <div className="space-y-4 font-medium">
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-3" />
                    <span>85 Kingston Rd. E, Ajax, ON L1S 7J4</span>
                  </div>
                  <div className="flex items-center">
                    <FaPhone className="mr-3" />
                    <span>416-530-2873</span>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-3" />
                    <span>Open Daily: 11:00 AM - 11:00 PM</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mt-8 mb-4 font-heading">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-yellow-300 transition">
                    <FaFacebook className="text-2xl" />
                  </a>
                  <a href="#" className="hover:text-yellow-300 transition">
                    <FaInstagram className="text-2xl" />
                  </a>
                  <a href="#" className="hover:text-yellow-300 transition">
                    <FaTwitter className="text-2xl" />
                  </a>
                  <a href="#" className="hover:text-yellow-300 transition">
                    <FaYelp className="text-2xl" />
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 font-heading">Send Us a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 rounded bg-red-900 border border-red-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white placeholder-red-300 font-medium"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 rounded bg-red-900 border border-red-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white placeholder-red-300 font-medium"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full px-4 py-2 rounded bg-red-900 border border-red-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white placeholder-red-300 font-medium"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="bg-yellow-500 hover:bg-yellow-600 text-red-900 font-bold py-3 px-6 rounded-full transition font-heading"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-white">
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREap6v1xNlKsRvgqLAZzcPsKXir3f9XNPw5g&s" 
                    alt="Smoke's Poutinerie Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-lg font-bold font-heading">Smoke's Poutinerie</span>
              </div>
              <div className="text-sm text-gray-300 font-medium">
                &copy; {new Date().getFullYear()} Smoke's Poutinerie. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

const menuItems = [
  {
    name: "Traditional",
    description: "Our signature gravy, fresh-cut fries, and premium cheese curds",
    price: 9.99,
    image: "https://smokespoutinerie.com/wp-content/uploads/2019/07/Traditional-1.png"
  },
  {
    name: "Double Pork",
    description: "Chipotle pulled pork, double-smoked bacon",
    price: 12.99,
    image: "https://smokespoutinerie.com/wp-content/uploads/2020/09/DoublePork-1024x1024-min.png"
  },
  {
    name: "Butter Chicken",
    description: "Grilled chicken, butter chicken sauce, and green onions",
    price: 11.99,
    image: "https://smokespoutinerie.com/wp-content/uploads/2020/09/ButterChicken-1024x1024-min.png"
  },
  {
    name: "Chicken Inferno",
    description: "Grilled chicken, sriracha, jalepenos, red peppers",
    price: 12.49,
    image: "https://smokespoutinerie.com/wp-content/uploads/2020/09/ChickenInferno-1024x1024-1-min-1.png"
  },
  {
    name: "Veggie Rainbow",
    description: "Sriracha, cheese Sauce, guac, Sour cream",
    price: 10.99,
    image: "https://smokespoutinerie.com/wp-content/uploads/2020/09/VeggieRainbow-1024x1024-min.png"
  },
  {
    name: "Prime Beef Deluxe",
    description: "Prime ground beef, mushrooms, onions, green peas",
    price: 11.49,
    image: "https://smokespoutinerie.com/wp-content/uploads/2020/09/PrimeBeefDeluxe-1024x1024-min.png"
  }
];

const locations = [
  {
    city: "Toronto",
    address: "218 Adelaide St W, Toronto, ON M5H 1W7",
    phone: "(416) 979-9497",
    hours: "11:00 AM - 11:00 PM Daily"
  },
  {
    city: "Vancouver",
    address: "942 Granville Street Vancouver, BC V6B 2C9",
    phone: "(604) 669-2873",
    hours: "11:00 AM - 10:00 PM Daily"
  },
  {
    city: "Montreal",
    address: "2019 Rue Bishop Montreal, QC H3G 2E9",
    phone: "(514) 419-4744",
    hours: "10:00 AM - 12:00 AM Daily"
  }
];