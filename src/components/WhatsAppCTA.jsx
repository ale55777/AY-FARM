import { MessageCircle, PackageCheck } from "lucide-react";
import { motion } from "framer-motion";
import { business, whatsappLink } from "../data/siteData.js";
import Button from "./Button.jsx";

export default function WhatsAppCTA() {
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
              Send a WhatsApp message and our team will confirm available varieties, box sizes, delivery city and payment details.
            </p>
          </div>
          <div className="rounded-3xl border border-white/16 bg-white/12 p-5 backdrop-blur">
            <div className="mb-5 flex items-center gap-3">
              <PackageCheck className="h-10 w-10 rounded-2xl bg-mango p-2 text-ink" />
              <div>
                <p className="font-black">Default WhatsApp Message</p>
                <p className="text-sm text-white/70">{business.phone}</p>
              </div>
            </div>
            <p className="rounded-2xl bg-white/10 p-4 text-sm leading-7 text-white/78">{business.defaultMessage}</p>
            <Button href={whatsappLink()} variant="primary" icon={MessageCircle} className="mt-5 w-full" target="_blank" rel="noreferrer">
              Order Fresh Mangoes on WhatsApp
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
