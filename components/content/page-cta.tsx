import { ArrowUpRight } from "lucide-react";
import { BrandDots } from "@/components/ui";

type PageCtaProps = {
  primary: { label: string; href: string };
  secondary: Array<{ label: string; href: string }>;
};

export function PageCta({ primary, secondary }: PageCtaProps) {
  return (
    <aside className="page-cta" aria-label={primary.label}>
      <BrandDots mode="signature" size={8} />
      <a className="page-cta-primary" href={primary.href}>
        {primary.label}
        <ArrowUpRight size={17} aria-hidden="true" />
      </a>
      <nav aria-label={primary.label}>
        {secondary.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        ))}
      </nav>
    </aside>
  );
}
