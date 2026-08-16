

import PropertyCard from '@/components/shared/PropertyCard';
import { IAllPropertes } from '@/lib/type';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';









const FeaturedProperties = async ({ allPropertes }: IAllPropertes) => {


    // const properties = [
    //     {
    //         id: "1",
    //         title: "2 Bedroom Apartment in Gulshan",
    //         location: "Road 11, Gulshan 1",
    //         city: "Dhaka",
    //         price: "25,000",
    //         bedrooms: 2,
    //         bathrooms: 2,
    //         size: 1200,
    //         category: "Apartment",
    //         availability: "AVAILABLE",
    //         rating: "4.8",
    //         image:
    //             "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
    //         amenities: ["Parking", "WiFi", "AC", "Generator Backup"],
    //     },
    //     {
    //         id: "2",
    //         title: "Cozy Studio Apartment in Dhanmondi",
    //         location: "Road 8/A, Dhanmondi",
    //         city: "Dhaka",
    //         price: "15,000",
    //         bedrooms: 1,
    //         bathrooms: 1,
    //         size: 650,
    //         category: "Apartment",
    //         availability: "AVAILABLE",
    //         rating: "4.7",
    //         image:
    //             "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
    //         amenities: ["WiFi", "AC", "Lift", "CCTV"],
    //     },
    //     {
    //         id: "3",
    //         title: "Modern Family House",
    //         location: "Sector 7, Uttara",
    //         city: "Dhaka",
    //         price: "35,000",
    //         bedrooms: 3,
    //         bathrooms: 3,
    //         size: 1800,
    //         category: "House",
    //         availability: "AVAILABLE",
    //         rating: "4.9",
    //         image:
    //             "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    //         amenities: ["Parking", "Garden", "AC", "Security"],
    //     },
    // ];
    const properties = allPropertes

    return (
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                        Featured Properties
                    </p>

                    <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                        Explore popular properties
                    </h2>

                    <p className="mt-3 max-w-xl text-muted-foreground">
                        Discover comfortable apartments, houses, and rooms available for
                        rent in your favorite locations.
                    </p>
                </div>

                <Link
                    href="/properties"
                    className="inline-flex h-10 items-center justify-center gap-2 self-start rounded-md border bg-background px-4 text-sm font-medium transition-colors hover:border-primary hover:text-primary sm:self-auto"
                >
                    View all
                    <ArrowRight className="size-4" />
                </Link>
            </div>

            {/* Property Grid */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <PropertyCard properties={properties} />
            </div>
        </section>
    );
};

export default FeaturedProperties;