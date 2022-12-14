import Head from "next/head";
import Image from "next/image";
import { Banner } from "../components";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix-clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Netflix</h1>
      <Banner
        title="Clifford"
        subTitle="a very big red dog"
        imgUrl="/static/clifford.webp"
      />
    </div>
  );
}
