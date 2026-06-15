import { AnimatePresence, motion } from "framer-motion";
import { Instagram, Mail, MessageCircle, Send, Shuffle, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { business } from "../data/siteData.js";

const INSTAGRAM_URL = "https://www.instagram.com/ay.farms/";

const RANDOM_MESSAGES = [
  "Assalam-o-Alaikum! 🥭 I'd like to order fresh Multani mangoes. Please share available varieties and prices for this season.",
  "Hi! I'm interested in premium mangoes from AY BHATTI FARM. Can you share current availability and delivery rates?",
  "Assalam-o-Alaikum! Please share your mango price list, delivery charges and estimated arrival times.",
  "I'd like to order mangoes for my family. Can you help me choose the best variety and quantity for home use?",
  "Interested in a bulk mango order from AY BHATTI FARM. Please share corporate rates and custom packaging options.",
  "Assalam-o-Alaikum! Looking to send mango gift boxes to relatives. Please share your gift pack options and pricing.",
];

/* ── External link button (Instagram) ── */
function FloatingBtn({ href, label, delay, className, ringColor, children }) {
  return (
    <div className="group relative flex items-center justify-end">
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
        <span
          className={`absolute inset-0 rounded-full animate-ping opacity-25 ${ringColor}`}
          style={{ animationDuration: "2.4s" }}
        />
        {children}
      </motion.a>
    </div>
  );
}

/* ── Internal / action button ── */
function FloatingActionBtn({ onClick, label, delay, className, ringColor, children }) {
  return (
    <div className="group relative flex items-center justify-end">
      <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg bg-ink/90 px-3 py-1.5 text-xs font-bold text-white opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 translate-x-1 backdrop-blur">
        {label}
      </span>
      <motion.button
        onClick={onClick}
        aria-label={label}
        className={`relative grid h-14 w-14 place-items-center rounded-full text-white shadow-premium cursor-pointer border-0 ${className}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay, type: "spring", stiffness: 200, damping: 14 }}
        whileHover={{ y: -3, scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <span
          className={`absolute inset-0 rounded-full animate-ping opacity-25 ${ringColor}`}
          style={{ animationDuration: "2.4s" }}
        />
        {children}
      </motion.button>
    </div>
  );
}

/* ── WhatsApp Compose Popup ── */
function WhatsAppCompose({ onClose }) {
  const [msgIdx, setMsgIdx] = useState(
    () => Math.floor(Math.random() * RANDOM_MESSAGES.length)
  );
  const [name,    setName]    = useState("");
  const [phone,   setPhone]   = useState("");
  const [message, setMessage] = useState(RANDOM_MESSAGES[msgIdx]);

  const shuffle = () => {
    const next = (msgIdx + 1) % RANDOM_MESSAGES.length;
    setMsgIdx(next);
    setMessage(RANDOM_MESSAGES[next]);
  };

  const handleSend = () => {
    const parts = [];
    if (name)  parts.push(`*Name:* ${name}`);
    if (phone) parts.push(`*Phone:* ${phone}`);
    if (message) parts.push(`\n${message}`);

    const text = parts.join("\n");
    const waNumber = business.whatsapp.replace(/\s/g, "");
    window.open(
      `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noreferrer"
    );
    onClose();
  };

  return (
    <motion.div
      key="wa-compose"
      initial={{ opacity: 0, y: 16, scale: 0.95 }}
      animate={{ opacity: 1, y: 0,  scale: 1    }}
      exit={{   opacity: 0, y: 16, scale: 0.95 }}
      transition={{ type: "spring", stiffness: 320, damping: 26 }}
      className="mb-3 w-[22rem] overflow-hidden rounded-2xl shadow-2xl border border-white/10"
      style={{ transformOrigin: "bottom right" }}
    >
      {/* ── Header ── */}
      <div className="flex items-center justify-between bg-[#128C7E] px-4 py-3">
        <div className="flex items-center gap-2 text-white">
          <MessageCircle className="h-4 w-4" />
          <span className="text-sm font-bold tracking-wide">🥭 WhatsApp Order</span>
        </div>
        <button
          onClick={onClose}
          aria-label="Close"
          className="rounded-full p-1 text-white/70 transition hover:bg-white/15 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* ── Body ── */}
      <div className="space-y-3 bg-white p-4">
        {/* Name + Phone */}
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-gray-400">
              Your Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ali Khan"
              className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm text-gray-800 outline-none transition focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/25"
            />
          </div>
          <div>
            <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-gray-400">
              Phone
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+92…"
              className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm text-gray-800 outline-none transition focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/25"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <div className="mb-1 flex items-center justify-between">
            <label className="block text-[11px] font-semibold uppercase tracking-wide text-gray-400">
              Message
            </label>
            <button
              onClick={shuffle}
              className="flex items-center gap-1 text-[11px] font-bold text-[#128C7E] transition hover:text-[#25D366]"
              title="Try a different message"
            >
              <Shuffle className="h-3 w-3" />
              Shuffle
            </button>
          </div>
          <textarea
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full resize-none rounded-xl border border-gray-200 px-3 py-2 text-sm text-gray-700 outline-none transition focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/25"
          />
        </div>

        {/* Send button */}
        <button
          onClick={handleSend}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-2.5 text-sm font-bold text-white transition hover:bg-[#20bb5a] active:scale-95"
        >
          <Send className="h-4 w-4" />
          Send on WhatsApp
        </button>

        <p className="text-center text-[10px] text-gray-400">
          Opens WhatsApp with your message pre-filled
        </p>
      </div>
    </motion.div>
  );
}

/* ── Main floating dock ── */
export default function FloatingWhatsApp() {
  const navigate      = useNavigate();
  const [showCompose, setShowCompose] = useState(false);

  const handleEmailClick = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">

      {/* WhatsApp compose popup */}
      <AnimatePresence>
        {showCompose && (
          <WhatsAppCompose onClose={() => setShowCompose(false)} />
        )}
      </AnimatePresence>

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

      {/* Email → Contact form */}
      <FloatingActionBtn
        onClick={handleEmailClick}
        label="Send Order Request"
        delay={0.9}
        className="bg-[#EA4335]"
        ringColor="bg-[#EA4335]"
      >
        <Mail className="h-6 w-6" />
      </FloatingActionBtn>

      {/* WhatsApp — toggles compose popup */}
      <FloatingActionBtn
        onClick={() => setShowCompose((v) => !v)}
        label="Order on WhatsApp"
        delay={0.8}
        className="bg-[#25D366]"
        ringColor="bg-[#25D366]"
      >
        <MessageCircle className="h-7 w-7" />
      </FloatingActionBtn>

    </div>
  );
}
