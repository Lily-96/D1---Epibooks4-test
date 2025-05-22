import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Welcome from "../components/Welcome";

describe("look for the h1 in the Welcome component", () => {
  it("find if the page is load correctly", () => {
    render(<Welcome />);
    const heading = screen.getByText(/benvenuti in epibooks/i);
    screen.debug(heading);
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Benvenuti in EpiBooks!");
  });
});
