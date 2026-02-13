import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

type WelcomeSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  imageSrc: string;
  imageAlt: string;
};

export default function WelcomeSection({
  eyebrow,
  title,
  description,
  linkText,
  linkHref,
  imageSrc,
  imageAlt,
}: WelcomeSectionProps) {
  return (
    <section className="w-full px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Imagem à esquerda */}
          <div className="relative w-full aspect-square max-w-xs md:max-w-md mx-auto md:mx-0">
            <div className="relative w-full h-full rounded-tl-[8rem] md:rounded-tl-[10rem] rounded-br-[8rem] md:rounded-br-[10rem] overflow-hidden">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Conteúdo à direita */}
          <div className="space-y-6">
            <p className="text-base md:text-base text-gray-600 dark:text-gray-400">
              {eyebrow}
            </p>
            <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              {title}
            </h2>
            <p className="text-lg md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {description}
            </p>
            <Link
              href={linkHref}
              className="inline-flex items-center gap-2 text-amber-700 dark:text-primary hover:text-primary-800 transition-colors font-medium group"
            >
              {linkText}
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
