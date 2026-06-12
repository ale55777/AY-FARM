import { Instagram, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { whatsappLink } from "../data/siteData.js";

const INSTAGRAM_URL = "https://www.instagram.com/ay.farms/";
const WHATSAPP_URL = whatsappLink();

function FloatingBtn({ href, label, delay, className, ringColor, children }) {
  return (
    <div className="group relative flex items-center justify-end">
      {/* Tooltip */}
      <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg bg-ink/90 px-3 py-1.5 text-xs font-bold text-white opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 translate-x-1 backdrop-blur">
        {label}
      </span>
      <motion.a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={label}
        className={`relative grid h-14 w-14 place-items-center rounded-full text-white shadow-premium ${className}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay, type: "spring", stiffness: 200, damping: 14 }}
        whileHover={{ y: -3, scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Pulse ring */}
        <span
          className={`absolute inset-0 rounded-full animate-ping opacity-25 ${ringColor}`}
          style={{ animationDuration: "2.4s" }}
        />
        {children}
      </motion.a>
    </div>
  );
}

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {/* Instagram */}
      <FloatingBtn
        href={INSTAGRAM_URL}
        label="Follow on Instagram"
        delay={1.0}
        className="bg-[linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)]"
        ringColor="bg-[#dc2743]"
      >
        <Instagram className="h-6 w-6" />
      </FloatingBtn>

      {/* WhatsApp */}
      <FloatingBtn
        href={WHATSAPP_URL}
        label="Order on WhatsApp"
        delay={0.8}
        className="bg-[#25D366]"
        ringColor="bg-[#25D366]"
      >
        <MessageCircle className="h-7 w-7" />
      </FloatingBtn>
    </div>
  );
}
