import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProofPoints } from "@/components/home/ProofPoints";
import { PROOF_POINTS } from "@/components/home/content";

describe("ProofPoints", () => {
  it("renders every proof point with its title and detail", () => {
    render(<ProofPoints />);

    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(PROOF_POINTS.length);

    for (const point of PROOF_POINTS) {
      expect(screen.getByText(point.title)).toBeInTheDocument();
      expect(screen.getByText(point.detail)).toBeInTheDocument();
    }
  });
});
