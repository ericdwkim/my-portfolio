import React from 'react';
import botImage from '@/public/botImage.png';
import doordashLogo from '@/public/doordashLogo.png';
import menuMorpher from '@/public/menu_morpher.png';
import koreanaLogo from '@/public/koreanaLogo.svg';
import aramarkLogo from '@/public/logos/aramark.png';
import microsoftLogo from '@/public/logos/microsoft.png';
import nucampLogo from '@/public/logos/nucamp.png';
import fruitfulLogo from '@/public/logos/fruitful.jpg';
import templeLogo from '@/public/logos/temple.jpg';
import ddiaCover from '@/public/books/ddia.jpg';
import ostepCover from '@/public/books/ostep.jpg';
import monolithCover from '@/public/books/monolith.jpg';
import ethereumCover from '@/public/books/ethereum.jpg';
import thinkingCover from '@/public/books/thinking.jpg';
import hobbyClimbing from '@/public/hobbies/climbing.jpg';
import hobbyBjj from '@/public/hobbies/bjj.jpg';
import hobbyTravelEgypt from '@/public/hobbies/travel-egypt.jpg';
import hobbyTravelJapan from '@/public/hobbies/travel-japan.jpg';
import hobbySnowboarding from '@/public/hobbies/snowboarding.jpg';
import hobbyReading from '@/public/hobbies/reading.jpg';
import { LuGraduationCap } from "react-icons/lu";
import { BsPersonWorkspace } from "react-icons/bs";
import {
    SiDotnet, SiCsharp, SiTypescript, SiReact, SiPython,
    SiDocker, SiKubernetes, SiPostgresql, SiGit, SiApachekafka,
    SiMicrosoftsqlserver,
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import { TbBrandReactNative } from 'react-icons/tb';

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
        name: 'Contact',
        hash: '#contact',
    },

] as const;

export const projectsData = [
    {
        title: 'Koreana Restaurant',
        description: 'A modern, responsive web app for a family-owned Korean restaurant serving San Antonio for 25+ years. Features a dynamic numbered menu, a real-time Google reviews carousel, and an interactive photo gallery.',
        tags: ['TypeScript', 'NextJS', 'ReactJS', 'TailWindCSS', 'Framer Motion'],
        github: 'https://github.com/ericdwkim/koreana_restaurant_webapp',
        liveUrl: 'https://koreana.restaurant/',
        imageUrl: koreanaLogo,
    },

    {
        title: 'Menu Morpher',
        description: 'A Google My Business API Client to download and update Google business menus',
        tags: ['Python', 'Google-Oauth2', 'Google API Client', 'Google-Auth'],
        github: 'https://github.com/ericdwkim/menu-morpher',
        imageUrl: menuMorpher,
    },

    {
        title:'DTN Bot',
        description: 'A web-crawling automation bot to filter, pull, and file away accounting documents for a chain of retail stores.',
        tags: ['Python', 'Selenium', 'Shell'],
        github: 'https://github.com/ericdwkim/dtn-bot',
        imageUrl: botImage,
    },

    {
        title: 'Door Dash Bot',
        description: 'A web-scraping automation bot to extract a filtered set of Door Dash delivery orders into a CSV for a chain of retail stores.',
        tags: ['Python', 'Selenium', 'Shell'],
        github: 'https://github.com/ericdwkim/door_dash_bot',
        imageUrl: doordashLogo,
    },

    {
        title: 'Cash Depot Bot',
        description: 'A web-crawling automation bot to filter, pull, and file away CSVs into a shared network filesystem for a chain of retail stores.',
        tags: ['Java', 'Selenium', 'Shell', 'Gradle', 'ShadowJar'],
        github: 'https://github.com/ericdwkim/cash-depot-bot',
        imageUrl: botImage,
    }

]

export const experiencesData = [
    {
        title: 'Software Engineer',
        company: 'Aramark',
        description:
        'Design and build backend services for the ENABLE+ mobile platform. Delivered a real-time push notification system on Azure and an ASP.NET Core API web service, and optimize SQL stored procedures for faster data retrieval. Collaborate daily with an international Agile team across data pipelines and technical support.',
        icon: React.createElement(BsPersonWorkspace),
        logo: aramarkLogo,
        date: 'Dec 2025 - Present'
    },
    {
        title: 'Junior Software Engineer',
        company: 'Aramark',
        description:
        'Built ETL pipelines and ran exploratory analysis across multiple databases to surface insights for stakeholders. Developed interactive KPI reports and dashboards, wrote complex SQL and MQL queries, and automated recurring workflows. Worked with REST APIs and Git in a remote, CI/CD, Agile environment.',
        icon: React.createElement(BsPersonWorkspace),
        logo: aramarkLogo,
        date: 'Feb 2022 - Dec 2025'
    },
    {
        title: 'AKS Support Engineer',
        company: 'Microsoft',
        description:
        'Troubleshot and optimized Azure Kubernetes Service (AKS) clusters for enterprise customers, resolving Sev B/C cases through deep root-cause analysis. Ensured secure, efficient container orchestration to minimize downtime and improve overall system performance.',
        icon: React.createElement(BsPersonWorkspace),
        logo: microsoftLogo,
        date: 'Dec 2021 - Feb 2022'
    },
    {
        title: 'Backend, SQL & DevOps',
        company: 'NuCamp',
        description: 'Completed an intensive backend bootcamp in Python and SQL, covering data structures and algorithms, object-oriented design, and core software design principles.',
        icon: React.createElement(LuGraduationCap),
        logo: nucampLogo,
        date: 'Sep 2021 - Dec 2021'
    },
    {
        title: 'Junior Developer',
        company: 'Fruitful Labs',
        description:
        'Co-authored Solidity smart contracts with Hardhat for LoveBoatExchange, a decentralized exchange on Ethereum and Polygon, including an ERC-20 governance token. The platform launched with $250,000 in initial liquidity on Polygon.',
        icon: React.createElement(BsPersonWorkspace),
        logo: fruitfulLogo,
        date: 'Dec 2020 - Sept 2021'
    },
    {
        title: 'Bachelors of Science',
        company: 'Temple University',
        description:
        'B.S. in Kinesiology with a minor in Neuroscience. Worked as a paid undergraduate researcher and co-authored a publication in the European Journal of Neuroscience.',
        icon: React.createElement(LuGraduationCap),
        logo: templeLogo,
        date: 'Dec 2016 - Dec 2020'
    },
] as const;

export const skillsData = [
    { name: '.NET', icon: React.createElement(SiDotnet) },
    { name: 'C#', icon: React.createElement(SiCsharp) },
    { name: 'Azure', icon: React.createElement(VscAzure) },
    { name: 'SQL Server', icon: React.createElement(SiMicrosoftsqlserver) },
    { name: 'TypeScript', icon: React.createElement(SiTypescript) },
    { name: 'React Native', icon: React.createElement(TbBrandReactNative) },
    { name: 'React', icon: React.createElement(SiReact) },
    { name: 'Python', icon: React.createElement(SiPython) },
    { name: 'PostgreSQL', icon: React.createElement(SiPostgresql) },
    { name: 'Kafka', icon: React.createElement(SiApachekafka) },
    { name: 'Docker', icon: React.createElement(SiDocker) },
    { name: 'Kubernetes', icon: React.createElement(SiKubernetes) },
    { name: 'Git', icon: React.createElement(SiGit) },
] as const;

export const currentlyReadingData = [
    { title: 'Designing Data-Intensive Applications (2nd ed.)', author: 'Martin Kleppmann', cover: ddiaCover },
    { title: 'Operating Systems: Three Easy Pieces', author: 'Arpaci-Dusseau', cover: ostepCover },
    { title: 'Monolith to Microservices', author: 'Sam Newman', cover: monolithCover },
    { title: 'Mastering Ethereum', author: 'Antonopoulos & Wood', cover: ethereumCover },
    { title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', cover: thinkingCover },
] as const;

export const hobbiesData = [
    { src: hobbyClimbing, caption: 'Rock climbing 🧗' },
    { src: hobbyBjj, caption: 'Brazilian jiu-jitsu 🥋' },
    { src: hobbyTravelEgypt, caption: 'Pyramids of Giza, Egypt ✈️' },
    { src: hobbyTravelJapan, caption: 'Dotonbori, Osaka ✈️' },
    { src: hobbySnowboarding, caption: 'Snowboarding 🏂' },
    { src: hobbyReading, caption: 'Always reading 📖' },
] as const;