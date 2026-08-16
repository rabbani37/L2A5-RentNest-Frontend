export type IProperty = {
    id: string;
    title: string;
    description: string;
    price: string;
    location: string;
    city: string;
    bedrooms: number;
    bathrooms: number;
    size: number;
    amenities: string[];
    images: string[];
    rating: number;
    availability: string;
    categoryId: string;
    landlordId: string;
    createdAt: string;
    updatedAt: string;

    category: {
        id: string;
        name: string;
        createdAt: string;
    };

    landlord: {
        id: string;
        name: string;
        email: string;
        phone: string | null;
    };
};







export type IPropertiesCardProps = {
    properties: IProperty[];
};



