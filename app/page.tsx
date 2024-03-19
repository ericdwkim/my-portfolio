import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Experience } from '@/components/experience';
import { Intro } from '@/components/intro';
import { SectionDivider } from "@/components/section-divider";
import { Skills } from '@/components/skills';
export default function Home() {
    return (
        <main className="flex flex-col items-center px-4 overflow-x-hidden">
            <Intro />
            <SectionDivider />
            <Experience />
            <Skills/>
            <About />
            <Contact/>
        </main>
  )
}