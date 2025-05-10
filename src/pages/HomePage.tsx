
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import ServiceCard from '@/components/ServiceCard';
import { Shirt, Layers, Watch, Shield } from 'lucide-react';

const HomePage = () => {
  const services = [
    {
      icon: <Shirt className="h-6 w-6" />,
      title: "Pressing classique",
      description: "Nettoyage professionnel pour tous types de vêtements.",
      price: "7,90€",
      popular: false
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Pressing premium",
      description: "Traitement spécial pour les tissus délicats et vêtements de luxe.",
      price: "12,90€",
      popular: true
    },
    {
      icon: <Watch className="h-6 w-6" />,
      title: "Service express",
      description: "Vos vêtements nettoyés et livrés en 24h.",
      price: "15,90€",
      popular: false
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Protection avancée",
      description: "Traitement imperméabilisant et anti-tâches.",
      price: "9,90€",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos services</h2>
            <p className="text-neutral-600">
              Des solutions adaptées à tous vos besoins, pour tous types de vêtements et textiles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                price={service.price}
                popular={service.popular}
              />
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />
      <Features />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default HomePage;
