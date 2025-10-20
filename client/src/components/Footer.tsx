import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">GlobalPath Agency</h3>
            <p className="text-primary-foreground/80 text-sm md:text-base leading-relaxed">
              Your trusted partner in connecting Indian talent with German opportunities. Building successful careers since 2014.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <a 
                  href="#about" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  data-testid="link-about"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  data-testid="link-contact"
                >
                  Apply Now
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  data-testid="link-services"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  data-testid="link-success"
                >
                  Success Stories
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm md:text-base">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 text-primary-foreground/60" />
                <a 
                  href="mailto:info@globalpathagency.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  data-testid="link-email"
                >
                  info@globalpathagency.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 text-primary-foreground/60" />
                <a 
                  href="tel:+911234567890"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  data-testid="link-phone"
                >
                  +91 12345 67890
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">
                  Mumbai, Maharashtra, India
                </span>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button 
                size="icon" 
                variant="ghost" 
                className="text-primary-foreground hover:bg-primary-foreground/10"
                data-testid="button-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                className="text-primary-foreground hover:bg-primary-foreground/10"
                data-testid="button-facebook"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                className="text-primary-foreground hover:bg-primary-foreground/10"
                data-testid="button-instagram"
              >
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/80">
          <p>&copy; {currentYear} GlobalPath Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
