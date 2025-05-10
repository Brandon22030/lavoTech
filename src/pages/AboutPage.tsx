
import { Award, Leaf, User, UserCheck } from 'lucide-react';
import CTASection from '@/components/CTASection';

const AboutPage = () => {
  const team = [
    {
      name: "Marie Laurent",
      position: "Fondatrice & CEO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
      bio: "Experte en traitement textile avec plus de 15 ans d'expérience dans le secteur du nettoyage professionnel."
    },
    {
      name: "Thomas Bernard",
      position: "Directeur technique",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
      bio: "Ingénieur spécialisé dans les technologies de nettoyage écologique et les processus optimisés."
    },
    {
      name: "Sophie Martin",
      position: "Responsable qualité",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
      bio: "Passionnée par l'excellence du service et la satisfaction client dans chaque détail."
    },
    {
      name: "Paul Dubois",
      position: "Chef de production",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
      bio: "Expert en logistique et processus de traitement, garantissant efficacité et respect des délais."
    }
  ];

  const values = [
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Excellence",
      description: "Nous visons constamment l'excellence dans chaque vêtement traité, sans compromis sur la qualité."
    },
    {
      icon: <Leaf className="h-10 w-10 text-primary" />,
      title: "Éco-responsabilité",
      description: "Nous utilisons des procédés et produits respectueux de l'environnement pour minimiser notre impact écologique."
    },
    {
      icon: <UserCheck className="h-10 w-10 text-primary" />,
      title: "Service client",
      description: "La satisfaction de nos clients est au cœur de notre métier et guide chacune de nos actions."
    }
  ];

  const milestones = [
    {
      year: 2010,
      title: "Fondation",
      description: "Ouverture de notre première boutique à Paris avec une vision claire : révolutionner l'industrie du pressing."
    },
    {
      year: 2015,
      title: "Expansion",
      description: "Ouverture de 5 nouvelles boutiques et lancement de notre service de livraison à domicile."
    },
    {
      year: 2018,
      title: "Innovation",
      description: "Développement de LavoTech, notre plateforme numérique pour transformer l'expérience client."
    },
    {
      year: 2020,
      title: "Écologie",
      description: "Transition complète vers des produits et processus écologiques et obtention de la certification ISO 14001."
    },
    {
      year: 2023,
      title: "Expansion nationale",
      description: "Ouverture de franchises dans toutes les grandes villes françaises et lancement d'une application mobile."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">À propos de Leidon's Bear</h1>
            <p className="text-lg text-neutral-600 mb-8">
              Depuis plus de 10 ans, nous redéfinissons l'expérience du pressing avec un engagement inébranlable pour la qualité, l'innovation et le service client.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre histoire</h2>
              <p className="text-lg text-neutral-600 mb-6">
                Leidon's Bear est né en 2010 de la passion de Marie Laurent pour les textiles et d'une vision claire : transformer l'industrie du pressing traditionnelle en une expérience moderne, écologique et centrée sur le client.
              </p>
              <p className="text-lg text-neutral-600 mb-6">
                Ce qui a commencé comme une petite boutique dans le cœur de Paris s'est rapidement développé pour devenir une référence dans le secteur du nettoyage professionnel, reconnue pour son excellence et son innovation constante.
              </p>
              <p className="text-lg text-neutral-600">
                Aujourd'hui, Leidon's Bear compte plus de 20 établissements à travers la France et continue de grandir, tout en restant fidèle à ses valeurs fondatrices d'excellence, d'éco-responsabilité et de service client exceptionnel.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="L'histoire de Leidon's Bear" 
                className="rounded-2xl shadow-xl relative z-10 w-full h-auto transform -rotate-2 transition-transform hover:rotate-0 duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos valeurs</h2>
            <p className="text-neutral-600">
              Les principes qui guident nos actions et notre vision au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre équipe</h2>
            <p className="text-neutral-600">
              Rencontrez les experts passionnés qui font de LavoTech une réalité
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="mb-6 relative mx-auto h-40 w-40">
                  <div className="absolute inset-0 bg-primary/20 rounded-full transform translate-x-2 translate-y-2"></div>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="h-40 w-40 rounded-full object-cover relative z-10 border-4 border-white shadow-md"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.position}</p>
                <p className="text-neutral-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16 md:py-24 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre parcours</h2>
            <p className="text-neutral-600">
              Les étapes clés qui ont marqué notre croissance et notre évolution
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center justify-center`}>
                  {/* Year bubble */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold z-10">
                    {milestone.year}
                  </div>
                  
                  {/* Content card */}
                  <div className={`w-5/12 bg-white p-6 rounded-xl shadow-md ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-neutral-600">{milestone.description}</p>
                  </div>

                  {/* Empty space */}
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl font-bold mb-4">Certifications & Engagements</h2>
            <p className="text-neutral-600 mb-8">
              Nous sommes fiers de respecter les normes les plus strictes de l'industrie
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-center w-40 h-24">
              <span className="font-semibold">ISO 9001</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-center w-40 h-24">
              <span className="font-semibold">ISO 14001</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-center w-40 h-24">
              <span className="font-semibold">Écolabel UE</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-center w-40 h-24">
              <span className="font-semibold">Oeko-Tex®</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-center w-40 h-24">
              <span className="font-semibold">AFNOR NF</span>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default AboutPage;
