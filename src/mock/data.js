import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Sidney | Full Stack Developer', // e.g: 'Name | Developer'
  lang: 'pt', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
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
    img: 'around-react.png',
    title: 'EUA Afora',
    info: '💼 O projeto funciona como uma rede social, de forma similar ao Instagram, onde é possível: Adicionar/remover posts, incluir/remover curtidas, alterar foto e dados de perfil.',
    info2:
      '⚡️ Atuei no desenvolvimento e migração do projeto desde a marcação com HTML, até a entrega com o React.',
    info3:
      '💻 Foram utilizadas as seguintes tecnologias: HTML, CSS, JavaScript, Git, React e consumo de API',
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
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '💼 ',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
