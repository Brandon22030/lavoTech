
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Leidon's Bear</h3>
            <p className="text-neutral-300 text-sm">Votre pressing, simplement parfait</p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">À propos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-white transition-colors text-sm">
                  Notre histoire
                </Link>
              </li>
              <li>
                <Link to="/about#team" className="text-neutral-300 hover:text-white transition-colors text-sm">
                  L'équipe
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-neutral-300 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-neutral-300 hover:text-white transition-colors text-sm">
                  Carrières
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-neutral-300 hover:text-white transition-colors text-sm">
                  Nettoyage à sec
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-300 hover:text-white transition-colors text-sm">
                  Repassage
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-300 hover:text-white transition-colors text-sm">
                  Blanchisserie
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-300 hover:text-white transition-colors text-sm">
                  Services spéciaux
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={16} className="mt-1 mr-2 flex-shrink-0 text-primary" />
                <span className="text-neutral-300 text-sm">123 Avenue de la Propreté, 75001 Paris</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 flex-shrink-0 text-primary" />
                <a href="tel:+33123456789" className="text-neutral-300 hover:text-white transition-colors text-sm">
                  01 23 45 67 89
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 flex-shrink-0 text-primary" />
                <a href="mailto:contact@leidons-bear.com" className="text-neutral-300 hover:text-white transition-colors text-sm">
                  contact@leidons-bear.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">
            &copy; {new Date().getFullYear()} Leidon's Bear. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-neutral-400 hover:text-white transition-colors text-sm">
              Politique de confidentialité
            </Link>
            <Link to="/terms" className="text-neutral-400 hover:text-white transition-colors text-sm">
              Conditions d'utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
