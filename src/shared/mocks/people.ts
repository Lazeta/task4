import { PersonSchema, type Person } from "@/entities/people/model/types";

export const createdMockPerson = (params?: Partial<Person>): Person =>
  PersonSchema.parse({
    id: "0",
    name: "Default Person",
    ...params,
  });

export const mockPeople: Person[] = [
  createdMockPerson({ id: "1", name: "Luke Skywalker" }),
  createdMockPerson({ id: "2", name: "Leia Organa" }),
  createdMockPerson({ id: "10", name: "Obi-Wan Kenobi" }),
];
