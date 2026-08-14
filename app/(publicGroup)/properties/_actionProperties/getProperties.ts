



export const getProperties = async () => {

    const res = await fetch(`${process.env.BACKEND_API_URL}/api/properties`, {
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