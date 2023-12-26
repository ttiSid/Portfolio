import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Sidney | Full-stack Web Developer', // e.g: 'Name | Developer'
  lang: 'pt-BR', // e.g: en, es, fr, jp
  description: 'Bem-vindo ao meu portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Olá, eu sou o',
  name: 'Sidney 👋🏻',
  subtitle: 'Sou Desenvolvedor Front-end',
  cta: 'Saiba mais',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne:
    'Sou desenvolvedor web com experiência em desenvolvimento de aplicações utilizando React, Node.js, JavaScript, HTML5, CSS3, com formação em Análise e Desenvolvimento de Sistemas pela Universidade Paulista.',
  paragraphTwo:
    'Tenho por volta de 5 anos de experiência na área de Suporte/Infraestrutura de TI. Nesse tempo, pude desenvolver habilidades importantes para o desenvolvimento de aplicações.',
  paragraphThree: `"It's not over until i win" - Les Brown`,
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'iathon.png',
    title: 'Iathon - IA no Diabetes',
    info: '💼 O projeto foi idealizado através de um Hackathon, e teve como objetivo propor e apresentar um produto que utilize inteligência artificial que possa encontrar maneiras eficazes de prever o risco de desenvolvimento da diabetes em indivíduos, a fim de possibilitar intervenções precoces e estratégias de prevenção direcionadas.',
    info2:
      'Foram utilizadas as seguintes tecnologias: React.js, JavaScript, Metodologia BEM, ApexCharts.',
    url: 'https://iathon.github.io/iathon/',
    repo: 'https://github.com/iathon/iathon', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'around-react.png',
    title: 'EUA Afora',
    info: '💼 O projeto funciona como uma rede social, de forma similar ao Instagram, onde é possível: Adicionar/remover posts, incluir/remover curtidas, alterar foto e dados de perfil.',
    info2:
      '⚡️ Atuei no desenvolvimento e migração do projeto desde a marcação com HTML, até a entrega com o React.',
    info3:
      '💻 Foram utilizadas as seguintes tecnologias: HTML, CSS, JavaScript, Git, React.js e consumo de API.',
    url: 'https://ttisid.github.io/around-react_ptbr/',
    repo: 'https://github.com/ttiSid/around-react_ptbr', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'De-patria-para-patria.png',
    title: 'De Pátria para Pátria',
    info: '💼 O projeto é uma landing page responsiva que apresenta diferentes locais capturados por artistas através de fotografias e descrição.',
    info2:
      ' Foram utilizadas as seguintes tecnologias: HTML, CSS responsivo, git, metodologia BEM.',
    url: 'https://ttisid.github.io/web_project_3_ptbr/',
    repo: 'https://github.com/ttiSid/web_project_3_ptbr', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Gostaria de saber mais sobre mim? Clique no botão abaixo!',
  btn: 'Enviar e-mail',
  email: 's02devmail@protonmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sidney-sudatti-8231401b8/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ttiSid',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
