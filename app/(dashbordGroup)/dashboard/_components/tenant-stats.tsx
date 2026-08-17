import {
    Bookmark,
    CalendarDays,
    Clock3,
    Home,
} from "lucide-react";

const stats = [
    {
        title: "Total Bookings",
        value: "12",
        description: "All time bookings",
        icon: CalendarDays,
    },
    {
        title: "Pending Requests",
        value: "03",
        description: "Waiting for approval",
        icon: Clock3,
    },
    {
        title: "Saved Properties",
        value: "08",
        description: "Properties you liked",
        icon: Bookmark,
    },
    {
        title: "Active Rentals",
        value: "02",
        description: "Currently rented",
        icon: Home,
    },
];

export default function TenantStats() {
    return (
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                    <div
                        key={stat.title}
                        className="
                            rounded-2xl border bg-card p-5
                            shadow-sm transition
                            hover:-translate-y-0.5
                            hover:shadow-md
                        "
                    >
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">
                                    {stat.title}
                                </p>

                                <p className="mt-2 text-2xl font-bold text-foreground">
                                    {stat.value}
                                </p>
                            </div>

                            <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <Icon className="size-5" />
                            </div>
                        </div>

                        <p className="mt-3 text-xs text-muted-foreground">
                            {stat.description}
                        </p>
                    </div>
                );
            })}
        </section>
    );
}