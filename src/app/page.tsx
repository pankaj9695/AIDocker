// import Header from "@/components/Header";
// import Hero from "@/components/Hero";
// import Last from "@/components/Last";
// import Problem from "@/components/Problem";
// // import StyledComponent from "@/components/StyledComponent";
// import Cursor from "@/components/Cursor";

// export default function Home() {
//   return (
//     <main>
//       <Cursor />
//       <Header />
//       <Hero />
//       <Problem />
//       <Last />
//     </main>
//   );
// }

import Head from 'next/head';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Last from "@/components/Last";
import Problem from "@/components/Problem";
import Cursor from "@/components/Cursor";

export default function Home() {
  return (
    <main>
      <Head>
        <title>AI Docker</title>
        <meta name="description" content="From data-driven enthusiasts to seasoned developers, AiDocker is
                the go-to destination for creating, training, and deploying AI
                models with ease and efficiency.
              </motion.p>" />
        <meta property="og:image" content="aidocker.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:description" content="From data-driven enthusiasts to seasoned developers, AiDocker is
                the go-to destination for creating, training, and deploying AI
                models with ease and efficiency.
              </motion.p>" />
        <meta property="og:title" content="AI Docker" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="aidocker.jpg" />
        <meta name="twitter:description" content="From data-driven enthusiasts to seasoned developers, AiDocker is
                the go-to destination for creating, training, and deploying AI
                models with ease and efficiency." />
        <meta name="twitter:title" content="AI Docker" />
      </Head>
      <Cursor />
      <Header />
      <Hero />
      <Problem />
      <Last />
    </main>
  );
}
