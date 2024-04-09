'use client';

import { useRef } from 'react';
import { projectsData } from "@/lib/data";
import Image from 'next/image';
import { motion, useScroll, useTransform } from "framer-motion";
import Link from 'next/link';
import { ProjectBtn } from './project-btn';

type ProjectProps = (typeof projectsData)[number];

export const Project = ({
    title,
    description,
    github,
    tags
}: ProjectProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '1.33 1'],
    });



};