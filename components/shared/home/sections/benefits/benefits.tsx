import { Card, CardContent } from "@/components/ui/card";
import { benefits } from "@/data";

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Why Choose ZettaEstate
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We provide everything you need to find, buy, or rent your perfect
            property with confidence.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="border-border transition-shadow hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
