import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-amber-900 text-amber-100">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <a href="/" className="flex items-center mb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold text-white"
              >
                Dapur<span className="text-amber-400">Nikmat</span>
              </motion.div>
            </a>
            <p className="mb-4 text-amber-200">
              Menyajikan hidangan tradisional dengan cita rasa autentik yang
              dibuat dari bahan-bahan segar dan berkualitas tinggi.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="bg-amber-800 hover:bg-amber-700 p-2 rounded-full transition-colors"
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="bg-amber-800 hover:bg-amber-700 p-2 rounded-full transition-colors"
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="bg-amber-800 hover:bg-amber-700 p-2 rounded-full transition-colors"
              >
                <Twitter size={18} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="bg-amber-800 hover:bg-amber-700 p-2 rounded-full transition-colors"
              >
                <Youtube size={18} />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Menu Utama</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Menu Spesial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Paket Keluarga
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Paket Katering
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Menu Diet
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Layanan</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Pesan Antar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Katering Acara
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Reservasi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Kemitraan
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Jam Buka</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Senin - Jumat:</span>
                <span>10:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sabtu:</span>
                <span>09:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Minggu:</span>
                <span>09:00 - 22:00</span>
              </li>
              <li className="mt-4 pt-4 border-t border-amber-800">
                <span className="font-medium text-amber-400">
                  Pesan Antar Tersedia
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-amber-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {currentYear} Dapur Nikmat. Hak Cipta Dilindungi.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-sm hover:text-amber-400">
              Syarat & Ketentuan
            </a>
            <a href="#" className="text-sm hover:text-amber-400">
              Kebijakan Privasi
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
