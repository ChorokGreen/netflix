import NextImage from "@/pages/common/NextImage";
import Description from "@/pages/components/Description";

export default function Hero() {
  return (
    <div className={"w-full h-1/2 relative"}>
      <div className={"flex place-content-around"}>
        <div className={"h-8 my-1 absolute z-30 flex right-0 w-20"}>
          <NextImage src={"/userIcon.svg"} />
        </div>
        <div className={"h-12 absolute z-30 flex inset-0 w-24"}>
          <NextImage src={"/logo.svg"} />
        </div>
      </div>
      <div className={"absolute z-20 top-1/3 left-4 w-[440px]"}>
        <Description />
      </div>
      <NextImage src={"/hero.jpeg"} className={"object-fit"} />
    </div>
  );
}
