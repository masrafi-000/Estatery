import { AgentContact } from "@/components/shared/properties/property-agent-contact";
import PropertyAmenities from "@/components/shared/properties/property-animities";
import PropertyGallery from "@/components/shared/properties/property-gallery";
import PropertyInfo from "@/components/shared/properties/property-info";
import { ViewingRequestForm } from "@/components/shared/properties/property-viwing-req-form";
import { staticProperties } from "@/data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  console.log("Static properties", staticProperties);
  return staticProperties.map((property) => ({
    id: property.id,
  }));
}

export default function PropertyDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const property = staticProperties.find((p) => p.id === params.id);
  console.log(property);

  if (!property) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-linear-to-br from-indigo-50 via-white to-orange-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <main className="flex-1">
        <PropertyGallery images={property.images} title={property.title} />

        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <PropertyInfo property={property} />
              <PropertyAmenities amenities={property.amenities} />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <AgentContact agent={property.agent} />
              <ViewingRequestForm propertyId={property.id} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
