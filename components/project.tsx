'use client';

import { useRef } from 'react';
import { projectsData } from "@/lib/data";
import Image from 'next/image';
import { motion } from "framer-motion";
import Link from 'next/link';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { ProjectBtn } from './project-btn';

type ProjectProps = (typeof projectsData)[number] & { liveUrl?: string };

export const Project = ({
    title,
    description,
    github,
    tags,
    imageUrl,
    liveUrl,
}: ProjectProps) => {
    const ref = useRef<HTMLDivElement>(null)

    return (
        <motion.div
            ref={ref}
            className="group mb-3 sm:mb-8 last:mb-0"
        >
            <section className="bg-gray-100 max-w-[44rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative h-fit hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
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
                    <br/>
                    <div className="flex flex-wrap gap-2">
                        <a href={github} target="_blank" rel="noopener noreferrer">
                            <ProjectBtn/>
                        </a>
                        {liveUrl && (
                            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                                <button className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:from-indigo-700 hover:to-violet-700 active:scale-105">
                                    <div className="flex flex-row items-center">
                                        <BsBoxArrowUpRight/>
                                        <span className="ml-1.5">Live Site</span>
                                    </div>
                                </button>
                            </a>
                        )}
                    </div>

                    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-4">
                        {tags.map((tag, index) => (
                            <li
                                className="bg-indigo-600/90 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:bg-indigo-500/70 dark:text-white/90"
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