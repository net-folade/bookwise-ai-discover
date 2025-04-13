
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookCard, BookCardProps } from "@/components/books/BookCard";
import { cn } from "@/lib/utils";

type RecommendationCarouselProps = {
  title: string;
  books: BookCardProps[];
  className?: string;
  isAIRecommended?: boolean;
};

export function RecommendationCarousel({ 
  title, 
  books,
  className,
  isAIRecommended = false 
}: RecommendationCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (!containerRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;
    
    const scrollAmount = 320; // Width of cards plus gap
    const newScrollLeft = direction === 'left' 
      ? containerRef.current.scrollLeft - scrollAmount
      : containerRef.current.scrollLeft + scrollAmount;
      
    containerRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
  };

  return (
    <div className={cn("my-8", className)}>
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className={cn(
          "text-xl font-serif font-semibold",
          isAIRecommended ? "text-library-secondary ai-recommendation" : ""
        )}>
          {title}
          {isAIRecommended && (
            <span className="ml-2 text-xs bg-library-accent/10 text-library-accent px-2 py-1 rounded-full">
              AI Powered
            </span>
          )}
        </h2>
        
        {/* Navigation Controls */}
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="h-8 w-8"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="h-8 w-8"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {/* Carousel */}
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x"
        onScroll={checkScrollability}
      >
        {books.map((book) => (
          <div 
            key={book.id} 
            className="w-36 md:w-40 lg:w-48 flex-shrink-0 snap-start"
          >
            <BookCard {...book} isRecommended={isAIRecommended} />
          </div>
        ))}
      </div>
    </div>
  );
}
