import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, BedDouble, Building2, Home } from 'lucide-react';
import React from 'react';

const CategoriesComponent = () => {


      const categories = [
        {
            title: "Apartments",
            description: "Find comfortable apartments in great locations.",
            icon: Building2,
        },
        {
            title: "Family Houses",
            description: "Spacious homes perfect for families.",
            icon: Home,
        },
        {
            title: "Studio",
            description: "Affordable Studio for students and professionals.",
            icon: BedDouble,
        },
        {
            title: "Dublex",
            description: "Affordable Dublex for students and professionals.",
            icon: BedDouble,
        },
    ];





    return (
         <section className="border-y bg-muted/30">
            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
                <div className="">
                    <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                        Browse by category
                    </p>

                    <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                        Find the right property for you
                    </h2>

                    <p className=" mt-2 text-muted-foreground">
                        Choose from different types of properties based on your needs
                        and lifestyle.
                    </p>
                </div>

                <div className="mt-10 grid gap-6 grid-cols-2 md:grid-cols-4">
                    {categories.map((category) => {
                        const Icon = category.icon;

                        return (
                            <Card
                                key={category.title}
                                className=" group cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg"
                            >
                                <CardContent className="p-7">
                                    <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                        <Icon className="size-7" />
                                    </div>

                                    <h3 className="mt-6 text-xl font-semibold">
                                        {category.title}
                                    </h3>

                                    <p className="mt-2 leading-6 text-muted-foreground">
                                        {category.description}
                                    </p>

                                    <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary">
                                        Explore
                                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CategoriesComponent;