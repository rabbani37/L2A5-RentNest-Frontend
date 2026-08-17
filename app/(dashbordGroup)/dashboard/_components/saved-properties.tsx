import Link from "next/link";

import {
    ArrowUpRight,
    Bookmark,
    Home,
    MapPin,
} from "lucide-react";

const savedProperties = [
    {
        id: "1",
        title: "Modern Family Apartment",
        location: "Dhaka, Bangladesh",
        price: "৳25,000",
    },
    {
        id: "2",
        title: "Cozy Lake View House",
        location: "Jashore, Bangladesh",
        price: "৳18,000",
    },
    {
        id: "3",
        title: "Luxury City Apartment",
        location: "Dhaka, Bangladesh",
        price: "৳35,000",
    },
];

export default function SavedProperties() {
    return (
        <div className="rounded-2xl border bg-card shadow-sm">
            {/* Header */}
            <div className="flex items-center justify-between border-b px-5 py-5">
                <div>
                    <h2 className="font-semibold text-foreground">
                        Saved Properties
                    </h2>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Your favorite properties
                    </p>
                </div>

                <Bookmark className="size-5 text-primary" />
            </div>

            {/* Properties */}
            <div className="divide-y">
                {savedProperties.map((property) => (
                    <Link
                        href="#"
                        key={property.id}
                        className="block p-5 transition hover:bg-muted/30"
                    >
                        <div className="flex gap-3">
                            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground">
                                <Home className="size-5" />
                            </div>

                            <div className="min-w-0">
                                <h3 className="truncate text-sm font-semibold text-foreground">
                                    {property.title}
                                </h3>

                                <p className="mt-1 flex items-center gap-1 truncate text-xs text-muted-foreground">
                                    <MapPin className="size-3.5" />
                                    {property.location}
                                </p>

                                <p className="mt-2 text-sm font-semibold text-primary">
                                    {property.price}

                                    <span className="font-normal text-muted-foreground">
                                        {" "}
                                        / month
                                    </span>
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Footer */}
            <div className="border-t p-4">
                <Link
                    href="/dashboard/saved-properties"
                    className="
                        flex items-center justify-center gap-2
                        rounded-xl bg-muted
                        px-4 py-2.5
                        text-sm font-medium
                        text-foreground
                        transition hover:bg-muted/70
                    "
                >
                    View all saved properties
                    <ArrowUpRight className="size-4" />
                </Link>
            </div>
        </div>
    );
}