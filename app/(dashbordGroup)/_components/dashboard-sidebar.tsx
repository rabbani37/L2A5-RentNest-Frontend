"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    Building2,
    ArrowRight,
    LogOut,
    User,
    ArrowLeft,
} from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { NavbarProps } from "@/lib/type";
import { dashboardMenus, DashboardRole } from "../_config/dashboard-menu";
import { LoggOut } from "@/service/logOut";
import { toast } from "sonner";



export default function DashboardSidebar({ user }: NavbarProps) {




    const pathname = usePathname();
    const { state, toggleSidebar, isMobile } = useSidebar();
    const isCollapsed = state === "collapsed";


    const role = user.data.role.toUpperCase();

    const menuItems = dashboardMenus[role as DashboardRole] ?? dashboardMenus.TENANT

    const dashboardTitle = role === "LANDLORD" ? "Landlord Dashboard" : role === "ADMIN" ? "Admin Dashboard" : "Tenant Dashboard";

    const roleBaseUrl = role === "LANDLORD" ? "/landlord-dashboard" : role === "ADMIN" ? "/admin-dashboard" : "/dashboard"




    const handleLogout = async () => {
        toast.success("User Logged Out Successfully");
        await LoggOut();
    }

    return (
        <Sidebar
            collapsible="icon"
            variant="sidebar"
            side="left"
            className="top-16 h-[calc(100svh-4rem)]"
        >
            {/* Header */}
            <SidebarHeader className="border-b">
                <div className="relative flex h-16 items-center px-2">
                    <Link
                        href={roleBaseUrl}
                        className="flex min-w-0 items-center gap-3"
                    >
                        {/* Logo */}
                        <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                            <Building2 className="size-5" />
                        </div>

                        {/* Logo Text */}
                        {!isCollapsed && (
                            <div className="min-w-0">
                                <h1 className="truncate text-lg font-bold tracking-tight text-foreground">
                                    RentNest
                                </h1>

                                <p className="truncate text-xs text-muted-foreground">
                                    {dashboardTitle}
                                </p>
                            </div>
                        )}
                    </Link>

                    {/* Desktop Collapse Button */}
                    {!isMobile && (
                        <Button

                            type="button"
                            onClick={toggleSidebar}
                            aria-label={
                                isCollapsed
                                    ? "Expand sidebar"
                                    : "Collapse sidebar"
                            }
                            className="absolute -right-10 top-2/6 z-50
                                        flex size-8 -translate-y-1/2
                                        items-center justify-center
                                        border"
                        >
                            {isCollapsed ? (
                                <    ArrowRight
                                    className="size-5" />
                            ) : (
                                <ArrowLeft className="size-5" />
                            )}
                        </Button>
                    )}
                </div>
            </SidebarHeader>

            {/* User */}
            <SidebarContent>
                <SidebarGroup className="pt-5">
                    <SidebarGroupLabel>
                        Account
                    </SidebarGroupLabel>

                    <SidebarGroupContent>
                        <div className="mb-4 px-2">
                            <div className="flex items-center gap-3 rounded-xl bg-muted p-2.5">
                                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <User className="size-4" />
                                </div>

                                {!isCollapsed && (
                                    <div className="min-w-0">
                                        <p className="truncate text-sm font-semibold text-foreground">
                                            {user.data.name}
                                        </p>

                                        <p className="truncate text-xs text-muted-foreground">
                                            {user.data.role.toLowerCase()}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Navigation */}
                <SidebarGroup>
                    <SidebarGroupLabel>
                        {role === "ADMIN" ? "Administration" : role === "LANDLORD" ? "Properies Landlord" : "Tanent user"}

                    </SidebarGroupLabel>

                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map((item) => {
                                const Icon = item.icon;

                                const isActive =
                                    item.href === "/dashboard" ||
                                        item.href === "/landlord-dashboard" ||
                                        item.href === "/admin-dashboard"
                                        ? pathname === item.href
                                        : pathname.startsWith(item.href);

                                return (
                                    <SidebarMenuItem key={item.href}>
                                        <SidebarMenuButton
                                            tooltip={item.title}
                                            isActive={isActive}
                                            className="my-1"
                                        >
                                            <Link className="flex  gap-2 font-semibold" href={item.href}>
                                                <Icon />

                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            {/* Footer */}
            <SidebarFooter className="border-t">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            variant={"default"}
                            onClick={handleLogout}
                            tooltip="Logout"
                            className="text-destructive hover:text-destructive font-semibold"
                        >
                            <LogOut />

                            <span>Logout</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}