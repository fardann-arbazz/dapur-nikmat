import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Star } from "lucide-react";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const testimonials = [
    {
      id: 1,
      name: "Budi Santoso",
      role: "Pelanggan Setia",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content:
        "Makanan di Dapur Nikmat selalu menjadi pilihan keluarga kami untuk acara-acara penting. Rasanya konsisten dan pelayanannya sangat ramah.",
      rating: 5,
    },
    {
      id: 2,
      name: "Siti Rahayu",
      role: "Food Blogger",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "Sebagai food blogger, saya sangat merekomendasikan Dapur Nikmat. Cita rasa autentik dan bahan-bahan berkualitas membuat setiap hidangan terasa istimewa.",
      rating: 5,
    },
    {
      id: 3,
      name: "Ahmad Hidayat",
      role: "Pengusaha",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content:
        "Dapur Nikmat selalu menjadi pilihan untuk katering rapat bisnis kami. Semua kolega selalu puas dengan hidangan yang disajikan.",
      rating: 4,
    },
  ];

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-16 md:py-24 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">
            Testimoni
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Apa Kata <span className="text-amber-600">Pelanggan</span> Kami
          </h2>
          <p className="text-gray-600 text-lg">
            Kepuasan pelanggan adalah prioritas utama kami. Lihat apa yang
            mereka katakan tentang pengalaman bersama Dapur Nikmat.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-amber-50 p-6 rounded-xl relative"
            >
              <div className="absolute -top-5 left-6">
                <div className="bg-white rounded-full p-1 shadow-md">
                  <div className="h-16 w-16 rounded-full overflow-hidden relative">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="pt-12">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${
                        i < testimonial.rating
                          ? "text-amber-500 fill-amber-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div>
                  <h4 className="font-bold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 bg-amber-600 rounded-2xl overflow-hidden shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Bergabunglah dengan 5,000+ Pelanggan Puas Kami
              </h3>
              <p className="text-amber-100 mb-6">
                Dapatkan diskon 10% untuk pemesanan pertama Anda. Langganan
                newsletter kami untuk mendapatkan update menu terbaru dan
                promo-promo menarik.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Masukkan email Anda"
                  className="px-4 py-3 rounded-lg flex-grow border text-white focus:outline-none"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 cursor-pointer py-3 bg-amber-800 hover:bg-amber-900 text-white font-medium rounded-lg transition-colors"
                >
                  Berlangganan
                </motion.button>
              </form>
            </div>
            <div className="relative h-32 md:h-80">
              <img
                src="https://i.pinimg.com/736x/1f/7d/0b/1f7d0bda30cd9c7646c374bb20f33c2a.jpg"
                alt="Hidangan Spesial"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 right-0 w-32 h-32 bg-amber-200 rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-amber-300 rounded-full opacity-20 blur-2xl"></div>
    </section>
  );
};

export default Testimonials;
