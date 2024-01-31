import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Last from "@/components/Last";
import Problem from "@/components/Problem";
// import StyledComponent from "@/components/StyledComponent";
import Cursor from "@/components/Cursor";

export default function Home() {
  return (
    <main>
      <Cursor />
      <Header />
      <Hero />
      <Problem />
      <Last />
    </main>
  );
}
