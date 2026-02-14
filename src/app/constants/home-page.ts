import type { HomePageData } from "@/app/types/page-data";

export const HOME_PAGE_DATA: HomePageData = {
  contribution: {
    title: "Faça sua contribuição",
    description: "Sua colaboração é muito importante para o avanço do reino",
    cards: [
      {
        image: "/imagens/slides/congresso-setxa-noite-195 2.png",
        title: "Projeto de Evangelismo e Discipulado",
        link: "#",
      },
      {
        image: "/imagens/slides/congresso-setxa-noite-195 2.png",
        title: "Projeto de Apoio a Famílias Carentes",
        link: "#",
      },
      {
        image: "/imagens/slides/congresso-setxa-noite-195 2.png",
        title: "Projeto de Capacitação de Líderes",
        link: "#",
      },
    ],
  },
  upcomingEvents: {
    title: "Próximos Eventos",
    href: "#",
    events: [
      {
        image: "/imagens/slides/teste.jpg",
        date: "Outubro 29, 2025",
        title: "CULTO DOS EMPREENDEDORES",
        link: "#",
      },
      {
        image: "/imagens/slides/teste2.jpg",
        date: "Novembro 10, 2025",
        title: "CONFERÊNCIA DE JOVENS",
        link: "#",
      },
      {
        image: "/imagens/slides/teste4.png",
        date: "Dezembro 5, 2025",
        title: "CULTO DE CELEBRAÇÃO",
        link: "#",
      },
    ],
  },
  cellSection: {
    title: "AINDA NÃO FAZ PARTE DA CÉLULA?",
    description: "Sua colaboração é muito importante para o avanço do reino",
    buttonText: "Células",
    buttonHref: "#celulas",
    imageSrc: "/imagens/slides/teste4.png",
    imageAlt: "Grupo de célula em atividade",
    imagePosition: "right",
    textColor: "text-black dark:text-white",
    descriptionColor: "text-gray-600 dark:text-gray-400",
  },
};
