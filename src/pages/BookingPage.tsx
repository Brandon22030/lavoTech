import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { ArrowRight, Calendar as CalendarIcon, Clock, MapPin, Shirt, Truck, LockIcon } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Navigate, Link } from "react-router-dom";
import { useLoginState } from "@/hooks/useLoginState";

const BookingPage = () => {
  const { toast } = useToast();
  const { isLoggedIn } = useLoginState();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [deliveryOption, setDeliveryOption] = useState<string>("pickup");
  const [timeSlot, setTimeSlot] = useState<string>("");
  const [step, setStep] = useState(1);

  // Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
  if (!isLoggedIn) {
    toast({
      title: "Connexion requise",
      description: "Vous devez être connecté pour accéder à la page de réservation.",
      variant: "destructive"
    });
    return <Navigate to="/login" replace />;
  }

  const services = [
    {
      id: "shirt",
      name: "Chemise",
      price: "5,90€",
      icon: <Shirt className="h-6 w-6 text-primary" />
    },
    {
      id: "suit",
      name: "Costume 2 pièces",
      price: "19,90€",
      icon: <Shirt className="h-6 w-6 text-primary" />
    },
    {
      id: "dress",
      name: "Robe simple",
      price: "12,90€",
      icon: <Shirt className="h-6 w-6 text-primary" />
    },
    {
      id: "pants",
      name: "Pantalon",
      price: "8,90€",
      icon: <Shirt className="h-6 w-6 text-primary" />
    },
    {
      id: "sweater",
      name: "Pull / Sweat",
      price: "9,90€",
      icon: <Shirt className="h-6 w-6 text-primary" />
    },
    {
      id: "tie",
      name: "Cravate",
      price: "4,90€",
      icon: <Shirt className="h-6 w-6 text-primary" />
    }
  ];

  const timeSlots = [
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "14:00 - 15:00",
    "15:00 - 16:00",
    "16:00 - 17:00",
    "17:00 - 18:00"
  ];

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId) 
        : [...prev, serviceId]
    );
  };

  const handleSubmit = () => {
    if (selectedServices.length === 0) {
      toast({
        title: "Attention",
        description: "Veuillez sélectionner au moins un service",
        variant: "destructive"
      });
      return;
    }

    if (!date) {
      toast({
        title: "Attention",
        description: "Veuillez sélectionner une date",
        variant: "destructive"
      });
      return;
    }

    if (!timeSlot) {
      toast({
        title: "Attention",
        description: "Veuillez sélectionner un créneau horaire",
        variant: "destructive"
      });
      return;
    }

    // In a real application, this would submit the booking to a backend
    toast({
      title: "Réservation confirmée!",
      description: `Votre rendez-vous est confirmé pour le ${format(date, 'PPP', { locale: fr })} entre ${timeSlot}.`,
    });
  };

  return (
    <div className="min-h-screen bg-neutral-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-4">Réservez votre service</h1>
            <p className="text-lg text-neutral-600">
              Quelques étapes simples pour confier vos vêtements à nos experts
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 bg-primary/5 border-b">
              <div className="flex justify-between items-center">
                <div className={cn(
                  "flex items-center",
                  step >= 1 ? "text-primary" : "text-neutral-400"
                )}>
                  <div className={cn(
                    "h-8 w-8 rounded-full flex items-center justify-center mr-3",
                    step >= 1 ? "bg-primary text-white" : "bg-neutral-200"
                  )}>
                    1
                  </div>
                  <span className="font-medium">Services</span>
                </div>
                <div className="h-0.5 w-12 bg-neutral-200 mx-2"></div>
                <div className={cn(
                  "flex items-center",
                  step >= 2 ? "text-primary" : "text-neutral-400"
                )}>
                  <div className={cn(
                    "h-8 w-8 rounded-full flex items-center justify-center mr-3",
                    step >= 2 ? "bg-primary text-white" : "bg-neutral-200"
                  )}>
                    2
                  </div>
                  <span className="font-medium">Date & heure</span>
                </div>
                <div className="h-0.5 w-12 bg-neutral-200 mx-2"></div>
                <div className={cn(
                  "flex items-center",
                  step >= 3 ? "text-primary" : "text-neutral-400"
                )}>
                  <div className={cn(
                    "h-8 w-8 rounded-full flex items-center justify-center mr-3",
                    step >= 3 ? "bg-primary text-white" : "bg-neutral-200"
                  )}>
                    3
                  </div>
                  <span className="font-medium">Confirmation</span>
                </div>
              </div>
            </div>

            {step === 1 && (
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-6">Sélectionnez vos services</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {services.map((service) => (
                    <div 
                      key={service.id}
                      className={cn(
                        "border rounded-lg p-4 flex items-center justify-between cursor-pointer transition-colors",
                        selectedServices.includes(service.id) 
                          ? "border-primary bg-primary/5" 
                          : "border-gray-200 hover:border-primary/30"
                      )}
                      onClick={() => toggleService(service.id)}
                    >
                      <div className="flex items-center">
                        <div className="mr-4">{service.icon}</div>
                        <div>
                          <h3 className="font-medium">{service.name}</h3>
                          <p className="text-sm text-neutral-600">{service.price} / pièce</p>
                        </div>
                      </div>
                      <div className={cn(
                        "h-6 w-6 rounded-full border-2 flex items-center justify-center",
                        selectedServices.includes(service.id) 
                          ? "border-primary bg-primary text-white" 
                          : "border-gray-300"
                      )}>
                        {selectedServices.includes(service.id) && (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end">
                  <Button 
                    onClick={() => setStep(2)}
                    disabled={selectedServices.length === 0}
                  >
                    Continuer <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-6">Choisissez une date et un créneau</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-medium mb-4 flex items-center">
                      <CalendarIcon className="mr-2 h-5 w-5 text-primary" /> Sélectionnez une date
                    </h3>
                    <div className="border rounded-lg p-4">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="mx-auto"
                        locale={fr}
                        disabled={(date) => {
                          const day = date.getDay();
                          // Disable weekends (0 is Sunday, 6 is Saturday)
                          return day === 0;
                        }}
                        fromDate={new Date()}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="mb-6">
                      <h3 className="font-medium mb-4 flex items-center">
                        <Clock className="mr-2 h-5 w-5 text-primary" /> Sélectionnez un créneau
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        {timeSlots.map((slot) => (
                          <div
                            key={slot}
                            className={cn(
                              "border rounded-lg p-3 text-center cursor-pointer transition-colors",
                              timeSlot === slot ? "border-primary bg-primary/5" : "border-gray-200 hover:border-primary/30"
                            )}
                            onClick={() => setTimeSlot(slot)}
                          >
                            {slot}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-4 flex items-center">
                        <Truck className="mr-2 h-5 w-5 text-primary" /> Mode de livraison
                      </h3>
                      <Tabs defaultValue="pickup" onValueChange={setDeliveryOption}>
                        <TabsList className="grid w-full grid-cols-2 mb-4">
                          <TabsTrigger value="pickup">En boutique</TabsTrigger>
                          <TabsTrigger value="delivery">Livraison</TabsTrigger>
                        </TabsList>
                        <TabsContent value="pickup" className="border rounded-lg p-4">
                          <div className="flex items-start mb-2">
                            <MapPin className="h-5 w-5 mr-2 text-primary mt-1" />
                            <div>
                              <h4 className="font-medium">Leidon's Bear - Paris Centre</h4>
                              <p className="text-sm text-neutral-600">123 Avenue de la Propreté, 75001 Paris</p>
                            </div>
                          </div>
                          <p className="text-sm text-neutral-600">Déposez et récupérez vos vêtements directement en boutique.</p>
                        </TabsContent>
                        <TabsContent value="delivery" className="border rounded-lg p-4">
                          <p className="text-sm mb-3">Service de collecte et livraison à domicile (+5,90€)</p>
                          <p className="text-sm text-neutral-600 mb-3">Nous récupérons et livrons vos vêtements à l'adresse de votre choix.</p>
                          <div className="text-sm text-neutral-600 flex items-center">
                            <Truck className="h-4 w-4 mr-1 text-secondary" /> 
                            Livraison offerte dès 40€ d'achat
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    Retour
                  </Button>
                  <Button 
                    onClick={() => setStep(3)}
                    disabled={!date || !timeSlot}
                  >
                    Continuer <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-6">Confirmez votre réservation</h2>
                
                <div className="border rounded-lg p-6 mb-6">
                  <h3 className="font-medium mb-4">Récapitulatif de la commande</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between pb-2 border-b border-gray-100">
                      <span className="text-neutral-600">Services:</span>
                      <span className="font-medium">
                        {selectedServices.map(id => 
                          services.find(s => s.id === id)?.name
                        ).join(", ")}
                      </span>
                    </div>
                    
                    <div className="flex justify-between pb-2 border-b border-gray-100">
                      <span className="text-neutral-600">Date:</span>
                      <span className="font-medium">
                        {date ? format(date, 'PPP', { locale: fr }) : ''}
                      </span>
                    </div>
                    
                    <div className="flex justify-between pb-2 border-b border-gray-100">
                      <span className="text-neutral-600">Créneau horaire:</span>
                      <span className="font-medium">{timeSlot}</span>
                    </div>
                    
                    <div className="flex justify-between pb-2 border-b border-gray-100">
                      <span className="text-neutral-600">Mode de livraison:</span>
                      <span className="font-medium">
                        {deliveryOption === 'pickup' ? 'En boutique' : 'Livraison à domicile'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total estimé:</span>
                    <span className="text-primary">
                      {selectedServices.reduce((acc, id) => {
                        const price = services.find(s => s.id === id)?.price || "0€";
                        return acc + parseFloat(price.replace('€', '').replace(',', '.'));
                      }, deliveryOption === 'delivery' ? 5.90 : 0).toFixed(2).replace('.', ',')}€
                    </span>
                  </div>
                </div>
                
                <div className="text-sm text-neutral-500 mb-6">
                  <p>En confirmant votre réservation, vous acceptez les conditions générales de vente et la politique de confidentialité de Leidon's Bear.</p>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(2)}>
                    Retour
                  </Button>
                  <Button onClick={handleSubmit}>
                    Confirmer la réservation
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
