
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shirt, Check, ArrowRight, Tag, Clock } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('pressing');

  const services = {
    pressing: [
      {
        icon: <Shirt className="h-6 w-6" />,
        title: "Chemise",
        description: "Nettoyage et repassage professionnel pour une finition impeccable.",
        price: "5,90€",
        popular: false
      },
      {
        icon: <Shirt className="h-6 w-6" />,
        title: "Costume 2 pièces",
        description: "Traitement adapté pour votre veste et pantalon assortis.",
        price: "19,90€",
        popular: true
      },
      {
        icon: <Shirt className="h-6 w-6" />,
        title: "Robe simple",
        description: "Nettoyage délicat pour préserver la couleur et la forme.",
        price: "12,90€",
        popular: false
      },
      {
        icon: <Shirt className="h-6 w-6" />,
        title: "Pantalon",
        description: "Traitement et repassage pour un résultat parfait.",
        price: "8,90€",
        popular: false
      },
      {
        icon: <Shirt className="h-6 w-6" />,
        title: "Pull / Sweat",
        description: "Nettoyage doux préservant les fibres et la texture.",
        price: "9,90€",
        popular: false
      },
      {
        icon: <Shirt className="h-6 w-6" />,
        title: "Cravate",
        description: "Attention particulière pour cet accessoire délicat.",
        price: "4,90€",
        popular: false
      }
    ],
    repassage: [
      {
        icon: <Shirt className="h-6 w-6" />,
        title: "Chemise",
        description: "Repassage professionnel, pliage ou sur cintre au choix.",
        price: "3,90€",
        popular: true
      },
      {
        icon: <Shirt className="h-6 w-6" />,
        title: "Pantalon",
        description: "Repassage avec pli ou sans selon préférence.",
        price: "4,90€",
        popular: false
      },
      {
        icon: <Shirt className="h-6 w-6" />,
        title: "Robe simple",
        description: "Repassage minutieux pour un résultat élégant.",
        price: "6,90€",
        popular: false
      },
      {
        icon: <Shirt className="h-6 w-6" />,
        title: "T-shirt",
        description: "Repassage simple pour un look impeccable.",
        price: "2,90€",
        popular: false
      }
    ],
    special: [
      {
        icon: <Shirt className="h-6 w-6" />,
        title: "Robe de mariée",
        description: "Traitement haute précision avec protection et emballage.",
        price: "99,90€",
        popular: false
      },
      {
        icon: <Shirt className="h-6 w-6" />,
        title: "Imperméabilisation",
        description: "Protection efficace contre l'eau et les taches.",
        price: "15,90€",
        popular: true
      },
      {
        icon: <Shirt className="h-6 w-6" />,
        title: "Détachage difficile",
        description: "Traitement spécial pour les taches tenaces.",
        price: "12,90€",
        popular: false
      },
      {
        icon: <Shirt className="h-6 w-6" />,
        title: "Tapis / Moquette",
        description: "Nettoyage en profondeur, sur devis.",
        price: "Sur devis",
        popular: false
      }
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-blue-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Services</h1>
            <p className="text-lg text-neutral-600 mb-8">
              Des solutions de pressing adaptées à tous vos besoins, des vêtements du quotidien aux pièces d'exception.
            </p>
            <Button asChild size="lg" className="text-base">
              <Link to="/booking">
                Réserver maintenant <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <Tabs 
              defaultValue="pressing" 
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-3 w-full max-w-lg">
                  <TabsTrigger value="pressing">Pressing</TabsTrigger>
                  <TabsTrigger value="repassage">Repassage</TabsTrigger>
                  <TabsTrigger value="special">Services spéciaux</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="pressing" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.pressing.map((service, index) => (
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
              </TabsContent>

              <TabsContent value="repassage" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.repassage.map((service, index) => (
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
              </TabsContent>

              <TabsContent value="special" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.special.map((service, index) => (
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
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Package Deals Section */}
      <section className="py-12 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Forfaits avantageux</h2>
            <p className="text-neutral-600">
              Économisez sur vos services réguliers avec nos forfaits adaptés à vos besoins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Package 1 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 rounded-lg p-4 mb-6 inline-block">
                <Tag className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Pack Business</h3>
              <p className="text-neutral-600 mb-6">Pour les professionnels qui souhaitent une garde-robe impeccable.</p>
              <div className="mb-6">
                <span className="text-3xl font-bold">49,90€</span>
                <span className="text-neutral-500"> /mois</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Check className="text-secondary mr-2 h-5 w-5 flex-shrink-0" />
                  <span>10 chemises par mois</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-secondary mr-2 h-5 w-5 flex-shrink-0" />
                  <span>2 costumes par mois</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-secondary mr-2 h-5 w-5 flex-shrink-0" />
                  <span>Livraison gratuite</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-secondary mr-2 h-5 w-5 flex-shrink-0" />
                  <span>Service prioritaire</span>
                </li>
              </ul>
              <Button className="w-full">Souscrire</Button>
            </div>

            {/* Package 2 */}
            <div className="bg-white rounded-xl p-6 border border-primary shadow-lg relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-medium">
                Le plus populaire
              </div>
              <div className="bg-primary/10 rounded-lg p-4 mb-6 inline-block">
                <Shirt className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Pack Famille</h3>
              <p className="text-neutral-600 mb-6">Solution économique pour toute la famille.</p>
              <div className="mb-6">
                <span className="text-3xl font-bold">79,90€</span>
                <span className="text-neutral-500"> /mois</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Check className="text-secondary mr-2 h-5 w-5 flex-shrink-0" />
                  <span>20 vêtements au choix par mois</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-secondary mr-2 h-5 w-5 flex-shrink-0" />
                  <span>Service de collecte et livraison</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-secondary mr-2 h-5 w-5 flex-shrink-0" />
                  <span>Traitement anti-allergènes inclus</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-secondary mr-2 h-5 w-5 flex-shrink-0" />
                  <span>Réduction de 10% sur services supplémentaires</span>
                </li>
              </ul>
              <Button className="w-full bg-primary">Souscrire</Button>
            </div>

            {/* Package 3 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 rounded-lg p-4 mb-6 inline-block">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Pack Express</h3>
              <p className="text-neutral-600 mb-6">Pour ceux qui ont besoin d'un service rapide et efficace.</p>
              <div className="mb-6">
                <span className="text-3xl font-bold">39,90€</span>
                <span className="text-neutral-500"> /mois</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Check className="text-secondary mr-2 h-5 w-5 flex-shrink-0" />
                  <span>5 services express par mois</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-secondary mr-2 h-5 w-5 flex-shrink-0" />
                  <span>Traitement en 24h garanti</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-secondary mr-2 h-5 w-5 flex-shrink-0" />
                  <span>Notification prioritaire</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-secondary mr-2 h-5 w-5 flex-shrink-0" />
                  <span>Support client dédié</span>
                </li>
              </ul>
              <Button className="w-full">Souscrire</Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default ServicesPage;
