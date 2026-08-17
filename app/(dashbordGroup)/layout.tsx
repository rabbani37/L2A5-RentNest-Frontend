import type { ReactNode } from "react";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import DashboardSidebar from "./_components/dashboard-sidebar";
import Footer from "@/components/shared/footer";
import { NavBar } from "@/components/shared/navbar";
import { getMe } from "@/service/getMe";

interface DashboardLayoutProps {
    children: ReactNode;
}

export default async function DashboardLayout({
    children,
}: DashboardLayoutProps) {
    const user = await getMe();

    return (
        <div className="min-h-screen bg-background">
            {/* Navbar */}
            <NavBar user={user} />

            {/* Dashboard Area */}
            <SidebarProvider
                defaultOpen={true}
                className="min-h-[calc(100svh-4rem)]"
            >
                <DashboardSidebar user={user} />

                <SidebarInset>
                    <main className="min-h-[calc(100svh-4rem)]">
                        <div className="mx-auto w-full max-w-[1600px] p-4 sm:p-6 lg:p-8">
                            {children}
                        </div>



                        {/* Footer */}
                        <Footer />
                    </main>
                </SidebarInset>
            </SidebarProvider>


        </div>
    );
}