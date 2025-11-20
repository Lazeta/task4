import { PeopleList } from "@/entities/people/ui/PeopleList";
import { Spinner } from "@/shared/ui/shadcn/ui/spinner";
import { Suspense } from "react";

export const PeopleListPage = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <Suspense fallback={<Spinner />}>
        <PeopleList />
      </Suspense>
    </div>
  );
};
