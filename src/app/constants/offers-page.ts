import type { OffersPageData } from "@/app/types/page-data";

export const OFFERS_PAGE_DATA: OffersPageData = {
  heroSection: {
    title: "Contribua para o avanço do Reino",
    imageSrc: "/imagens/slides/congresso-setxa-noite-195 2.png",
    imageAlt: "Igreja Getsêmani",
    buttonText: "OFERTAR",
    buttonHref: "#",
  },
  contributionSection: {
    title: "Formas de contribuição",
    methods: [
      {
        icon: "app",
        title: "App e Site",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
      },
      {
        icon: "pix",
        title: "Via Pix",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
      },
      {
        icon: "bank",
        title: "Depósito bancário",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
      },
      {
        icon: "church",
        title: "Presencialmente",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
      },
    ],
    qrCode: {
      title: "Pix QR Code",
    },
  },
  impactBanner: {
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    stat: "+546.555",
    statLabel: "Pessoas Transformadas através dos nossos projetos",
    imageSrc: "/imagens/slides/congresso-setxa-noite-195 2.png",
    imageAlt: "Impacto da Igreja Getsêmani",
  },
};
