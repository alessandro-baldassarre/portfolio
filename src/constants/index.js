import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    logo,
    finance,
    baldaflix,
    movixlogo,
    social,

} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: html,
    },
    {
        title: "Frontend Developer",
        icon: reactjs,
    },
    {
        title: "Backend Developer",
        icon: nodejs,
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
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Freelancer",
        icon: logo,
        iconBg: "#000000",
        date: "June 2022 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Web Developer",
        company_name: "Mercurio Sistemi",
        icon: web,
        iconBg: "#000000",
        date: "June 2022 - December 2022",
        points: [
            "Developing front-end website architecture using Vue.js.",
            "Developing back-end website architecture using Symfony(PHP).",
            "Designing and developing APIs.",
            "Creating servers and databases for functionality.",
        ],
    },
    {
        title: "Junior Full stack Web Developer",
        company_name: "Boolean Careers",
        icon: web,
        iconBg: "#000000",
        date: "January 2022 - June 2022",
        points: [
            "Over 700 hours of training in which I learned different programming languages: HTML, CSS, JavaScript, PHP, SQL, etc...",
            "Completed several projects such as: Netflix Replication, Spotify Web Replication, WhatsApp Web Replication, etc...",
            "Designing and developing APIs.",
            "Creating servers and databases for functionality.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Social App",
        description:
            "Web-based social app platform that allows users after registration to add friends to their list, share posts, update their personal profiles and all the other features for a commom social app.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "express",
                color: "pink-text-gradient",
            },
        ],
        image: social,
        source_code_link: "https://github.com/alessandro-baldassarre/balda-social",
        site: "https://balda-social.vercel.app/",
        icon: mobile,
    },
    {
        name: "BaldaFlix",
        description:
            "Movies database application that allows users to search, see the trailer, stay updated on current trends divided by categories and many more features.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: baldaflix,
        source_code_link: "https://github.com/alessandro-baldassarre/baldaflix",
        site: "https://baldaflix.vercel.app/",
        icon: movixlogo,
    },
    {
        name: "Finance Dashboard",
        description:
            "A comprehensive Finance Dashboard App that has Machine Learning Predictions. The data is stored in a MongoDB database and fetched throw API created with Nodejs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "express",
                color: "green-text-gradient",
            },
            {
                name: "mongodb",
                color: "pink-text-gradient",
            },
        ],
        image: finance,
        source_code_link: "https://github.com/alessandro-baldassarre/finance-dashboard",
        site: "https://finance-dashboard-ten.vercel.app/",
        icon: web,
    },
];

export { services, technologies, experiences, testimonials, projects };
