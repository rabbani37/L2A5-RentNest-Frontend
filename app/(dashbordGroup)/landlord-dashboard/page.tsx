import LandlordWelcome from "./_components/landlord-welcome";
import LandlordStats from "./_components/landlord-stats";
import PropertyPerformance from "./_components/property-performance";
import QuickActions from "./_components/quick-actions";
import RecentBookingRequests from "./_components/recent-booking-requests";
import LandlordProperties from "./_components/landlord-properties";

import { getMe } from "@/service/getMe";

export default async function LandlordDashboardPage() {
    const user = await getMe();

    const userName = user.data?.name || "Landlord";

    return (
        <div className="space-y-6">
            <LandlordWelcome userName={userName} />

            <LandlordStats />

            <div className="grid gap-6 lg:grid-cols-3">
                <PropertyPerformance />
                <QuickActions />
            </div>

            <RecentBookingRequests />

            <LandlordProperties />
        </div>
    );
}