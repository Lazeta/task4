import { AllPeopleSchema, type Person } from "../model/types";
import { graphqlFetcher } from "@/entities/people/api/client";
import { ALL_PEOPLE_QUERY } from "./queries";
import { useSuspenseQuery } from "@tanstack/react-query";
import { DEFAULT_FIRST_PEOPLE, DEFAULT_STALE_TIME_MS } from "@/shared/config/constants";

export type UsePeopleParams = {
    first?: number;
}

const fetchPeople = async ({ first = DEFAULT_FIRST_PEOPLE }: UsePeopleParams): Promise<Person[]> => {
    const data = await graphqlFetcher(ALL_PEOPLE_QUERY, { first });
    const parsed = AllPeopleSchema.parse(data);
    return parsed.allPeople.people;
};

export const usePeople = (params?: UsePeopleParams) => {
    return useSuspenseQuery<Person[]>({
        queryKey: ["people", params],
        queryFn: () => fetchPeople(params ?? {}),
        staleTime: DEFAULT_STALE_TIME_MS,
    });
};