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
                        className="bg-white border-black rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={index}
                    >
                        {skill}
                    </motion.li>
                ))}
            </ul>
            <br/>
            <motion.section
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5}}
            >
                <GitHubCalendar
                    username="ericdwkim"
                />
            </motion.section>
        </section>
    );
};