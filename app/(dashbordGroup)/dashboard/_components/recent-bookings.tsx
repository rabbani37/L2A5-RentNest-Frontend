import Link from "next/link";

import {
    ArrowUpRight,
    CalendarDays,
    MapPin,
} from "lucide-react";

import BookingStatus from "./booking-status";

const bookings = [
    {
        id: "1",
        property: "Modern Family Apartment",
        location: "Dhaka, Bangladesh",
        date: "Aug 20, 2026",
        amount: "৳25,000",
        status: "Confirmed",
    },
    {
        id: "2",
        property: "Cozy Lake View House",
        location: "Jashore, Bangladesh",
        date: "Aug 24, 2026",
        amount: "৳18,000",
        status: "Pending",
    },
    {
        id: "3",
        property: "Luxury City Apartment",
        location: "Dhaka, Bangladesh",
        date: "Sep 02, 2026",
        amount: "৳35,000",
        status: "Confirmed",
    },
];

export default function RecentBookings() {
    return (
        <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
            {/* Header */}
            <div className="flex items-center justify-between border-b px-5 py-5 sm:px-6">
                <div>
                    <h2 className="font-semibold text-foreground">
                        Recent Bookings
                    </h2>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Your latest rental activities
                    </p>
                </div>

                <Link
                    href="/dashboard/bookings"
                    className="
                        flex items-center gap-1
                        text-sm font-medium
                        text-primary
                        hover:underline
                    "
                >
                    View all
                    <ArrowUpRight className="size-4" />
                </Link>
            </div>

            {/* Desktop / Tablet */}
            <div className="hidden overflow-x-auto md:block">
                <table className="w-full text-left">
                    <thead className="bg-muted/50">
                        <tr className="text-xs uppercase tracking-wide text-muted-foreground">
                            <th className="px-6 py-4 font-medium">
                                Property
                            </th>

                            <th className="px-6 py-4 font-medium">
                                Date
                            </th>

                            <th className="px-6 py-4 font-medium">
                                Amount
                            </th>

                            <th className="px-6 py-4 font-medium">
                                Status
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y">
                        {bookings.map((booking) => (
                            <tr
                                key={booking.id}
                                className="transition hover:bg-muted/30"
                            >
                                <td className="px-6 py-4">
                                    <p className="font-medium text-foreground">
                                        {booking.property}
                                    </p>

                                    <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                                        <MapPin className="size-3.5" />
                                        {booking.location}
                                    </p>
                                </td>

                                <td className="whitespace-nowrap px-6 py-4 text-sm text-muted-foreground">
                                    {booking.date}
                                </td>

                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-foreground">
                                    {booking.amount}
                                </td>

                                <td className="px-6 py-4">
                                    <BookingStatus
                                        status={booking.status}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile */}
            <div className="divide-y md:hidden">
                {bookings.map((booking) => (
                    <div
                        key={booking.id}
                        className="p-5"
                    >
                        <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                                <h3 className="truncate font-medium text-foreground">
                                    {booking.property}
                                </h3>

                                <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                                    <MapPin className="size-3.5" />
                                    {booking.location}
                                </p>
                            </div>

                            <BookingStatus
                                status={booking.status}
                            />
                        </div>

                        <div className="mt-4 flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">
                                {booking.date}
                            </span>

                            <span className="font-semibold text-foreground">
                                {booking.amount}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}