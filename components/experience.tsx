'use client';

import React from 'react';
import { SectionHeading } from './section-heading'
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from '@/context/theme-context';

export const Experience = () => {
    const { ref } = useSectionInView('Experience');
    const { theme } = useTheme();

    // Group consecutive entries from the same company so multiple roles at one
    // employer render inside a single timeline container (LinkedIn-style).
    type Role = (typeof experiencesData)[number];
    const groups: { company: string; icon: Role['icon']; logo: Role['logo']; roles: Role[] }[] = [];
    experiencesData.forEach((item) => {
        const last = groups[groups.length - 1];
        if (last && last.company === item.company) {
            last.roles.push(item);
        } else {
            groups.push({ company: item.company, icon: item.icon, logo: item.logo, roles: [item] });
        }
    });

    const experienceData: any = groups.map((group, index) => {
        const isMulti = group.roles.length > 1;
        // Roles are ordered newest -> oldest; span = oldest start to newest end.
        const groupDate = isMulti
            ? `${group.roles[group.roles.length - 1].date.split(' - ')[0]} - ${group.roles[0].date.split(' - ')[1]}`
            : group.roles[0].date;

        const iconEl = group.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
                src={group.logo.src}
                alt={`${group.company} logo`}
                className="w-full h-full object-contain p-1.5 rounded-full"
            />
        ) : (
            group.icon
        );

        return (
            <React.Fragment key={index}>
                {/* @ts-ignore */}
                <VerticalTimelineElement
                    visible={true}
                    contentStyle={{
                        background:
                            theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                        boxShadow: 'none',
                        border: '1px solid rgba(0, 0, 0, 0.05)',
                        textAlign: 'left',
                        padding: '1.3rem 2rem',
                    }}
                    contentArrowStyle={{
                        borderRight:
                            theme === 'light'
                                ? '0.4rem solid #9ca3af'
                                : '0.4rem solid rgba(255, 255, 255, 0.5)',
                    }}
                    date={groupDate}
                    icon={iconEl as any}
                    iconStyle={{
                        background: theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.15)',
                        fontSize: '1.5rem',
                        overflow: 'hidden',
                    }}
                >
                    <h3 className="font-bold text-lg italic">{group.company}</h3>
                    <div
                        className={
                            isMulti
                                ? 'mt-2 flex flex-col gap-4 border-l-2 border-black/10 dark:border-white/15 pl-4'
                                : 'mt-1'
                        }
                    >
                        {group.roles.map((role, i) => (
                            <div key={i}>
                                <h4 className="font-semibold text-base capitalize">{role.title}</h4>
                                {isMulti && (
                                    <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-white/50">
                                        {role.date}
                                    </p>
                                )}
                                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                                    {role.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </VerticalTimelineElement>
            </React.Fragment>
        );
    });

    return (
        <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
            <SectionHeading>My Experience</SectionHeading>
            <VerticalTimeline lineColor="">{experienceData}</VerticalTimeline>
        </section>
    );
};
