/* eslint-disable */
'use client';

import React from 'react';
import { SectionHeading } from "@/components/section-heading";
import { motion } from 'framer-motion';
import { useSectionInView } from "@/lib/hooks";
import { currentlyReadingData, hobbiesData } from "@/lib/data";
import { Carousel } from "@/components/carousel";
import { BsLinkedin, BsTwitterX } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';

export const About = () => {
    const { ref } = useSectionInView('About');

    const bookSlides = currentlyReadingData.map((book) => ({
        src: book.cover,
        caption: `${book.title} · ${book.author}`,
    }));

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>

            <p>
                I'm a <span className="font-medium">backend &amp; cloud engineer</span> based in Texas with a deep
                interest in <span className="font-medium">distributed systems and cloud architecture</span>. I chase
                root causes, care about the wiring between services, and I'm always working toward the next level of the
                stack. Connect with me and follow along on my journey!
            </p>
            <br/>
            <motion.div
                className="flex flex-col items-center justify-center gap-2 px-4 text-lg"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.175,
                }}
            >
                <div className="flex items-center content-center self-center space-x-2">
                    <button>
                        <a href="https://linkedin.com/in/ericdwkim" target="_blank">
                            <div
                                className="flex flex-row items-center w-fit bg-white p-4 text-gray-700 hover:text-gray-950 gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60">
                                <span>LinkedIn</span>{' '}
                                <BsLinkedin className="hidden sm:block ml-1"/>
                            </div>
                        </a>
                    </button>

                    <button>
                        <a href="https://github.com/ericdwkim" target="_blank">
                            <div
                                className="flex flex-row items-center w-fit bg-white p-4 text-gray-700 hover:text-gray-950 gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60">
                                <span>GitHub</span>
                                <FaGithubSquare className="hidden sm:block"/>
                            </div>
                        </a>
                    </button>

                    <button>
                        <a href="https://twitter.com/ericdwkim" target="_blank">
                            <div
                                className="flex flex-row items-center w-fit bg-white p-4 text-gray-700 hover:text-gray-950 gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60">
                                <span>Twitter</span>
                                <BsTwitterX className="hidden sm:block"/>
                            </div>
                        </a>
                    </button>
                </div>

            </motion.div>

            <div className="mt-12 text-left">
                <div className="rounded-2xl borderBlack bg-white/60 p-5 sm:p-6 dark:bg-white/5">
                    <h3 className="text-xl font-semibold mb-4">Hobbies</h3>
                    <Carousel slides={hobbiesData} />
                    <p className="mt-4 text-sm text-gray-600 dark:text-white/60">
                        Also an avid chess player — click{' '}
                        <a className="underline" href="http://chess.com/play/eek_kim">♘</a> to challenge me.
                    </p>
                </div>

                <div className="mt-6 rounded-2xl borderBlack bg-white/60 p-5 sm:p-6 dark:bg-white/5">
                    <h3 className="text-xl font-semibold mb-4">Currently reading 📚</h3>
                    <Carousel slides={bookSlides} />
                </div>
            </div>


        </motion.section>
    )
}