'use client';

import React from 'react';
import { SectionHeading } from "@/components/section-heading";
// import { useSectionInView } from "@/lib/hooks"
export const About = () => {
    // todo: need better understanding of react hooks
    // const { ref } = useSectionInView('About', 0.75);

    return (
        <><SectionHeading>About me</SectionHeading><p>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            I'm a developer / data analyst based in Texas with strong interests in distributed systems, such as Web3, AI, ML, and cloud infrastructure.
            Outside of work, you can find me scaling mountains, training Brazilian jiu-jitsu, tinkering with side projects, or
            fully immersed in a book. I consider myself a student of life and refuse to stop learning.
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            I'm currently learning TypesScript, React, and TailwindCSS (you're looking at it!). I also am an avid chess player, so click [here] if you want to play a game with me!
        </p></>
    )
}