
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingBag, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLoginState } from '@/hooks/useLoginState';
import { useToast } from '@/hooks/use-toast';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, logout } = useLoginState();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    logout();
    toast({
      title: "Déconnexion réussie",
      description: "Vous êtes maintenant déconnecté de votre compte."
    });
    navigate('/');
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <ShoppingBag className="h-6 w-6 text-primary" />
          <div>
            <span className="font-montserrat font-bold text-xl text-neutral-800">Lavo<span className="text-primary">Tech</span></span>
            <span className="sr-only"> - Leidon's Bear</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-neutral-800 hover:text-primary font-medium transition-colors">
            Accueil
          </Link>
          <Link to="/services" className="text-neutral-800 hover:text-primary font-medium transition-colors">
            Services
          </Link>
          <Link to="/how-it-works" className="text-neutral-800 hover:text-primary font-medium transition-colors">
            Comment ça marche
          </Link>
          <Link to="/about" className="text-neutral-800 hover:text-primary font-medium transition-colors">
            À propos
          </Link>
          <Link to="/contact" className="text-neutral-800 hover:text-primary font-medium transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" /> 
                Déconnexion
              </Button>
              <Button asChild>
                <Link to="/booking">Réservation</Link>
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" asChild>
                <Link to="/login">
                  <User className="h-4 w-4 mr-2" /> 
                  Connexion
                </Link>
              </Button>
              <Button asChild>
                <Link to="/login" state={{ bookingIntent: true }}>Réservation</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-neutral-800"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <span className="sr-only">Ouvrir le menu</span>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden h-screen bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link 
              to="/" 
              className="block text-lg font-medium text-neutral-800 hover:text-primary py-2"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              to="/services" 
              className="block text-lg font-medium text-neutral-800 hover:text-primary py-2"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/how-it-works" 
              className="block text-lg font-medium text-neutral-800 hover:text-primary py-2"
              onClick={() => setIsOpen(false)}
            >
              Comment ça marche
            </Link>
            <Link 
              to="/about" 
              className="block text-lg font-medium text-neutral-800 hover:text-primary py-2"
              onClick={() => setIsOpen(false)}
            >
              À propos
            </Link>
            <Link 
              to="/contact" 
              className="block text-lg font-medium text-neutral-800 hover:text-primary py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 flex flex-col gap-3">
              {isLoggedIn ? (
                <>
                  <Button variant="outline" onClick={handleLogout} className="w-full justify-center">
                    <LogOut className="h-4 w-4 mr-2" /> 
                    Déconnexion
                  </Button>
                  <Button asChild className="w-full justify-center">
                    <Link to="/booking" onClick={() => setIsOpen(false)}>
                      Réservation
                    </Link>
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" asChild className="w-full justify-center">
                    <Link to="/login" onClick={() => setIsOpen(false)}>
                      <User className="h-4 w-4 mr-2" /> 
                      Connexion
                    </Link>
                  </Button>
                  <Button asChild className="w-full justify-center">
                    <Link to="/login" state={{ bookingIntent: true }} onClick={() => setIsOpen(false)}>
                      Réservation
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
