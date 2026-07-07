"use client";

import Hero from "@/components/Hero";
import FindUs from "@/components/FindUs";
import SignaturesCarousel from "@/components/SignaturesCarousel";
import CustomerLove from "@/components/CustomerLove";
import DeliveryCTA from "@/components/DeliveryCTA";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      
      <Reveal>
        <FindUs />
      </Reveal>
      
      <Reveal>
        <SignaturesCarousel />
      </Reveal>
      
      <Reveal>
        <CustomerLove />
      </Reveal>
      
      <Reveal>
        <DeliveryCTA />
      </Reveal>
    </>
  );
}
