export const site = {
  name: "Modular Criativo",
  description:
    "Produção de conteúdos educacionais e corporativos desde 2016. Materiais didáticos, e-books, questões, estudos de caso e soluções para aprendizagem.",
  driveUrl:
    "https://drive.google.com/drive/folders/1PIJfsnI_ZMms8OhhBiW0hei759nqn5se",
  navigation: [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Conteúdos", href: "#conteudos" },
  ],
};

export const highlights = [
  {
    number: "01",
    title: "Ideias que inspiram",
    description: "Um ponto de partida para explorar novas possibilidades.",
    color: "blue",
  },
  {
    number: "02",
    title: "Conteúdo para consultar",
    description: "Materiais digitais reunidos em uma biblioteca de fácil acesso.",
    color: "yellow",
  },
  {
    number: "03",
    title: "Criatividade em movimento",
    description: "Referências para transformar curiosidade em novas ideias.",
    color: "pink",
  },
] as const;

export const collections = [
  {
    title: "Artes",
    subtitle: "Slides e gravações · 6º ao 9º ano",
    cover: "/capas/artes.svg",
    alt: "Capa azul, amarela e coral da coleção de Artes, com formas geométricas e o título Slides e Gravações",
    tag: "CRIATIVIDADE",
  },
  {
    title: "Direito Civil",
    subtitle: "Direito Civil e Processo Civil",
    cover: "/capas/direito-civil.svg",
    alt: "Capa em azul e amarelo da coleção de Direito Civil, ilustrada com uma balança e colunas",
    tag: "DIREITO",
  },
  {
    title: "Formação Geral",
    subtitle: "Questões e materiais de estudo",
    cover: "/capas/formacao-geral.svg",
    alt: "Capa amarela e azul da coleção Formação Geral, com folhas de estudo e marcações",
    tag: "ESTUDOS",
  },
] as const;
