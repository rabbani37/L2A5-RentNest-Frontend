import Link from "next/link";

import {
  ArrowUpRight,
  Bookmark,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Home,
  MapPin,
  Search,
} from "lucide-react";
import { getMe } from "@/service/getMe";

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

export default async function TenantDashboardPage() {

  const user = await getMe()
  return (
    <div className="space-y-6">
      {/* Welcome */}
      <section className="relative overflow-hidden rounded-2xl border bg-primary p-6 text-primary-foreground shadow-sm sm:p-8">
        <div className="relative z-10 max-w-2xl">
          <p className="mb-2 text-sm font-medium opacity-80">
            Tenant Dashboard
          </p>

          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Good morning, {user.data?.name||"User Name"} 👋
          </h1>

          <p className="mt-2 max-w-xl text-sm leading-6 opacity-80 sm:text-base">
            Welcome back! Find your next perfect home, manage
            your bookings, and keep track of your rental activities.
          </p>

          <Link
            href="/properties"
            className="
              mt-6 inline-flex items-center gap-2
              rounded-xl bg-background
              px-4 py-2.5
              text-sm font-semibold
              text-foreground
              transition hover:bg-background/90
            "
          >
            <Search className="size-4" />
            Explore Properties
          </Link>
        </div>

        {/* Decorative shapes */}
        <div className="absolute -right-16 -top-20 size-64 rounded-full bg-background/10" />
        <div className="absolute -bottom-24 right-20 size-52 rounded-full bg-background/10" />
      </section>

      {/* Statistics */}
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

      {/* Content */}
      <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
        {/* Recent Bookings */}
        <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
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
                      <BookingStatus status={booking.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile */}
          <div className="divide-y md:hidden">
            {bookings.map((booking) => (
              <div key={booking.id} className="p-5">
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

                  <BookingStatus status={booking.status} />
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

        {/* Saved Properties */}
        <div className="rounded-2xl border bg-card shadow-sm">
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
      </section>
    </div>
  );
}

function BookingStatus({
  status,
}: {
  status: string;
}) {
  if (status === "Confirmed") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
        <CheckCircle2 className="size-3.5" />
        Confirmed
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
      <Clock3 className="size-3.5" />
      Pending
    </span>
  );
}