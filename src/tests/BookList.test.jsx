import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { expect } from "vitest";
import BookList from "../components/BookList";
const arrayBooks = [
  { asin: "123", title: "Il Signore degli Anelli" },
  { asin: "456", title: "Harry Potter" },
];

describe("exist one card for each bookh", () => {
  it("should render a card for each book", () => {
    render(<BookList books={arrayBooks} />);

    const searchInput = screen.getByPlaceholderText(/cerca un libro/i);
    fireEvent.change(searchInput, { target: { value: "potter" } });

    // Verifica che venga mostrato solo il libro corretto
    const visibleCards = screen.getAllByTestId("single-book-card");
    expect(visibleCards).toHaveLength(1);
    expect(screen.getByText(/harry potter/i)).toBeInTheDocument();
  });
});
