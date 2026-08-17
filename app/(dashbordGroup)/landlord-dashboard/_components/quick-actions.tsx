import Link from "next/link";
import {
    ArrowUpRight,
    Building2,
    CalendarDays,
    DollarSign,
    Plus,
} from "lucide-react";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function QuickActions() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Quick Actions
                </CardTitle>

                <p className="text-sm text-muted-foreground">
                    Manage your rental business quickly.
                </p>
            </CardHeader>

            <CardContent className="space-y-3">
                <QuickAction
                    href="/landlord-dashboard/properties/new"
                    icon={Plus}
                    title="Add New Property"
                    description="Create a new listing"
                />

                <QuickAction
                    href="/landlord-dashboard/properties"
                    icon={Building2}
                    title="Manage Properties"
                    description="View and edit listings"
                />

                <QuickAction
                    href="/landlord-dashboard/requests"
                    icon={CalendarDays}
                    title="Booking Requests"
                    description="Review tenant requests"
                />

                <QuickAction
                    href="/landlord-dashboard/payments"
                    icon={DollarSign}
                    title="View Payments"
                    description="Check your earnings"
                />
            </CardContent>
        </Card>
    );
}

interface QuickActionProps {
    href: string;
    icon: React.ElementType;
    title: string;
    description: string;
}

function QuickAction({
    href,
    icon: Icon,
    title,
    description,
}: QuickActionProps) {
    return (
        <Link
            href={href}
            className="group flex items-center gap-3 rounded-xl border p-3 transition-colors hover:bg-muted/50"
        >
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                <Icon className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>

            <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">
                    {title}
                </p>

                <p className="truncate text-xs text-muted-foreground">
                    {description}
                </p>
            </div>

            <ArrowUpRight className="size-4 shrink-0 text-muted-foreground" />
        </Link>
    );
}