import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  Eye,
  MessageCircle,
  ShoppingBasket,
  Sparkles,
  Star,
  X
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import Button from "../components/Button.jsx";
import SEO from "../components/SEO.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import WhatsAppCTA from "../components/WhatsAppCTA.jsx";
import {
  business,
  faqs,
  features,
  gallery,
  heroImages,
  mangoes,
  processSteps,
  quickCtas,
  stats,
  testimonials,
  whatsappLink
} from "../data/siteData.js";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  const schema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Store",
      name: business.name,
      url: business.website,
      telephone: business.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Multan",
        addressRegion: "Punjab",
        addressCountry: "PK"
      },
      description: "Premium Multani mango farm delivering fresh Sindhri, Anwar Ratol, Dusehri and Chaunsa mangoes across Pakistan.",
      areaServed: "Pakistan",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Fresh Pakistani Mangoes",
        itemListElement: mangoes.map((mango) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: mango.title,
            description: mango.description
          }
        }))
      }
    }),
    []
  );

  return (
    <>
      <SEO
        title="Fresh Multani Mangoes Delivered Across Pakistan | AY BHATTI FARM"
        description="Buy premium Sindhri, Anwar Ratol, Dusehri and Chaunsa mangoes online from AY BHATTI FARM in Multan. Farm-fresh mango delivery across Pakistan."
        schema={schema}
      />
      <Hero />
      <FeatureSection />
      <MangoCollection />
      <ComparisonSection />
      <AboutSection />
      <DeliveryProcess />
      <GallerySection />
      <TestimonialsSection />
      <FAQSection />
      <WhatsAppCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-ink pt-28 text-white">
      {/* Full hero background — hero-orchard.jpeg covers the complete section */}
      <div className="absolute inset-0">
        <motion.img
          src="/images/hero-orchard.jpeg"
          alt="AY BHATTI FARM lush mango orchard in Multan Pakistan"
          className="h-full w-full object-cover"
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          loading="eager"
        />
        {/* Deep gradient overlay for text readability */}
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(10,30,18,0.96)_0%,rgba(10,30,18,0.82)_45%,rgba(10,30,18,0.45)_75%,rgba(10,30,18,0.28)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(255,199,44,0.28),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_80%,rgba(23,51,34,0.6),transparent_60%)]" />
      </div>

      <FloatingMango className="left-[8%] top-[26%]" delay={0.2} />
      <FloatingMango className="right-[9%] top-[20%]" delay={0.6} small />
      <FloatingMango className="bottom-[15%] right-[18%]" delay={1} />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-10 px-4 pb-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
          <motion.p variants={fadeUp} className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-mango backdrop-blur">
            <Sparkles className="h-4 w-4" /> Premium mangoes from Multan
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-display text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Fresh Multani Mangoes Delivered Across Pakistan
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
            Experience the authentic taste of Pakistan's finest mangoes directly from AY BHATTI FARM. Handpicked, naturally ripened and delivered fresh to your doorstep.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={whatsappLink()} icon={MessageCircle} target="_blank" rel="noreferrer">
              Order on WhatsApp
            </Button>
            <Button href="#collection" variant="outline" icon={ShoppingBasket}>
              Explore Mangoes
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {["Farm Fresh", "Direct From Farm", "Fast Delivery", "Nationwide Shipping"].map((label) => (
              <div key={label} className="rounded-2xl border border-white/16 bg-white/12 px-4 py-3 text-sm font-bold backdrop-blur">
                <BadgeCheck className="mb-2 h-5 w-5 text-mango" />
                {label}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="glass-panel relative mx-auto w-full max-w-md p-5 sm:p-6"
        >
          <img
            src={mangoes[3].image}
            alt="Fresh Chaunsa mangoes in premium box"
            className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
            loading="eager"
            style={{ display: 'block', width: '100%' }}
          />
          <div className="absolute -bottom-6 left-6 right-6 rounded-3xl bg-white p-5 text-ink shadow-premium">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orchard">Seasonal Bestseller</p>
                <p className="mt-1 text-xl font-black">Chaunsa Gift Box</p>
              </div>
              <div className="rounded-2xl bg-mango px-3 py-2 text-center font-black text-ink">5 kg</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingMango({ className, delay, small }) {
  return (
    <motion.div
      className={`pointer-events-none absolute z-10 ${className}`}
      animate={{ y: [-8, 12, -8], rotate: [-8, 5, -8] }}
      transition={{ duration: 5, repeat: Infinity, delay, ease: "easeInOut" }}
    >
      <div className={`${small ? "h-16 w-11" : "h-24 w-16"} rotate-12 rounded-[55%_45%_52%_48%] bg-mango-gradient shadow-glow`} />
      <div className="absolute -right-2 -top-3 h-7 w-4 rotate-45 rounded-full bg-leaf" />
    </motion.div>
  );
}

function FeatureSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why choose AY BHATTI FARM"
          title="Premium quality from orchard to doorstep"
          text="Every part of the order journey is designed around freshness, trust and safe nationwide delivery."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.05 }}
              className="group rounded-3xl border border-orchard/10 bg-white/80 p-6 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-premium"
            >
              <feature.icon className="mb-5 h-12 w-12 rounded-2xl bg-orchard/10 p-3 text-orchard transition group-hover:bg-mango group-hover:text-ink" />
              <h3 className="text-xl font-black">{feature.title}</h3>
              <p className="mt-3 leading-7 text-ink/66">{feature.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MangoCollection() {
  return (
    <section id="collection" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our premium mango collection"
          title="Pakistan's favorite mango varieties, packed with care"
          text="Choose from AY BHATTI FARM's seasonal Sindhri, Anwar Ratol, Dusehri and Chaunsa mangoes for family orders, gift boxes and bulk inquiries."
        />
        <div className="mt-14 grid gap-8">
          {mangoes.map((mango, index) => (
            <MangoCard key={mango.title} mango={mango} reverse={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MangoCard({ mango, reverse }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      className="overflow-hidden rounded-[2rem] border border-orchard/10 bg-cream shadow-premium"
    >
      <div className={`grid gap-0 lg:grid-cols-2 ${reverse ? "lg:[&>div:first-child]:order-2" : ""}`}>
        <div className="relative overflow-hidden" style={{ minHeight: '340px' }}>
          <img
            src={mango.image}
            alt={`${mango.title} from AY BHATTI FARM`}
            className="absolute inset-0 w-full h-full object-cover transition duration-700 hover:scale-105"
            loading="lazy"
            style={{ display: 'block' }}
          />
          <div className="absolute left-5 top-5 rounded-full bg-white/88 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-orchard backdrop-blur">
            {mango.season}
          </div>
        </div>
        <div className="p-6 sm:p-8 lg:p-10">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-orchard">{mango.subtitle}</p>
          <h3 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{mango.title}</h3>
          <p className="mt-5 text-base leading-8 text-ink/72">{mango.description}</p>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <TagGroup title="Taste Profile" items={mango.taste} />
            <TagGroup title="Best For" items={mango.bestFor} />
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href={whatsappLink(`Assalam-o-Alaikum, I want to order ${mango.title} from AY BHATTI FARM.`)} icon={MessageCircle} target="_blank" rel="noreferrer">
              Order This Variety
            </Button>
            <Button href="/contact" variant="ghost" icon={ArrowRight}>
              Ask for Availability
            </Button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function TagGroup({ title, items }) {
  return (
    <div>
      <p className="mb-3 text-sm font-black text-ink">{title}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="rounded-full border border-orchard/10 bg-white px-3 py-2 text-xs font-bold text-ink/72">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ComparisonSection() {
  return (
    <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Mango comparison"
          title="Find the right variety for your taste"
          text="Each mango variety has its own sweetness, aroma, juiciness and seasonal window."
        />
        <div className="mt-12 overflow-hidden rounded-[2rem] border border-orchard/10 bg-white shadow-premium">
          <div className="grid grid-cols-[1.15fr_1fr_1fr_1fr_1fr] bg-ink px-4 py-4 text-xs font-black uppercase tracking-[0.12em] text-white sm:px-6">
            <span>Variety</span>
            <span>Sweetness</span>
            <span>Aroma</span>
            <span>Juiciness</span>
            <span>Season</span>
          </div>
          {mangoes.map((mango) => (
            <div key={mango.title} className="grid grid-cols-1 gap-4 border-t border-orchard/10 px-4 py-5 sm:grid-cols-[1.15fr_1fr_1fr_1fr_1fr] sm:items-center sm:px-6">
              <div className="font-black text-orchard">{mango.title}</div>
              <Meter value={mango.sweetness} />
              <Meter value={mango.aroma} />
              <Meter value={mango.juiciness} />
              <div className="text-sm font-bold text-ink/70">{mango.season}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Meter({ value }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-orchard/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-full rounded-full bg-mango-gradient"
        />
      </div>
      <span className="w-9 text-right text-xs font-black text-ink/70">{value}</span>
    </div>
  );
}

function AboutSection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative">
          <img src={heroImages[2]} alt="AY BHATTI FARM orchard in Multan" className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-premium" loading="lazy" />
          <div className="absolute -bottom-6 left-6 right-6 rounded-3xl bg-white p-5 shadow-premium">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-orchard">Multan, Pakistan</p>
            <p className="mt-2 text-xl font-black">Family-owned mango farm</p>
          </div>
        </div>
        <div>
          <SectionHeading
            align="left"
            eyebrow="About AY BHATTI FARM"
            title="Traditional farming expertise with modern quality standards"
            text="AY BHATTI FARM is a family-owned mango farm located in Multan, Pakistan. We specialize in growing premium-quality mangoes using traditional farming expertise combined with modern quality standards."
          />
          <p className="mt-5 text-base leading-8 text-ink/70">
            Our mission is to deliver fresh, naturally ripened mangoes directly from our orchards to homes across Pakistan.
          </p>
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <CounterCard key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CounterCard({ stat }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1100;
    const started = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - started) / duration, 1);
      start = Math.round(stat.value * progress);
      setCount(start);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, stat.value]);

  return (
    <div ref={ref} className="rounded-3xl border border-orchard/10 bg-cream p-5">
      <stat.icon className="mb-4 h-10 w-10 rounded-2xl bg-orchard/10 p-2 text-orchard" />
      <p className="text-3xl font-black text-ink">
        {count.toLocaleString()}
        {stat.suffix}
      </p>
      <p className="mt-1 text-sm font-bold text-ink/60">{stat.label}</p>
    </div>
  );
}

function DeliveryProcess() {
  return (
    <section id="delivery" className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Delivery process"
          title="Fresh mangoes handled through a careful five-step process"
          text="From orchard selection to doorstep delivery, every step protects the fruit's quality."
        />
        <div className="relative mt-14 grid gap-5 md:grid-cols-5">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-orchard/20 md:block" />
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="relative rounded-3xl border border-orchard/10 bg-white p-5 shadow-sm"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-mango text-ink shadow-glow">
                <step.icon className="h-7 w-7" />
              </div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-orchard">Step {index + 1}</p>
              <h3 className="mt-2 text-lg font-black">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink/65">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const [active, setActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [filter, setFilter] = useState("All");

  const tags = ["All", ...Array.from(new Set(gallery.map((g) => g.tag)))];
  const filtered = filter === "All" ? gallery : gallery.filter((g) => g.tag === filter);

  const openItem = (item) => {
    setActive(item);
    setActiveIdx(gallery.indexOf(item));
  };
  const goPrev = (e) => {
    e.stopPropagation();
    const idx = (activeIdx - 1 + gallery.length) % gallery.length;
    setActive(gallery[idx]);
    setActiveIdx(idx);
  };
  const goNext = (e) => {
    e.stopPropagation();
    const idx = (activeIdx + 1) % gallery.length;
    setActive(gallery[idx]);
    setActiveIdx(idx);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (!active) return;
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowLeft") { const idx = (activeIdx - 1 + gallery.length) % gallery.length; setActive(gallery[idx]); setActiveIdx(idx); }
      if (e.key === "ArrowRight") { const idx = (activeIdx + 1) % gallery.length; setActive(gallery[idx]); setActiveIdx(idx); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, activeIdx]);

  return (
    <section id="gallery" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Farm Gallery"
          title="From orchard to your doorstep"
          text="A visual journey through AY BHATTI FARM — mangoes, harvest, orchard and packing in one place."
        />

        {/* Filter tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setFilter(tag)}
              className={`rounded-full px-5 py-2 text-sm font-black transition-all duration-200 ${
                filter === tag
                  ? "bg-orchard text-white shadow-md scale-105"
                  : "border border-orchard/20 bg-cream text-ink hover:border-orchard/40 hover:bg-orchard/8"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
          <AnimatePresence>
            {filtered.map((item, index) => (
              <motion.button
                key={item.src}
                layout
                type="button"
                onClick={() => openItem(item)}
                aria-label={`View: ${item.alt}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl shadow-md"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                    index % 5 === 0 ? "aspect-[3/4]" :
                    index % 5 === 1 ? "aspect-[4/3]" :
                    index % 5 === 2 ? "aspect-square" :
                    index % 5 === 3 ? "aspect-[4/3]" : "aspect-[3/4]"
                  }`}
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-ink/55 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="rounded-full bg-white/20 p-2.5 backdrop-blur-sm">
                    <Eye className="h-5 w-5 text-white" />
                  </div>
                  <p className="mx-3 text-center text-xs font-bold text-white/90 leading-5 line-clamp-2">{item.alt}</p>
                </div>
                {/* Tag badge */}
                <div className="absolute left-2.5 top-2.5 rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-white/90 backdrop-blur-sm">
                  {item.tag}
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-ink/40 font-bold">No images in this category.</p>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/92 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            {/* Close */}
            <button
              type="button"
              aria-label="Close gallery"
              onClick={() => setActive(null)}
              className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white backdrop-blur hover:bg-white/28 transition"
            >
              <X className="h-5 w-5" />
            </button>
            {/* Prev */}
            <button
              type="button"
              aria-label="Previous image"
              onClick={goPrev}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white backdrop-blur hover:bg-white/28 transition"
            >
              <ArrowRight className="h-5 w-5 rotate-180" />
            </button>
            {/* Next */}
            <button
              type="button"
              aria-label="Next image"
              onClick={goNext}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white backdrop-blur hover:bg-white/28 transition"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
            {/* Image container */}
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="flex max-h-[92vh] max-w-5xl w-full flex-col items-center gap-4"
              initial={{ scale: 0.93, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.93, opacity: 0 }}
              transition={{ duration: 0.22 }}
            >
              <img
                src={active.src}
                alt={active.alt}
                className="max-h-[78vh] w-full rounded-2xl object-contain shadow-2xl"
              />
              <div className="flex w-full items-center justify-between gap-3 px-1">
                <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-black uppercase tracking-widest text-white/90 backdrop-blur">
                  {active.tag}
                </span>
                <p className="flex-1 text-center text-sm font-bold text-white/75">{active.alt}</p>
                <span className="text-xs font-bold text-white/45 tabular-nums">
                  {activeIdx + 1} / {gallery.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((value) => (value + 1) % testimonials.length), 4200);
    return () => clearInterval(id);
  }, []);

  const current = testimonials[index];

  return (
    <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <SectionHeading
          eyebrow="Customer testimonials"
          title="Trusted by mango lovers across Pakistan"
          text="Reviews focus on freshness, taste, fast delivery and careful packaging."
        />
        <div className="mt-12 overflow-hidden rounded-[2rem] bg-white p-6 shadow-premium sm:p-10">
          <AnimatePresence mode="wait">
            <motion.div key={current.name} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.35 }}>
              <div className="mb-5 flex justify-center gap-1 text-mango">
                {Array.from({ length: current.rating }).map((_, starIndex) => (
                  <Star key={starIndex} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="mx-auto max-w-3xl font-display text-2xl leading-10 text-ink sm:text-3xl">"{current.text}"</p>
              <p className="mt-6 font-black text-orchard">{current.name}</p>
              <p className="text-sm font-bold text-ink/55">{current.city}</p>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((item, dotIndex) => (
              <button
                key={item.name}
                type="button"
                aria-label={`Show review from ${item.city}`}
                onClick={() => setIndex(dotIndex)}
                className={`h-2.5 rounded-full transition-all ${dotIndex === index ? "w-8 bg-orchard" : "w-2.5 bg-orchard/20"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title="Common questions before placing an order"
            text="For the fastest answer, send your city and required mango variety on WhatsApp."
          />
          <div className="mt-8 grid gap-3">
            {quickCtas.map((cta) => (
              <a key={cta.label} href={cta.href} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-2xl border border-orchard/10 bg-cream p-4 font-black text-ink transition hover:border-orchard/30 hover:bg-white">
                <span className="flex items-center gap-3">
                  <cta.icon className="h-5 w-5 text-orchard" />
                  {cta.label}
                </span>
                <ArrowRight className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          {faqs.map((item, index) => (
            <div key={item.q} className="rounded-3xl border border-orchard/10 bg-cream">
              <button type="button" onClick={() => setOpen(open === index ? -1 : index)} className="flex w-full items-center justify-between gap-4 p-5 text-left font-black">
                {item.q}
                <ChevronDown className={`h-5 w-5 shrink-0 transition ${open === index ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {open === index && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <p className="px-5 pb-5 leading-7 text-ink/68">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
