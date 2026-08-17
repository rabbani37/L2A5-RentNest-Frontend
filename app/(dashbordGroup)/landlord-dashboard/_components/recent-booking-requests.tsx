import {
    CalendarDays,
    CheckCircle2,
    Clock3,
    MoreHorizontal,
    Users,
} from "lucide-react";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function RecentBookingRequests() {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle>
                        Recent Booking Requests
                    </CardTitle>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Recent requests from tenants.
                    </p>
                </div>

                <Button
                    variant="outline"
                    size="sm"
                    
                >
                    <a href="/landlord-dashboard/requests">
                        View all
                    </a>
                </Button>
            </CardHeader>

            <CardContent>
                <div className="space-y-4">
                    <BookingRequest
                        tenant="Rahim Ahmed"
                        property="Modern Family Apartment"
                        date="Aug 17, 2026"
                        status="Pending"
                    />

                    <BookingRequest
                        tenant="Sadia Islam"
                        property="Cozy City Apartment"
                        date="Aug 16, 2026"
                        status="Approved"
                    />

                    <BookingRequest
                        tenant="Hasan Mahmud"
                        property="Green View Residence"
                        date="Aug 15, 2026"
                        status="Pending"
                    />

                    <BookingRequest
                        tenant="Nusrat Jahan"
                        property="Lake View Apartment"
                        date="Aug 14, 2026"
                        status="Approved"
                    />
                </div>
            </CardContent>
        </Card>
    );
}

interface BookingRequestProps {
    tenant: string;
    property: string;
    date: string;
    status: "Pending" | "Approved";
}

function BookingRequest({
    tenant,
    property,
    date,
    status,
}: BookingRequestProps) {
    const isPending = status === "Pending";

    return (
        <div className="flex flex-col gap-4 rounded-xl border p-4 sm:flex-row sm:items-center">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted">
                <Users className="size-4 text-muted-foreground" />
            </div>

            <div className="min-w-0 flex-1">
                <p className="font-medium">
                    {tenant}
                </p>

                <p className="truncate text-sm text-muted-foreground">
                    {property}
                </p>

                <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock3 className="size-3" />
                    {date}
                </div>
            </div>

            <div className="flex items-center justify-between gap-3 sm:justify-end">
                <Badge
                    variant={
                        isPending
                            ? "secondary"
                            : "default"
                    }
                >
                    {isPending ? (
                        <Clock3 className="mr-1 size-3" />
                    ) : (
                        <CheckCircle2 className="mr-1 size-3" />
                    )}

                    {status}
                </Badge>

                <Button
                    variant="ghost"
                    size="icon"
                    className="size-8"
                >
                    <MoreHorizontal className="size-4" />
                </Button>
            </div>
        </div>
    );
}