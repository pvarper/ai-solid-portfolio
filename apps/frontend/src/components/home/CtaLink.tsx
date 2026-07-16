import Link from "next/link";
import { CTA } from "@/components/home/content";

export function CtaLink() {
  return <Link href={CTA.href}>{CTA.label}</Link>;
}
