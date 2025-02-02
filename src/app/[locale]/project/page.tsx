import Image from "next/image";

export default function ProjectPage() {
  return (
    <div className="flex flex-col gap-4 items-center w-full">
      <p className="font-bold text-5xl">Projects</p>
      <p className="text-gray-400 sm:text-xl text-base text-center">
        Published Projects I have worked on
      </p>
      <div className="grid grid-cols-2 gap-4">
        <Image
          alt="dassyne"
          src="/images/dassyne.png"
          width={300}
          height={300}
        />
        <Image
          alt="cote d'or"
          src="/images/COTED'OR_LOGO.png"
          width={300}
          height={300}
        />
        <Image
          alt="clef d'or"
          src="/images/image_2023_11_06T10_24_39_754Z.png"
          width={300}
          height={300}
        />
        <Image
          alt="gingerbread"
          src="/images/Button for link.png"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
