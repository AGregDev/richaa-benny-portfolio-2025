import { Link } from "@/i18n/routing";

import Image from "next/image";

export default function Header(): JSX.Element {
  return (
    <div className="text-secondary justify-between py-2 items-center flex">
      <Link href="/">
        <div className="flex flex-col gap-2">
          <h1 className="text-red-900 text-5xl font-semibold">Richaa Benny</h1>
          <h3 className="text-lg">CG Generalist</h3>
        </div>
      </Link>
      <div className="flex gap-4">
        <Link
          href="https://www.linkedin.com/in/richaa-benny-54a443254/"
          target="_blank"
        >
          <Image
            alt="linkedIn"
            src="/images/linkedin.png"
            width={64}
            height={64}
            className="w-8"
          />
        </Link>
      </div>
    </div>
  );
}
