'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';
import avatar from '../public/avatar.jpg';
import { useTheme } from '@/context/theme-context';

export const Intro = () => {
    const { ref } = useSectionInView('Home', 0.5)
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    const { theme } = useTheme();
    const dark = theme === 'dark';


    return (
        <section
            ref={ref}
            id="home"
            className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
        >
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 2,
                            ease: [0, 0.71, 0.2, 1.01],
                            scale: {
                                type: "spring",
                                damping: 5,
                                stiffness: 100,
                                restDelta: 0.001
                            }
                        }}
                    >
                        <Image
                            src={avatar}
                            alt="Eric portrait"
                            width="192"
                            height="192"
                            quality="95"
                            priority={true}
                            className="h-32 w-32 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                        />
                    </motion.div>
                </div>
            </div>

            <motion.h1
                className="mb-10 mt-4 px-4 text-2 font-medium !leading-[1.5] sm:text-2xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Howdy! 👋🏼 I'm <span className="font-bold">Eric,</span> a <span className="font-bold">backend & cloud engineer</span> building
                APIs, data pipelines, and the wiring between them with
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <span className="font-bold"> .NET, Azure, and SQL Server. </span> I chase root causes and leave things better than I found them — systems over snippets. Right now I'm going deeper on <span className="font-bold">distributed systems and cloud architecture</span> on the road to systems engineering.
            </motion.h1>

            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <a
                    className="group flex items-center gap-2 px-7 py-3 bg-white rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                    href="/KimEric_Resume.pdf"
                    download
                >
                    Download Resume{' '}
                    <HiDownload className="opacity-60 group-hover:translate-y-1 transition"/>
                </a>
                <Link
                    href="#contact"
                    className="group flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-7 py-3 rounded-full outline-none focus:scale-110 hover:scale-110 hover:from-indigo-700 hover:to-violet-700 active:scale-105 transition dark:border dark:border-white/10"
                    onClick={() => {
                        setActiveSection('Contact');
                        setTimeOfLastClick(Date.now());
                    }}
                >
                    Contact me here{' '}
                    <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/>
                </Link>
            </motion.div>

            <motion.a
                href="#about"
                className="mt-14 inline-flex flex-col items-center gap-2 text-gray-500 dark:text-white/50 hover:text-gray-700 dark:hover:text-white/80 transition-colors"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                onClick={() => {
                    setActiveSection('About');
                    setTimeOfLastClick(Date.now());
                }}
                aria-label="Scroll down to read more"
            >
                <span className="text-xs uppercase tracking-[0.2em]">Scroll to explore</span>
                <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-current p-1.5">
                    <motion.div
                        className="h-1.5 w-1.5 rounded-full bg-current"
                        animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
                        transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                    />
                </div>
            </motion.a>
        </section>
    );
}