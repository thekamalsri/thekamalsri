import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <h1 className={`text-xl md:text-2xl font-semibold transition-colors ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}>
              GlobalPath Agency
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('about')}
              className={`transition-colors hover:text-ring ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
              data-testid="nav-link-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`transition-colors hover:text-ring ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
              data-testid="nav-link-apply"
            >
              Apply
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant={isScrolled ? "default" : "outline"}
              className={!isScrolled ? "bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm" : ""}
              data-testid="button-get-started"
            >
              Get Started
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${isScrolled ? 'text-foreground' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-4 py-4 space-y-3">
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-accent rounded-md transition-colors"
              data-testid="mobile-link-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-accent rounded-md transition-colors"
              data-testid="mobile-link-apply"
            >
              Apply
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="w-full"
              data-testid="mobile-button-get-started"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
