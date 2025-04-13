
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export type BookCardProps = {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  rating?: number;
  isRecommended?: boolean;
  similarityScore?: number;
  className?: string;
};

export function BookCard({ 
  id, 
  title, 
  author, 
  coverImage, 
  rating, 
  isRecommended = false,
  similarityScore,
  className 
}: BookCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorited(!isFavorited);
  };

  return (
    <Link to={`/books/${id}`}>
      <div className={cn("group relative", className)}>
        {/* Book Cover */}
        <div className="book-cover bg-gray-200">
          <img 
            src={coverImage} 
            alt={`${title} cover`}
            className="w-full h-full object-cover" 
          />
          
          {/* Actions Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Button variant="ghost" size="sm" className="text-white">
              View Details
            </Button>
          </div>
          
          {/* AI recommendation badge */}
          {isRecommended && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="absolute top-2 right-2 bg-library-accent text-white rounded-full p-1">
                    <Info className="h-4 w-4" />
                  </div>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p className="text-xs">AI Recommended</p>
                  {similarityScore && (
                    <p className="text-xs text-gray-400">{Math.round(similarityScore * 100)}% match</p>
                  )}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
          
          {/* Favorite Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-2 left-2 text-white hover:text-red-500 transition-colors"
            onClick={toggleFavorite}
          >
            <Heart 
              className={cn(
                "h-5 w-5", 
                isFavorited ? "fill-red-500 text-red-500" : ""
              )} 
            />
          </Button>
        </div>

        {/* Book Details */}
        <div className="mt-2">
          <h3 className="font-medium text-gray-900 line-clamp-1">{title}</h3>
          <p className="text-sm text-gray-600">{author}</p>
          
          {/* Rating Stars */}
          {rating && (
            <div className="flex items-center mt-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(rating) 
                      ? "text-yellow-400" 
                      : i < rating 
                        ? "text-yellow-400" 
                        : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-1 text-xs text-gray-600">{rating.toFixed(1)}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
