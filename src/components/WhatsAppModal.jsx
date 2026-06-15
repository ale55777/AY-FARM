import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, Shuffle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { business, mangoes } from "../data/siteData.js";
import { useWhatsApp } from "../context/WhatsAppContext.jsx";

const MESSAGES = [
  "Assalam-o-Alaikum! 🥭 I'd like to order fresh Multani mangoes. Please share available varieties and prices for this season.",
  "Hi! I'm interested in ordering premium mangoes from AY BHATTI FARM. Can you confirm availability and delivery charges?",
  "Assalam-o-Alaikum! Please share your mango price list, box sizes and delivery details for this season.",
  "I want to order mangoes for my family. Can you help me select the right variety and quantity?",
  "Interested in a bulk mango order from AY BHATTI FARM. Please share corporate rates and packaging options.",
  "Assalam-o-Alaikum! Looking to send mango gift boxes. Please share your gift pack options and prices.",
];

const INTERESTS = [
  ...mangoes.map((m) => m.title),
  "Corporate Gift Boxes",
  "Bulk Order",
];

export default function WhatsAppModal() {
  const { open, defaults, closeModal } = useWhatsApp();

  const [name,     setName]     = useState("");
  const [phone,    setPhone]    = useState("");
  const [city,     setCity]     = useState("");
  const [interest, setInterest] = useState(INTERESTS[0]);
  const [msgIdx,   setMsgIdx]   = useState(0);
  const [message,  setMessage]  = useState(MESSAGES[0]);

  // Reset + apply defaults whenever modal opens
  useEffect(() => {
    if (open) {
      setName("");
      setPhone("");
      setCity("");
      setInterest(defaults.interest || INTERESTS[0]);
      const idx = Math.floor(Math.random() * MESSAGES.length);
      setMsgIdx(idx);
      setMessage(MESSAGES[idx]);
    }
  }, [open, defaults]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") closeModal(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeModal]);

  const shuffle = () => {
    const next = (msgIdx + 1) % MESSAGES.length;
    setMsgIdx(next);
    setMessage(MESSAGES[next]);
  };

  const handleSend = () => {
    const parts = [];
    if (name)     parts.push(`*Name:* ${name}`);
    if (phone)    parts.push(`*Phone:* ${phone}`);
    if (city)     parts.push(`*City:* ${city}`);
    if (interest) parts.push(`*Interest:* ${interest}`);
    if (message)  parts.push(`\n${message}`);

    const text     = parts.join("\n");
    const waNumber = business.whatsapp.replace(/\s/g, "");
    window.open(
      `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noreferrer"
    );
    closeModal();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* ── Backdrop ── */}
          <motion.div
            key="wa-backdrop"
            className="fixed inset-0 z-[90] bg-ink/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          />

          {/* ── Modal card ── */}
          <motion.div
            key="wa-modal"
            className="fixed inset-0 z-[91] flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1,    y: 0  }}
            exit={{   opacity: 0, scale: 0.94, y: 24 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
          >
            <div
              className="w-full max-w-lg overflow-hidden rounded-3xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* ── Green header ── */}
              <div className="flex items-center justify-between bg-[#128C7E] px-6 py-4">
                <div className="flex items-center gap-3 text-white">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-white/15">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-black tracking-wide">🥭 WhatsApp Order</p>
                    <p className="text-xs text-white/70">AY BHATTI FARM · Multan</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  aria-label="Close"
                  className="grid h-8 w-8 place-items-center rounded-full text-white/70 transition hover:bg-white/15 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* ── Form body ── */}
              <div className="space-y-4 bg-white p-6">
                {/* Row 1 — Name + Phone */}
                <div className="grid grid-cols-2 gap-3">
                  <InputField label="Your Name" value={name} onChange={setName} placeholder="Ali Khan" />
                  <InputField label="Phone" value={phone} onChange={setPhone} placeholder="+92…" type="tel" />
                </div>

                {/* Row 2 — City + Interest */}
                <div className="grid grid-cols-2 gap-3">
                  <InputField label="City" value={city} onChange={setCity} placeholder="Lahore, Karachi…" />
                  <div>
                    <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-widest text-gray-400">
                      Mango Interest
                    </label>
                    <select
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-gray-800 outline-none transition focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/25"
                    >
                      {INTERESTS.map((opt) => (
                        <option key={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <div className="mb-1.5 flex items-center justify-between">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                      Message
                    </label>
                    <button
                      onClick={shuffle}
                      className="flex items-center gap-1 text-[11px] font-bold text-[#128C7E] transition hover:text-[#25D366]"
                    >
                      <Shuffle className="h-3 w-3" />
                      Shuffle
                    </button>
                  </div>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full resize-none rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/25"
                  />
                </div>

                {/* Send button */}
                <button
                  onClick={handleSend}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-sm font-black text-white shadow-lg transition hover:bg-[#20bb5a] active:scale-[0.98]"
                >
                  <Send className="h-4 w-4" />
                  Send Message on WhatsApp
                </button>

                <p className="text-center text-[10px] text-gray-400">
                  Opens WhatsApp · Message goes directly to AY BHATTI FARM
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function InputField({ label, value, onChange, placeholder, type = "text" }) {
  return (
    <div>
      <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-widest text-gray-400">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-gray-800 outline-none transition focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/25"
      />
    </div>
  );
}
