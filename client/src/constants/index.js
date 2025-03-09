import { tactee, javascript, mysql, html, css, reactjs, redux, tailwind, nodejs, mongodb, git, php, docker, donymusic, bootstrap, mycabeo, upcycle, symfony } from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "À propos",
    },
    {
        id: "work",
        title: "Mon parcours",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "Mysql",
        icon: mysql,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Symfony",
        icon: symfony,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Bootstrap",
        icon: bootstrap,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "php",
        icon: php,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Développeur Web",
        company_name: "Donymusic (Plateforme e-learning)",
        iconBg: "#383E56",
        date: "Janvier 2024 - Actuellement",
        points: ["Conception et développement du site web from scratch avec React.js et Node.js, garantissant une architecture performante et maintenable.", "Mise en place d’un système dynamique avec MySQL et Sequelize, pour la gestion et l’administration des formations et masterclasses en ligne.", "Intégration d’une solution de paiement et d’un espace membre sécurisé.", "Intervenir sur les phases de cadrage du besoin client."],
    },
    {
        title: "Développeur Symfony",
        company_name: "Cabinet Adexca",
        iconBg: "#383E56",
        date: "Septembre 2022 - Octobre 2023",
        points: ["Développement d'une solution SaaS pour la gestion des cabinets d’expertise comptable, intégrant automatisation, centralisation des données et suivi en temps réel.", "Intégration d’APIs REST pour la saisie automatique des données.", "Automatisation des documents juridiques, administratifs et internes.", "Réduction du temps de gestion comptable grâce à l’automatisation."],
    },
    {
        title: "Développeur Intégrateur Web",
        company_name: "Agence Digital Tactee",
        iconBg: "#383E56",
        date: "Décembre 2021 - Août 2022",
        points: ["Création de sites vitrines, e-commerce et de contenu selon le secteur du client et de sa cible.", "Transformation des maquettes graphiques en pages web fonctionnelles (HTML, CSS, JavaScript, CMS).", "Répondre aux attentes du client à travers des échanges réguliers pour proposer des solutions adaptées.", "Collaboration étroite avec les designers, chefs de projet et spécialistes SEO pour livrer des projets performants et alignés aux objectifs marketing."],
    },
];

const projects = [
    {
        name: "Agence Digital Tactee",
        description: "L'agence Tactee Création Web accompagne les entreprises dans le développement de leur présence en ligne en proposant des services de création, refonte et optimisation de sites internet adaptés aux besoins des clients.",
        tags: [
            {
                name: "Wordpress",
                color: "black-gradient",
            },
            {
                name: "FileZilla",
                color: "gray-gradient",
            },
        ],
        image: tactee,
        url: "https://www.tactee.fr",
    },
    {
        name: "MyCabeo",
        description: "Le projet SaaS développé vise à optimiser la gestion des cabinets d’expertise comptable en automatisant plusieurs processus clés. Il centralise les données, fluidifie la communication et améliore le suivi des dossiers.",
        tags: [
            {
                name: "Symfony",
                color: "orange-text-gradient",
            },
            {
                name: "Mysql",
                color: "green-text-gradient",
            },
            {
                name: "JavaScript",
                color: "cyan-text-gradient",
            },
            {
                name: "Ajax",
                color: "red-text-gradient",
            },
        ],
        image: mycabeo,
        url: "https://cab-eo.fr",
        source_code_link: "https://github.com/levi613/mycabeo_final",
    },
    {
        name: "Donymusic",
        description: "Un site proposant des formations de musique en ligne, avec des masterclasses immersives animées par des experts pour aider les passionnés à perfectionner leur art.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Mysql",
                color: "green-text-gradient",
            },
            {
                name: "Nodejs",
                color: "violet-gradient",
            },
            {
                name: "Tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: donymusic,
        url: "https://donymusic.fr",
        source_code_link: "https://github.com/CJ-JC/site-dony",
    },
    {
        name: "Upcycle",
        description: "Cette solution propose aux collectivités, entreprises et associations de valoriser leurs biodéchets directement sur site grâce au compostage local. L’objectif est de réduire les coûts, d’améliorer l’impact environnemental et de renforcer l’ancrage local en réutilisant le compost produit.",
        tags: [
            {
                name: "Wordpress",
                color: "black-gradient",
            },
        ],
        image: upcycle,
        url: "https://www.upcycle.org",
    },
];

export { technologies, experiences, projects };
