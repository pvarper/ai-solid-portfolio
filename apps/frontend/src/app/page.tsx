import { CtaLink } from "@/components/home/CtaLink";
import { Hero } from "@/components/home/Hero";
import { ProofPoints } from "@/components/home/ProofPoints";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-24">
      <Hero />
      <ProofPoints />
      <CtaLink />
    </main>
  );
}
