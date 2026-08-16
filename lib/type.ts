export type IAllProperty = {
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

}
export type IAllPropertes = {
    allPropertes: IAllProperty[];
};

export interface IPropertiesCardProps {
    properties: IAllProperty[];
}



export type IPropertyResponse = {
    properties: IAllProperty[];
    meta: {
        page: number;
        take: number;
        total: number;
        totalPages: number;
    };
};
