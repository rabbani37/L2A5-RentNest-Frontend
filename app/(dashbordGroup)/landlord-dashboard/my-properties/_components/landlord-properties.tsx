import Link from "next/link";
import {
    ArrowUpRight,
    Building2,
    Plus,
} from "lucide-react";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { PropertyManageDialog } from "./PropertyManageDialog";
import { getToken } from "@/utility/getToken";
import { IPropertiesCardProps } from "@/lib/type";
import FeaturedProperties from "@/app/(publicGroup)/_conponents/FeaturedProperties";
import PropertyCard from "@/components/shared/PropertyCard";
import LandlordPropertyCard from "./LandLordPropertyCard";
import MyPropertiesTable from "./LandLordPropertyCard";


export default async function LandlordProperties({ properties }: IPropertiesCardProps) {

    const { accessToken } = await getToken();
    const isAuthenticated = Boolean(accessToken);




    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle>
                        My Properties
                    </CardTitle>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Recently added and managed properties.
                    </p>
                </div>

                <Link href="/landlord-dashboard/my-properties">

                    <PropertyManageDialog isAuthenticated={isAuthenticated} />
                </Link>
            </CardHeader>

            <CardContent>
                <div className="">
                    {/* <PropertyCard properties ={properties}/> */}
                  <MyPropertiesTable properties={properties} />
                </div>
            </CardContent>
        </Card>
    );
}



