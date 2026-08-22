"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
  Building2,
  ImagePlus,
  MapPin,
  Plus,
} from "lucide-react";

import { useState } from "react";

export function PropertyManageDialog({ isAuthenticated }: { isAuthenticated: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog  open={open} onOpenChange={setOpen}>

      <Button render={<DialogTrigger />} className="w-full rounded-xl font-semibold shadow-2xl sm:w-auto">
        <Plus className="size-5" />
        Add Property
      </Button>



      <DialogContent className="max-h-[90vh] overflow-y-auto rounded-2xl sm:max-w-2xl">
        <form>
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              Add New Property
            </DialogTitle>

            <DialogDescription>
              Add the details of your rental property below.
            </DialogDescription>
          </DialogHeader>

          <FieldGroup className="gap-5 py-5">

            {/* Title */}
            <Field>
              <Label
                htmlFor="title"
                className="flex items-center gap-2"
              >
                <Building2 className="size-4 text-muted-foreground" />
                Property Title
              </Label>

              <Input
                id="title"
                name="title"
                placeholder="e.g. Big size duplex Home"
                className="h-11 rounded-xl"
              />
            </Field>

            {/* Description */}
            <Field>
              <Label htmlFor="description">
                Description
              </Label>

              <Textarea
                id="description"
                name="description"
                placeholder="Describe your property..."
                className="min-h-28 resize-none rounded-xl"
              />
            </Field>

            {/* Price + Size */}
            <div className="grid gap-4 sm:grid-cols-2">
              <Field>
                <Label htmlFor="price">
                  Monthly Rent
                </Label>

                <Input
                  id="price"
                  name="price"
                  type="number"
                  min="0"
                  placeholder="12000"
                  className="h-11 rounded-xl"
                />
              </Field>

              <Field>
                <Label htmlFor="size">
                  Property Size (sqft)
                </Label>

                <Input
                  id="size"
                  name="size"
                  type="number"
                  min="0"
                  placeholder="1350"
                  className="h-11 rounded-xl"
                />
              </Field>
            </div>

            {/* Location + City */}
            <div className="grid gap-4 sm:grid-cols-2">
              <Field>
                <Label
                  htmlFor="location"
                  className="flex items-center gap-2"
                >
                  <MapPin className="size-4 text-muted-foreground" />
                  Location
                </Label>

                <Input
                  id="location"
                  name="location"
                  placeholder="Road 15, Chittagong"
                  className="h-11 rounded-xl"
                />
              </Field>

              <Field>
                <Label htmlFor="city">
                  City
                </Label>

                <Input
                  id="city"
                  name="city"
                  placeholder="Chittagong"
                  className="h-11 rounded-xl"
                />
              </Field>
            </div>

            {/* Bedrooms + Bathrooms */}
            <div className="grid gap-4 sm:grid-cols-2">
              <Field>
                <Label htmlFor="bedrooms">
                  Bedrooms
                </Label>

                <Input
                  id="bedrooms"
                  name="bedrooms"
                  type="number"
                  min="0"
                  placeholder="2"
                  className="h-11 rounded-xl"
                />
              </Field>

              <Field>
                <Label htmlFor="bathrooms">
                  Bathrooms
                </Label>

                <Input
                  id="bathrooms"
                  name="bathrooms"
                  type="number"
                  min="0"
                  placeholder="2"
                  className="h-11 rounded-xl"
                />
              </Field>
            </div>

            {/* Amenities */}
            <Field>
              <Label htmlFor="amenities">
                Amenities
              </Label>

              <Input
                id="amenities"
                name="amenities"
                placeholder="Security, WiFi, Parking"
                className="h-11 rounded-xl"
              />

              <p className="text-xs text-muted-foreground">
                Separate multiple amenities with commas.
              </p>
            </Field>

            {/* Images */}
            <Field>
              <Label
                htmlFor="images"
                className="flex items-center gap-2"
              >
                <ImagePlus className="size-4 text-muted-foreground" />
                Image URL
              </Label>

              <Input
                id="images"
                name="images"
                type="url"
                placeholder="https://example.com/property.jpg"
                className="h-11 rounded-xl"
              />

              <p className="text-xs text-muted-foreground">
                Add an image URL for your property.
              </p>
            </Field>

            {/* Availability + Category */}
            <div className="grid gap-4 sm:grid-cols-2">
              <Field>
                <Label htmlFor="availability">
                  Availability
                </Label>

                <select
                  id="availability"
                  name="availability"
                  defaultValue="AVAILABLE"
                  className="h-11 w-full rounded-xl border bg-background px-3 text-sm"
                >
                  <option value="AVAILABLE">
                    Available
                  </option>

                  <option value="RENTED">
                    Rented
                  </option>

                  <option value="UNAVAILABLE">
                    Unavailable
                  </option>
                </select>
              </Field>

              <Field>
                <Label htmlFor="categoryId">
                  Category ID
                </Label>

                <Input
                  id="categoryId"
                  name="categoryId"
                  placeholder="Category ID"
                  className="h-11 rounded-xl"
                />
              </Field>
            </div>
          </FieldGroup>

          <DialogFooter className="gap-2 sm:gap-3">
            
              <Button render={<DialogClose />}
                type="button"
                variant="outline"
                className="h-11 flex-1 rounded-full"
              >
                Cancel
              </Button>
          

            <Button
              type="submit"
              className="h-11 flex-1 rounded-full font-semibold"
            >
              Create Property
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}