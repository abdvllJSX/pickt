'use client';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
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
import split from "../animation/text";
import Loader from "../components/loader";
import Footer from "../components/footer";

export default function Home() {

  useEffect(() => {
    split();
  }, []);
  
  const imageSources = [
    '/about.png',
    '/akpovire.jpeg',
    '/alicia.jpeg',
    '/arts.svg',
    '/augusta.jpeg',
    '/availability.svg',
    '/bag.svg',
    '/balance.svg',
    '/bc1.webp',
    '/bc2.webp',
    '/bc3.webp',
    '/bc4.webp',
    '/broadcast.svg',
    '/call.svg',
    '/camera.svg',
    '/chandra.jpeg',
    '/chat-card-1.svg',
    '/chat_card_2.svg',
    '/chat_card_3.svg',
    '/chat_card_4.svg',
    '/emuchay.jpeg',
    '/exclaim.svg',
    '/favicon.ico',
    '/fintech.svg',
    '/GB.svg',
    '/healthcare.svg',
    '/home_image_1.png',
    '/home_image_2.png',
    '/home_image_3.png',
    '/home_image_4.png',
    '/inputSearch.svg',
    '/lawyer.svg',
    '/link.svg',
    '/live.svg',
    '/logowhite.svg',
    '/love.svg',
    '/malaika.png',
    '/megan.jpeg',
    '/money.svg',
    '/musician.svg',
    '/nerlissa.jpeg',
    '/next.svg',
    '/NG.svg',
    '/omogbai.jpeg',
    '/orbay.jpeg',
    '/PH.svg',
    '/pickt-logo.svg',
    '/products.svg',
    '/rates.svg',
    '/profile.svg',
    '/rotimi.jpeg',
    '/shane.jpeg',
    '/star.svg',
    "/startup.svg",
    '/US.svg',
    '/vercel.svg',
    '/withdrawals.svg'
  ];
  const reduceCursor = useRef(null)
  const [loadedImages, setLoadedImages] = useState(0);
  const [loaderVisible, setLoaderVisible] = useState(true);
  const totalImages = imageSources.length;

  useEffect(() => {
    // SMOOTH SCROLL
    scroll()
  })

  const loadImages = () => {
    let loadedCount = 0;

    imageSources.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        setLoadedImages(Math.floor((loadedCount / totalImages) * 100));

        if (loadedCount === totalImages) {
          // WAITING TWO AND HALF SECONDS FOR THR POST ANIMATION TO DISPLAY
          setTimeout(() => {
            setLoaderVisible(false);
          }, 3200)
        }
      };
    });
  };

  useEffect(() => {
    loadImages();
  }, []);

  return (
    <>
      <Head>
        <title>pickt</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        
        {
          <AnimatePresence mode='wait'>
            loaderVisible ?
            <Loader loadedImages={loadedImages} loaderVisible={loaderVisible} />
            :
            <>
              <Header ref={reduceCursor} loaderVisible={loaderVisible} />
              <Cusor reduceCursor={reduceCursor} />
              <Hero loaderVisible={loaderVisible} loadedImages={loadedImages} />
              <Meet />
              <Consults />
              <Engage />
              <Live />
              <About />
              <Faqs />
              <Footer />
            </>
          </AnimatePresence>
        }
      </main>
    </>
  )
}
