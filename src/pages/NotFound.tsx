
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { BookX } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md p-6">
        <div className="flex justify-center mb-6">
          <div className="bg-library-secondary/10 p-6 rounded-full">
            <BookX className="h-16 w-16 text-library-secondary" />
          </div>
        </div>
        <h1 className="text-4xl font-serif font-bold mb-4 text-library-primary">Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved to another location.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-library-secondary hover:bg-library-secondary/90"
            asChild
          >
            <a href="/">Go to Home Page</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/catalog">Browse Book Catalog</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
