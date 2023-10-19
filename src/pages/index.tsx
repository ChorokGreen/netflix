import {Inter} from 'next/font/google'
import Hero from "@/pages/components/Hero";
import NetflixOriginals from "@/pages/components/NetflixOriginals";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <Hero/>
            <NetflixOriginals/>
            {/*<Image*/}
            {/*    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"*/}
            {/*    src="/next.svg"*/}
            {/*    alt="Next.js Logo"*/}
            {/*    width={180}*/}
            {/*    height={37}*/}
            {/*    priority*/}
            {/*/>*/}
        </main>
    )
}
