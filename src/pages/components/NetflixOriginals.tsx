import NextImage from "@/pages/common/NextImage";

const data: {
  src: string;
}[] = [
  { src: "/poster1.webp" },
  { src: "/poster2.jpeg" },
  { src: "/poster3.jpeg" },
  { src: "/poster4.jpeg" },
  { src: "/poster5.jpeg" },
  { src: "/poster6.jpeg" },
  { src: "/poster7.jpeg" },
  { src: "/poster8.jpeg" },
];

type Props = { label: string };
export default function NetflixOriginals({ label }: Props) {
  return (
    <div className={"w-full relative"}>
      <h2 className={"font-semibold text-2xl p-2.5 ml-2 mb-2"}>{label}</h2>
      <div className={"flex gap-10 px-10 justify-center relative"}>
        {data.map((d, index) => (
          <div
            key={index}
            className={
              "flex w-40 h-60 bg-amber-700 relative hover:scale-125 transition-all duration-500 cursor-pointer"
            }
          >
            <NextImage src={d.src} />
          </div>
        ))}
      </div>
    </div>
  );
}
