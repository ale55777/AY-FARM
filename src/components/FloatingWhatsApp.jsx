import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { whatsappLink } from "../data/siteData.js";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Order AY BHATTI FARM mangoes on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-premium ring-8 ring-[#25D366]/15"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 180 }}
      whileHover={{ y: -3, scale: 1.05 }}
    >
      <MessageCircle className="h-7 w-7" />
    </motion.a>
  );
}
