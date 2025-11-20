import { usePeople } from "@/entities/people/api/usePeople";
import { PersonCard } from "@/features/graphql/ui/PersonCard";

export const PeopleList = () => {
  const { data: people } = usePeople({ first: 30 });

  return (
    <div className="border border-radius border-border p-4">
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {people.map((person) => (
          <PersonCard key={person.id} person={person} />
        ))}
      </ul>
    </div>
  );
};
