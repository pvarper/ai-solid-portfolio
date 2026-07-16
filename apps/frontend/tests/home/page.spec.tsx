import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "@/app/page";
import { HERO, PROOF_POINTS } from "@/components/home/content";

describe("HomePage", () => {
  it("renders exactly one h1 with the hero identity text", () => {
    render(<HomePage />);

    const headings = screen.getAllByRole("heading", { level: 1 });
    expect(headings).toHaveLength(1);
    expect(headings[0]).toHaveTextContent(HERO.name);
  });

  it("renders the proof points list", () => {
    render(<HomePage />);

    const list = screen.getByRole("list");
    const items = screen.getAllByRole("listitem");
    expect(list).toBeInTheDocument();
    expect(items).toHaveLength(PROOF_POINTS.length);
  });

  it("renders exactly one accessible contact CTA that is focusable", () => {
    render(<HomePage />);

    const links = screen.getAllByRole("link", { name: /contact/i });
    expect(links).toHaveLength(1);

    const cta = links[0];
    expect(cta).toHaveAttribute("href", "/contact");
    expect(cta).not.toHaveAttribute("tabindex", "-1");
    expect(cta).not.toBeDisabled();
  });
});
