"use server"

export const getAllProperties = async () => {

    const res = await fetch(`${process.env.BACKEND_API_URL}/api/properties?take=3`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
        },
        cache: "force-cache",
        next: {
            revalidate: 60 * 60 * 6,
            tags:['home-property']
        }
    });

    const result = await res.json()


    // console.log("From actions_ ", result.data);
    return result.data;
}