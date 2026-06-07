import { ArrowRight } from "lucide-react";

export default function Button({ href, children, variant = "primary", icon: Icon = ArrowRight, className = "", ...props }) {
  const base =
    "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition duration-300 focus:outline-none focus:ring-4 focus:ring-mango/40";
  const variants = {
    primary: "bg-mango text-ink shadow-glow hover:-translate-y-0.5 hover:bg-[#ffd760]",
    dark: "bg-ink text-white shadow-premium hover:-translate-y-0.5 hover:bg-orchard",
    outline: "border border-white/35 bg-white/10 text-white backdrop-blur hover:bg-white/20",
    ghost: "border border-orchard/15 bg-white text-orchard shadow-sm hover:-translate-y-0.5 hover:border-orchard/30"
  };
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
        {Icon && <Icon className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {Icon && <Icon className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />}
    </button>
  );
}
