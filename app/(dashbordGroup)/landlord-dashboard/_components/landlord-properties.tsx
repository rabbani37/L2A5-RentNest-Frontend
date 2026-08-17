import Link from "next/link";
import {
    ArrowUpRight,
    Building2,
} from "lucide-react";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function LandlordProperties() {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle>
                        My Properties
                    </CardTitle>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Recently added and managed properties.
                    </p>
                </div>

                <Button
                    variant="ghost"
                    size="sm"
                    
                >
                    <Link href="/landlord-dashboard/properties">
                        View all
                        <ArrowUpRight className="ml-1 size-4" />
                    </Link>
                </Button>
            </CardHeader>

            <CardContent>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    <PropertyCard
                        title="Modern Family Apartment"
                        location="Dhaka, Bangladesh"
                        price="৳25,000"
                        status="Active"
                        views="842"
                    />

                    <PropertyCard
                        title="Cozy City Apartment"
                        location="Jessore, Bangladesh"
                        price="৳18,000"
                        status="Active"
                        views="624"
                    />

                    <PropertyCard
                        title="Green View Residence"
                        location="Dhaka, Bangladesh"
                        price="৳30,000"
                        status="Pending"
                        views="418"
                    />
                </div>
            </CardContent>
        </Card>
    );
}

interface PropertyCardProps {
    title: string;
    location: string;
    price: string;
    status: "Active" | "Pending";
    views: string;
}

function PropertyCard({
    title,
    location,
    price,
    status,
    views,
}: PropertyCardProps) {
    return (
        <div className="overflow-hidden rounded-xl border">
            {/* Image Placeholder */}
            <div className="flex h-36 items-center justify-center bg-muted">
                <Building2 className="size-10 text-muted-foreground/50" />
            </div>

            <div className="space-y-3 p-4">
                <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                        <h3 className="truncate font-semibold">
                            {title}
                        </h3>

                        <p className="mt-1 truncate text-xs text-muted-foreground">
                            {location}
                        </p>
                    </div>

                    <Badge
                        variant={
                            status === "Active"
                                ? "default"
                                : "secondary"
                        }
                    >
                        {status}
                    </Badge>
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-xs text-muted-foreground">
                            Monthly Rent
                        </p>

                        <p className="font-semibold">
                            {price}
                        </p>
                    </div>

                    <div className="text-right">
                        <p className="text-xs text-muted-foreground">
                            Views
                        </p>

                        <p className="font-semibold">
                            {views}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}