import { ContactDetails, FormSelectSubject } from "@/types";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export const contactDetails:ContactDetails[] = [
  {
    icon: MapPin,
    title: "Office Address",
    content: "123 Real Estate Boulevard, Suite 500, Miami, FL 33139",
  },
  {
    icon: Phone,
    title: "Phone Number",
    content: "(305) 555-0100",
    link: "tel:+13055550100",
  },
  {
    icon: Mail,
    title: "Email Address",
    content: "info@estatery.com",
    link: "mailto:info@estatery.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content:
      "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed",
  },
];


export const formSelectSubjects:FormSelectSubject[] = [
  { value: "general", label: "General Inquiry" },
  { value: "property", label: "Property Information" },
  { value: "viewing", label: "Schedule a Viewing" },
  { value: "selling", label: "Selling a Property" },
  { value: "renting", label: "Renting a Property" },
  { value: "investment", label: "Investment Opportunities" },
  { value: "other", label: "Other" },
];