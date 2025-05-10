
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    name: 'Marie Dupont',
    position: 'Avocate',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    content: 'Service impeccable ! Mes tailleurs sont toujours parfaitement nettoyés et repassés. Le service de livraison à domicile me fait gagner un temps précieux.',
    rating: 5
  },
  {
    name: 'Thomas Laurent',
    position: 'Directeur commercial',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    content: 'Je confie toutes mes chemises à LavoTech depuis des années. La qualité est constante et le service client est exceptionnel. Je recommande vivement !',
    rating: 5
  },
  {
    name: 'Sophie Martin',
    position: 'Responsable boutique',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    content: 'J\'apprécie particulièrement le soin porté aux tissus délicats. Ma robe de soirée était impeccable après le nettoyage. Application très pratique pour suivre ma commande.',
    rating: 4
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que disent nos clients</h2>
          <p className="text-neutral-600">
            La satisfaction de nos clients est notre priorité absolue. Voici quelques témoignages de personnes qui nous font confiance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={cn(
                "bg-white p-6 rounded-xl shadow-md border border-gray-100",
                "hover:shadow-lg transition-all duration-300",
                "flex flex-col"
              )}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-neutral-500 text-sm">{testimonial.position}</p>
                </div>
              </div>

              <div className="flex mb-3">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} className={cn(
                    "h-4 w-4", 
                    i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                  )} />
                ))}
              </div>

              <p className="text-neutral-600 flex-grow">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
