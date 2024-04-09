'use client';

import { useRef } from 'react';
import { projectsData } from "@/lib/data";
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

    return (
        <motion.div
            ref={ref}
            className="group mb-3 sm:mb-8 last:mb-0"
        >
            <section>
                <div>
                    <Link href={github} target="_">
                        <h3>{title}</h3>
                    </Link>
                    <p>
                        <span className="font-bold underline">Description</span>{' '}{description}
                    </p>

                    <div>
                        <a href={github} target="_">
                            <ProjectBtn/>
                        </a>
                    </div>

                    <ul>
                        {tags.map((tag, index) => (
                            <li key={index}>
                                {tag}
                            </li>
                        ))}
                    </ul>

                </div>

            </section>

        </motion.div>
    )



};