'use client';

import React from 'react';
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { links } from '@/lib/data';
import { useActiveSectionContext } from "@/context/active-section-context";
import Link from "next/link";

export const Header = () => {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    return (
        <header className="z-[999] relative">
            <motion.div
                className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-45 bg-white bg-opacity-80 shadow-lg shadow-black[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h[3.25rem] sm:w-[44rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
                initial={{ y: -100, x: '-50%', opacity: 0 }}
                animate={{ y: 0, x: '-50%', opacity: 1 }}
            ></motion.div>
            <nav>
                <ul>
                    {links.map((link ) => (
                        <motion.li
                            className="h-3/4 flex items-center justify-center relative"
                            key={link.hash}
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <Link
                                className={clsx(
                                    'flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300',
                                    {
                                        'text-gray-950 dark:text-gray-200':
                                        activeSection === link.name,
                                    },
                                )}
                                href={link.hash}
                                // TODO: understand how this onClick is working and using the setters to update state
                                onClick={() => {
                                    setActiveSection(link.name);
                                    setTimeOfLastClick(Date.now());
                                }}
                            >
                                {link.name}
                                {/* TODO: why is this extra link.name required?*/}

                                {/* TODO: need to understand this motion.span section deeper */}
                                {link.name === activeSection && (
                                    <motion.span
                                        className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                                        layoutId="activeSection"
                                        transition={{
                                            type: 'spring',
                                            stiffness: 380,
                                            damping: 30,
                                        }}
                                        ></motion.span>
                                )}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};