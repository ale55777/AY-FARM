import { MessageCircle, PackageCheck } from "lucide-react";
import { motion } from "framer-motion";
import { business } from "../data/siteData.js";
import { useWhatsApp } from "../context/WhatsAppContext.jsx";

export default function WhatsAppCTA() {
  const { openModal } = useWhatsApp();

  return (
    <section className="bg-cream px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-orchard-gradient p-8 text-white shadow-premium sm:p-10 lg:p-12"
      >
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-3 inline-flex rounded-full bg-white/14 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-mango">
              Fresh boxes dispatch in season
            </p>
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-5xl">Ready to order fresh Multani mangoes?</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/76">
              Fill your details in our order form and we'll confirm available varieties, box sizes, delivery city and payment details instantly on WhatsApp.
            </p>
          </div>
          <div className="rounded-3xl border border-white/16 bg-white/12 p-5 backdrop-blur">
            <div className="mb-5 flex items-center gap-3">
              <PackageCheck className="h-10 w-10 rounded-2xl bg-mango p-2 text-ink" />
              <div>
                <p className="font-black">WhatsApp Order Form</p>
                <p className="text-sm text-white/70">{business.phone}</p>
              </div>
            </div>
            <p className="rounded-2xl bg-white/10 p-4 text-sm leading-7 text-white/78">{business.defaultMessage}</p>
            <button
              onClick={() => openModal()}
              className="relative mt-5 flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-[#25D366] py-3.5 text-sm font-black text-white shadow-lg transition hover:bg-[#20bb5a] hover:shadow-[0_0_22px_rgba(37,211,102,0.5)] active:scale-[0.98]"
            >
              <span className="absolute inset-0 animate-ping rounded-2xl bg-[#25D366] opacity-20" style={{ animationDuration: "2.4s" }} />
              <MessageCircle className="relative h-4 w-4" />
              <span className="relative">Order Fresh Mangoes on WhatsApp</span>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
