import { PROOF_POINTS } from "@/components/home/content";

export function ProofPoints() {
  return (
    <ul>
      {PROOF_POINTS.map((point) => (
        <li key={point.id}>
          <h2 className="font-semibold">{point.title}</h2>
          <p>{point.detail}</p>
        </li>
      ))}
    </ul>
  );
}
