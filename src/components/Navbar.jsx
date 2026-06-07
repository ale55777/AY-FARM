import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../logo.jpeg";
import { navLinks, whatsappLink } from "../data/siteData.js";
import Button from "./Button.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? "py-3" : "py-4"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between rounded-full border border-white/35 bg-white/82 px-3 py-2 shadow-premium backdrop-blur-xl">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <img src={logo} alt="AY BHATTI FARM logo" className="h-12 w-12 rounded-full object-cover ring-2 ring-mango/80" />
            <div className="min-w-0">
              <p className="truncate text-sm font-black text-ink sm:text-base">AY BHATTI FARM</p>
              <p className="truncate text-[11px] font-semibold uppercase tracking-[0.18em] text-orchard">Multan Premium Mangoes</p>
            </div>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((item) =>
              item.href.startsWith("/") && !item.href.includes("#") ? (
                <Link key={item.label} to={item.href} className="rounded-full px-4 py-2 text-sm font-bold text-ink/75 transition hover:bg-orchard/10 hover:text-orchard">
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href={item.href} className="rounded-full px-4 py-2 text-sm font-bold text-ink/75 transition hover:bg-orchard/10 hover:text-orchard">
                  {item.label}
                </a>
              )
            )}
          </div>

          <div className="hidden lg:block">
            <Button href={whatsappLink()} variant="dark" className="min-h-11 px-5 py-2">
              Order WhatsApp
            </Button>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-full bg-orchard text-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="mt-3 rounded-3xl border border-orchard/10 bg-white p-3 shadow-premium lg:hidden">
            {navLinks.map((item) =>
              item.href.startsWith("/") && !item.href.includes("#") ? (
                <Link key={item.label} to={item.href} className="block rounded-2xl px-4 py-3 font-bold text-ink/75 hover:bg-cream">
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href={item.href} className="block rounded-2xl px-4 py-3 font-bold text-ink/75 hover:bg-cream">
                  {item.label}
                </a>
              )
            )}
            <Button href={whatsappLink()} variant="primary" className="mt-2 w-full">
              Order Fresh Mangoes
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
