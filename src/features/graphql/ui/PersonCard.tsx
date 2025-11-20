import type { Person } from "@/entities/people/model/types";

type PeopleListProps = {
  person: Person;
};

export const PersonCard = ({ person }: PeopleListProps) => {
  return (
    <li className="border border-radius bg-muted shadow-sm hover:shadow-md transition-shadow p-4 ">
      <h3 className="font-semibold text-accent-foreground">{person.name}</h3>
      <p className="text-sm text-muted-foreground break-all">ID: {person.id}</p>
    </li>
  );
};
