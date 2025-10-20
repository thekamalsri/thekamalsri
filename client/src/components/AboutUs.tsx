import { Card } from "@/components/ui/card";
import { Award, Users, Building2, TrendingUp } from "lucide-react";

export default function AboutUs() {
  const stats = [
    { icon: Award, label: "Years of Experience", value: "10+" },
    { icon: Users, label: "Successful Placements", value: "500+" },
    { icon: Building2, label: "Partner Companies", value: "50+" },
    { icon: TrendingUp, label: "Success Rate", value: "95%" },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            About GlobalPath Agency
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-medium text-foreground">
              Bridging Talent with Opportunity
            </h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              GlobalPath Agency is a premier manpower consultancy specializing in connecting skilled Indian professionals with prestigious Ausbildung programs and career opportunities across Germany.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              With over a decade of experience, we provide comprehensive support throughout your journey—from application to settlement—ensuring a smooth transition to your German career.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Our team of experts understands both the Indian and German job markets, offering personalized guidance to help you achieve your international career goals.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className="p-6 text-center space-y-3 hover-elevate"
                data-testid={`card-stat-${index}`}
              >
                <div className="flex justify-center">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
