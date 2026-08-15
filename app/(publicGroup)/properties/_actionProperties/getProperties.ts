"use server"




export const getProperties = async ({ searchQuery }: {
    searchQuery?: { [key: string]: string | string[] | undefined }
}) => {

    // const searchTerm = `${searchQuery?.title ? `?title=${searchQuery.title}` : ""}`

    const params = new URLSearchParams();
    if (searchQuery && searchQuery.title) {
        params.set("title", searchQuery.title as string)
    }


    const res = await fetch(`${process.env.BACKEND_API_URL}/api/properties?${params.toString()}`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
        },
        cache: "force-cache",
        next: {
            revalidate: 60 * 60 * 6,
            tags: ['main-property']
        }
    });

    const result = await res.json()

    return result.data;
}