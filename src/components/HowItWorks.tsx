
import { Shirt, Truck, Loader, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  {
    icon: <Clock className="h-6 w-6 text-white" />,
    title: "Prenez rendez-vous",
    description: "Réservez en quelques clics sur notre plateforme en choisissant le créneau qui vous convient.",
    image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&w=600&h=400"
  },
  {
    icon: <Shirt className="h-6 w-6 text-white" />,
    title: "Confiez vos vêtements",
    description: "Déposez vos vêtements en boutique ou utilisez notre service de collecte à domicile.",
    image: "https://images.unsplash.com/photo-1582735689899-68474197f2e3?auto=format&fit=crop&w=600&h=400"
  },
  {
    icon: <Loader className="h-6 w-6 text-white" />,
    title: "Suivez le traitement",
    description: "Recevez des notifications sur l'avancement du nettoyage de vos vêtements en temps réel.",
    image: "https://images.unsplash.com/photo-1604335399150-571c9f1a68c0?auto=format&fit=crop&w=600&h=400"
  },
  {
    icon: <Truck className="h-6 w-6 text-white" />,
    title: "Récupérez vos vêtements",
    description: "Venez chercher vos vêtements en boutique ou faites-vous livrer où vous voulez.",
    image: "https://images.unsplash.com/photo-1546552356-11521c892e8d?auto=format&fit=crop&w=600&h=400"
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comment ça marche</h2>
          <p className="text-neutral-600">
            Un processus simple et transparent pour un service impeccable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center">
                {/* Image */}
                <div className="mb-6 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow w-full h-48 relative">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <span className="text-white font-medium">Étape {index + 1}</span>
                  </div>
                </div>
                
                <div className={cn(
                  "h-16 w-16 rounded-full flex items-center justify-center mb-4 z-10",
                  "bg-primary"
                )}>
                  {step.icon}
                  <span className="absolute top-0 right-0 bg-white border-2 border-primary rounded-full h-6 w-6 flex items-center justify-center text-sm font-bold text-primary">
                    {index + 1}
                  </span>
                </div>
                
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 left-1/2 w-full h-0.5 bg-gray-200" style={{ transform: 'translateX(50%)' }}></div>
                )}
                
                <h3 className="text-xl font-semibold mb-2 text-center">{step.title}</h3>
                <p className="text-neutral-600 text-center">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
