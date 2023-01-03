import Head from "next/head";
import Landing from "./landing";

export default function Home() {
  return (
    <>
      <Head>
        <title>INCASE</title>
        <meta name="description" content="Expir3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </>
  );
}
