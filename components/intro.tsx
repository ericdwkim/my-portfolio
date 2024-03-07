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
                            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                        />

                    </motion.div>

                    {/*<motion.h1*/}
                    {/*    className="mb-10 mt-4 px-4 text-2 font-medium !leading-[1.5] sm:text-4xl"*/}
                    {/*    initial=*/}

                </div>
            </div>
        </section>
    );
}