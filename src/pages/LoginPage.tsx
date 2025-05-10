import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, Check, Github, Mail, ShoppingBag } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLoginState } from '@/hooks/useLoginState';

const LoginPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useLoginState();
  
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerPhone, setRegisterPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Get the redirect path or use home page as default
  const from = location.state?.from?.pathname || "/";
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const success = await login(loginEmail, loginPassword);
      
      if (success) {
        toast({
          title: "Connexion réussie",
          description: "Vous êtes maintenant connecté à votre compte.",
        });
        
        // Redirect to the page they tried to visit or home
        navigate(from, { replace: true });
      } else {
        toast({
          title: "Échec de connexion",
          description: "Veuillez vérifier vos identifiants et réessayer.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Compte créé avec succès",
        description: "Bienvenue chez LavoTech! Votre compte a été créé.",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link to="/" className="inline-flex items-center justify-center mb-4">
            <ShoppingBag className="h-8 w-8 text-primary" />
            <span className="font-montserrat font-bold text-2xl ml-2 text-neutral-800">
              Lavo<span className="text-primary">Tech</span>
            </span>
          </Link>
          <h1 className="text-3xl font-bold">Bienvenue</h1>
          <p className="text-neutral-600 mt-2">Connectez-vous ou créez un compte pour accéder à nos services</p>
        </div>

        <Tabs defaultValue="login" className="bg-white rounded-xl shadow-lg overflow-hidden">
          <TabsList className="grid w-full grid-cols-2 bg-neutral-100">
            <TabsTrigger value="login">Connexion</TabsTrigger>
            <TabsTrigger value="register">Inscription</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login" className="mt-0">
            <Card className="border-0 shadow-none">
              <CardHeader>
                <CardTitle>Connexion</CardTitle>
                <CardDescription>
                  Entrez vos identifiants pour accéder à votre compte
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="vous@example.com"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Mot de passe</Label>
                      <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                        Mot de passe oublié?
                      </Link>
                    </div>
                    <Input 
                      id="password" 
                      type="password" 
                      placeholder="••••••••"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Connexion...' : 'Se connecter'}
                  </Button>
                </form>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-neutral-500">Ou continuer avec</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" type="button" className="w-full">
                    <Github className="mr-2 h-4 w-4" />
                    Google
                  </Button>
                  <Button variant="outline" type="button" className="w-full">
                    <Mail className="mr-2 h-4 w-4" />
                    Facebook
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="register" className="mt-0">
            <Card className="border-0 shadow-none">
              <CardHeader>
                <CardTitle>Créer un compte</CardTitle>
                <CardDescription>
                  Inscrivez-vous pour profiter de tous nos services
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet</Label>
                      <Input 
                        id="name" 
                        placeholder="Jean Dupont"
                        value={registerName}
                        onChange={(e) => setRegisterName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input 
                        id="phone" 
                        placeholder="06 12 34 56 78"
                        value={registerPhone}
                        onChange={(e) => setRegisterPhone(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <Input 
                      id="register-email" 
                      type="email" 
                      placeholder="vous@example.com"
                      value={registerEmail}
                      onChange={(e) => setRegisterEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="register-password">Mot de passe</Label>
                    <Input 
                      id="register-password" 
                      type="password" 
                      placeholder="••••••••"
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="text-neutral-600">
                        J'accepte les{" "}
                        <Link to="/terms" className="text-primary hover:underline">
                          conditions générales
                        </Link>{" "}
                        et la{" "}
                        <Link to="/privacy" className="text-primary hover:underline">
                          politique de confidentialité
                        </Link>
                      </label>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Inscription...' : 'Créer un compte'}
                  </Button>
                </form>

                <div className="text-sm text-center text-neutral-600 mt-4">
                  En créant un compte, vous bénéficiez de:
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-secondary mr-2" />
                    <span className="text-sm">15% de réduction sur votre première commande</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-secondary mr-2" />
                    <span className="text-sm">Accès au programme de fidélité</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-secondary mr-2" />
                    <span className="text-sm">Suivi en temps réel de vos commandes</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center">
          <Button variant="link" asChild className="text-neutral-600">
            <Link to="/">
              <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
              Retour à l'accueil
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
