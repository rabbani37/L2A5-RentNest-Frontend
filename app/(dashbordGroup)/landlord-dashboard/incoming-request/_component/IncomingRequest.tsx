import {
    CalendarDays,
    CheckCircle2,
    Clock3,
    Edit3Icon,
    MessageSquare,
    SquarePen,
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
import { IRequestOfLandlordProperty } from "@/lib/rentalsTypes";


interface IRBRProps {
    requests: IRequestOfLandlordProperty[];
}

export default function IncomingRequest({
    requests,
}: IRBRProps) {


    return (
        <Card >
    

            <CardContent >
                <div className="space-y-4">
                    {requests.map((request) => (
                        <BookingRequest
                            key={request.id}
                            tenant={request.tenant.name || "User Name"}
                            property={request.property.title || "Property Title"}
                            requestedDate={request.createdAt || "Created date"}
                            moveInDate={request.moveInDate || "Move In Date"}
                            comment={request.message || "Message..."}
                            status={request.status === "APPROVED" ? "Approved" : "Pending"}
                        />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

interface BookingRequestProps {
    tenant: string;
    property: string;
    requestedDate: string;
    moveInDate: string;
    comment: string;
    status: "Pending" | "Approved";
}

function BookingRequest({
    tenant,
    property,
    requestedDate,
    moveInDate,
    comment,
    status,
}: BookingRequestProps) {
    const isPending = status === "Pending";

    return (
        <div className="rounded-xl border p-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">

                {/* Tenant */}
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted">
                    <Users className="size-4 text-muted-foreground" />
                </div>

                {/* Main Content */}
                <div className="min-w-0 flex-1">

                    <p className="font-medium">
                        {tenant}
                    </p>

                    <p className="truncate text-sm text-muted-foreground">
                        {property}
                    </p>

                    {/* Dates */}
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">

                        <div className="flex items-center gap-1">
                            <Clock3 className="size-3" />
                            <span>
                                Requested: {requestedDate}
                            </span>
                        </div>

                        <div className="flex items-center gap-1">
                            <CalendarDays className="size-3" />
                            <span>
                                Move-in: {moveInDate}
                            </span>
                        </div>

                    </div>

                    {/* Comment */}
                    <div className="mt-3 rounded-lg bg-muted/50 p-3">
                        <div className="mb-1 flex items-center gap-1.5 text-xs font-medium">
                            <MessageSquare className="size-3.5" />
                            Comment
                        </div>

                        <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                            {comment}
                        </p>
                    </div>
                </div>

                {/* Status + Action */}
                <div className="flex items-center justify-between gap-3 ">

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




                    <Button variant="secondary" size="sm">
                        <span className="flex gap-2">Edit <SquarePen /></span>
                    </Button>

                </div>
            </div>
        </div>
    );


}