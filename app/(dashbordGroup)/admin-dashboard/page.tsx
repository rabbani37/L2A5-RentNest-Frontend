import { getMe } from "@/service/getMe";
import AdminWelcome from "./_components/admin-welcome";
import RecentProperties from "./_components/recent-properties";
import RecentUsers from "./_components/recent-users";
import AdminStats from "./_components/admin-stats";
import RentalOverview from "./_components/rental-overview";
import QuickActions from "./_components/quick-actions";


export default async function AdminDashboardPage() {
    const user = await getMe();

    const userName = user.data?.name || "Admin";

    return (
        <div className="space-y-6">
            <AdminWelcome userName={userName} />

            <AdminStats />

            <RentalOverview />

            <section className="grid gap-6 xl:grid-cols-2">
                <RecentProperties />
                <RecentUsers />
            </section>

            <QuickActions />
        </div>
    );
}