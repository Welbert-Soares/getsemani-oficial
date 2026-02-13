import { SocialMedia } from "./social";

export interface FooterAddress {
  street: string;
  neighborhood: string;
  city: string;
}

export interface FooterPhone {
  label: string;
  number: string;
}

export interface FooterSection {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

export interface FooterData {
  address: FooterAddress;
  phones: FooterPhone[];
  sections: FooterSection[];
  socialMedia: SocialMedia[];
  copyright: string;
}
