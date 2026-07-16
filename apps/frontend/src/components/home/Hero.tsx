import { HERO } from "@/components/home/content";

export function Hero() {
  return (
    <section aria-label="Introduction">
      <h1 className="text-4xl font-bold">
        {HERO.name} — {HERO.role}
      </h1>
      <p className="mt-2 text-lg">{HERO.valueProp}</p>
      <p className="mt-1 text-base text-neutral-600">{HERO.subhead}</p>
    </section>
  );
}
