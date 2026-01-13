// import Image from "next/image";
import Profile from "../components/home/profile";
import Experience from "../components/home/experience";
import Header from "../components/headers";
import Projects from "../components/home/projects";

export default function Home() {
  return (
    <div className="flex flex-col bg-zinc-50 font-sans">
      <Profile />
      <div className="pl-[10%] pr-[10%]">
        <Header text="Experience:" />
        <Experience />
        <div id="projects" className="scroll-mt-60 lg:scroll-mt-25"></div>
        <Header text="Projects:" />
        <Projects />
      </div>
    </div>
  );
}
