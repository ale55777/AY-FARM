import {
  Apple,
  Award,
  BadgeCheck,
  Boxes,
  Building2,
  CheckCircle2,
  Clock,
  Gift,
  Leaf,
  MapPin,
  PackageCheck,
  Phone,
  ShieldCheck,
  Sparkles,
  Sprout,
  Star,
  Truck,
  Users
} from "lucide-react";

import sindhriImg from "../assets/images/sindhri.png";
import anwarRatolImg from "../assets/images/anwar.png";
import dusehriImg from "../assets/images/dusehri.png";
import chaunsaImg from "../assets/images/chaunsa.png";

export const business = {
  name: "A.Y BHATTI FARM",
  city: "Multan, Pakistan",
  phone: "+92 3041659109",
  whatsapp: "92 3151438370",
  email: "orders@aybhattifarm.com",
  address: "A.Y BHATTI FARM, Multan, Punjab, Pakistan",
  website: "https://ayfarm.com",
  defaultMessage:
    "Assalam-o-Alaikum,\n\nI would like to order fresh mangoes from AY BHATTI FARM.\n\nPlease share available mango varieties, prices, and delivery details."
};

export const whatsappLink = (message = business.defaultMessage) =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Mangoes", href: "/#collection" },
  { label: "Delivery", href: "/#delivery" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/contact" }
];

export const heroImages = [
  "/images/hero-mangoes.png",
  "/images/hero-harvest.png",
  "/images/hero-orchard.png"
];

export const features = [
  { title: "Farm Fresh Mangoes", text: "Picked close to dispatch so every box arrives with real orchard freshness.", icon: Sprout },
  { title: "Naturally Ripened", text: "Ripened with time, shade and care for authentic aroma and sweetness.", icon: Leaf },
  { title: "Premium Quality", text: "Sorted for size, skin quality, pulp texture and variety-specific flavor.", icon: Award },
  { title: "Secure Packaging", text: "Strong boxes and careful layering protect mangoes during transit.", icon: PackageCheck },
  { title: "Fast Delivery", text: "Dispatch planning helps customers receive mangoes quickly in season.", icon: Truck },
  { title: "Nationwide Shipping", text: "Orders can be arranged for homes and gift recipients across Pakistan.", icon: MapPin }
];

export const mangoes = [
  {
    title: "Sindhri Mango",
    subtitle: "The King of Early Season Mangoes",
    image: sindhriImg,
    description:
      "Sindhri mangoes are famous for their large size, golden-yellow color, smooth texture and naturally sweet taste. Their juicy flesh and rich aroma make them one of Pakistan's most loved mango varieties.",
    taste: ["Sweet", "Juicy", "Mild Fiber", "Rich Aroma"],
    bestFor: ["Eating Fresh", "Juices", "Desserts"],
    season: "May - June",
    sweetness: 88,
    aroma: 82,
    juiciness: 84
  },
  {
    title: "Anwar Ratol Mango",
    subtitle: "Small Size, Luxury Flavor",
    image: anwarRatolImg,
    description:
      "Anwar Ratol is one of Pakistan's most luxurious mango varieties. Known for its small size, intense sweetness and unforgettable fragrance, it is considered a premium mango by mango lovers worldwide.",
    taste: ["Extremely Sweet", "Highly Aromatic", "Soft Flesh", "Premium Flavor"],
    bestFor: ["Mango Lovers", "Premium Gifts", "Fresh Consumption"],
    season: "June - July",
    sweetness: 96,
    aroma: 95,
    juiciness: 88
  },
  {
    title: "Dusehri Mango",
    subtitle: "Balanced, Smooth and Refreshing",
    image: dusehriImg,
    description:
      "Dusehri mangoes offer a perfect balance of sweetness, juiciness and smooth texture. Their elongated shape and delicious flavor make them a favorite among mango enthusiasts.",
    taste: ["Sweet", "Smooth Texture", "Juicy", "Refreshing Flavor"],
    bestFor: ["Family Consumption", "Fruit Platters", "Juices"],
    season: "June - July",
    sweetness: 86,
    aroma: 78,
    juiciness: 86
  },
  {
    title: "Chaunsa Mango",
    subtitle: "Pakistan's Most Famous Mango",
    image: chaunsaImg,
    description:
      "Chaunsa is widely regarded as Pakistan's most famous mango variety. Loved for its exceptional sweetness, rich flavor and juicy pulp, Chaunsa represents the true taste of Pakistani mangoes.",
    taste: ["Extremely Sweet", "Very Juicy", "Rich Flavor", "Soft Texture"],
    bestFor: ["Fresh Eating", "Mango Shakes", "Export Quality Orders"],
    season: "July - August",
    sweetness: 94,
    aroma: 90,
    juiciness: 96
  }
];

export const stats = [
  { label: "Years Experience", value: 20, suffix: "+", icon: Clock },
  { label: "Happy Customers", value: 5000, suffix: "+", icon: Users },
  { label: "Acres Farm", value: 100, suffix: "+", icon: Leaf },
  { label: "Nationwide Delivery", value: 50, suffix: "+ Cities", icon: Truck }
];

export const processSteps = [
  { title: "Handpicked Mangoes", icon: Apple, text: "Fruit is selected at the right maturity from our orchard lots." },
  { title: "Quality Inspection", icon: ShieldCheck, text: "Each mango is checked for firmness, skin quality and variety grade." },
  { title: "Secure Packaging", icon: Boxes, text: "Boxes are packed with care for transit protection and presentation." },
  { title: "Fast Dispatch", icon: Truck, text: "Orders are dispatched quickly through trusted delivery channels." },
  { title: "Fresh Delivery", icon: CheckCircle2, text: "Customers receive fresh mangoes ready to ripen and enjoy." }
];

export const gallery = [
  { src: "/images/mango-close.png", alt: "Fresh ripe mango close-up" },
  { src: "/images/hero-harvest.png", alt: "Farmers harvesting in orchard" },
  { src: "/images/orchard-rows.png", alt: "Green mango farm rows" },
  { src: "/images/packing.png", alt: "Fresh fruit packing process" },
  { src: "/images/boxes.png", alt: "Packed produce boxes" },
  { src: anwarRatolImg, alt: "Premium mango variety" },
  { src: dusehriImg, alt: "Mangoes ready for delivery" },
  { src: chaunsaImg, alt: "Juicy mango pulp" }
];

export const testimonials = [
  { name: "Hassan Raza", city: "Lahore", text: "The mangoes arrived fragrant, clean and perfectly packed. Sindhri quality was excellent.", rating: 5 },
  { name: "Ayesha Khan", city: "Karachi", text: "I ordered for my parents and the box reached fresh. The sweetness was exactly what Multani mangoes should have.", rating: 5 },
  { name: "Bilal Ahmed", city: "Islamabad", text: "Reliable delivery and premium packaging. Anwar Ratol was a clear favorite at our dinner.", rating: 5 },
  { name: "Sarah Malik", city: "Rawalpindi", text: "Fresh, naturally ripened and no chemical smell. The WhatsApp ordering process was simple.", rating: 5 },
  { name: "Usman Tariq", city: "Faisalabad", text: "Great taste and careful packing. We ordered again for family gifting.", rating: 5 },
  { name: "Nimra Shah", city: "Multan", text: "Beautiful farm-fresh mangoes with rich aroma. Chaunsa was outstanding.", rating: 5 }
];

export const faqs = [
  { q: "Do you deliver all over Pakistan?", a: "Yes, AY BHATTI FARM accepts orders for major cities across Pakistan through trusted delivery partners." },
  { q: "How long does delivery take?", a: "Most dispatches are planned for fast delivery. Exact timing depends on city, order size and courier availability during mango season." },
  { q: "Are your mangoes naturally ripened?", a: "Yes. Our mangoes are naturally ripened with careful handling to preserve aroma, sweetness and texture." },
  { q: "What payment methods do you accept?", a: "Payment options can include bank transfer, mobile wallet and other agreed methods confirmed on WhatsApp before dispatch." },
  { q: "How are mangoes packed?", a: "Mangoes are inspected, sorted and packed in secure boxes designed to reduce damage during transit." },
  { q: "Can I place bulk orders?", a: "Yes. Bulk and corporate gift box orders can be arranged with advance booking and custom packaging discussions." }
];

export const deliveryAreas = ["Lahore", "Karachi", "Islamabad", "Rawalpindi", "Faisalabad", "Multan", "Peshawar", "Quetta"];

export const quickCtas = [
  { label: "Order on WhatsApp", href: whatsappLink(), icon: Phone },
  { label: "Corporate Gifts", href: whatsappLink("Assalam-o-Alaikum, I want corporate mango gift boxes from AY BHATTI FARM."), icon: Gift },
  { label: "Bulk Inquiry", href: whatsappLink("Assalam-o-Alaikum, I want to discuss a bulk mango order from AY BHATTI FARM."), icon: Building2 }
];

export const seoKeywords = [
  "Mangoes in Pakistan",
  "Buy Mangoes Online Pakistan",
  "Fresh Mangoes Pakistan",
  "Multan Mango Farm",
  "Sindhri Mango Pakistan",
  "Chaunsa Mango Pakistan",
  "Anwar Ratol Mango",
  "Dusehri Mango",
  "Mango Delivery Pakistan"
];

export const icons = { Star, Sparkles, BadgeCheck };
