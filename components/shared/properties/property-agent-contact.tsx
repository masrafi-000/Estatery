import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Property } from "@/types";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";

interface AgentContactProps {
  agent: Property["agent"];
}

export function AgentContact({ agent }: AgentContactProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl px-6 py-4">Contact Agent</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4">
          <Image
            loading="lazy"
            src={agent.image || "/placeholder.svg"}
            alt={agent.name}
            width={64}
            height={64}
            className="h-16 w-16 rounded-full object-cover"
          />
          <div>
            <div className="font-semibold">{agent.name}</div>
            <div className="text-sm text-muted-foreground">
              Real Estate Agent
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <a
            href={`tel:${agent.phone}`}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <Phone className="h-4 w-4" />
            {agent.phone}
          </a>
          <a
            href={`mailto:${agent.email}`}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
            {agent.email}
          </a>
        </div>

        <div className="flex gap-2 justify-between items-center">
          <a href={`tel:${agent.phone}`} className="w-full">
            <Button className="w-full">
              <Phone className="mr-2 h-4 w-4" />
              Call Agent
            </Button>
          </a>
          <a href={`mailto:${agent.email}`} className=" w-full">
            <Button
              variant="outline"
              className="w-full bg-transparent cursor-pointer"
            >
              <Mail className="mr-2 h-4 w-4" />
              Email Agent
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
