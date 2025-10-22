"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const viewingRequestSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  preferredDate: z.string().min(1, "Please select a date"),
  preferredTime: z.string().min(1, "Please select a time"),
  message: z.string().optional(),
});

type ViewingRequestFormData = z.infer<typeof viewingRequestSchema>;

interface ViewingRequestFormProps {
  propertyId: string;
}

interface FormField {
  id: keyof ViewingRequestFormData;
  label: string;
  placeholder?: string;
  type?: string;
  component?: "input" | "textarea";
  grid?: boolean;
}

const formFields: FormField[] = [
  {
    id: "name",
    label: "Full Name",
    placeholder: "John Doe",
    type: "text",
    component: "input",
  },
  {
    id: "email",
    label: "Email",
    placeholder: "john@example.com",
    type: "email",
    component: "input",
  },
  {
    id: "phone",
    label: "Phone Number",
    placeholder: "(555) 123-4567",
    type: "tel",
    component: "input",
  },
  {
    id: "preferredDate",
    label: "Preferred Date",
    type: "date",
    component: "input",
    grid: true,
  },
  {
    id: "preferredTime",
    label: "Preferred Time",
    type: "time",
    component: "input",
    grid: true,
  },
  {
    id: "message",
    label: "Message (Optional)",
    placeholder: "Any specific questions or requirements...",
    component: "textarea",
  },
];

export function ViewingRequestForm({ propertyId }: ViewingRequestFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ViewingRequestFormData>({
    resolver: zodResolver(viewingRequestSchema),
  });

  const onSubmit = async (data: ViewingRequestFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Viewing request submitted:", {
      ...data,
      propertyId,
    });
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center px-6 py-4  gap-2 text-xl">
          <Calendar className="h-5 w-5" />
          <p>Schedule a Viewing</p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isSubmitted ? (
          <div className="rounded-lg bg-primary/10 p-4 text-center">
            <p className="font-semibold text-primary">Request Submitted!</p>
            <p className="mt-1 text-sm text-muted-foreground">
              We&apos;ll contact you shortly to confirm your viewing.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {formFields.slice(0, 3).map((field) => (
              <div key={field.id} className="space-y-2">
                <Label htmlFor={field.id}>{field.label}</Label>
                <Input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  {...register(field.id)}
                />
                {errors[field.id] && (
                  <p className="text-sm text-destructive">
                    {String(errors[field.id]?.message)}
                  </p>
                )}
              </div>
            ))}

            <div className="grid gap-4 md:grid-cols-2">
              {formFields
                .filter((f) => f.grid)
                .map((field) => (
                  <div key={field.id} className="space-y-2">
                    <Label htmlFor={field.id}>{field.label}</Label>
                    <Input
                      id={field.id}
                      type={field.type}
                      {...register(field.id)}
                    />
                    {errors.preferredDate && (
                      <p className="text-sm text-destructive">
                        {errors.preferredDate.message}
                      </p>
                    )}
                  </div>
                ))}
            </div>

            {formFields
              .filter((f) => f.component === "textarea")
              .map((field) => (
                <div key={field.id} className="space-y-2">
                  <Label htmlFor={field.id}>{field.label}</Label>
                  <Textarea
                    id={field.id}
                    placeholder={field.placeholder}
                    rows={3}
                    {...register(field.id)}
                  />
                </div>
              ))}

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Viewing Request"}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
