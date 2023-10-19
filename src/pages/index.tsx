import { Inter } from "next/font/google";
import NetflixOriginals from "@/pages/components/NetflixOriginals";
import Hero from "@/pages/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex w-screen h-screen overflow-y-scroll flex-col ${inter.className} scrollbar-hide`}
    >
      <div className={"h-full mt-14"}>
        <Hero />
        <NetflixOriginals label={"NETFLIX ORIGINALS"} />
        <div className={"h-3"} />
        <NetflixOriginals label={"Trending Now"} />
        <div className={"w-full h-20"} />
      </div>
    </main>
  );
}
