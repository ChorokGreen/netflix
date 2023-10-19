import NextImage from "@/pages/common/NextImage";

export default function Header() {
  return (
    <div className={"w-full h-fit bg-amber-100 z-40 absolute"}>
      <div className={"relative"}>
        <NextImage src={"/favicon.ico"} />
      </div>
    </div>
  );
}
