import { usePeople } from "@/entities/people/api/usePeople";
import { PersonCard } from "@/features/graphql/ui/PersonCard";
import { Spinner } from "@/shared/ui/shadcn/ui/spinner";
import { Suspense } from "react";

export const PeopleListPage = () => {
  const { data: people } = usePeople({ first: 30 });

  if (!people || people.length === 0) {
    return <div>Data is empty...</div>;
  }

  return (
    <Suspense fallback={<Spinner />}>
      <div className="max-w-5xl mx-auto">
        <ul className="border border-radius border-border p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 bg-primary">
          {people.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </ul>
      </div>
    </Suspense>
  );
};
