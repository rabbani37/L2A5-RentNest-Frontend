import { getMe } from "@/service/getMe";

import TenantWelcome from "./_components/tenant-welcome";
import TenantStats from "./_components/tenant-stats";
import RecentBookings from "./_components/recent-bookings";
import { getMyRentalRequests } from "@/service/request/getRequest";

export default async function TenantDashboardPage() {
  const user = await getMe();
  const userName = user.data?.name || "User Name";

  const rentals = await getMyRentalRequests()




  return (
    <div className="space-y-6">
      <TenantWelcome userName={userName} />

      <TenantStats rentals={rentals.data} />

      <section className="">
        <RecentBookings rentals={rentals.data} />

       
      </section>
    </div>
  );
}