
import { ReactNode } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { cn } from "@/lib/utils";

type LayoutProps = {
  children: ReactNode;
  isAdmin?: boolean;
  className?: string;
};

export function Layout({ children, isAdmin = false, className }: LayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar isAdmin={isAdmin} />
      <div className="flex-1 ml-0 md:ml-64">
        <Header />
        <main className={cn("container mx-auto p-4 md:p-6", className)}>
          {children}
        </main>
      </div>
    </div>
  );
}
