'use client';

import Image from 'next/image';
import avatar from '../public/avatar.jpg'
import { motion } from 'framer-motion';
export const Intro = () => {

    return (
        <Image
            src={avatar}
            alt="Eric portrait"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="h-24 w-24 rounded-full object-cover"

            />
    )

}