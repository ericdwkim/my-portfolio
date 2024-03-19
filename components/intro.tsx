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
                Howdy! 👋🏼 I'm <span className="font-bold">Eric,</span> an aspiring full-stack architect working as a data
                analyst and developer. My specialty is data engineering using
                <span className="font-bold"> Python, SQL, and Bash. </span> I am always eager to explore unfamiliar,
                challenging domains and have an insatiable appetite to learn!
                <br/>
                <br/>
                ⬇️ Curious about my journey? ⬇️


            </motion.h1>

            <motion.div
                className="flex flex-col items-center justify-center gap-2 px-4 text-lg"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <div>
                    <button>
                        <a
                            className="flex items-center my-1.5 px-7 py-3 group bg-white  gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                            href="/KimEric_Resume.pdf"
                            download
                        >
                            Download Resume{' '}
                            <HiDownload className="opacity-60 group-hover:translate-y-1 transition"/>
                        </a>
                    </button>
                    <button>
                        <Link
                            href="#contact"
                            className={`group bg-gray-900 text-white px-7 py-3 mb-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition
              dark:border dark:border-1 dark:border-white/10`}
                            onClick={() => {
                                setActiveSection('Contact');
                                setTimeOfLastClick(Date.now());
                            }}
                        >
                            Contact me here{' '}
                            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/>
                        </Link>
                    </button>
                </div>
            </motion.div>
        </section>
    );
}