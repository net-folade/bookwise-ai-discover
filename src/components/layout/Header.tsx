
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bell, 
  Search, 
  User,
  MessageSquare,
  BookOpen
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock user state (replace with actual auth logic)
  const user = {
    name: 'Jane Doe',
    avatar: ''
  };

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search redirect logic
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="sticky top-0 z-30 w-full bg-white border-b shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo (visible only on mobile) */}
        <div className="md:hidden flex items-center">
          <Link to="/" className="flex items-center">
            <BookOpen className="h-6 w-6 text-library-secondary" />
            <span className="ml-2 text-xl font-bold text-library-primary">BookWise</span>
          </Link>
        </div>
        
        {/* Search Bar */}
        <form 
          onSubmit={handleSearch} 
          className="hidden md:flex items-center w-full max-w-md mx-4"
        >
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Search books, authors, genres..."
              className="pl-10 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button type="submit" className="ml-2 bg-library-secondary hover:bg-library-secondary/90">
            Search
          </Button>
        </form>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm">Your book "1984" is due in 2 days</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm">"The Great Gatsby" is now available</p>
                  <p className="text-xs text-gray-500">Yesterday</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="justify-center text-sm">
                View all notifications
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Messages */}
          <Button variant="ghost" size="icon">
            <MessageSquare className="h-5 w-5" />
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="bg-library-accent text-white">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BookOpen className="mr-2 h-4 w-4" />
                <span>My Books</span>
              </DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      {/* Mobile Search */}
      <div className="md:hidden p-2 bg-white">
        <form onSubmit={handleSearch} className="flex">
          <Input
            type="search"
            placeholder="Search..."
            className="w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button type="submit" className="ml-2 bg-library-secondary hover:bg-library-secondary/90">
            <Search className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </header>
  );
}
