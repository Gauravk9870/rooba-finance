import Hero from "@/components/custom/Hero";
import Scroller from "@/components/custom/Scroller";
import Sidebar from "@/components/custom/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" w-full bg-[#15181b] flex justify-center lg:h-screen  flex-col lg:flex-row">
      <div className="flex-1 h-full">
        <Hero />
      </div>
      <div className=" w-full lg:w-24">
        <Scroller />
      </div>
      <div className="flex-[.5] h-full">
        <Sidebar />
      </div>
    </main>
  );
}
