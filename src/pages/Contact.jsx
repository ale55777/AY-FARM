import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import Button from "../components/Button.jsx";
import SEO from "../components/SEO.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import WhatsAppCTA from "../components/WhatsAppCTA.jsx";
import { business, mangoes, whatsappLink } from "../data/siteData.js";

export default function Contact() {
  const [status, setStatus]   = useState("");
  const [sending, setSending] = useState(false);
  const formRef = useRef(null);

  const schema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact AY BHATTI FARM",
      url: `${business.website}/contact`,
      mainEntity: {
        "@type": "LocalBusiness",
        name: business.name,
        telephone: business.phone,
        email: business.email,
        address: business.address
      }
    }),
    []
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    setSending(true);
    setStatus("");

    const data = new FormData(formRef.current);
    const name     = data.get("name")     || "";
    const phone    = data.get("phone")    || "";
    const city     = data.get("city")     || "";
    const interest = data.get("interest") || "";
    const message  = data.get("message")  || "";

    const text =
      `🥭 *New Order – AY BHATTI FARM Website*\n\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*City:* ${city}\n` +
      `*Interest:* ${interest}\n` +
      `*Message:* ${message}`;

    const waNumber = business.whatsapp.replace(/\s/g, "");
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;

    window.open(waUrl, "_blank", "noreferrer");
    setStatus("success");
    formRef.current.reset();
    setSending(false);
  };

  return (
    <>
      <SEO
        title="Contact AY BHATTI FARM | Order Fresh Mangoes in Pakistan"
        description="Contact AY BHATTI FARM in Multan for fresh mango orders, corporate gift boxes, bulk mango inquiries and nationwide mango delivery in Pakistan."
        path="/contact"
        schema={schema}
      />
      <main className="pt-32">
        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Contact AY BHATTI FARM"
              title="Order fresh Multani mangoes or request a bulk quote"
              text="Share your city, preferred variety and required quantity. WhatsApp is the fastest way to confirm seasonal availability."
            />

            <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-[2rem] bg-orchard-gradient p-6 text-white shadow-premium sm:p-8"
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-mango">Direct inquiries</p>
                <h1 className="mt-3 font-display text-4xl font-bold">Fresh mango help, one message away</h1>
                <p className="mt-4 leading-8 text-white/76">
                  For urgent seasonal orders, send your mango variety, quantity and delivery city on WhatsApp.
                </p>
                <div className="mt-8 space-y-4">
                  <ContactItem icon={MessageCircle} label="WhatsApp" value={`+${business.whatsapp}`} href={whatsappLink()} />
                  <ContactItem icon={Phone} label="Phone" value={business.phone} href={`tel:${business.phone.replace(/\s/g, "")}`} />
                  <ContactItem icon={Mail} label="Email" value={business.email} href={`mailto:${business.email}`} />
                  <ContactItem icon={MapPin} label="Farm Address" value={business.address} />
                </div>
                <Button href={whatsappLink()} icon={MessageCircle} className="mt-8 w-full" target="_blank" rel="noreferrer">
                  Order Fresh Mangoes on WhatsApp
                </Button>
              </motion.div>

              <motion.form
                ref={formRef}
                name="mango-inquiry"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="rounded-[2rem] border border-orchard/10 bg-white p-6 shadow-premium sm:p-8"
              >
                <input type="hidden" name="form-name" value="mango-inquiry" />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" name="name" placeholder="Your name" required />
                  <Field label="Phone Number" name="phone" type="tel" placeholder="+92..." required />
                  <Field label="City" name="city" placeholder="Lahore, Karachi, Islamabad..." required />
                  <label className="block">
                    <span className="form-label">Interest</span>
                    <select name="interest" className="form-field" defaultValue="Sindhri Mango">
                      {mangoes.map((mango) => (
                        <option key={mango.title}>{mango.title}</option>
                      ))}
                      <option>Corporate Gift Boxes</option>
                      <option>Bulk Order</option>
                    </select>
                  </label>
                </div>
                <label className="mt-5 block">
                  <span className="form-label">Message</span>
                  <textarea
                    name="message"
                    rows="6"
                    className="form-field resize-none"
                    placeholder="Tell us your required quantity, delivery city and preferred mango variety."
                    required
                  />
                </label>
                <Button type="submit" variant="dark" icon={Send} className="mt-6 w-full" disabled={sending}>
                  {sending ? "Sending…" : "Send Order"}
                </Button>
                {status === "success" && (
                  <p className="mt-4 rounded-2xl bg-green-50 border border-green-200 px-4 py-3 text-sm font-bold text-green-700">
                    ✅ WhatsApp opened with your order! Complete the chat to confirm.
                  </p>
                )}
              </motion.form>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Farm location"
              title="AY BHATTI FARM, Multan"
              text="Map embed for the farm region. Replace the map URL with the exact Google Maps place link before launch."
            />
            <div className="mt-10 overflow-hidden rounded-[2rem] border border-orchard/10 shadow-premium">
              <iframe
                title="AY BHATTI FARM Multan map"
                src="https://www.google.com/maps?q=Multan%20Pakistan&output=embed"
                className="h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>
      <WhatsAppCTA />
    </>
  );
}

function ContactItem({ icon: Icon, label, value, href }) {
  const content = (
    <span className="flex items-start gap-3 rounded-3xl border border-white/14 bg-white/10 p-4 backdrop-blur transition hover:bg-white/16">
      <Icon className="mt-1 h-5 w-5 shrink-0 text-mango" />
      <span>
        <span className="block text-xs font-black uppercase tracking-[0.18em] text-mango">{label}</span>
        <span className="mt-1 block leading-7 text-white/82">{value}</span>
      </span>
    </span>
  );

  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
      {content}
    </a>
  ) : (
    content
  );
}

function Field({ label, name, type = "text", placeholder, required }) {
  return (
    <label className="block">
      <span className="form-label">{label}</span>
      <input className="form-field" name={name} type={type} placeholder={placeholder} required={required} />
    </label>
  );
}
