import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Last from "@/components/Last";
// import StyledComponent from "@/components/StyledComponent";
import Cursor from "@/components/Cursor";
import EarthSvg from "@/components/EarthSvg";
import ScoreSvg from "@/components/ScoreSvg";

export default function Home() {
  return (
    <main>
      <Cursor />
      <Header />
      <Hero />
      <Problem />
      <Last />
      {/* <ScoreSvg /> */}
    </main>
  );
}
