import type { ContentBrowserItem } from "./types";
import ContentBrowserCard from "./ContentBrowserCard";

type ContentBrowserGridProps = {
  items: ContentBrowserItem[];
};

const MAX_ITEMS = 6;

export default function ContentBrowserGrid({ items }: ContentBrowserGridProps) {
  const visible = items.slice(0, MAX_ITEMS);

  return visible.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {visible.map((item, index) => (
        <div
          key={item.id}
          className={index >= 3 ? "hidden sm:block" : undefined}
        >
          <ContentBrowserCard {...item} />
        </div>
      ))}
    </div>
  ) : (
    <p className="text-center text-gray-400 py-16 text-sm">
      Nenhum resultado encontrado.
    </p>
  );
}
