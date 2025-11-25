import { describe, expect, it, vi, type Mock } from "vitest";
import { render } from "@testing-library/react";
import { usePeople } from "@/entities/people/api/usePeople";
import { PeopleList } from "./PeopleList";

vi.mock("@/entities/people/api/usePeople");

describe("PeopleList", () => {
  it("renders PersonCard for each person", () => {
    (usePeople as unknown as Mock).mockReturnValue({
      data: [
        { id: "1", name: "Luke Skywalker" },
        { id: "2", name: "Leia Organa" },
        { id: "10", name: "Obi-Wan Kenobi" },
      ],
    });

    const { getAllByText } = render(<PeopleList />);

    expect(getAllByText("Luke Skywalker"));
    expect(getAllByText("Leia Organa"));
    expect(getAllByText("Obi-Wan Kenobi"));

    const { container } = render(<PeopleList />);
    const items = container.querySelectorAll("li");
    expect(items.length).toBe(3);
  });

  it("throws error if people list is empty", () => {
    (usePeople as unknown as Mock).mockReturnValue({ data: [] });

    expect(() => render(<PeopleList />)).toThrow();
  });

  it("throws if hook returns undefined", () => {
    (usePeople as unknown as Mock).mockReturnValue({ data: undefined });

    expect(() => render(<PeopleList />)).toThrow();
  });
});
