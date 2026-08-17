import { getMe } from "@/service/getMe";

import TenantWelcome from "./_components/tenant-welcome";
import TenantStats from "./_components/tenant-stats";
import RecentBookings from "./_components/recent-bookings";
import SavedProperties from "./_components/saved-properties";

export default async function TenantDashboardPage() {
    const user = await getMe();

    const userName = user.data?.name || "User Name";

    return (
        <div className="space-y-6">
            <TenantWelcome userName={userName} />

            <TenantStats />

            <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
                <RecentBookings />

                <SavedProperties />
            </section>
        </div>
    );
}