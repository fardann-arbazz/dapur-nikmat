import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const Menu = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "Semua Menu" },
    { id: "main", name: "Menu Utama" },
    { id: "side", name: "Pendamping" },
    { id: "dessert", name: "Pencuci Mulut" },
    { id: "drink", name: "Minuman" },
  ];

  const menuItems = [
    {
      id: 1,
      name: "Nasi Goreng Spesial",
      description: "Nasi goreng dengan telur, ayam, dan sayuran segar",
      price: 25000,
      image:
        "https://i.pinimg.com/736x/f8/47/3f/f8473f75e368eee2c7c8cdbf4b0af969.jpg",
      category: "main",
      popular: true,
    },
    {
      id: 2,
      name: "Sate Ayam",
      description: "Sate ayam dengan bumbu kacang khas",
      price: 30000,
      image:
        "https://i.pinimg.com/736x/81/70/66/817066a3e0587d60592d31920f31f69a.jpg",
      category: "main",
      popular: true,
    },
    {
      id: 3,
      name: "Gado-gado",
      description: "Sayuran segar dengan bumbu kacang",
      price: 20000,
      image:
        "https://i.pinimg.com/736x/1f/7d/0b/1f7d0bda30cd9c7646c374bb20f33c2a.jpg",
      category: "side",
    },
    {
      id: 4,
      name: "Es Cendol",
      description: "Minuman manis dengan cendol dan santan",
      price: 15000,
      image:
        "https://i.pinimg.com/736x/a7/d5/99/a7d599ac93820a46eecefbd34713e850.jpg",
      category: "drink",
    },
    {
      id: 5,
      name: "Rendang Sapi",
      description: "Daging sapi dengan bumbu rendang khas",
      price: 35000,
      image:
        "https://i.pinimg.com/736x/b1/42/2d/b1422db0434861386ae1249816b8b4d2.jpg",
      category: "main",
      popular: true,
    },
    {
      id: 6,
      name: "Klepon",
      description: "Kue tradisional dengan gula merah",
      price: 10000,
      image:
        "https://i.pinimg.com/736x/2c/bc/03/2cbc033449dc9bc0e0a7a033939284b6.jpg",
      category: "dessert",
    },
    {
      id: 7,
      name: "Es Teh Manis",
      description: "Teh manis dingin yang menyegarkan",
      price: 8000,
      image:
        "https://i.pinimg.com/736x/0a/7c/27/0a7c27f56aa886c3451e4cf97bc37e57.jpg",
      category: "drink",
    },
    {
      id: 8,
      name: "Pisang Goreng",
      description: "Pisang goreng dengan tepung crispy",
      price: 12000,
      image:
        "https://i.pinimg.com/736x/86/16/75/8616754d2c59229d091869b726984839.jpg",
      category: "dessert",
    },
  ];

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id="menu"
      ref={ref}
      className="py-16 md:py-24 bg-amber-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-3 py-1 bg-amber-200 text-amber-700 rounded-full text-sm font-medium mb-4">
            Menu Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nikmati Hidangan <span className="text-amber-600">Lezat</span> Kami
          </h2>
          <p className="text-gray-600 text-lg">
            Pilihan menu terbaik kami yang dibuat dengan bahan-bahan berkualitas
            dan resep rahasia keluarga.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-amber-600 text-white"
                  : "bg-white text-gray-700 hover:bg-amber-100"
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative h-48 w-full">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                {item.popular && (
                  <div className="absolute top-2 right-2 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    Populer
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800 mb-1">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-amber-600">
                    Rp {item.price.toLocaleString("id-ID")}
                  </span>
                  <button className="px-3 py-1 bg-amber-100 hover:bg-amber-200 text-amber-700 rounded-full text-sm font-medium transition-colors">
                    Pesan
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Ingin melihat menu lengkap kami? Unduh menu digital kami.
          </p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-full transition-colors"
          >
            Unduh Menu Lengkap
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-amber-300 rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-200 rounded-full opacity-20 blur-2xl"></div>
    </section>
  );
};

export default Menu;
