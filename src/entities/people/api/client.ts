import { GRAPHQL_FULL_URL } from "@/shared/config/api";

export const graphqlFetcher = async <
    TData,
    TVars extends Record<string, unknown> | undefined = undefined
>(
    query: string,
    variables?: TVars
): Promise<TData> => {
    const response = await fetch(GRAPHQL_FULL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, variables }),
    });

    const json: { data: TData; errors?: { message: string }[] } =
        await response.json();

    const firstError = json.errors?.[0];
    if (firstError) {
        throw new Error(firstError.message);
    }

    return json.data;
};
