import { Card } from "@/components/ui/card";
import { FileText, CheckCircle2, Plane } from "lucide-react";

export default function HowToApply() {
  const steps = [
    {
      icon: FileText,
      number: "01",
      title: "Submit Application",
      description: "Fill out our comprehensive application form with your educational background, work experience, and career aspirations. Our team will review your profile within 48 hours.",
    },
    {
      icon: CheckCircle2,
      number: "02",
      title: "Profile Assessment",
      description: "Our experts evaluate your qualifications and match you with suitable Ausbildung programs or job opportunities in Germany based on your skills and preferences.",
    },
    {
      icon: Plane,
      number: "03",
      title: "Begin Your Journey",
      description: "Once matched, we guide you through visa processes, travel arrangements, and pre-departure orientation to ensure a smooth transition to your new career in Germany.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            How to Apply
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to start your German career journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative" data-testid={`step-${index}`}>
              <Card className="p-6 md:p-8 h-full hover-elevate">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary text-primary-foreground">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div className="text-4xl font-bold text-primary/20">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-medium text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
