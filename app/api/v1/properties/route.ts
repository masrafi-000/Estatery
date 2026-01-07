import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const properties = await prisma.property.findMany({
      include: {
        agent: {
          select: {
            id: true,
            agencyName: true,
            licenseNo: true,
            user: {
              select: {
                email: true,
                profile: true,
              },
            },
          },
        },
        images: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: properties,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Failwed ot fetch properties: ", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch properties",
      },
      { status: 500 }
    );
  }
}
