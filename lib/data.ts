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

export const experiencesData = [
    {
        title: 'Data Analyst | Aramark',
        description:
        'Aramark is an American food and facilities services provider across diverse sectors with international operations. ENABLE+ is a set of iOS/Android apps designed to streamline food servicing and inventory management. Prima Web is a web app designed to manage menu items, recipes, and food waste tracking.',
        icon: React.createElement(BsPersonWorkspace),
        date: 'Feb 2022 - Present'
    },
    {
        title: 'Developer / Data Analyst | TXB Stores',
        description:
        'placeholder description',
        icon: React.createElement(BsPersonWorkspace),
        date: 'Dec 2021 - Feb 2022'
    },
    {
        title: 'Jr. Software Engineer / Technical Analyst | Fruitful Labs',
        description:
        'placeholder description',
        icon: React.createElement(BsPersonWorkspace),
        date: 'Dec 2020 - Sept 2021'
    },
    {
        title: 'Student | Backend, SQL, and DevOps with Python | NuCamp',
        description: 'placeholder',
        icon: React.createElement(LuGraduationCap),
        date: 'Aug 2021 - Dec 2021'
    },
    {
        title: 'Bachelors of Science | Temple University | Philadelphia, PA',
        description:
        'Kinesiology major with a minor in Neuroscience Research',
        icon: React.createElement(LuGraduationCap),
        date: 'Dec 2016 - Dec 2020'
    },
] as const;