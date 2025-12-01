import { GRAPHQL_FULL_URL } from "@/shared/config/api";
import axios from "axios";

export const graphqlFetcher = async <
    TData,
    TVars extends Record<string, unknown> | undefined = undefined
>(
    query: string,
    variables?: TVars
): Promise<TData> => {
    const response = await axios.post<{ data: TData; errors?: { message: string }[] }>(
        GRAPHQL_FULL_URL, { query, variables },
        {
            headers: { "Content-Type": "application/json" },
        }
    );

    const json = response.data;

    const firstError = json.errors?.[0];
    if (firstError) {
        throw new Error(firstError.message);
    }

    return json.data;
};
