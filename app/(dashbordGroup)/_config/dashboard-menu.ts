import {
    Bookmark,
    Building2,
    CalendarDays,
    CreditCard,
    FileText,
    Home,
    LayoutDashboard,
    Settings,
    User,
    Users,
} from "lucide-react";

export type DashboardRole = "TENANT" | "LANDLORD" | "ADMIN";

export const dashboardMenus = {
    TENANT: [
        {
            title: "Overview",
            href: "/dashboard",
            icon: LayoutDashboard,
        },
        {
            title: "My Bookings",
            href: "/dashboard/bookings",
            icon: CalendarDays,
        },
        {
            title: "Saved Properties",
            href: "/dashboard/saved-properties",
            icon: Bookmark,
        },
        {
            title: "Payments",
            href: "/dashboard/payments",
            icon: CreditCard,
        },
        {
            title: "Profile",
            href: "/dashboard/profile",
            icon: User,
        },
        {
            title: "Settings",
            href: "/dashboard/settings",
            icon: Settings,
        },
    ],

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
            title: "Add Property",
            href: "/landlord-dashboard/properties/new",
            icon: Home,
        },
        {
            title: "Booking Requests",
            href: "/landlord-dashboard/requests",
            icon: CalendarDays,
        },
        {
            title: "Payments",
            href: "/landlord-dashboard/payments",
            icon: CreditCard,
        },
        {
            title: "Profile",
            href: "/landlord-dashboard/profile",
            icon: User,
        },
        {
            title: "Settings",
            href: "/landlord-dashboard/settings",
            icon: Settings,
        },
    ],

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
            title: "Bookings",
            href: "/admin-dashboard/bookings",
            icon: CalendarDays,
        },
        {
            title: "Payments",
            href: "/admin-dashboard/payments",
            icon: CreditCard,
        },
        {
            title: "Reports",
            href: "/admin-dashboard/reports",
            icon: FileText,
        },
        {
            title: "Profile",
            href: "/admin-dashboard/profile",
            icon: User,
        },
        {
            title: "Settings",
            href: "/admin-dashboard/settings",
            icon: Settings,
        },
    ],
};