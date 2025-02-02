import Link from "next/link";

export const runtime = "edge";

export default function ProjectPage() {
  return (
    <div className="flex flex-col gap-4 items-center w-full">
      <p className="font-bold text-5xl">Demo Reel</p>
      <p className="text-gray-400 sm:text-xl text-base text-center">
        Overview of my past work{" "}
      </p>
      <div className="flex items-center justify-center w-full">
        <div className="bg-gray-300 rounded-sm p-8 sm:p-36 my-6">
        <Link
          href="https://www.youtube.com/channel/UC3MvvojiP4AW5yigMiLQQig"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black text-xl hover:text-red-900"
        >
          Visit My YouTube Channel
        </Link>
        </div>
      </div>
    </div>
  );
}
