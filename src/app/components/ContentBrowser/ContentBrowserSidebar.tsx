import Link from "next/link";
import { FaInstagram, FaFacebook, FaYoutube, FaLink } from "react-icons/fa";
import type { ContentBrowserCategory, ContentBrowserSocialLink } from "./types";

const socialIconMap = {
  instagram: FaInstagram,
  facebook: FaFacebook,
  youtube: FaYoutube,
};

type ContentBrowserSidebarProps = {
  categories: ContentBrowserCategory[];
  activeCategory: string | null;
  onCategoryChange: (id: string | null) => void;
  socialLinks: ContentBrowserSocialLink[];
  copied: boolean;
  onCopyLink: () => void;
};

export default function ContentBrowserSidebar({
  categories,
  activeCategory,
  onCategoryChange,
  socialLinks,
  copied,
  onCopyLink,
}: ContentBrowserSidebarProps) {
  return (
    <div className="lg:w-52 shrink-0 space-y-8">
      {categories.length > 0 && (
        <div>
          <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3">
            Categorias:
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onCategoryChange(null)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                activeCategory === null
                  ? "bg-primary text-white"
                  : "bg-gray-800 text-white hover:bg-primary"
              }`}
            >
              Todos
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() =>
                  onCategoryChange(activeCategory === cat.id ? null : cat.id)
                }
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-primary text-white"
                    : "bg-gray-800 text-white hover:bg-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {socialLinks.length > 0 && (
        <div>
          <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3">
            Compartilhe:
          </p>
          <button
            onClick={onCopyLink}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-white text-xs font-semibold hover:bg-primary transition-colors cursor-pointer mb-3 w-full"
          >
            <FaLink className="w-3.5 h-3.5" />
            {copied ? "Link copiado!" : "Copiar link"}
          </button>
          <div className="flex gap-3">
            {socialLinks.map((link) => {
              const Icon = socialIconMap[link.platform];
              return (
                <Link
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.platform}
                  className="w-9 h-9 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:border-primary hover:text-primary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
