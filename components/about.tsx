/* eslint-disable */
'use client';

import React from 'react';
import { SectionHeading } from "@/components/section-heading";
import { motion } from 'framer-motion';
import { useSectionInView } from "@/lib/hooks";
import { BsLinkedin, BsTwitterX } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';

export const About = () => {
    const { ref } = useSectionInView('About');

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
                I'm a data analyst and developer based in Texas with strong interests in distributed systems and decentralization.
                Outside of work, you can find me rock climbing 🧗, training Brazilian jiu-jitsu 🥋, or
                immersed in a book 📖. I'm also avid chess player, so click <a href="http://chess.com/play/eek_kim">♘</a> if you wish to challenge me.
                I have aspirations on becoming a full-stack software architect, so please connect to follow me on my journey!
            </p>
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


        </motion.section>
    )
}