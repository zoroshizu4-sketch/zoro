import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { MenuSection } from './components/MenuSection';
import { ServicesSection } from './components/ServicesSection';
import { CateringCalculator } from './components/CateringCalculator';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { OrderModal } from './components/OrderModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [modalPreselectedDish, setModalPreselectedDish] = useState<string | undefined>(undefined);

  const handleOpenOrderModal = (dishName?: string) => {
    setModalPreselectedDish(dishName);
    setIsOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setIsOrderModalOpen(false);
    setModalPreselectedDish(undefined);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex flex-col font-sans selection:bg-[#d4af37] selection:text-black">
      {/* Top Luxury Navbar */}
      <Navbar onOpenOrderModal={() => handleOpenOrderModal()} />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenOrderModal={() => handleOpenOrderModal()} />

        {/* 2. About Us Section */}
        <AboutUs />

        {/* 3. Our Menu Section */}
        <MenuSection onSelectDishForQuote={(dish) => handleOpenOrderModal(dish)} />

        {/* 4. Our Services Section */}
        <ServicesSection onOpenOrderModal={() => handleOpenOrderModal()} />

        {/* Interactive Event Cost Estimator */}
        <CateringCalculator />

        {/* 5. Gallery Section */}
        <GallerySection />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* 6. Contact Us Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenOrderModal={() => handleOpenOrderModal()} />

      {/* 7. Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* 8. Order Now Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={handleCloseOrderModal}
        preselectedDish={modalPreselectedDish}
      />
    </div>
  );
}
