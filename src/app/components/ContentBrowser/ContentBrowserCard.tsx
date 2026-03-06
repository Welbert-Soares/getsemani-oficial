import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import type { ContentBrowserItem } from "./types";

export default function ContentBrowserCard({
  image,
  title,
  description,
  href,
}: ContentBrowserItem) {
  return (
    <Link
      href={href}
      className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative h-32 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-2xl"
        />
      </div>

      <div className="p-2.5">
        <div className="flex items-start justify-between gap-1">
          <span className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-2 leading-snug">
            {title}
          </span>
          <FiArrowUpRight className="shrink-0 w-4 h-4 text-gray-400 group-hover:text-primary transition-colors mt-0.5" />
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2 leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
}
