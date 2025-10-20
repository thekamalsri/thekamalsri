import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/Hero_image_professional_office_fb7eb491.png";

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-24 text-center">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Your Gateway to<br />German Career Success
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-4 max-w-3xl mx-auto">
          Connecting talented Indian professionals with Ausbildung and job opportunities in Germany
        </p>
        <p className="text-base md:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Join 500+ successful placements and transform your career with expert guidance
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-ring text-white hover:bg-ring/90 min-w-[200px]"
            onClick={scrollToContact}
            data-testid="button-apply-now"
          >
            Apply Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="min-w-[200px] backdrop-blur-sm bg-white/10 text-white border-white/30 hover:bg-white/20"
            onClick={scrollToAbout}
            data-testid="button-learn-more"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
