import type { Contribution } from "./contribution";
import type { UpcomingEvent } from "./event";

export interface HeaderSection {
  eyebrow: string;
  eyebrowColor: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  textColor: string;
  descriptionColor: string;
}

export interface VolunteerSection {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  textColor: string;
  descriptionColor: string;
  backgroundColor: string;
}

export interface MinistriesPageData {
  headerSection: HeaderSection;
  volunteerSection: VolunteerSection;
}

export interface CellSection {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  textColor: string;
  descriptionColor: string;
}

export interface HomePageData {
  contribution: {
    title: string;
    description: string;
    cards: Contribution[];
  };
  upcomingEvents: {
    title: string;
    href: string;
    events: UpcomingEvent[];
  };
  cellSection: CellSection;
}
