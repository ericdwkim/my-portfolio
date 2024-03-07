'use client';

import Image from 'next/image';
import avatar from '../public/avatar.jpg'
import { motion } from 'framer-motion';
import {useSectionInView} from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import {useTheme} from "@/context/theme-context";

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
    <div>
        <><Image
            src={avatar}
            alt="Eric portrait"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="h-24 w-24 rounded-full object-cover"/>


            <motion.h1
                className="mb-10 mt-4 px-4 text-2 font-medium !leading-[1.5] sm:text-4xl"
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
            >
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Howdy! I'm <span className="font-bold">Eric</span>, a
                developer / data analyst.
                My specialty is web-scraping and building automation bots with
                <span className="font-bold"> Python and Selenium</span>.
                Scroll down to follow my journey
            </motion.h1>
        </>
    </div>
    </section>

    );
};