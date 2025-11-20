import { AllPeopleSchema, type Person } from "../model/types";
import { graphqlFetcher } from "@/entities/people/api/client";
import { ALL_PEOPLE_QUERY } from "./queries";
import { useSuspenseQuery } from "@tanstack/react-query";

export type UsePeopleParams = {
    first?: number;
}

const fetchPeople = async ({ first = 30 }: UsePeopleParams): Promise<Person[]> => {
    const data = await graphqlFetcher(ALL_PEOPLE_QUERY, { first });
    const parsed = AllPeopleSchema.parse(data);
    return parsed.allPeople.people;
};

export const usePeople = (params?: UsePeopleParams) => {
    return useSuspenseQuery<Person[]>({
        queryKey: ["people", params],
        queryFn: () => fetchPeople(params ?? {}),
        staleTime: 1000 * 60 * 5,
    });
};