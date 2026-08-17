import Link from "next/link";
import {
    Building2,
    CalendarDays,
    DollarSign,
    Home,
} from "lucide-react";

import {
    Card,
    CardContent,
} from "@/components/ui/card";

interface StatsCardProps {
    title: string;
    value: string;
    description: string;
    icon: React.ElementType;
    href: string;
    highlight?: boolean;
}

export default function LandlordStats() {
    return (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <StatsCard
                title="Total Properties"
                value="12"
                description="All your listings"
                icon={Building2}
                href="/landlord-dashboard/properties"
            />

            <StatsCard
                title="Active Listings"
                value="09"
                description="Currently available"
                icon={Home}
                href="/landlord-dashboard/properties"
            />

            <StatsCard
                title="Booking Requests"
                value="04"
                description="Need your attention"
                icon={CalendarDays}
                href="/landlord-dashboard/requests"
                highlight
            />

            <StatsCard
                title="Total Earnings"
                value="৳45,000"
                description="This month"
                icon={DollarSign}
                href="/landlord-dashboard/payments"
            />
        </div>
    );
}

function StatsCard({
    title,
    value,
    description,
    icon: Icon,
    href,
    highlight,
}: StatsCardProps) {
    return (
        <Link href={href} className="block">
            <Card className="h-full transition-shadow hover:shadow-md">
                <CardContent className="p-5">
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">
                                {title}
                            </p>

                            <p className="mt-2 text-2xl font-bold tracking-tight">
                                {value}
                            </p>

                            <p className="mt-1 text-xs text-muted-foreground">
                                {description}
                            </p>
                        </div>

                        <div
                            className={`flex size-10 items-center justify-center rounded-xl ${
                                highlight
                                    ? "bg-primary/10 text-primary"
                                    : "bg-muted text-muted-foreground"
                            }`}
                        >
                            <Icon className="size-5" />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}