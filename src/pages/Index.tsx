
import { useState } from "react";
import { RecommendationCarousel } from "@/components/recommendations/RecommendationCarousel";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BookOpen } from "lucide-react";
import { bookCategories } from "@/services/mockData";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log("Searching for:", searchQuery);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-library-primary to-library-secondary rounded-lg p-8 mb-8 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Discover Your Next Favorite Book
          </h1>
          <p className="text-lg mb-6 opacity-90">
            BookWise AI recommends books tailored just for you based on your reading preferences.
          </p>
          
          {/* Search Bar */}
          <form 
            onSubmit={handleSearchSubmit}
            className="flex max-w-md mx-auto relative rounded-full overflow-hidden shadow-lg"
          >
            <Input
              type="search"
              placeholder="Search for books, authors, or genres..."
              className="pl-12 py-6 rounded-full border-none flex-1 bg-white/10 backdrop-blur-lg text-white placeholder:text-white/70"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70" />
            <Button 
              type="submit" 
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-10 bg-white text-library-secondary hover:bg-white/90"
            >
              Search
            </Button>
          </form>
        </div>
      </section>

      {/* Currently Reading Section */}
      <section className="mb-8 p-6 bg-white rounded-lg shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-serif font-semibold">Continue Reading</h2>
          <Button variant="ghost" className="text-library-secondary">
            <BookOpen className="mr-2 h-4 w-4" />
            View All
          </Button>
        </div>
        
        <div className="flex flex-wrap gap-6">
          {bookCategories[0].books.slice(0, 1).map((book) => (
            <div key={book.id} className="flex flex-col md:flex-row items-start gap-4 p-4 rounded-lg border w-full">
              {/* Book Cover */}
              <div className="book-cover w-24 h-36 min-w-24">
                <img 
                  src={book.coverImage} 
                  alt={`${book.title} cover`}
                  className="w-full h-full object-cover" 
                />
              </div>
              
              {/* Book Details */}
              <div className="flex-1">
                <h3 className="font-serif font-semibold text-lg">{book.title}</h3>
                <p className="text-gray-600">{book.author}</p>
                <div className="flex items-center mt-2 mb-4">
                  <div className="h-2 w-full bg-gray-200 rounded-full">
                    <div 
                      className="h-2 bg-library-accent rounded-full" 
                      style={{ width: '35%' }}
                    ></div>
                  </div>
                  <span className="ml-2 text-sm text-gray-600">35%</span>
                </div>
                <Button className="bg-library-secondary hover:bg-library-secondary/90">
                  Continue Reading
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Book Recommendations */}
      {bookCategories.map((category) => (
        <RecommendationCarousel
          key={category.id}
          title={category.title}
          books={category.books}
          isAIRecommended={category.isAIRecommended}
        />
      ))}
    </Layout>
  );
};

export default Index;
