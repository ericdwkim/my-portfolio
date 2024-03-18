/* eslint-disable */
'use client';

import React from 'react';
import { SectionHeading } from "@/components/section-heading";
import { motion } from 'framer-motion';
import { useSectionInView } from "@/lib/hooks";
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
            <SectionHeading>About me</SectionHeading><p>

            Howdy! 👋 I'm a data analyst / developer based in Texas with strong interests in distributed systems and decentralization.
            Outside of work, you can find me rock climbing 🧗, training Brazilian jiu-jitsu 🥋, or
            immersed in a book 📖. I'm also avid chess player, so click ♟️ if you'd like to play a game.
            I have aspirations on becoming a full-stack software architect, so please connect to follow me on my journey!
        </p></motion.section>
    )
}