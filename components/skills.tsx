'use client';

import React from 'react';
import { SectionHeading } from './section-heading';
import { skillsData } from '@/lib/data';
import {useSectionInView } from "@/lib/hooks";
import { motion } from 'framer-motion';
import GitHubCalendar from "react-github-calendar";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

export const Skills = () => {
    const { ref } = useSectionInView('Skills');

    return (
        <section
            id="skills"
            ref={ref}
            className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
        >
            <SectionHeading>My skills </SectionHeading>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {skillsData.map((skill, index) => (
                    <motion.li
                        className="flex items-center gap-2 bg-white borderBlack rounded-xl px-5 py-3 transition hover:border-indigo-400 hover:-translate-y-1 dark:bg-white/10 dark:text-white/80"
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={index}
                    >
                        <span className="text-xl text-indigo-500 dark:text-indigo-400">{skill.icon}</span>
                        {skill.name}
                    </motion.li>
                ))}
            </ul>
            <br/>
            <motion.section
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5}}
                className="w-full overflow-x-auto flex justify-center"
            >
                <GitHubCalendar
                    username="ericdwkim"
                    blockSize={11}
                    blockMargin={3}
                    fontSize={14}
                />
            </motion.section>
        </section>
    );
};