import { vi } from "vitest";
import type { Person } from "@/entities/people/model/types";
import { mockPeople } from "./people";
import type { UseSuspenseQueryResult } from "@tanstack/react-query";

export const mockUsePeople = (
  people: Person[] | undefined = mockPeople
): Partial<UseSuspenseQueryResult<Person[], Error>> => ({
  data: people,
  isLoading: false,
  isError: false,
  error: null,
  refetch: vi.fn(),
});
