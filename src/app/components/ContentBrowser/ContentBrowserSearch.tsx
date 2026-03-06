import { FaSearch } from "react-icons/fa";

type ContentBrowserSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function ContentBrowserSearch({
  value,
  onChange,
}: ContentBrowserSearchProps) {
  return (
    <div className="relative mb-6">
      <input
        type="text"
        placeholder="BUSQUE..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-600 px-5 py-3 pr-12 text-sm text-gray-700 dark:text-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
    </div>
  );
}
