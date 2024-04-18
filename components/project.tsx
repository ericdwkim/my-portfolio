'use client';

import { useRef } from 'react';
import { projectsData } from "@/lib/data";
import Image from 'next/image';
import { motion } from "framer-motion";
import Link from 'next/link';
import { ProjectBtn } from './project-btn';

type ProjectProps = (typeof projectsData)[number];

export const Project = ({
    title,
    description,
    github,
    tags,
    imageUrl
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
            <section className="bg-gray-100 max-w-[44rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative h-fit hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                <div>
                    <Link href={github} target="_">
                        <h3 className="text-2xl font-semibold">{title}</h3>
                    </Link>
                    <Image
                    src={imageUrl}
                    alt="Project image"
                    quality={95}
                    loading="lazy"
                    className="block sm:hidden top-8 -right-40 w-[28.25rem] my-2 rounded"
                    />

                    <p>
                        <span className="font-bold underline">Description</span>{' '}
                        {description}
                    </p>

                    <div>
                        <a href={github} target="_">
                            <ProjectBtn/>
                        </a>
                    </div>

                    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-4">
                        {tags.map((tag, index) => (
                            <li
                                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                                key={index}>
                                {tag}
                            </li>
                        ))}
                    </ul>

                </div>

                <Image
                    src={imageUrl}
                    alt="Project I worked on"
                    quality={95}
                    loading="lazy"
                    className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
                transition
                group-hover:scale-[1.04]
                group-hover:-translate-x-3
                group-hover:translate-y-3
                group-hover:-rotate-2

                group-even:group-hover:translate-x-3
                group-even:group-hover:translate-y-3
                group-even:group-hover:rotate-2

                group-even:right-[initial] group-even:-left-40"
                />

            </section>

        </motion.div>
    )



};