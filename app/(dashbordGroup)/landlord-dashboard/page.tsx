import LandlordWelcome from "./_components/landlord-welcome";
import LandlordStats from "./_components/landlord-stats";

import { getMe } from "@/service/getMe";
import { getLandlordProperties } from "@/service/properties/getLandlordProperties";
import { getAllRequestOfLandlordProperty } from "@/service/properties/getAllRequestOfLandlordProperty";
import RecentBookingRequests from "./_components/recent-booking-requests";

export default async function LandlordDashboardPage() {
    const user = await getMe();
    const userName = user.data?.name || "Landlord";


    const properties = await getLandlordProperties()
    const request = await getAllRequestOfLandlordProperty()





    return (
        <div className="space-y-6">
            <LandlordWelcome userName={userName} />

            <LandlordStats properties={properties.data} rentals={request.data} />

            <div className="grid gap-6 ">
                <RecentBookingRequests requests ={request.data} />
                
            </div>


        </div>
    );
}