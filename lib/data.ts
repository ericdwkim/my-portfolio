import React from 'react';
// import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap} from "react-icons/lu";
// import { FaReact } from 'react-icons/fa';
import { BsPersonWorkspace } from "react-icons/bs";

export const links = [
    {
        name: 'Home',
        hash: '#home',
    },
    {
        name: 'About',
        hash: '#about',
    },
    {
        name: 'Projects',
        hash: '#projets',
    },
    {
        name: 'Skills',
        hash: '#skills',
    },
    {
        name: 'Experience',
        hash: '#experience',
    },
    {
        name: 'Hobbies',
        hash: '#hobbies',
    },
    {
        name: 'Contact',
        hash: '#contact',
    },

] as const;

export const projectsData = [
    {
        title:'DTN Bot',
        description: 'A web-crawling automation bot built for TXB Stores to filter, pull, and file away accounting documents.',
        tags: ['Python', 'Selenium', 'Shell'],
        github: 'https://github.com/ericdwkim/dtn-bot'
    },

    {
        title: 'Door Dash Bot',
        description: 'A web-scraping automation bot built for TXB Stores to extract a filtered set of Door Dash delivery orders into a CSV.',
        tags: ['Python', 'Selenium', 'Shell'],
        github: 'https://github.com/ericdwkim/door_dash_bot'
    },

    {
        title: 'MS Team Auto Joiner',
        description: 'An automation bot to automatically join Microsoft Teams meetings appearing on your calendar.',
        tags: ['Python', 'Selenium', 'Shell'],
        github: 'https://github.com/ericdwkim/ms-team-auto-joiner'
   },

    {
        title: 'Cash Depot Bot',
        description: 'A web-crawling automation bot built for TXB Stores to filter, pull, and file away CSVs into a shared network filesystem.',
        tags: ['Java', 'Selenium', 'Shell', 'Gradle', 'shadowJar'],
        github: 'https://github.com/ericdwkim/cash-depot-bot'
    },

    {
        title: 'Personal Portfolio',
        description: 'A vertical timeline portfolio website forked from github.com/mikestarrdev used to learn NextJS, TailWindCSS, and React fundamentals',
        tags: ['TypeScript', 'NextJS', 'TailWindCSS'],
        github: 'https://github.com/ericdwkim/my-portfolio'
    },

    {
        title: 'SpotifyMe',
        description: 'A Spotify client clone built as my capstone project at NuCamp.',
        tags: ['Python', 'Flask', 'SQLAlchemy', 'Postgres', 'Docker'],
        github: 'https://github.com/ericdwkim/SpotifyMe',
    }
]

export const experiencesData = [
    {
        title: 'Data Analyst',
        company: 'Aramark',
        description:
        'Aramark is an American food and facilities services provider with international operations. ENABLE+ is a set of iOS/Android apps designed to streamline food servicing and inventory management. As part of the ENABLE team, I am the core contributor and maintainer of our stored procedures hosted on SQL Servers. This includes the implementation and data validation phases to reflect any new API updates for a timely production release. ',
        icon: React.createElement(BsPersonWorkspace),
        date: 'Feb 2022 - Present'
    },
    {
        title: 'AKS Support Engineer',
        company: 'Microsoft',
        description:
        'Azure Kubernetes Service (AKS) is a managed Kubernetes service in Azure to simplify container orchestration and management for cluster deployments and maintenance. Gained experience in troubleshooting and optimizing AKS clusters, ensuring secure and efficient container orchestration and management principles to minimize downtime.',
        icon: React.createElement(BsPersonWorkspace),
        date: 'Dec 2022 - Feb 2022'
    },
    {
        title: 'Developer / Data Analyst',
        company: 'TXB Stores',
        description:
        'TXB is a chain of convenience stores and gas stations with more than 48 locations operating in Texas and Oklahoma. I spearheaded the development and maintenance of an automation suite using Python, Selenium, and bash scripts. On a weekly basis, I was responsible for creating interactive KPI reports to incite business actions. Analyzing the data to help identify and pinpoint key business drivers was my speciality.',
        icon: React.createElement(BsPersonWorkspace),
        date: 'Dec 2021 - Feb 2022'
    },
    {
        title: 'Jr. Software Engineer',
        company: 'Fruitful Labs',
        description:
        'Fruitful Labs is a blockchain startup recognized for deploying LoveBoatExchange, a decentralized cryptocurrency exchange platform deployed to Ethereum and Polygon chains. I helped co-author a collection of smart contracts using Solidity and Hardhat to develop an ERC20 governance token. On deployment, LoveBoatExchange had an initial total liquidity of $250,000 on the Polygon network. ',
        icon: React.createElement(BsPersonWorkspace),
        date: 'Dec 2020 - Sept 2021'
    },
    {
        title: 'Backend, SQL & DevOps',
        company: 'NuCamp',
        description: 'Completed a rigorous 4-month bootcamp designed for backend developers using Python and SQL. Learned about data structures and algorithms and fundamental OOP concepts, and basic design principles.',
        icon: React.createElement(LuGraduationCap),
        date: 'Aug 2021 - Dec 2021'
    },
    {
        title: 'Bachelors of Science',
        company: 'Temple University',
        description:
        'Obtained a 4 year Bachelors degree majoring in Kinesiology and a minor in Neuroscience Research. Gained paid working experience in a research lab and even co-authored a publication for the European Journal of Neuroscience!',
        icon: React.createElement(LuGraduationCap),
        date: 'Dec 2016 - Dec 2020'
    },
] as const;

export const skillsData = [
    'Python',
    'SQL',
    'Java',
    'Kafka',
    'Git',
    'Selenium',
    'Pandas',
    'NumPy',
    'HTML',
    'CSS',
    'TypeScript',
    'JavaScript',
    'React',
    'Docker',
    'Kubernetes'
] as const;