import Image from "next/image";

type Props = {
  src: string;
  className?: string;
  objectPosition?: string;
};
export default function NextImage({ src, className, objectPosition }: Props) {
  return (
    <Image
      src={src}
      alt="poster"
      objectPosition={objectPosition ?? "cover"}
      fill={true}
      priority
      className={className}
    />
  );
}
