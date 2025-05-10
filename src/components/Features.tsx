
import { Shirt, Clock, Award, TrendingUp, Recycle, UserCheck } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Shirt className="h-6 w-6 text-primary" />,
      title: 'Traitement personnalisé',
      description: 'Chaque vêtement bénéficie d\'un traitement adapté à son tissu et ses besoins spécifiques.'
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: 'Service express',
      description: 'Besoin urgent? Notre service express vous garantit une livraison en 24h.'
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: 'Qualité garantie',
      description: 'Pas satisfait? Nous retraitons votre vêtement gratuitement.'
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: 'Suivi en temps réel',
      description: 'Suivez le statut de vos vêtements à chaque étape du processus via notre application.'
    },
    {
      icon: <Recycle className="h-6 w-6 text-primary" />,
      title: 'Éco-responsable',
      description: 'Nos produits sont écologiques et notre processus est optimisé pour réduire notre impact environnemental.'
    },
    {
      icon: <UserCheck className="h-6 w-6 text-primary" />,
      title: 'Experts qualifiés',
      description: 'Notre équipe de professionnels est formée aux techniques les plus avancées.'
    }
  ];

  return (
    <section className="bg-neutral-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi choisir LavoTech?</h2>
          <p className="text-neutral-600">
            Nous combinons expertise traditionnelle et technologies modernes pour offrir un service de pressing d&apos;exception.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
