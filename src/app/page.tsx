// import Image from "next/image";
import Profile from "../components/profile";
import Experience from "../components/experience";
import Header from "../components/headers";
import Projects from "../components/projects";

export default function Home() {
  return (
    <div className="flex flex-col bg-zinc-50 font-sans">
      <Profile />
      <div className="pl-[10%] pr-[10%]">
        <Header text="Experience:" />
        <Experience />
        <Header text="Projects:" />
        <Projects />
      </div>
    </div>
  );
}
