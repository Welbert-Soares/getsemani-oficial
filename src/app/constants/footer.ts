import type { FooterData } from "@/app/types/footer";

export const FOOTER_DATA: FooterData = {
  address: {
    street: "R. Cassiano Campolina, 360",
    neighborhood: "Dona Clara",
    city: "Belo Horizonte - MG",
  },
  phones: [
    { label: "Colégio", number: "(31) 2532-9899" },
    { label: "Ass. Social", number: "(31) 3448-9866" },
    { label: "Secretaria", number: "(31) 3448-9899/9844" },
  ],
  sections: [
    {
      title: "Igreja",
      links: [
        { label: "Conheça-nos", href: "/conheca-nos" },
        { label: "Células", href: "/celulas" },
        { label: "Contribuição", href: "/contribuicao" },
        { label: "Agenda", href: "/agenda" },
      ],
    },
    {
      title: "Links Úteis",
      links: [
        { label: "Pedidos de Oração", href: "/pedidos-oracao" },
        { label: "Conteúdos", href: "/conteudos" },
      ],
    },
    {
      title: "Informações",
      links: [
        { label: "Fale Conosco", href: "/fale-conosco" },
        { label: "Trabalhe Conosco", href: "/trabalhe-conosco" },
        { label: "Onde Estamos", href: "/onde-estamos" },
      ],
    },
  ],
  socialMedia: [
    {
      platform: "instagram",
      label: "Instagram",
      url: "https://instagram.com/getsemani",
    },
    {
      platform: "youtube",
      label: "Youtube",
      url: "https://youtube.com/@getsemani",
    },
    {
      platform: "twitter",
      label: "Twitter",
      url: "https://twitter.com/getsemani",
    },
  ],
  copyright: "© 2026 Igreja Batista Getsêmani. Todos os direitos reservados.",
};
