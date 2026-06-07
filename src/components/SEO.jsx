import { useEffect } from "react";
import { business, seoKeywords } from "../data/siteData.js";

export default function SEO({ title, description, path = "/", schema }) {
  useEffect(() => {
    document.title = title;
    setMeta("description", description);
    setMeta("keywords", seoKeywords.join(", "));
    setProperty("og:title", title);
    setProperty("og:description", description);
    setProperty("og:url", `${business.website}${path}`);

    const id = "page-schema";
    document.getElementById(id)?.remove();
    const script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema || defaultSchema());
    document.head.appendChild(script);

    return () => document.getElementById(id)?.remove();
  }, [title, description, path, schema]);

  return null;
}

function setMeta(name, content) {
  let node = document.querySelector(`meta[name="${name}"]`);
  if (!node) {
    node = document.createElement("meta");
    node.setAttribute("name", name);
    document.head.appendChild(node);
  }
  node.setAttribute("content", content);
}

function setProperty(property, content) {
  let node = document.querySelector(`meta[property="${property}"]`);
  if (!node) {
    node = document.createElement("meta");
    node.setAttribute("property", property);
    document.head.appendChild(node);
  }
  node.setAttribute("content", content);
}

function defaultSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    image: `${business.website}/og-image.jpg`,
    telephone: business.phone,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address,
      addressLocality: "Multan",
      addressRegion: "Punjab",
      addressCountry: "PK"
    },
    url: business.website,
    makesOffer: ["Sindhri Mango", "Anwar Ratol Mango", "Dusehri Mango", "Chaunsa Mango"]
  };
}
