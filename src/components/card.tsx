import Image, { StaticImageData } from "next/image";

interface ICardProps {
  img: StaticImageData;
  alt: string;
  desc: string;
}

export default function card(props: ICardProps) {
  const { img, alt, desc } = props;
  return (
    <div className="border rounded-md flex flex-col gap-3 divide-y max-w-[70vw] lg:max-w-[20vw]">
      <div className="relative h-32">
        <Image src={img} alt={alt} fill className="object-contain"></Image>
      </div>
      <div className="p-5">{desc}</div>
    </div>
  );
}
