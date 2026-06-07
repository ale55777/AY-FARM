import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, text, align = "center" }) {
  const centered = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
      className={`${centered ? "mx-auto text-center" : ""} max-w-3xl`}
    >
      {eyebrow && (
        <p className="mb-3 inline-flex rounded-full border border-orchard/15 bg-white/80 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-orchard shadow-sm">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-8 text-ink/70 sm:text-lg">{text}</p>}
    </motion.div>
  );
}
