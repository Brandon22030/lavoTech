
import { ArrowRight, Check, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-white to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-neutral-800">
              Votre pressing, <br />
              <span className="text-primary">simplement parfait</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 max-w-lg">
              Des vêtements impeccables, un service fiable et une expérience entièrement digitalisée pour votre plus grand confort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button asChild size="lg" className="text-base">
                <Link to="/booking">
                  Réserver maintenant <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg" className="text-base">
                <Link to="/services">
                  Découvrir nos services
                </Link>
              </Button>
            </div>
            <div className="pt-4 flex flex-col sm:flex-row gap-5 text-sm">
              <div className="flex items-center">
                <Check className="text-secondary mr-2 h-5 w-5" />
                <span>Livraison offerte dès 40€</span>
              </div>
              <div className="flex items-center">
                <Shield className="text-secondary mr-2 h-5 w-5" />
                <span>Qualité garantie</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl transform rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1582735689899-68474197f2e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Service de pressing professionnel" 
              className="rounded-2xl shadow-xl relative z-10 w-full h-auto transform -rotate-2 transition-transform hover:rotate-0 duration-500"
            />
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 z-20 hidden md:block">
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-full">
                  <Shield className="text-secondary h-6 w-6" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-semibold">Satisfaction garantie</p>
                  <p className="text-xs text-neutral-600">+ de 10 000 clients satisfaits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
