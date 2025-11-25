import { z } from "zod";

export const PersonSchema = z.object({
    id: z.string(),
    name: z.string(),
});

export type Person = z.infer<typeof PersonSchema>;

export const AllPeopleSchema = z.object({
    allPeople: z.object({
        people: z.array(PersonSchema),
    }),
});

export type AllPeopleResponse = z.infer<typeof AllPeopleSchema>;
