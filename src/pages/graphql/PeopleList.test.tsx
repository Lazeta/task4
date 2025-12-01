import { describe, expect, it, vi, type Mock } from "vitest";
import { render } from "@testing-library/react";
import { mockUsePeople } from "@/shared/mocks/usePeople.mock";
import { mockPeople } from "@/shared/mocks/people";

vi.mock("@/entities/people/api/usePeople", () => ({
  usePeople: vi.fn(),
}));

import { usePeople } from "@/entities/people/api/usePeople";
import { PeopleListPage } from "./index";

describe("PeopleList (unit)", () => {
  it("renders PersonCard for each person", () => {
    (usePeople as Mock).mockReturnValue(mockUsePeople(mockPeople));

    const { getAllByText, container } = render(<PeopleListPage />);

    expect(getAllByText("Luke Skywalker"));
    expect(getAllByText("Leia Organa"));
    expect(getAllByText("Obi-Wan Kenobi"));

    const items = container.querySelectorAll("li");
    expect(items.length).toBe(3);
  });
  
  it("renders nothing if people list is empty", () => {
    (usePeople as Mock).mockReturnValue(mockUsePeople([]));
    const { container } = render(<PeopleListPage />);
    expect(container).toMatchSnapshot();
  });

  it("renders nothing if hook returns undefined", () => {
    (usePeople as Mock).mockReturnValue(mockUsePeople(undefined));
    const { container } = render(<PeopleListPage />);
    expect(container).toMatchSnapshot();
  });
});
