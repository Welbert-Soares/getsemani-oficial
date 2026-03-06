import Link from "next/link";
import type { DonationBanner as DonationBannerProps } from "@/app/types/page-data";

export default function DonationBanner({
  title,
  description,
  buttonText,
  buttonHref,
}: DonationBannerProps) {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="bg-primary rounded-2xl px-8 py-10 flex flex-col items-center text-center gap-4">
        <h2 className="text-white font-bold text-xl md:text-2xl tracking-wide uppercase">
          {title}
        </h2>
        <p className="text-white/80 text-sm md:text-base max-w-xl">
          {description}
        </p>
        <Link
          href={buttonHref}
          className="mt-2 px-8 py-2.5 rounded-lg border-2 border-white text-white text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-primary transition-colors"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
