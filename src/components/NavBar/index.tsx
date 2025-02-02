import LinkItem from "./LinkItem";

export default function NavBar(): JSX.Element {

  return (
    <div className="flex w-full justify-center sm:justify-start gap-6">
      <LinkItem text={"Resume"} href={`/`} />
      <LinkItem text={"Project"} href={`/project`} />
      <LinkItem text={"Demo Reel"} href={`/demo-reel`} />
    </div>
  );
}