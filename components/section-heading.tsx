import React from 'react';

type SectionHeadingProps = {
    children: React.ReactNode;
};

export const SectionHeading = ( { children }: SectionHeadingProps) => {
    return (
        <h2 className="text-3xl font-semibold capitalize mb-8 text-center">
            {children}
            <span className="block mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
        </h2>
    )
}