export type ContentBrowserItem = {
  id: number | string;
  image: string;
  title: string;
  description: string;
  href: string;
  category?: string;
};

export type ContentBrowserCategory = {
  id: string;
  label: string;
};

export type ContentBrowserSocialLink = {
  platform: "instagram" | "facebook" | "youtube";
  url: string;
};
