
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Shirt, Truck, Loader, Clock, Calendar, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const HowItWorksPage = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      icon: <Clock className="h-6 w-6 text-white" />,
      title: "Prenez rendez-vous",
      description: "Réservez en quelques clics sur notre plateforme en choisissant le créneau qui vous convient.",
      details: [
        "Sélectionnez les services dont vous avez besoin",
        "Choisissez une date et un créneau horaire disponible",
        "Optez pour un dépôt en boutique ou notre service de collecte",
        "Recevez une confirmation instantanée par email"
      ]
    },
    {
      id: 2,
      icon: <Shirt className="h-6 w-6 text-white" />,
      title: "Confiez vos vêtements",
      description: "Déposez vos vêtements en boutique ou utilisez notre service de collecte à domicile.",
      details: [
        "Nos équipes vérifient l'état initial de vos vêtements",
        "Un reçu détaillé vous est remis avec les références de suivi",
        "Un diagnostic précis est établi pour chaque pièce",
        "Des instructions spéciales peuvent être ajoutées si nécessaire"
      ]
    },
    {
      id: 3,
      icon: <Loader className="h-6 w-6 text-white" />,
      title: "Traitement expert",
      description: "Nos spécialistes nettoient vos vêtements avec les techniques adaptées à chaque tissu.",
      details: [
        "Pré-traitement spécifique pour les taches tenaces",
        "Sélection du programme optimal selon le type de textile",
        "Utilisation de produits écologiques et hypoallergéniques",
        "Double contrôle qualité avant la finition"
      ]
    },
    {
      id: 4,
      icon: <Truck className="h-6 w-6 text-white" />,
      title: "Récupérez vos vêtements",
      description: "Venez chercher vos vêtements en boutique ou faites-vous livrer où vous voulez.",
      details: [
        "Notification par email ou SMS dès que vos vêtements sont prêts",
        "Emballage soigné pour préserver la qualité du repassage",
        "Livraison dans un créneau de 2h selon votre choix",
        "Satisfaction garantie ou retraitement gratuit"
      ]
    }
  ];

  const features = [
    {
      title: "Prise en charge complète",
      description: "Du dépôt à la livraison, nous gérons tout le processus avec soin et professionnalisme."
    },
    {
      title: "Suivi en temps réel",
      description: "Suivez l'état de votre commande à chaque étape grâce à notre système de notification avancé."
    },
    {
      title: "Qualité garantie",
      description: "Nous garantissons la satisfaction totale ou nous retraitons gratuitement vos vêtements."
    },
    {
      title: "Respect des délais",
      description: "Nous respectons scrupuleusement les délais annoncés pour vous offrir un service fiable."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-blue-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Comment ça marche</h1>
            <p className="text-lg text-neutral-600 mb-8">
              Un processus simple et transparent pour un service de pressing d'excellence
            </p>
            <Button asChild size="lg" className="text-base">
              <Link to="/booking">
                Réserver maintenant <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Interactive Steps Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Steps Navigation */}
          <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto mb-16">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center mb-6 md:mb-0">
                <button 
                  className={cn(
                    "h-16 w-16 rounded-full flex items-center justify-center relative",
                    activeStep === step.id ? "bg-primary" : "bg-primary/30 hover:bg-primary/50 transition-colors"
                  )}
                  onClick={() => setActiveStep(step.id)}
                >
                  {step.icon}
                  <span className="absolute -top-2 -right-2 bg-white border-2 border-primary rounded-full h-6 w-6 flex items-center justify-center text-sm font-bold text-primary">
                    {step.id}
                  </span>
                </button>
                <p className={cn(
                  "text-center mt-3 font-medium",
                  activeStep === step.id ? "text-primary" : "text-neutral-600"
                )}>
                  {step.title}
                </p>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block h-0.5 w-16 bg-neutral-200 absolute" style={{ left: `calc(50% + ${(index + 0.5) * 25}%)` }}></div>
                )}
              </div>
            ))}
          </div>

          {/* Active Step Details */}
          <div className="max-w-4xl mx-auto">
            {steps.map((step) => (
              <div 
                key={step.id}
                className={cn(
                  "transition-all duration-500",
                  activeStep === step.id ? "block animate-fade-in" : "hidden"
                )}
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Step Image */}
                    <div className="bg-primary/5 p-8 flex items-center justify-center">
                      <div className="relative w-full max-w-md aspect-square">
                        <img 
                          src={`https://images.unsplash.com/photo-${step.id === 1 ? "1555421689-d68471e189f2" : 
                                step.id === 2 ? "1582735689899-68474197f2e3" : 
                                step.id === 3 ? "1604335399150-571c9f1a68c0" : 
                                "1546552356-11521c892e8d"}`} 
                          alt={step.title}
                          className="w-full h-full object-cover rounded-xl shadow-md"
                        />
                        <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4">
                          <div className="flex items-center">
                            <div className="bg-primary/10 p-2 rounded-full">
                              {step.icon}
                            </div>
                            <span className="ml-2 font-medium">Étape {step.id}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="p-8">
                      <h2 className="text-2xl font-bold mb-4">{step.title}</h2>
                      <p className="text-neutral-600 mb-6">{step.description}</p>
                      
                      <h3 className="font-semibold mb-4">Comment ça se passe:</h3>
                      <ul className="space-y-3">
                        {step.details.map((detail, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="text-primary mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8 flex justify-center sm:justify-start">
                        <Button asChild>
                          <Link to="/booking">
                            Réserver maintenant <ArrowRight className="ml-2 h-5 w-5" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Next Step Button */}
          <div className="flex justify-center mt-8">
            <Button
              variant="outline"
              onClick={() => setActiveStep(activeStep < 4 ? activeStep + 1 : 1)}
              className="rounded-full h-12 w-12 p-0"
            >
              <ArrowDown className="h-5 w-5" />
              <span className="sr-only">Étape suivante</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre processus en détail</h2>
            <p className="text-neutral-600">
              Chaque étape est conçue pour vous offrir une expérience optimale et des résultats impeccables
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-neutral-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Questions fréquentes</h2>
            <p className="text-neutral-600">
              Tout ce que vous devez savoir sur notre processus
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-2">Combien de temps faut-il pour traiter mes vêtements ?</h3>
              <p className="text-neutral-600">
                Notre délai standard est de 48h à 72h selon le type de vêtement et le service demandé. Nous proposons également un service express avec traitement en 24h moyennant un supplément.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-2">Que se passe-t-il si je ne suis pas satisfait du résultat ?</h3>
              <p className="text-neutral-600">
                Nous garantissons votre satisfaction à 100%. Si vous n'êtes pas satisfait du résultat, nous retraiterons gratuitement votre vêtement ou nous vous rembourserons intégralement.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-2">Comment sont traités les vêtements délicats ?</h3>
              <p className="text-neutral-600">
                Les vêtements délicats (soie, cachemire, etc.) bénéficient d'un traitement spécial avec des produits adaptés et des techniques douces pour préserver leur qualité et leur durée de vie.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-2">Puis-je modifier ma réservation après confirmation ?</h3>
              <p className="text-neutral-600">
                Oui, vous pouvez modifier votre réservation jusqu'à 2 heures avant l'heure prévue. Il suffit de vous connecter à votre espace client ou de nous contacter par téléphone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Prêt à essayer notre service ?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Réservez dès maintenant et découvrez l'excellence de notre service de pressing.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-neutral-100"
                asChild
              >
                <Link to="/booking">
                  Réserver maintenant <Calendar className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link to="/services">
                  Découvrir nos services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
