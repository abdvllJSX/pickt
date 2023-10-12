'use client';
import { useEffect, useRef } from 'react';
import Head from 'next/head';
import Meet from '../components/meet';
import Header from '../components/header';
import Cusor from '../components/customCursor';
import scroll from '@/animation/scroll';
import Consults from '../components/consults';
import Hero from "../components/hero";
import Engage from "../components/engage";
import Live from "../components/live";
import About from "../components/about";
import Faqs from "../components/faqs";

// SMOOTH SCROLL
export default function Home() {
  // useEffect(() => {
  //   scroll()
  // })

  const reduceCursor = useRef(null)
  return (
    <>
      <Head>
        <title>pickt</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header ref={reduceCursor} />
        <Cusor reduceCursor={reduceCursor} />
        <Hero />
        <Meet />
        <Consults />
        <Engage />
        <Live />
        <About />
        <Faqs />
      </main>
    </>
  )
}
