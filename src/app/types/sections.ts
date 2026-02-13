export interface WelcomeSectionData {
  eyebrow: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  imageSrc: string;
  imageAlt: string;
}

export interface SocialSectionData {
  title: string;
  subtitle: string;
  socialLinks: {
    platform: "facebook" | "instagram" | "youtube" | "twitter";
    handle: string;
    url: string;
  }[];
  images: {
    image1: string;
    image2: string;
    instagramCard: string;
  };
}

export interface SloganSectionData {
  eyebrow: string;
  mainTitle: string;
  highlightText: string;
}

export interface ProgrammingBarData {
  dayLabel: string;
  eventName: string;
  eventTime: string;
  onlineLink: string;
  onlineLinkText: string;
}
