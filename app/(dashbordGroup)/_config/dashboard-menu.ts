import {
    Bookmark,
    Building2,
    CalendarDays,
    CreditCard,
    LayoutDashboard,
    MessageSquare,
    Tags,
    User,
    Users,
} from "lucide-react";

export type DashboardRole = "TENANT" | "LANDLORD" | "ADMIN";

export const dashboardMenus = {
    // =========================
    // TENANT
    // =========================
    TENANT: [
        {
            title: "Overview",
            href: "/dashboard",
            icon: LayoutDashboard,
        },
        {
            title: "Rental Requests",
            href: "/dashboard/rental-requests",
            icon: CalendarDays,
        },
        {
            title: "Payments",
            href: "/dashboard/payments",
            icon: CreditCard,
        },
        {
            title: "Saved Properties",
            href: "/dashboard/saved-properties",
            icon: Bookmark,
        },
        {
            title: "Reviews",
            href: "/dashboard/reviews",
            icon: MessageSquare,
        },
        {
            title: "Profile",
            href: "/dashboard/profile",
            icon: User,
        },
    ],

    // =========================
    // LANDLORD
    // =========================
    LANDLORD: [
        {
            title: "Overview",
            href: "/landlord-dashboard",
            icon: LayoutDashboard,
        },
        {
            title: "My Properties",
            href: "/landlord-dashboard/properties",
            icon: Building2,
        },
        {
            title: "Rental Requests",
            href: "/landlord-dashboard/rental-requests",
            icon: CalendarDays,
        },
        {
            title: "Rental History",
            href: "/landlord-dashboard/rental-history",
            icon: CalendarDays,
        },
        {
            title: "Reviews",
            href: "/landlord-dashboard/reviews",
            icon: MessageSquare,
        },
        {
            title: "Profile",
            href: "/landlord-dashboard/profile",
            icon: User,
        },
    ],

    // =========================
    // ADMIN
    // =========================
    ADMIN: [
        {
            title: "Overview",
            href: "/admin-dashboard",
            icon: LayoutDashboard,
        },
        {
            title: "Users",
            href: "/admin-dashboard/users",
            icon: Users,
        },
        {
            title: "Properties",
            href: "/admin-dashboard/properties",
            icon: Building2,
        },
        {
            title: "Rental Requests",
            href: "/admin-dashboard/rental-requests",
            icon: CalendarDays,
        },
        {
            title: "Categories",
            href: "/admin-dashboard/categories",
            icon: Tags,
        },
        {
            title: "Profile",
            href: "/admin-dashboard/profile",
            icon: User,
        },
    ],
} satisfies Record<
    DashboardRole,
    {
        title: string;
        href: string;
        icon: React.ElementType;
    }[]
>;