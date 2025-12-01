import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, type Mock } from "vitest";
import { mockUsePeople } from "@/shared/mocks/usePeople.mock";
import { mockPeople } from "@/shared/mocks/people";

vi.mock("@/entities/people/api/usePeople", () => ({
  usePeople: vi.fn(),
}));

import { usePeople } from "@/entities/people/api/usePeople";
import { PeopleListPage } from ".";

describe("PeopleList (integration)", () => {
  it("renders PersonCard for each person", () => {
    (usePeople as Mock).mockReturnValue(mockUsePeople(mockPeople));

    render(<PeopleListPage />);

    const cards = screen.getAllByRole("listitem");
    expect(cards).toHaveLength(mockPeople.length);
  });
});
