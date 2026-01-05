import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { EarlyAccessButton } from "@/components/EarlyAccessButton";
import { NewsletterForm } from "@/components/NewsletterForm";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Philosophy", href: "#philosophy" },
    { name: "Solution", href: "#solution" },
    { name: "About", href: "#about" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2 cursor-pointer">
          <span className="font-serif text-2xl font-bold tracking-tight text-foreground">
            Aarohana<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.name}
            </a>
          ))}
          <EarlyAccessButton variant="default" size="sm" className="bg-primary hover:bg-primary/90 text-white" />
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="mt-8 flex flex-col space-y-6">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <EarlyAccessButton className="w-full" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-muted py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <span className="font-serif text-2xl font-bold tracking-tight text-foreground">
              Aarohana<span className="text-primary">.</span>
            </span>
            <p className="text-sm text-muted-foreground">
              Democratizing access to world-class coaching for startup leaders.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 font-semibold">Platform</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">AI Coach</a></li>
              <li><a href="#" className="hover:text-foreground">Human Bridge</a></li>
              <li><a href="#" className="hover:text-foreground">Resources</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground">About Us</a></li>
              <li><a href="#" className="hover:text-foreground">Careers</a></li>
              <li><a href="#" className="hover:text-foreground">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Stay Updated</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Join our newsletter for leadership insights.
            </p>
            <NewsletterForm />
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aarohana. All rights reserved.
        </div>
      </div>
    </footer>
  );
}