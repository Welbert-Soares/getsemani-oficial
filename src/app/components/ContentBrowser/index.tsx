"use client";

import { useState } from "react";
import type {
  ContentBrowserItem,
  ContentBrowserCategory,
  ContentBrowserSocialLink,
} from "./types";
import ContentBrowserSearch from "./ContentBrowserSearch";
import ContentBrowserGrid from "./ContentBrowserGrid";
import ContentBrowserSidebar from "./ContentBrowserSidebar";

export type {
  ContentBrowserItem,
  ContentBrowserCategory,
  ContentBrowserSocialLink,
};

type ContentBrowserProps = {
  items: ContentBrowserItem[];
  categories?: ContentBrowserCategory[];
  socialLinks?: ContentBrowserSocialLink[];
};

export default function ContentBrowser({
  items,
  categories = [],
  socialLinks = [],
}: ContentBrowserProps) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const filtered = items.filter((item) => {
    const matchesSearch =
      !search ||
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = !activeCategory || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard not available
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="bg-gray-100 dark:bg-gray-700 rounded-3xl p-6 md:p-8">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-20">
          <div className="flex-1 min-w-0">
            <ContentBrowserSearch value={search} onChange={setSearch} />
            <ContentBrowserGrid items={filtered} />
          </div>
          <ContentBrowserSidebar
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            socialLinks={socialLinks}
            copied={copied}
            onCopyLink={handleCopyLink}
          />
        </div>
      </div>
    </section>
  );
}
