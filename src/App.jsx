import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import FloatingWhatsApp from "./components/FloatingWhatsApp.jsx";
import WhatsAppModal from "./components/WhatsAppModal.jsx";
import { WhatsAppProvider } from "./context/WhatsAppContext.jsx";

export default function App() {
  return (
    <WhatsAppProvider>
      <div className="min-h-screen overflow-x-hidden bg-cream text-ink">
        <Navbar />
        <Outlet />
        <FloatingWhatsApp />
        <Footer />
        <WhatsAppModal />
      </div>
    </WhatsAppProvider>
  );
}
