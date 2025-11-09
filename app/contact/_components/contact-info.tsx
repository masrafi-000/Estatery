import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { contactDetails } from "@/data/contact";
import { Phone } from "lucide-react";

const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="mb-4 text-2xl font-bold md:text-3xl">
          Contact Information
        </h2>
        <p className="leading-relaxed text-muted-foreground">
          Our team is ready to assist you with all your real estate needs. Feel
          free to reach out through any of the following channels.
        </p>
      </div>

      <div className="space-y-4">
        {contactDetails.map((detail, index) => {
          const Icon = detail.icon;
          return (
            <Card key={index}>
              <CardHeader className="pb-3">
                <div className="flex items-center px-4 pt-4 gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{detail.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                {detail.link ? (
                  <a
                    href={detail.link}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {detail.content}
                  </a>
                ) : (
                  <p className="whitespace-pre-line text-muted-foreground">
                    {detail.content}
                  </p>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="bg-primary/5">
        <CardContent className="p-6">
          <h3 className="mb-2 text-lg font-semibold">
            Need Immediate Assistance?
          </h3>
          <p className="mb-4 text-sm text-muted-foreground">
            For urgent matters or after-hours support, please call our emergency
            hotline.
          </p>
          <a
            href="tel:+13055550911"
            className="inline-flex items-center gap-2 text-lg font-semibold text-primary hover:underline"
          >
            <Phone className="h-5 w-5" />
            (305) 555-0911
          </a>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactInfo;
