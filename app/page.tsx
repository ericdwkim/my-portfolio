import { Intro } from '@/components/intro';
import { About } from '@/components/about';
import { Experience } from '@/components/experience';

export default function Home() {
    return (
        <main className="flex flex-col items-center px-4 overflow-x-hidden">
            <Intro />
            <About />
            <Experience />
        </main>
  )
}