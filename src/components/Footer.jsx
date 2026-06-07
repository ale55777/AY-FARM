import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../logo.jpeg";
import { business, deliveryAreas, mangoes, navLinks, whatsappLink } from "../data/siteData.js";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="AY BHATTI FARM logo" className="h-14 w-14 rounded-full object-cover ring-2 ring-mango" />
            <div>
              <p className="font-black">AY BHATTI FARM</p>
              <p className="text-xs uppercase tracking-[0.18em] text-mango">Premium Mangoes</p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-7 text-white/72">
            Family-owned Multan mango farm delivering fresh, naturally ripened Sindhri, Anwar Ratol, Dusehri and Chaunsa mangoes across Pakistan.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, index) => (
              <a key={index} aria-label="Social link" href="#" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-mango transition hover:bg-mango hover:text-ink">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterColumn title="Quick Links">
          {navLinks.map((item) =>
            item.href.startsWith("/") && !item.href.includes("#") ? (
              <Link key={item.label} to={item.href} className="footer-link">
                {item.label}
              </Link>
            ) : (
              <a key={item.label} href={item.href} className="footer-link">
                {item.label}
              </a>
            )
          )}
        </FooterColumn>

        <FooterColumn title="Mango Varieties">
          {mangoes.map((mango) => (
            <a key={mango.title} href={`/#collection`} className="footer-link">
              {mango.title}
            </a>
          ))}
        </FooterColumn>

        <FooterColumn title="Delivery Areas">
          <div className="flex flex-wrap gap-2">
            {deliveryAreas.map((area) => (
              <span key={area} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/75">
                {area}
              </span>
            ))}
          </div>
          <div className="mt-5 space-y-3 text-sm text-white/75">
            <a className="flex items-center gap-2 transition hover:text-mango" href={whatsappLink()}>
              <Phone className="h-4 w-4 text-mango" /> {business.phone}
            </a>
            <a className="flex items-center gap-2 transition hover:text-mango" href={`mailto:${business.email}`}>
              <Mail className="h-4 w-4 text-mango" /> {business.email}
            </a>
            <p className="flex items-start gap-2">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-mango" /> {business.address}
            </p>
          </div>
        </FooterColumn>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/60">
        Copyright {new Date().getFullYear()} AY BHATTI FARM. All rights reserved.
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }) {
  return (
    <div>
      <h3 className="mb-5 text-sm font-black uppercase tracking-[0.18em] text-mango">{title}</h3>
      <div className="flex flex-col gap-3 text-sm">{children}</div>
    </div>
  );
}
