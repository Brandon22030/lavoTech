
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
  popular?: boolean;
  className?: string;
}

const ServiceCard = ({
  icon,
  title,
  description,
  price,
  popular = false,
  className,
}: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-xl p-6 border transition-all duration-300 group card-shadow",
        popular ? "border-primary/30 relative" : "border-gray-200 hover:border-primary/30",
        className
      )}
    >
      {popular && (
        <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-medium">
          Populaire
        </span>
      )}
      <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-neutral-600 text-sm mb-4">{description}</p>
      <div className="flex items-end">
        <span className="text-2xl font-bold text-neutral-800">{price}</span>
        <span className="text-neutral-500 text-sm ml-1">/ pièce</span>
      </div>
    </div>
  );
};

export default ServiceCard;
