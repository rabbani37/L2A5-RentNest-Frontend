import Link from "next/link";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PropertyManageDialog } from "../my-properties/_components/PropertyManageDialog";
import { getToken } from "@/utility/getToken";

interface LandlordWelcomeProps {
    userName: string;
}

export default async function LandlordWelcome({
    userName,
}: LandlordWelcomeProps) {



    const { accessToken } = await getToken();
    const isAuthenticated = Boolean(accessToken);
    return (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <p className="text-sm text-muted-foreground">
                    Landlord Dashboard
                </p>

                <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
                    Welcome back, {userName} 👋
                </h1>

                <p className="mt-1 text-sm text-muted-foreground">
                    Manage your properties and keep track of your
                    rental activity.
                </p>
            </div>

            <Link href="/landlord-dashboard">
                <PropertyManageDialog isAuthenticated={isAuthenticated} />
            </Link>
        </div>
    );
}