import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { expect } from "vitest";
import AllTheBooks from "../components/AllTheBooks";
import fantasy from "../data/fantasy.json";

describe("Renderizza una card per ogni libro nel file fantasy.json", () => {
  it("should render a card for each book in the fantasy.json file", () => {
    render(<AllTheBooks />);

    const cards = screen.getAllByTestId("single-book-card");
    expect(cards).toHaveLength(fantasy.length);
  });
});
