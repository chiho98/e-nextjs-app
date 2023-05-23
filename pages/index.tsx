import Head from 'next/head';
import Layout from "@/components/Layout"; // @는 루트경로를 나타냄

export default function Home() {
  return (
    <div>
      <Head>
        <title>Web!</title>
      </Head>
      
        <h2>Welcome</h2>
        wow, World!
      
    </div>
  )
}
