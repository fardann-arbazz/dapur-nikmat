import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Clock, Users } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: <Award className="h-6 w-6 text-amber-600" />,
      title: "Kualitas Terbaik",
      description:
        "Kami hanya menggunakan bahan-bahan segar dan berkualitas tinggi untuk setiap hidangan.",
    },
    {
      icon: <Clock className="h-6 w-6 text-amber-600" />,
      title: "Pengiriman Cepat",
      description:
        "Nikmati layanan pengiriman cepat kami untuk menikmati hidangan dalam keadaan hangat.",
    },
    {
      icon: <Users className="h-6 w-6 text-amber-600" />,
      title: "Pelayanan Ramah",
      description:
        "Tim kami siap memberikan pelayanan terbaik dengan keramahan dan profesionalisme.",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-white relative overflow-hidden"
      ref={ref}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">
            Tentang Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Cerita Di Balik <span className="text-amber-600">Dapur Nikmat</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Perjalanan kami dimulai dari dapur kecil dengan resep warisan
            keluarga yang kini telah menjadi favorit banyak orang.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&crop=center"
                alt="Dapur Kami"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 h-48 w-48 bg-amber-100 rounded-full z-[-1]"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-800">
              Dari Dapur Rumah ke Hati Pelanggan
            </h3>
            <p className="text-gray-600">
              Dapur Nikmat didirikan pada tahun 2015 oleh Ibu Siti yang memiliki
              passion dalam memasak. Berawal dari pesanan tetangga dan kerabat,
              kini Dapur Nikmat telah melayani ribuan pelanggan setia di seluruh
              kota.
            </p>
            <p className="text-gray-600">
              Kami berkomitmen untuk menyajikan hidangan dengan cita rasa
              autentik yang mengingatkan pada kehangatan masakan rumahan, namun
              dengan sentuhan profesional yang membuat setiap gigitan menjadi
              istimewa.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="bg-amber-50 p-4 rounded-lg"
                >
                  <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-3 shadow-sm">
                    {feature.icon}
                  </div>
                  <h4 className="font-medium text-gray-800 mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-24 h-24 bg-amber-200 rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-amber-300 rounded-full opacity-20 blur-2xl"></div>
    </section>
  );
};

export default About;
