'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

export type CarouselSlide = { src: StaticImageData; caption: string };

const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
};

type CarouselProps = {
    slides: readonly CarouselSlide[];
    /** Frame aspect-ratio classes. Defaults to a landscape stage. */
    aspectClassName?: string;
};

export const Carousel = ({
    slides,
    aspectClassName = 'aspect-[4/3] sm:aspect-[16/10]',
}: CarouselProps) => {
    const count = slides.length;
    const [[index, direction], setState] = useState<[number, number]>([0, 0]);
    const [paused, setPaused] = useState(false);

    const paginate = useCallback(
        (dir: number) => setState(([i]) => [(i + dir + count) % count, dir]),
        [count],
    );
    const goTo = (i: number) => setState(([cur]) => [i, i > cur ? 1 : -1]);

    useEffect(() => {
        if (paused) return;
        const id = setInterval(() => paginate(1), 4500);
        return () => clearInterval(id);
    }, [paused, paginate, index]);

    const current = slides[index];

    return (
        <div
            className={`relative w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-white/5 ${aspectClassName}`}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={index}
                    className="absolute inset-0"
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(_, info) => {
                        if (info.offset.x < -60) paginate(1);
                        else if (info.offset.x > 60) paginate(-1);
                    }}
                >
                    {/* blurred backdrop fills the frame for any orientation */}
                    <Image
                        src={current.src}
                        alt=""
                        aria-hidden
                        fill
                        className="object-cover scale-110 blur-2xl opacity-40 pointer-events-none select-none"
                    />
                    {/* foreground shows the full image, uncropped */}
                    <Image
                        src={current.src}
                        alt={current.caption}
                        fill
                        sizes="(max-width: 768px) 100vw, 700px"
                        className="object-contain pointer-events-none select-none"
                    />
                    <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between bg-gradient-to-t from-black/75 to-transparent p-4 pt-12">
                        <p className="text-sm font-medium text-white drop-shadow">{current.caption}</p>
                    </div>
                </motion.div>
            </AnimatePresence>

            <button
                onClick={() => paginate(-1)}
                aria-label="Previous"
                className="absolute left-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-800 shadow transition hover:bg-white dark:bg-black/50 dark:text-white dark:hover:bg-black/70"
            >
                <BsChevronLeft />
            </button>
            <button
                onClick={() => paginate(1)}
                aria-label="Next"
                className="absolute right-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-800 shadow transition hover:bg-white dark:bg-black/50 dark:text-white dark:hover:bg-black/70"
            >
                <BsChevronRight />
            </button>

            <div className="absolute inset-x-0 bottom-3 z-20 flex justify-center gap-2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`h-2 rounded-full transition-all ${
                            i === index ? 'w-5 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};
