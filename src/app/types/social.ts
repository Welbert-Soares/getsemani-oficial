export interface SocialLink {
  platform: "facebook" | "instagram" | "youtube" | "twitter";
  handle: string;
  url: string;
}

export interface SocialMedia {
  platform: "instagram" | "youtube" | "twitter";
  label: string;
  url: string;
}
