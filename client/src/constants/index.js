import { mobile, backend, creator, web, javascript, typescript, html, css, reactjs, redux, tailwind, nodejs, mongodb, git, figma, docker, digital, donymusic, threejs } from "../assets";

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
        name: "TypeScript",
        icon: typescript,
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
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Développeur Symfony",
        company_name: "Adexca Expert Comptable",
        iconBg: "#383E56",
        date: "2022 - 2023",
        points: ["Résolution des incidents techniques en identifiant les causes et en apportant des solutions adaptées.", "Correction de bugs variés et mise en place de mesures de sécurité pour protéger les données sensibles.", "Fiabilisation de la génération en PDF des documents fiscaux à l'aide de Symfony, Dompdf et Ajax.", "Collaboration avec les experts-comptables pour répondre aux besoins spécifiques des utilisateurs finaux."],
    },
    {
        title: "Développeur Intégrateur Web",
        company_name: "Agence Web Tactee",
        iconBg: "#383E56",
        date: "Décembre 2020 - Août 2021",
        points: ["Maintenance et optimisation de sites web pour garantir leur performance et leur sécurité.", "Collaboration avec les chefs de projet pour piloter le développement de sites, de la conception à la mise en ligne.", "Identification et correction des bugs afin d'améliorer l'expérience utilisateur.", "Mises à jour régulières et maintenance continue des sites existants."],
    },
];

const projects = [
    {
        name: "Digital discount",
        description: "Un site e-commerce proposant des abonnements Netflix, Spotify et autres services à des prix réduits, avec une interface intuitive et un processus d'achat simplifié.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mysql",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: digital,
        url: "https://digital-discount.co",
        source_code_link: "https://github.com/CJ-JC/findAll",
    },
    {
        name: "Donymusic",
        description: "Un site proposant des formations de musique en ligne, avec des masterclasses immersives animées par des experts pour aider les passionnés à perfectionner leur art.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mysql",
                color: "green-text-gradient",
            },
            {
                name: "nodejs",
                color: "violet-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: donymusic,
        url: "https://donymusic.fr",
        source_code_link: "https://github.com/CJ-JC/site-dony",
    },
];

export { technologies, experiences, projects };
