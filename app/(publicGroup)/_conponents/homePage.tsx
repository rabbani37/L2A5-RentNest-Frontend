"use client";

import {
  Search,
  MapPin,
  Home,
  Building2,
  BedDouble,
  ArrowRight,
  Star,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const properties = [
  {
    id: 1,
    title: "Modern Family Apartment",
    location: "Dhanmondi, Dhaka",
    category: "Apartment",
    price: "৳25,000",
    beds: 3,
    baths: 2,
    area: "1,200 sqft",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Cozy Apartment",
    location: "Uttara, Dhaka",
    category: "Apartment",
    price: "৳20,000",
    beds: 2,
    baths: 2,
    area: "950 sqft",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Beautiful Family House",
    location: "Chattogram",
    category: "House",
    price: "৳35,000",
    beds: 4,
    baths: 3,
    area: "1,800 sqft",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "Private Single Room",
    location: "Mirpur, Dhaka",
    category: "Room",
    price: "৳8,000",
    beds: 1,
    baths: 1,
    area: "350 sqft",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    title: "Luxury City Apartment",
    location: "Gulshan, Dhaka",
    category: "Apartment",
    price: "৳45,000",
    beds: 3,
    baths: 3,
    area: "1,600 sqft",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    title: "Affordable Family Home",
    location: "Khulna",
    category: "House",
    price: "৳18,000",
    beds: 3,
    baths: 2,
    area: "1,100 sqft",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80",
  },
];

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
    title: "Rooms",
    description: "Affordable rooms for students and professionals.",
    icon: BedDouble,
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 -z-10 bg-linear-to-br from-primary/10 via-background to-background" />

        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Hero Content */}
            <div>


              <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Find a place you&apos;ll{" "}
                <span className="text-primary">love to call home.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                Discover apartments, houses, and rooms for rent in your
                favorite locations. RentNest makes finding your next home
                simple and stress-free.
              </p>

              {/* Search Box */}
              <div className="mt-8 rounded-2xl border bg-background p-3 shadow-xl">
                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                  {/* Location */}
                  <div className="relative lg:col-span-1">
                    <MapPin className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                    <Input
                      placeholder="Location"
                      className="h-12 pl-9"
                    />
                  </div>

                  {/* City */}
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="City" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="dhaka">Dhaka</SelectItem>
                      <SelectItem value="chattogram">Chattogram</SelectItem>
                      <SelectItem value="khulna">Khulna</SelectItem>
                      <SelectItem value="jashore">Jashore</SelectItem>
                      <SelectItem value="rajshahi">Rajshahi</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* Category */}
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Property Type" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="apartment">
                        Apartment
                      </SelectItem>

                      <SelectItem value="house">House</SelectItem>

                      <SelectItem value="room">Room</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button className="h-12 gap-2">
                    <Search className="size-4" />
                    Search
                  </Button>
                </div>

                {/* Advanced Filter */}
                <div className="mt-3 flex justify-end">
                  <Button variant="ghost" size="sm" className="gap-2">
                    <SlidersHorizontal className="size-4" />
                    More filters
                  </Button>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-8 flex flex-wrap gap-8">
                <div>
                  <p className="text-2xl font-bold">1,000+</p>
                  <p className="text-sm text-muted-foreground">
                    Properties
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold">500+</p>
                  <p className="text-sm text-muted-foreground">
                    Happy Tenants
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold">50+</p>
                  <p className="text-sm text-muted-foreground">
                    Locations
                  </p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border shadow-2xl">
                <Image
                  loading="eager"
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern house"
                  width={1200}
                  height={420}
                  className="h-105 w-full object-cover sm:h-130"
                />
              </div>

              {/* Floating Card */}
              <Card className="absolute -bottom-6 left-4 right-4 shadow-xl sm:left-8 sm:right-auto sm:w-80">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold">
                        Modern Family Apartment
                      </p>

                      <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="size-3.5" />
                        Dhanmondi, Dhaka
                      </div>
                    </div>

                    <Badge>৳25K</Badge>
                  </div>

                  <div className="mt-4 flex gap-4 text-xs text-muted-foreground">
                    <span>3 Beds</span>
                    <span>2 Baths</span>
                    <span>1,200 sqft</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED PROPERTIES
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Featured Properties
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Explore popular properties
            </h2>

            <p className="mt-3 max-w-xl text-muted-foreground">
              Take a look at some of the best properties available on
              RentNest.
            </p>
          </div>

          <Button variant="outline" className="gap-2 self-start sm:self-auto">
            View all
            <ArrowRight className="size-4" />
          </Button>
        </div>

        {/* Property Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <Card
              key={property.id}
              className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <Image
                loading="eager"
                  width={400}
                  height={300}
                  src={property.image}
                  alt={property.title}
                  className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <Badge className="absolute left-3 top-3">
                  {property.category}
                </Badge>

                <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1 text-xs font-medium backdrop-blur">
                  <Star className="size-3 fill-current" />
                  4.8
                </div>
              </div>

              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold leading-6">
                      {property.title}
                    </h3>

                    <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="size-3.5" />
                      {property.location}
                    </div>
                  </div>

                  <p className="whitespace-nowrap font-bold text-primary">
                    {property.price}
                  </p>
                </div>

                <div className="mt-5 flex items-center gap-4 border-t pt-4 text-sm text-muted-foreground">
                  <span>{property.beds} Beds</span>
                  <span>{property.baths} Baths</span>
                  <span>{property.area}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* =====================================================
          CATEGORIES
      ====================================================== */}
      <section className="border-y bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Browse by category
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Find the right property for you
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Choose from different types of properties based on your needs
              and lifestyle.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <Card
                  key={category.title}
                  className="group cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg"
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

      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Simple process
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Find your home in three simple steps
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Search",
              description:
                "Search properties using location, city, and property category.",
              icon: Search,
            },
            {
              number: "02",
              title: "Choose",
              description:
                "Explore property details and choose the home that fits you.",
              icon: Home,
            },
            {
              number: "03",
              title: "Rent",
              description:
                "Connect with the landlord and move into your new home.",
              icon: ShieldCheck,
            },
          ].map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative text-center">
                <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="size-7" />
                </div>

                <p className="mt-5 text-xs font-bold tracking-widest text-primary">
                  STEP {step.number}
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mx-auto mt-3 max-w-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-primary px-6 py-16 text-primary-foreground sm:px-12 lg:px-16">
          <div className="flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to find your new home?
              </h2>

              <p className="mt-3 max-w-xl text-primary-foreground/80">
                Start exploring thousands of rental properties and find a
                place that feels right for you.
              </p>
            </div>

            <Button
              size="lg"
              variant="secondary"
              className="gap-2 px-7"
            >
              Explore Properties
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}